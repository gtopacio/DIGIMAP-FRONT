import Banner from '../components/Banner';
import Image from 'next/image';

function acknowledgements() {
    return (
        <div>
            <Banner/>
            <div className='grid place-items-center my-2'>
                <label className="block mb-2 text-xl font-bold text-gray-900" htmlFor="file_input">Acknowledgements</label>
                <label className="block mb-2 text-xl font-bold text-gray-900 pt-5" >Source:</label>
                <label className="block mb-2 text-xl font-bold text-gray-900 pt-2" >[CVPR 2020] 3D Photography using Context-aware Layered Depth Inpainting</label>
                <div className='flex flex-column justify-between relative pt-2'>
                    <div className='flex justify-center items-center'>
                        <a href="https://github.com/vt-vl-lab/3d-photo-inpainting?fbclid=IwAR0nkHpFBYc1buZ5l-f7G7ZH21O29aqqAJCHPkSsxHbQjnQe4skBN_szzBg" rel="noreferrer" target="_blank">
                            <Image alt="Github Link" src="/github-logo.png" width="150" height="100"></Image>
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
            <label className="block mb-2 text-m text-gray-900 ">Made by:</label>
            <label className="block mb-2 text-m text-gray-900 ">4egg - S14</label>
            <label className="block mb-2 text-m text-gray-900 ">Joric Batac</label>
            <label className="block mb-2 text-m text-gray-900 ">Aaron Brines</label>
            <label className="block mb-2 text-m text-gray-900 ">Rolan Cosico</label>
            <label className="block mb-2 text-m text-gray-900 ">Geoff Topacio</label> 
            </div>
        </div>
    )
  }

export default acknowledgements