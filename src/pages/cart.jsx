import {  useSelector } from "react-redux"
import CartItem from "../component/Cart-Item"
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function Cart(){
  
    const cart = useSelector(state => state.cart)
    //const dispatch = useDispatch()
    const totalVal = cart.reduce((acc,val)=> acc+val.price,0)

   
    
    return <>
    {
       cart && cart.length > 0?
        <div className="flex flex-col gap-5"> 
     {
         cart.map((c)=> <CartItem key={c.id} cartItem={c} /> )
    }

    </div>
        :
        <div className="flex justify-center items-center max-h-full h-[800px]">
            <div className="flex flex-col  items-center gap-3">
         <IoCart  size={200} className="text-gray-700"/>
          <Link to={'/'} className="bg-gray-700 text-white font-medium py-2 px-4 rounded-md w-fit">Back Home</Link>
            </div>
        </div>
    }

       <div className=" flex justify-end mt-10">
        <div className="flex flex-col gap-3 items-center">
<h1 className="text-xl font-semibold text-red-500 ">Your cart summary</h1> 
<span>{`Total Product : ${cart.length}`}</span>
<span>{`Total Amount : ${totalVal.toFixed(2)}`}</span>
        </div>
       </div>
    </>
   
   }