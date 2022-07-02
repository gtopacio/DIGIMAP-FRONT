import Link from 'next/link';
import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export default function Banner() {

    const [ currLatest, setLatest ] = useState(0) 

    useEffect(() => {
        let docRef = doc(db, "shards", "latestJob");
        const unsub = onSnapshot(docRef, (doc) => {
            let newData = doc.data();
            setLatest(newData ? newData.value : 0);
        });
        return unsub;
    });

    return (
        <div className="h-42 w-full bg-white relative flex overflow-hidden">
            <div className="w-full h-full flex flex-col">
                <header className="h-16 w-full flex items-center px-5 space-x-10 bg-gray-900">
                    <div className="flex flex-shrink-0 items-center space-x-4 text-white">
                        <Link href="/"><img className="h-10 w-10 rounded-full" src="/fried-egg.png"></img></Link>
                        <div className="flex flex-col items-start ">
                            <div className="text-3xl font-medium ">3D Picture Converter</div>
                            <div className="text-sm font-regular">4egg Studios</div>
                        </div>
                    </div>
                    <div className="justify-items-end flex flex-row text-white space-x-6">
                        <Link className="text-m font-regular" href="/">Home</Link>
                        <Link className="text-m font-regular" href="/acknowledgements">Acknowledgements</Link>
                    </div>
                </header>
            </div>
            <div className="w-1/6 flex flex-col content-center items-center text-white bg-gray-900 ">
                <div className="my-auto mr-4">
                    <div>Current Job:</div>
                    <div className="grid place-items-center">Job {currLatest}</div>
                </div>
            </div>
        </div>
    )
}
