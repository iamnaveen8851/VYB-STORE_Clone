import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
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
          margin={"auto"}
        >
          <Image
            w={"100%"}
            src="photo.png"
            objectFit="cover"
            borderRadius="8px"
          />
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
            md: "45%",
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
          <Heading textAlign={"center"}>Signup</Heading>

          <FormControl mt={"4%"}>
            <FormLabel
              textAlign={"left"}
              color={"#000000"}
              fontSize={"28px"}
              fontWeight={"650"}
            >
              Full Name
            </FormLabel>
            <Input
              border={"1px solid black"}
              type="text"
              placeholder="Enter full name"
            />

            <br />
            <br />
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
              placeholder="Enter email"
            />

            <br />
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
          <Text
            textAlign={"center"}
            fontSize={"24px"}
            mt={"8%"}
            fontWeight={"800"}
          >
            Are You A Creator?
          </Text>
          <Box display={"flex"} justifyContent={"center"} gap={"4%"}>
            <Button variant={"none"} bg={"none"} border={"1px solid black"}>
              Yes
            </Button>
            <Button variant={"none"} bg={"none"} border={"1px solid black"}>
              No
            </Button>
          </Box>
          <Button
            w={"42%"}
            borderRadius={"20px"}
            border={"1px solid #234E52"}
            color={"#234E52"}
            ml={"28%"}
            mt={"5%"}
            variant={"none"}
          >
            <Link to="/verifyId">Sign up</Link>
          </Button>

          <Text textAlign={"center"} mt={"5%"}>
            Already have an account?{" "}
            <Link
              to="/login"
              fontSize={"17px"}
              fontWeight={"540"}
              color={"#234E52"}
            >
              Login
            </Link>
          </Text>
        </Box>
      </Box>
      <br />
      <br />
    </>
  );
}

export default Signup;
