import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Banner from '../../components/Banner';
import Head from 'next/head';

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
        return (
            <div>
                <Banner/>
                <div className="grid place-items-center my-10">
                    <h1 className="text-gray-900 font-bold text-4xl ">Loading...</h1>
                </div>
            </div>
        )
    }

    if(!data){
        router.push("/");
        return;
    }

    let downloadButton = data.link ? 
        <a target="_blank" href={data.link} rel="noreferrer">
            <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-4 duration-300">Download</button>
        </a> : <button type="button" className="bg-blue-200 text-white font-bold py-2 px-4 rounded m-4" disabled>Download</button>;
    
    let videoPreview =  data.link ?
        <video className="max-h-full" controls key={data.link}>
            <source src={data.link} type="video/mp4"></source>
        </video>
        : <h1 className="text-m font-bold text-gray-400 text-2xl">{data.status}</h1>;

    let message = data.message ?
        <p>Message: {data.message}</p>
        : <></>;

    let progress = data.progress != null ? 
        <div className="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full duration-300" style={{width: data.progress + "%"}}> {data.progress}%</div> 
        : <></>;

    let url = window.location.href;

    let headStatus = "(" + data.status + ")";

    return (
        <div>
            <Head>
                <title>{headStatus} Job Number: {data.jobNumber}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Banner/>
            <div className="grid place-items-center my-2">
                <div>
                    This may take awhile...
                </div>
                <div className="font-bold">
                    Job Number: {data.jobNumber}
                </div>
                <button className="bg-green-800 hover:bg-green-600 text-white py-1 px-4 rounded m-2 duration-300" onClick={() => {navigator.clipboard.writeText(url); alert("Link Copied")}}>Copy Link</button>

                <div className="mb-2">
                    <p>Status: {data.status}</p>
                    <p>Trajectory: {data.traj}</p>
                    {message}
                </div>

                <div className="w-2/3 justify-center p-4 rounded-lg bg-gray-800">
                    <div className="w-full flex block mb-2 text-m font-bold text-white">
                        <p className="w-1/2 grid place-items-center">2D</p>
                        <p className="w-1/2 grid place-items-center">3D</p>
                    </div>
                    <div className="w-full flex">
                        <div className="w-1/2 flex flex-col items-center p-2">
                            <img className="max-h-full" src={data.pictureLink}></img>
                        </div>
                        
                        <div className="w-1/2 flex flex-col items-center p-2">
                            {videoPreview}
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="w-full bg-gray-300 rounded-full my-2">
                        {progress}
                    </div>
                    <p>{data.stage}</p>
                </div>
                {downloadButton}

            </div>
        </div>
    )
}
