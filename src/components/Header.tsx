import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Flex, HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Logo } from "./Logo";
import ConnectWalletButton from "./ConnectWalletButton";
import { useRouter } from "next/router";
const Header = () => {
  const Router = useRouter();
  const history = Router.asPath;
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
        {history === "/" ? (
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
                fontSize="lg"
                bg="none"
                _hover={{ bg: "none" }}
                onClick={toggleColorMode}
              />
            ) : (
              <IconButton
                aria-label="theme-button"
                icon={<FiSun />}
                bg="none"
                fontSize="lg"
                _hover={{ bg: "none" }}
                onClick={toggleColorMode}
              />
            )}
          </HStack>
        ) : (
          <ConnectWalletButton />
        )}
      </Flex>
    </>
  );
};

export default Header;
