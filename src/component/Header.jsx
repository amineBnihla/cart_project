import { Link } from "react-router-dom";




export default function Header(){

    return   <header className="App-header h-20 w-full shadow-md  ">
        <div className="container h-full mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <h1 className="text-2xl font-semibold text-gray-600">
          React Cart Project
            </h1>
          </Link>

         <ul className="flex gap-5">
            <li><Link to={'/'}  className="text-lg font-medium">Home</Link></li>
            <li><Link to={'/cart'}  className="text-lg font-medium">Cart</Link></li>
         </ul>

        </div>
  </header>
}