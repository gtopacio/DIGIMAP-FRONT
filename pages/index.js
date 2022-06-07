import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Banner from '../components/Banner';

export default function Home() {

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

  async function handleSubmit(e){
    e.preventDefault();
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
      alert('Error');
    }
  }

  return (
    <div>
      <Banner/>
      <div className='grid place-items-center my-2'>
        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">Upload file</label>
        <input type="file" 
          accept=".jpg"
          onChange={handleChange}
          className="text-sm
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-500 file:text-white
          hover:file:bg-blue-700
        "/>

        <div>
          <input type="radio" id="swing" name="traj" value="swing" onChange={handleTrajChange} checked={traj=="swing"}/>
          <label htmlFor="swing">Swing</label>
        </div>

        <div>
          <input type="radio" id="circle" name="traj" value="circle" onChange={handleTrajChange} checked={traj=="circle"}/>
          <label htmlFor="circle">Circle</label>
        </div>

        <div>
          <input type="radio" id="zoom" name="traj" value="zoom-in" checked={traj=="zoom-in"} onChange={handleTrajChange}/>
          <label htmlFor="zoom">Zoom</label>
        </div>

        <div>
          <input type="radio" id="dolly-zoom" name="traj" value="dolly-zoom-in" checked={traj=="dolly-zoom-in"} onChange={handleTrajChange}/>
          <label htmlFor="dolly-zoom">Dolly Zoom</label>
        </div>
        
        <button 
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700
        text-white font-bold py-2 px-4 rounded">Submit</button>
        <div class="w-full bg-gray-200 rounded-full">
          <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: progress + "%"}}> {progress}%</div>
        </div>
      </div>
    </div>
  )
}
