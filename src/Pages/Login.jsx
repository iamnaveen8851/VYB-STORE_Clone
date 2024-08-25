import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <>

      <Box
      
        display={"flex"}
        w={"90%"}
       
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"1px"}
        m={"auto"}
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <Box display={{
            base : "none",
            md :"none",
            xl : "block"
        }}  margin={"auto"}>
          <Image w={"490px"} src="photo.png" />
        </Box>

        <Box
        border={{
            base :"1px solid black",
            md : "none",
            xl : "none"
        }}
        p={{
            base: "10px",
            md : "0",
            xl : "0"
        }}
          w={{
            base: "100%",
            md : "90%",
            xl: "28%",
          }}
          m={"auto"}
          mt={{
            base: "10%",
            xl : "0%"
          }}
           borderRadius={{
            base: "15px",
            md : "15px",
            xl: "0",
          }}
        >
          <Heading textAlign={"center"}>Login</Heading>
          <Box
            display="flex"
            w={"80%"}
            m={"auto"}
            justifyContent={"center"}
            alignItems="center"
            border="1px solid black"
            borderRadius="20px"
            mt={"2%"}
            padding="10px 12px"
            cursor="pointer"
            _hover={{ backgroundColor: "gray.100" }}
          >
            <Icon as={FaGoogle} boxSize={5} color="red.500" />
            <Text ml={2} fontWeight="bold">
              Log in with Google
            </Text>
          </Box>
          <Text color={"#838383"} textAlign={"center"} mt={"5%"}>
            ----------OR----------
          </Text>
          <FormControl>
            <FormLabel
              textAlign={"left"}
              color={"#000000"}
              fontSize={"28px"}
              fontWeight={"650"}
            >
              Email
            </FormLabel>
            <Input
              border={"1px solid black"}
              type="email"
              placeholder="Enter email address"
            />

            <br />
            <FormLabel
              textAlign={"left"}
              color={"#000000"}
              fontSize={"28px"}
              fontWeight={"650"}
            >
              Password
            </FormLabel>
            <Input
              border={"1px solid black"}
              type="password"
              placeholder="Enter password"
            />
          </FormControl>
          {/* <br /> */}
          <Button
            w={"42%"}
            borderRadius={"20px"}
            border={"1px solid #234E52"}
            color={"#234E52"}
            ml={"28%"}
            mt={"5%"}
            variant={"none"}
          >
            Login
          </Button>
          {/* <br /> */}
          <Text textAlign={"center"} mt={"5%"} color={"#838383"}>
            {" "}
            ---- Don't Have account? ----
          </Text>

          <Button
            w={"42%"}
            borderRadius={"10px"}
            h={"48px"}
            variant={"none"}
            ml={"28%"}
            mt={"4%"}
            bg={"#234E52"}
            color={"#E5F0F1"}
          >
            Sign up
          </Button>
        </Box>
      </Box>
      <br />
      <br />
      
    </>
  );
}

export default Login;
