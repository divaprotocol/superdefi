import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Icon,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import { CoinIcon } from "./CoinIcon";

const ProductCard = () => {
  return (
    <Card w={"400px"} h={"430px"} borderRadius={"20px"}>
      <CardHeader pb={"5px"}>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <Box w="82px" h="46px">
            <CoinIcon assetName={"ETH"} />
          </Box>
          <Box flexDirection={"row"} alignContent={"center"}>
            <Text fontSize="xl" fontWeight="medium" letterSpacing="wider">
              ETH/USDT
            </Text>
            <Text> $34523</Text>
          </Box>
          <Icon color={"Green"} boxSize={"3rem"} as={BsDot} />
          <HStack gap="5px" justifyContent={"flex-end"}>
            <Icon boxSize={"20px"} as={HiOutlineDocumentText} />
            <Icon boxSize={"20px"} as={FiStar} />
          </HStack>
        </Stack>
        <HStack justify={"space-between"}>
          <Text fontSize="xl" fontWeight="medium" letterSpacing="wider">
            Cliff
          </Text>
          <Button variant="solid" size={"xs"} bgColor="cyan.500">
            cliff
          </Button>
        </HStack>
      </CardHeader>
      <CardBody pt={"5px"} pb={"5px"}>
        <Stack spacing={"16px"}>
          <HStack justify={"space-between"} pt={"16px"}>
            <Text
              fontSize="md"
              fontWeight="medium"
              letterSpacing="wider"
              color={"#585F6F"}
            >
              Cliff
            </Text>
            <Text variant="solid" color="cyan.100">
              cliff
            </Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text
              fontSize="md"
              fontWeight="medium"
              letterSpacing="wider"
              color={"#585F6F"}
            >
              Cliff
            </Text>
            <Text variant="solid" color="cyan.100">
              cliff
            </Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text
              fontSize="md"
              fontWeight="medium"
              letterSpacing="wider"
              color={"#585F6F"}
            >
              Cliff
            </Text>
            <Text variant="solid" color="cyan.100">
              cliff
            </Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text
              fontSize="md"
              fontWeight="medium"
              letterSpacing="wider"
              color={"#585F6F"}
            >
              Cliff
            </Text>
            <Text variant="solid" color="cyan.100">
              cliff
            </Text>
          </HStack>
          <HStack justify={"space-between"}>
            <Text
              fontSize="md"
              fontWeight="medium"
              letterSpacing="wider"
              color={"#585F6F"}
            >
              Cliff
            </Text>
            <Text variant="solid" color="cyan.100">
              cliff
            </Text>
          </HStack>
        </Stack>
      </CardBody>
      <Box position="relative">
        <Divider />
      </Box>
      <CardFooter justify={"space-around"} pt={2}>
        <Button variant="solid" bg="black" size={"sm"} textColor={"white"}>
          Sell
        </Button>
        <Button variant="solid" colorScheme="purple" size={"sm"}>
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;
