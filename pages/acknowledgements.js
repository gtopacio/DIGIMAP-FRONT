import Banner from '../components/Banner';
import Image from 'next/image';
import Head from 'next/head';

function acknowledgements() {
    return (
        <div>
            <Head>
                <title>Acknowledgement</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Banner/>
            <div className='grid place-items-center my-2'>
                <label className="block mt-4 text-3xl font-bold text-gray-900 pt-2" htmlFor="file_input">Acknowledgements</label>
                <label className="block text-xl font-bold text-gray-900 pt-8" >Source:</label>
                <label className="block mb-2 text-xl font-bold text-gray-900 pt-2 hover:text-cyan-600" >
                    <a href="https://github.com/vt-vl-lab/3d-photo-inpainting?fbclid=IwAR0nkHpFBYc1buZ5l-f7G7ZH21O29aqqAJCHPkSsxHbQjnQe4skBN_szzBg" rel="noreferrer" target="_blank">[CVPR 2020] 3D Photography using Context-aware Layered Depth Inpainting</a></label>
                <div className='flex flex-column justify-between relative pt-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <label className="block mb-2 text-xl font-bold text-gray-900 ">Github Page</label>
                        <a href="https://github.com/vt-vl-lab/3d-photo-inpainting?fbclid=IwAR0nkHpFBYc1buZ5l-f7G7ZH21O29aqqAJCHPkSsxHbQjnQe4skBN_szzBg" rel="noreferrer" target="_blank">
                            <Image alt="Github Link" src="/github-logo.png" width="150" height="150"></Image>
                        </a>
                    </div>
                    <div className='flex flex-col place-items-center pl-16'>
                        <label className="block mb-2 text-xl font-bold text-gray-900 ">Authors:</label>
                        <label className="block mb-2 text-xl font-bold text-gray-900 ">Meng-Li Shih</label>
                        <label className="block mb-2 text-xl font-bold text-gray-900 ">Shih-Yang Su</label>
                        <label className="block mb-2 text-xl font-bold text-gray-900 ">Johannes Kopf</label>
                        <label className="block mb-2 text-xl font-bold text-gray-900 ">Jia-Bin Huang</label>
                    </div>
                </div>
                <label className="block mb-2 text-m font-bold text-gray-900 pt-20" >DIGIMAP Final Project</label>
                <div className='flex flex-column justify-between relative pt-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <label className="block mb-2 text-m text-gray-900 ">Made by:</label>
                        <label className="block mb-2 text-m font-bold text-gray-900 ">4egg - S14</label>
                        <Image alt="4gg Logo" src="/fried-egg.png" width="150" height="150"></Image>
                    </div>
                    <div className='flex flex-col justify-center items-center pl-16'>
                        <label className="block mb-2 text-m font-bold text-gray-900 ">Joric Batac</label>
                        <label className="block mb-2 text-m font-bold text-gray-900 ">Aaron Brines</label>
                        <label className="block mb-2 text-m font-bold text-gray-900 ">Rolan Cosico</label>
                        <label className="block mb-2 text-m font-bold text-gray-900 ">Geoff Topacio</label> 
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default acknowledgements