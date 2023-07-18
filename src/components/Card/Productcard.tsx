import { Box, Button,  Card, CardBody, CardFooter, CardHeader, Divider,  HStack, Stack, Text, VStack } from "@chakra-ui/react"
import { RxDotFilled } from "react-icons/rx";
import {HiOutlineDocumentText} from "react-icons/hi";
import { CoinIconPair } from './CoinIcon'
const ProductCard = ()=>{
    return(
    <Card w={'400px'} h={'430px'} borderRadius={'20px'}>
        <CardHeader>
          <Stack direction={'row'}>
            <Box w='82px' h='46px' >
            <CoinIconPair assetName={'eth'} />
            </Box>
            <Box>
            <HStack direction={'row'} align={'right'}>
                 <Text fontSize="xl" fontWeight="medium" letterSpacing="wider">
                     ETH/USDT
                </Text>
              <HStack direction={'row'} align={'right'}> 
              <RxDotFilled color="Green"  />
              <HiOutlineDocumentText />
              </HStack>
            </HStack>
            </Box>
          </Stack>
        </CardHeader>
        <CardBody>
        <Box>
            <HStack justify={"space-between"}>
                 <Text fontSize="xl" fontWeight="medium" letterSpacing="wider">
                     Cliff
                </Text>
                <Button variant='solid' size={"xs"} bgColor='cyan.500' >cliff</Button>
            </HStack>
            </Box>
            <Box>
            <HStack justify={"space-between"}>
                 <Text fontSize="md" fontWeight="medium" letterSpacing="wider">
                     Cliff
                </Text>
                <Text variant='solid' color='cyan.100'>cliff</Text>
            </HStack>
            <HStack justify={"space-between"}>
                 <Text fontSize="md" fontWeight="medium" letterSpacing="wider">
                     Cliff
                </Text>
                <Text variant='solid' color='cyan.100'>cliff</Text>
            </HStack>
            <HStack justify={"space-between"}>
                 <Text fontSize="md" fontWeight="medium" letterSpacing="wider">
                     Cliff
                </Text>
                <Text variant='solid' color='cyan.100'>cliff</Text>
            </HStack>
            <HStack justify={"space-between"}>
                 <Text fontSize="md" fontWeight="medium" letterSpacing="wider">
                     Cliff
                </Text>
                <Text variant='solid' color='cyan.100'>cliff</Text>
            </HStack>
            <HStack justify={"space-between"}>
                 <Text fontSize="md" fontWeight="medium" letterSpacing="wider">
                     Cliff
                </Text>
                <Text variant='solid' color='cyan.100'>cliff</Text>
            </HStack>
            </Box>
        </CardBody>
         <Divider w={'360px'}/>
          <CardFooter justify={"space-around"}>
             <Button variant='solid' colorScheme="blackAlpha" size={"sm"}>
                 sell
             </Button>
             <Button variant='solid' colorScheme='purple'size={"sm"} >
                 Buy
             </Button>
          </CardFooter> 

    </Card>
    )
}
export default ProductCard