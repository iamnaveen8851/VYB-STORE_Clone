import { Box, Button, Heading, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
function VerifySuccess() {
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
        <Heading textAlign={"center"}>Congratulations!</Heading>

        <br />
        <Text fontWeight={"550"} fontSize={"18px"} textAlign={"center"}>
          Now You re a Verified Creator{" "}
        </Text>

        <br />
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
          <Link to="/">Continue</Link>
        </Button>
      </Box>

      <br />
      <br />
    </>
  );
}

export default VerifySuccess;
