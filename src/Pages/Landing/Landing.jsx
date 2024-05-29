import React from "react";
import Layout from '../../Components/Layout/Layout'
import Product from "../../Components/Product/Product";
import Carousel from "../../Components/Carousel/Carousel";
import Catagory from "../../Components/Catagory/Catagory";
function Landing() {
  return (
    <Layout>
      <Carousel/>
      <Catagory/>
      <Product/>
    </Layout>
  )
}

export default Landing;
