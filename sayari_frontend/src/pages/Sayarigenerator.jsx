// src/components/ShayariGenerator.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Center,
  useToast,
  VStack,
  ListItem,
  UnorderedList,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "./Nabvar";
const ShayariGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [generatedShayari, setGeneratedShayari] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shayariHistory, setShayariHistory] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toast = useToast();

  useEffect(() => {
    // Fetch shayari history from the backend endpoint
    const fetchShayariHistory = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/shayari/history`);
          const data = await response.json();
          console.log(data.shayari.text)
          setShayariHistory(data.shayari);
        } catch (error) {
          console.error("Error fetching shayari history:", error);
        }
    };

    fetchShayariHistory();
  }, [isLoading]); // Empty dependency array ensures this effect runs only once on component mount

  const generateShayari = async () => {
    if (!inputText) {
      toast({
        title: "Input required.",
        description: "Please enter a word.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    // Assuming you have set up your backend API with the endpoint for generating shayari
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/shayari/generate`,
        { text: inputText }
      );

      const data =  response.data
   
      setGeneratedShayari(data.bot);
      setShayariHistory((prevHistory) => [...prevHistory, data.bot]);
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error generating shayari:", error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <Box p={8}>
    <Navbar onToggleSidebar={handleToggleSidebar} hasHistory={shayariHistory.length > 0} />
      <Flex align="center" justify="space-between" mb={4}>
        {shayariHistory?.length > 0 && (
          <Button
            colorScheme="teal"
         
            onClick={handleToggleSidebar}
          >
            History
          </Button>
        )}
        <Heading>ChatGPT Shayari Generator</Heading>
       
      </Flex>

      <Flex direction="column" align="center" justify="center">
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a word..."
          size="lg"
          mb={4}
        />
        <Button
          colorScheme="teal"
          onClick={generateShayari}
          isLoading={isLoading}
        >
          Generate Shayari
        </Button>
        {generatedShayari && (
          <Center mt={8}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Text>{generatedShayari}</Text>
            </motion.div>
          </Center>
        )}
      </Flex>

  
    
        <Drawer
          placement="left"
          isOpen={isSidebarOpen}
          onClose={handleToggleSidebar}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shayari History</DrawerHeader>
            <DrawerBody>
              <VStack spacing={2}>
                <UnorderedList>
                  {shayariHistory?.map((shayari, index) => (
                    <ListItem key={index}>{shayari.text}</ListItem>
                  ))}
                </UnorderedList>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      
    </Box>
  );
};

export default ShayariGenerator;
