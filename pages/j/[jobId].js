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
            <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-4 duration-300">Download</button>
        </a> : <button type="button" className="bg-blue-200 text-white font-bold py-2 px-4 rounded m-4" disabled>Download</button>;
    
    let videoPreview =  <video class="max-h-full" controls>
                            <source src={data.link} type="video/mp4"></source>
                        </video>;

    let message = data.message ?
        <p>Message: {data.message}</p>
        : <></>;

    let progress = data.progress ? data.progress : 0;

    return (
        <div>
            <Banner/>
            <div class="grid place-items-center my-2">

                <div class="mb-2">
                    <p>Status: {data.status}</p>
                    <p>Trajectory: {data.traj}</p>
                    {message}
                </div>

                <div class="w-2/3 justify-center p-4 rounded-lg bg-gray-800">
                    <div class="w-full flex block mb-2 text-m font-bold text-white">
                        <p class="w-1/2 grid place-items-center">2D</p>
                        <p class="w-1/2 grid place-items-center">3D</p>
                    </div>
                    <div class="w-full flex">
                        <div class="w-1/2 flex flex-col items-center p-2">
                            <img class="max-h-full" src={data.pictureLink}></img>
                        </div>
                        
                        <div class="w-1/2 flex flex-col items-center p-2">
                            {videoPreview}
                        </div>
                    </div>
                </div>

                <div class="w-1/2">
                    <div class="w-full bg-gray-300 rounded-full my-2">
                        <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full duration-300" style={{width: progress + "%"}}> {progress}%</div>
                    </div>
                    <p>{data.stage}</p>
                </div>
                {downloadButton}

            </div>
        </div>
    )
}
