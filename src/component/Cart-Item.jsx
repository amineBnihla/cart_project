import { useDispatch } from "react-redux"
import {REMOVE_FROM_CART} from "../store/cart";






export default function CartItem({cartItem}){

     const dispatch = useDispatch()
     function handleRemoveCart(pro){
        dispatch(REMOVE_FROM_CART(pro))
     }
    return <div className="shadow-md rounded-sm py-3 px-4 flex justify-between items-center">
      <div className="flex">
      <img src={cartItem?.image} alt={cartItem.title}  className="size-20 object-contain aspect-square" />
     
          <div className="ml-5 flex flex-col gap-2">
            <h1 className="text-lg font-semibold">{cartItem?.title}</h1>
            <p className="text-sm text-gray-600 line-clamp-1 max-w-[100ch]">{cartItem?.description}</p>
          </div>
      </div>

           <h3 className="text-xl font-semibold">{cartItem?.price}</h3>
      <button onClick={()=> handleRemoveCart(cartItem)} className="bg-red-600 text-white py-2 px-3 rounded-md">Remove From Cart</button>
    </div>
}