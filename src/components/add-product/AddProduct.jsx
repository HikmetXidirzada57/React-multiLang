import { Button, Grid, Input } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useState } from "react";
import MainPanel from "../main-panel/MainPanel";
import "./add-product.scss";
const AddProduct = () => {
  const languageList = [
    { id: 1, langKey: "AZ" },
    { id: 2, langKey: "EN" },
    { id: 3, langKey: "RU" },

  ];
  const [price, setPrice] = useState(0);
  const [inStock, setInStock] = useState(0);
  const [languageInput, setLanguageInput] = useState([]);
  
  const onHandleLangChange = useCallback((dataInfo) => {
    let data = {
      name: dataInfo.name,
      description: dataInfo.description,
      langKey: dataInfo.lang,
    };
    setLanguageInput(lng=>[...lng.filter(l=>l.langKey!==dataInfo.lang && l.langKey!==""),data])
  },[]);
  console.log(languageInput)

  return (
    <div>
      <MainPanel mainLang={languageList} changeLang={onHandleLangChange} />
      <Grid mb={3}>
        <Input
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </Grid>
      <Grid mb={3}>
        <Input
          placeholder="in stock"
          onChange={(e) => setInStock(e.target.value)}
        />
      </Grid>
      <Grid>
        <Button colorScheme="teal">Add Product</Button>
      </Grid>
    </div>
  );
};

export default AddProduct;
