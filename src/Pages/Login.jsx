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
import { Link } from "react-router-dom";

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
          md: "row",
        }}
      >
        <Box
          display={{
            base: "none",
            md: "block",
          }}
          w={{
            md: "45%",
            lg: "50%",
          }}
          m={"auto"}
        >
          <Image w={"100%"} objectFit="cover" src="photo.png" />
        </Box>

        <Box
          border={{
            base: "1px solid black",
            md: "none",
          }}
          p={{
            base: "10px",
          }}
          w={{
            base: "100%",
            md: "40%",
            lg: "35%",
            xl: "30%",
          }}
          m={"auto"}
          mt={{
            base: "10%",
            md: "4%",
            lg: "2%",
          }}
          borderRadius={{
            base: "15px",
            md: "15px",
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
          <Text textAlign={"center"} mt={"5%"} color={"#838383"}>
            ---- Don't Have an account? ----
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
            <Link to="/signup"> Sign up</Link>
          </Button>
        </Box>
      </Box>
      <br />
      <br />
    </>
  );
}

export default Login;
