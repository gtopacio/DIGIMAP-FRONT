import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Banner from '../../components/Banner';

export default function JobIDPage() {
    const router = useRouter();
    const { jobId } = router.query;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        if(!jobId)
            return;
        let docRef = doc(db, "jobs", jobId);
        const unsub = onSnapshot(docRef, (doc) => {
            let newData = doc.data();
            setData(newData ? newData : null);
            setLoading(false);
        });
        return unsub;
    }, [jobId]);

    if(loading){
        return <h1>Loading</h1>
    }

    if(!data){
        router.push("/");
        return;
    }

    let downloadButton = data.link ? 
        <a target="_blank" href={data.link} rel="noreferrer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download</button>
        </a> : <></>;
    
    let videoPreview =  <video width="600" height="400" controls>
                            <source src={data.link} type="video/mp4"></source>
                        </video>


    return (
        <div>
            <Banner/>
            <div class="bg-red-400 w-full h-72 flex">
                <div class="bg-blue-400 w-1/2 h-full flex justify-center">
                    <h1> 2D </h1>
                    <img class="max-w-1/2 max-h-36" src={data.pictureLink}></img>
                </div>
                
                <div class="bg-green-400 w-1/2 h-full flex justify-center">
                    <h1> 3D </h1>
                    {videoPreview}
                </div>
            </div>

            <div class="w-2/3 bg-gray-300 rounded-full my-2">
                <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: data.progress + "%"}}> {data.progress}%</div>
            </div>
            
            <p>Status: {data.status}</p>
            <p>Message: {data.message}</p>
            <p>Trajectory: {data.traj}</p>
            {downloadButton}
        </div>
    )
}
