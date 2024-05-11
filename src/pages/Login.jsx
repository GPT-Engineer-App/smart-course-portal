import React, { useState } from "react";
import { Box, Button, Container, Input, VStack, Heading } from "@chakra-ui/react";

const Login = ({ onLogin }) => {
  const [userType, setUserType] = useState("");

  const handleLogin = () => {
    onLogin(userType);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt="20">
        <Heading>Login</Heading>
        <Input placeholder="Enter user type (student or instructor)" value={userType} onChange={(e) => setUserType(e.target.value)} />
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
