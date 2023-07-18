import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ProductCard from "../components/Card/ProductCard";
import { SimpleGrid } from "@chakra-ui/react";

const products = () => {
  return (
    <Layout>
      <Header />
      <SimpleGrid >
        <ProductCard/>
      </SimpleGrid>
      
    </Layout>
  );
};

export default products;
