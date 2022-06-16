import Link from 'next/link';

export default function Banner() {
    return (
        <div className="h-42 w-full bg-white relative flex overflow-hidden">
            <div className="w-full h-full flex flex-col justify-between">
                <header className="h-16 w-full flex items-center relative justify-start px-5 space-x-10 bg-gray-900">
                    <div className="flex flex-shrink-0 items-center space-x-4 text-white">
                        <Link href="/"><img className="h-10 w-10 rounded-full" src="/fried-egg.png"></img></Link>
                        <div className="flex flex-col items-start ">
                            <div className="text-3xl font-medium ">3D Picture Converter</div>
                            <div className="text-sm font-regular">4egg Studios</div>
                        </div>
                    </div>
                    <div className="justify-items-end flex flex-row text-white space-x-6">
                        <a className="text-m font-regular" href="http://localhost:3000/">Home</a>
                        <a className="text-m font-regular" href="http://localhost:3000/acknowledgements">Acknowledgements</a>
                    </div>
                </header>
            </div>
        </div>
    )
}
