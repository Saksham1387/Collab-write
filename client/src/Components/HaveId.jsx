import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { NavBar1 } from "./NavBar1"
export function HaveId(){
    const [id,setId] = useState("")
    const navigate = useNavigate()
    return (
        <div>
            <NavBar1></NavBar1>
        
    <div class="text-center bg-white  shadow sm:p-8 dark:bg-slate-950 dark:border-gray-700  w-full flex items-center justify-center h-screen ">
 <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  md:p-10 dark:bg-gray-800 dark:border-gray-700 mt-[-99px]">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Paste Your id here</h5>
        <div>
            <input onChange={(e)=>{
                setId(e.target.value)
            }}type="text" name="password"  placeholder="paste your id here" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <button onClick={()=>{
            navigate(`/docs/${id}`)
        }} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
          dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to your Doc</button>
        </form>
        </div>
    </div>
    </div>
    )
}