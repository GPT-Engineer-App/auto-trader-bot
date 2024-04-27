import React, { useState } from "react";
import { Box, Button, Text, VStack, useToast } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Index = () => {
  const [assetPrice, setAssetPrice] = useState(100); // Simulated asset price
  const toast = useToast();

  const buyAsset = () => {
    toast({
      title: "Asset Purchased",
      description: `Bought at $${assetPrice}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const sellAsset = () => {
    toast({
      title: "Asset Sold",
      description: `Sold at $${assetPrice}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="xl">Trading Tool Simulation</Text>
        <Text>Current Asset Price: ${assetPrice}</Text>
      </Box>
      <Button leftIcon={<FaArrowUp />} colorScheme="green" onClick={buyAsset}>
        Buy Asset
      </Button>
      <Button rightIcon={<FaArrowDown />} colorScheme="red" onClick={sellAsset}>
        Sell Asset
      </Button>
    </VStack>
  );
};

export default Index;
