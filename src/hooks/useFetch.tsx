import { useState,useEffect } from "react"
import { token } from "../../config/config"
interface fetchProps{
    id:number,
    type:string
}
function useFetch({id,type}:fetchProps) {
  const[data,setData] = useState<any>(null)
  const[errorF,setErrorF] = useState<any>(null)
  const[loading,setLoading] = useState(true)


        useEffect(()=>{
           const optionsToken = {
            method: 'GET',
            headers:{
                accept:'application/json',
                Authorization: `Bearer ${token}`}}

                const getData = async ()=>{
                    try{
                        const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?append_to_response=credits,release_dates,videos`,optionsToken);
                        if(response.ok){
                            const dataFetched = await response.json()
                            setData(dataFetched)
                            setLoading(false)
                    
                        }
                    }
                    catch(error){
                        setLoading(false)
                        setErrorF(error)
                    }
                }
                getData()
                

        },[id,type])


         return{data,errorF,loading}

         
       
}

export default useFetch