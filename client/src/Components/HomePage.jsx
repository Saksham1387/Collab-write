import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar1 } from "./NavBar1";
export function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);

  return (
    <div>
      <NavBar1></NavBar1>
      <div class=" text-center bg-white  shadow sm:p-8 dark:bg-slate-950 dark:border-gray-700 h-screen w-full">
        <h1 class="mb-2 text-6xl font-bold text-gray-900 dark:text-white pt-36">
          WELCOME !!
        </h1>

        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse pt-8">
          <div >
          <button onClick={()=>{
            navigate('/haveid')
          }}type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white
            dark:hover:bg-blue-500 dark:focus:ring-blue-800">I Have a ID</button>

          <button onClick={()=>{
            navigate('/inside')
          }} type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white
            dark:hover:bg-blue-500 dark:focus:ring-blue-800">Create a New Doc</button>
          </div>
        </div>
      </div>
    </div>
  );
}
