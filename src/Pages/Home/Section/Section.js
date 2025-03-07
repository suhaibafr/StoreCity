import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading'
import Add_Cart from '../../../Components/Add_Cart';
function Section(props) {
   
  
    const [products,setProducts]=useState([]);
  

  
useEffect(()=>{
    if(props.allProd)
    filterCate()
},[props.cat])

const filterCate=async ()=>{

    const filteredArr= await props.allProd?.filter((item)=>(
     item.category===props.cat
   ))
   if(filteredArr.length>=3){
    const category=await  filteredArr.slice(0,3)
 setProducts(category);}
   else{
    setProducts(filteredArr);
   }
    }

    return (
      <div className="cat-outer">
            <h1 className="cat-name">{props.cat}</h1>
            <div className="cat-wrapper">
               
                       {!products?.length ? <Loading/> : products?.map((value,index)=>(
                             <div className="product-wrap" key={index}>
                             <Link to={`/product_detail/${value.id}`}>{!value.image ? <Loading/> :<figure><img src={value.image} alt="product picture"/></figure>}</Link>
                             <h5>{value.title}</h5>
                             <h4>price : ${value.price}</h4>
                           <Add_Cart id={value}/>
                               </div>
                            )
                        )}
            </div>
          <Link className="btn-more" to={`/category-details/${props.cat}`} >  SEE MORE <i class="arrow down"></i></Link>
      </div>

    
    )
}

export default Section
