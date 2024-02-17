import { useParams,useNavigate } from "react-router-dom";

export function NavBar() {
    const {id} = useParams();
    const navigate = useNavigate()
    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(id);
            alert("Copied to clipboard!");
        } catch (err) {
            console.error(
                "Unable to copy to clipboard.",
                err
            );
            alert("Copy to clipboard failed.");
        }
    };
  return (
    <nav class="bg-white border-gray-200 dark:bg-slate-950">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={()=>{
            navigate('/')
          }}
          class="flex items-center space-x-3 rtl:space-x-reverse"
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

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 
      justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
       focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          ></button>
        </div>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                onClick={()=>{
                    navigate('/')
                }}
                class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:hover:text-blue-700 "
                aria-current="page"
              >
                Home
              </button>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <button
                onClick={handleCopyClick}
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Copy Your Id
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div className="bg-gray-800 ">
    //     <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
    //      focus:ring-gray-300 font-medium  text-sm px-5 pt-2.5 pb-3
    //      dark:bg-gray-800 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:border-gray-700">HOME</button>
    //     <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
    //      focus:ring-gray-300 font-medium  text-sm px-5 pt-2.5 pb-3
    //      dark:bg-gray-800 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:border-gray-700">SAVE</button>
    //     <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
    //      focus:ring-gray-300 font-medium  text-sm px-5 pt-2.5 pb-3
    //      dark:bg-gray-800 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:border-gray-700">COPY LINK</button>
    //      <button className="hover:bg-gray-50">HELLO</button>
    // </div>
  );
}
export default NavBar;
