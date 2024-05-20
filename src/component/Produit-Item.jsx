import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART ,REMOVE_FROM_CART} from "../store/cart";



export default function ProductItem({productItem}){
   const cart = useSelector(state => state.cart)
   console.log(cart)
    const dispatch = useDispatch()
    function handleAddToCart(){
        dispatch(ADD_TO_CART(productItem))
    }
    function handleRemoveFromCart(){
        dispatch(REMOVE_FROM_CART(productItem))
    }
    return(
    <div className="shadow-md rounded-md py-4 px-5">
      <img src={productItem.image} className="h-60 object-contain w-full" alt={productItem.title} srcset="" />
       <div className="py-5">
     <h1 className="text-lg font-semibold truncate my-5">{productItem.title}</h1>
     <p className="line-clamp-3">{productItem.description}</p>
     <button className="bg-black rounded-md text-white font-medium text-base px-3 py-2 mt-5" onClick={
     cart.some((c)=>c.id === productItem.id ) ?
    handleRemoveFromCart
     :
  handleAddToCart
     }>{
      cart.some((c)=>c.id === productItem.id ) ?
     "Remove From Cart"
      :
     "Add To Cart"
      }</button>
       </div>
    </div>
    );

}