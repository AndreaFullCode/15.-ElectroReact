import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API='https://dummyjson.com/products/category/';



const ProductServices = ({cat}) => {
    const URI=API+cat; //union de la ruta mas el parametro
    const [datos, setDatos] = useState([])
    const getDatos = async () =>{
        try {
          const response = await fetch(URI);
          const data = await response.json();
          //console.log(data)
          setDatos(data.products); //porque el json tiene nombre
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[cat]);

  return (
    <>

    {datos && datos.map((item, index) => (

    <div className="col-lg-4">
                <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                  <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                      <img src={item.thumbnail} className="img-fluid w-100 rounded-top" alt />
                      <div className="product-new">{item.brand}</div>
                      <div className="product-details">
                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                      </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                      <a href="#" className="d-block mb-2">{item.category}</a>
                      <a href="#" className="d-block h4">{item.title} <br /></a>
                      <span>{item.sku}</span>
                      <del className="me-2 fs-5">{item.price}</del>
                      <span className="text-primary fs-5">{item.discountPercentage}%</span>
                    </div>
                  </div>
                  <div className="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                    <a href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i className="fas fa-shopping-cart me-2" /> Add To Cart</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="d-flex">
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-3"><span className="rounded-circle btn-sm-square border"><i className="fas fa-random" /></span></a>
                        <a href="#" className="text-primary d-flex align-items-center justify-content-center me-0"><span className="rounded-circle btn-sm-square border"><i className="fas fa-heart" /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    ))}

    </>
  )
}

export default ProductServices