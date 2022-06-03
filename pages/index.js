import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {

  const router = useRouter();

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  function handleChange(e){
    if(e.target.files && e.target.files[0])
      setFile(e.target.files[0]);
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
      formData.append("file", file);
      formData.append("name", "test");
      let response = await axios.post('/jobs', formData, opt);
      if(!response.data.id){
        throw Error("No Response");
      }
      router.push(`/j/${id}`);
    }
    catch(e){
      alert('Error');
    }
  }

  return (
    <div className='grid place-items-center my-2'>
      <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload file</label>
      <input type="file" 
        accept=".jpg"
        onChange={handleChange}
        class="text-sm
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-500 file:text-white
        hover:file:bg-blue-700
      "/>
      <button 
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700
      text-white font-bold py-2 px-4 rounded">Submit</button>
      <p>Progress: {progress}/100</p>
    </div>
  )
}
