import { Container } from "@chakra-ui/react";
import React from "react";
import AddProduct from "../components/add-product/AddProduct";


const Home = () => {
  return (
    <div>
      {/* <HeroSlider /> */}
      <section className="add-product">
        <Container>
          <AddProduct />
        </Container>
      </section>
    </div>
  );
};

export default Home;  
