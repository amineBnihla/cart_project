import { useEffect, useState } from "react";




export default function useFetch(url,opt={}){

    const [dataList,setDataList] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError]  = useState('')    


  async function getFetch(){
    setLoading(true)
    try {
        const res = await fetch(url,opt)
        const data = await res.json()
        console.log(data)
     setLoading(false)
     setDataList(data)
    } catch (error) {
        setLoading(false)
        setError(error)
    }
  }
    useEffect(()=>{
     getFetch()
    },[url])


    return [dataList,loading,error]
}