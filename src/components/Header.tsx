import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Flex, HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Logo } from "./Logo";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>SuperDeFi</title>
        <meta name="description" content="SuperDefi" />
        <link rel="icon" href="./favicon.svg" />
      </Head>
      <Flex direction="row" justifyContent="space-between" py="44px">
        <Link href={"/"}>
          <Logo />
        </Link>
        <HStack spacing={3}>
          <Link href="/docs">
            <Text fontSize="md" fontWeight="semibold">
              Docs
            </Text>
          </Link>
          <Link href="/faq">
            <Text fontSize="md" fontWeight="semibold">
              FAQ
            </Text>
          </Link>
          {colorMode === "light" ? (
            <IconButton
              aria-label="theme-button"
              icon={<FiMoon />}
              bg="none"
              _hover={{ bg: "none" }}
              onClick={toggleColorMode}
            />
          ) : (
            <IconButton
              aria-label="theme-button"
              icon={<FiSun />}
              bg="none"
              _hover={{ bg: "none" }}
              onClick={toggleColorMode}
            />
          )}
        </HStack>
      </Flex>
    </>
  );
};

export default Header;
