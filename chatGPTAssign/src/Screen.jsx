import React from "react";
import { VStack, Text, Textarea, Box } from "@chakra-ui/react";

const Screen = () => {
  return (
    <div>
      <VStack>
        <Box
          overflow={"hidden"}
          overflowY={"scroll"}
          placeholder="Chat GPT"
          size="lg"
          width={"35rem"}
          borderRadius="20px"
          height={"30rem"}
          border={"2px solid gray"}
          padding={"10px"}
        >
          <Box >
            <Text border={"1px"} borderColor={"gray.700"} backgroundColor={"gray"} padding={'10px'} borderRadius={'5px'} marginRight={'70px'}>
              chatbot
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem perspiciatis, sunt quam minima a error tempore temporibus quas ut possimus doloremque, eum nesciunt sapiente doloribus odio nisi dolor perferendis.
            </Text>
          </Box>
          <Box  marginBottom={"10px"}>
            <Text border={"1px"} borderColor={"gray.700"} backgroundColor={"gray"} padding={'10px'} borderRadius={'5px'} marginLeft={'80px'}>khhklnn b</Text>
          </Box>
         
        </Box>
      </VStack>
    </div>
  );
};

export default Screen;
