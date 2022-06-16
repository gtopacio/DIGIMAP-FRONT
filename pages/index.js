import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Banner from '../components/Banner';


export default function Home() {

  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [traj, setTraj] = useState('swing');

  function handleChange(e){
    if(e.target.files && e.target.files[0])
      setFile(e.target.files[0]);
  }

  function handleTrajChange(e){
    setTraj(e.target.value);
  }
  let disabledClassname = disabled? "bg-gray-400 text-white font-bold py-2 px-4 rounded m-1 duration-300": "bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded m-1 duration-300";
  let submitButton =    <button 
                        onClick={handleSubmit}
                        className={disabledClassname} disabled={disabled}>Submit</button>

  async function handleSubmit(e){
    e.preventDefault();
    setDisabled(true);
    setProgress(0);
    try{
      const formData = new FormData();
      const opt = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: data => { setProgress(Math.round((100 * data.loaded) / data.total)) }
      }
      formData.append("image", file);
      formData.append("name", "test");
      formData.append("traj", traj);
      let { data } = await axios.post('/jobs', formData, opt);
      if(!data.id){
        throw Error("No Response");
      }
      router.push(`/j/${data.id}`);
    }
    catch(e){
      console.error(e);
      setProgress(0);
      alert('No File Uploaded');
      setDisabled(false);
    }
  }

  let videolink = "moon_circle.mp4"

  switch(traj){
    case "circle": videolink = "../moon_circle.mp4"; break;
    case "swing": videolink = "../moon_swing.mp4"; break;
    case "zoom-in": videolink = "../moon_zoom-in.mp4"; break;
    case "dolly-zoom-in": videolink = "../moon_dolly-zoom-in.mp4"; break;
  }

  let videotag = <video className="rounded-lg"width="600" height="400" controls key={videolink}>
                    <source src={videolink} type="video/mp4"></source>
                </video>


  return (
    <div>
      <Banner/>
      <div className='grid place-items-center my-2'>
        <label className="block mb-2 text-m font-bold text-gray-900" htmlFor="file_input">Convert image (.jpg) to 3D Photo</label>
        <input type="file" 
          accept=".jpg"
          onChange={handleChange}
          className="text-sm
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-gray-800 file:text-white
          hover:file:bg-gray-700 cursor-pointer
          duration-300
        "/>
        <div className="w-1/3 bg-gray-300 rounded-full my-2">
          <div className="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full duration-300" style={{width: progress + "%"}}> {progress}%</div>
        </div>
        {submitButton}
          <div className="flex justify-between font-medium my-4">
            <div>
              <input className="hidden" type="radio" id="swing" name="traj" value="swing" onChange={handleTrajChange} checked={traj=="swing"}/>
              <label htmlFor="swing" className="w-36 flex flex-col p-4 border-2 cursor-pointer rounded-l-full bg-gray-800 text-white font-bold text-center hover:bg-gray-600 duration-300">Swing</label>
            </div>

            <div>
              <input className="hidden" type="radio" id="circle" name="traj" value="circle" onChange={handleTrajChange} checked={traj=="circle"}/>
              <label htmlFor="circle" className="w-36 flex flex-col p-4 border-2 cursor-pointer bg-gray-800 text-white font-bold text-center hover:bg-gray-600 duration-300">Circle</label>
            </div>

            <div>
              <input className="hidden" type="radio" id="zoom" name="traj" value="zoom-in" checked={traj=="zoom-in"} onChange={handleTrajChange}/>
              <label htmlFor="zoom" className="w-36 flex flex-col p-4 border-2 cursor-pointer bg-gray-800 text-white font-bold text-center hover:bg-gray-600 duration-300">Zoom</label>
            </div>

            <div>
              <input className="hidden" type="radio" id="dolly-zoom" name="traj" value="dolly-zoom-in" checked={traj=="dolly-zoom-in"} onChange={handleTrajChange}/>
              <label htmlFor="dolly-zoom" className="w-36 flex flex-col p-4 border-2 cursor-pointer rounded-r-full bg-gray-800 text-white font-bold text-center hover:bg-gray-600 duration-300">Dolly Zoom</label>
            </div>
        </div>

        <div className="justify-center p-4 rounded-lg bg-gray-800">
          <label className="flex text-center justify-center font-bold text-white">Preview</label>
          <div className="flex justify-center m-4 rounded-lg">
            {videotag}
          </div>
        </div>
      </div>
    </div>
  )
}
