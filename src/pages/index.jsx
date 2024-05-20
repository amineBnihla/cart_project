
import useFetch from "../fetch"

import { BiLoaderCircle } from "react-icons/bi";
 import ProductItem from "../component/Produit-Item";


export default function Home(){
 
   const [dataList,loading,error] = useFetch('https://fakestoreapi.com/products')
  

  console.log(loading,error,dataList)

 return <div className="flex justify-center">
 {loading  ?
 <BiLoaderCircle className="text-gray-700 animate-spin" size={300} />
:
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"> 
{
  dataList && dataList.length > 0 ?
  
  dataList.map((pro)=>{
     return  <ProductItem key={pro.id} productItem={pro}/>

  })

  :
  null
}
</div>

}
 </div>
}