import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {

  const [data, setData] = useState("Empty");

  useEffect(() => {
    async function getData(){
      let { data } = await axios.get("/api/hello")
      if(data){
        console.log(data)
        setData(data.name)
      }
    }
    getData()
  }, [])

  return (
    <div className={styles.container}>
      {data}
    </div>
  )
}
