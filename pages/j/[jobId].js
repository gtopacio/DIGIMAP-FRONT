import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

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
    
    let videoPreview = data.link ?
        <iframe className='aspect-auto'>
            <source src={data.link} type="video/mp4"/>
        </iframe> : <></>;

    return (
        <div>
            <p>Status: {data.status}</p>
            <p>Message: {data.message}</p>
            <p>Trajectory: {data.traj}</p>
            {downloadButton}
            {videoPreview}
        </div>
    )
}
