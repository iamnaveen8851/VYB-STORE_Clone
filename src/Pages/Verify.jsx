import { Box, Button, Heading, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
function Verify() {
  return (
    <>
      <Box
        w={{
          base: "95%",
          xl: "40%",
        }}
        borderRadius={"15px"}
        p={"10px"}
        m={"auto"}
        border={"2px solid black"}
      >
        <Heading textAlign={"center"}>Verify Your Account</Heading>

        <Box
          display="flex"
          w={"90%"}
          m={"auto"}
          justifyContent={"space-around"}
          gap={"10px"}
          alignItems="center"
          // border="1px solid black"
          borderRadius="20px"
          mt={"2%"}
          padding="10px 12px"
          cursor="pointer"
          _hover={{ backgroundColor: "gray.100" }}
        >
          <Text
            ml={2}
            fontWeight="bold"
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={"4%"}
          >
            <Icon as={FaInstagram} boxSize={5} color="red.500" />
            Instagram
          </Text>
          <Input
            w={"61%"}
            border={"1px solid black"}
            type="text"
            placeholder="Enter Instagram ID"
          />
        </Box>
        <Box
          display="flex"
          w={"90%"}
          m={"auto"}
          justifyContent={"space-around"}
          gap={"10px"}
          alignItems="center"
          // border="1px solid black"
          borderRadius="20px"
          mt={"2%"}
          padding="10px 12px"
          cursor="pointer"
          _hover={{ backgroundColor: "gray.100" }}
        >
          <Text
            ml={2}
            fontWeight="bold"
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={"4%"}
          >
            <Icon as={FaYoutube} boxSize={5} color="red.500" />
            Youtube
          </Text>
          <Input
            w={"60%"}
            border={"1px solid black"}
            type="text"
            placeholder="Enter Youtube ID"
          />
        </Box>

        <Button
          w={"40%"}
          borderRadius={"30px"}
          h={"48px"}
          variant={"none"}
          ml={"32%"}
          mt={"4%"}
          bg={"#234E52"}
          color={"#E5F0F1"}
        >
          <Link to="/verifySuccessful"> Continue</Link>
        </Button>
      </Box>

      <br />
      <br />
    </>
  );
}

export default Verify;
