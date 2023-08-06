// src/components/Navbar.js
import React from "react";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { FaHistory, FaBars } from "react-icons/fa"; // Import the React Icons

const Navbar = ({ onToggleSidebar, hasHistory }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bgGradient="linear(to-r, teal.500, teal.300)"
      color="white"
      p={4}
      zIndex={999}
    >
      <Flex align="center" justify="space-between">
        {hasHistory && (
          <Button
            colorScheme="teal"
            leftIcon={<FaHistory />} // Use the React Icon component
            onClick={onToggleSidebar}
            display={["block", "none"]}
          >
            History
          </Button>
        )}
        <Heading fontSize={["xl", "2xl", "3xl"]} fontWeight="bold">
          ChatGPT Shayari Generator
        </Heading>
        <Button
          colorScheme="teal"
          leftIcon={<FaBars />} // Use the React Icon component
          onClick={onToggleSidebar}
          display={["block", "none"]}
        >
          Toggle Sidebar
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
