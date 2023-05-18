import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

function HeroSection() {
  return (
    <Flex
      direction={["column-reverse", "column-reverse", "row", "row", "row"]}
      justifyContent="space-between"
      alignContent="center"
    >
      <Flex direction="column" justifyContent="center">
        <Heading
          fontSize={["xl", "2xl", "2xl", "3xl", "3xl"]}
          fontWeight="medium"
          letterSpacing="wider"
        >
          &nbsp;
          <Text
            display="inline"
            fontWeight="bold"
            color="purple.100"
            letterSpacing="wider"
            ml="-15px"
          >
            Supercharge
          </Text>
          &nbsp; your Crypto Investment
        </Heading>
        <Text fontSize="lg" fontWeight="medium" letterSpacing="wider" my={8}>
          Earn superior yield with defensive strategies
        </Text>
        <Link href="/products">
          <Button
            w="260px"
            h="60px"
            variant="tertiary"
            fontSize="xl"
            color="white"
          >
            Lunch App
          </Button>
        </Link>
      </Flex>
      <Box w={["80%", "80%", "60%", "60%", "65%"]}>
        <Image src="./heroimage.png" objectFit="cover" />
      </Box>
    </Flex>
  );
}

export default HeroSection;
