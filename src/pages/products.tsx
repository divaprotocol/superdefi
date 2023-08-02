import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import ProductCard from "../components/Card/ProductCard";
import { Icon, SimpleGrid, Tab, TabList, Tabs } from "@chakra-ui/react";
import { TbArrowUpRight } from "react-icons/tb";

const products = () => {
  return (
    <Layout>
      <Header />
      <Tabs
        w={380}
        size={"md"}
        variant="soft-rounded"
        colorScheme="purple"
        bgColor="Black"
        borderRadius={12}
      >
        <TabList justifyContent={"space-around"}>
          <Tab textColor={"white"}>Products</Tab>
          <Tab>My Products</Tab>
          <Tab>
            Docs
            <Icon boxSize={"20px"} as={TbArrowUpRight} />
          </Tab>
        </TabList>
      </Tabs>
      <SimpleGrid columns={3} spacing={10}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SimpleGrid>
    </Layout>
  );
};
export default products;
