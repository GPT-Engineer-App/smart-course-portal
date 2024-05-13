import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";

function Pricing() {
  return (
    <VStack spacing={4} p={5}>
      <Heading>Pricing Plans</Heading>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Basic</Heading>
        <Text mt={4}>$10/month</Text>
        <Button mt={4} colorScheme="blue">
          Choose Basic
        </Button>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Pro</Heading>
        <Text mt={4}>$30/month</Text>
        <Button mt={4} colorScheme="blue">
          Choose Pro
        </Button>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">Enterprise</Heading>
        <Text mt={4}>$100/month</Text>
        <Button mt={4} colorScheme="blue">
          Choose Enterprise
        </Button>
      </Box>
    </VStack>
  );
}

export default Pricing;
