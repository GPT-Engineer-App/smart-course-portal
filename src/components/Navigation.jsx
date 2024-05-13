import { Box, Flex, Link } from "@chakra-ui/react";
import { FaHome, FaDollarSign } from "react-icons/fa";

function Navigation() {
  return (
    <Flex as="nav" p="4" bg="blue.500" color="white" justifyContent="space-between">
      <Link href="/" leftIcon={<FaHome />}>
        Home
      </Link>
      <Link href="/portal">Portal</Link>
      <Link href="/pricing" leftIcon={<FaDollarSign />}>
        Pricing
      </Link>
    </Flex>
  );
}

export default Navigation;
