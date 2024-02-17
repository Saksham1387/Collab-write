import {useNavigate} from "react-router-dom"
export function NavBar1(){
    const navigate= useNavigate()
    return (
        <nav class="bg-white border-gray-200 dark:bg-slate-950 flex justify-center">
      <div class="max-w-screen-xl flex justify-between items-center mx-auto p-4">
        <button
          onClick={()=>{
            navigate('/')
          }}
          class="flex  space-x-3"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg"
            class="h-8"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CollabWrite
          </span>
        </button>
        </div>
    </nav>
    )
}