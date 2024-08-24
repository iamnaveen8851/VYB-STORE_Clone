import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Navbar = () => {
  const [placeholder, setPlaceholder] = useState("Search Creator");
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState("Creator");

  const handleCreatorClick = () => {
    setPlaceholder("Search Creator");
    setSelected("Creator");
  };

  const handleProductsClick = () => {
    setPlaceholder("Search Products");
    setSelected("Product");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"20%"}
        w={"80%"}
        m={"auto"}
        mt={"1%"}
        position={"sticky"}
        top={0}
        bg={"rgba(0, 0, 0, 0.06)"}
        boxShadow={"sm"}
        rounded={"lg"}
        p={"15px"}
        borderRadius={"35px"}
      >
        {/* logo and search bar in left box */}
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Box>
            <Image
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717142581576x589293308934299500%2FLOGO.gif?w=96&h=58&auto=compress&dpr=1.5&fit=max"
              w={"80px"}
              h={"50px"}
            />
          </Box>
          <Box>
            <InputGroup p={"5px"}>
              <InputLeftElement pt={"10px"} pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                border={"1px solid black"}
                borderRadius={"20px"}
                type="text"
                placeholder={isHovered ? "" : placeholder}
                _hover={{ paddingRight: "120px" }} // Adjust padding on hover
              />
              <InputRightElement
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                _hover={{
                  cursor: "pointer",
                }}
                color={isHovered ? "#48BB78" : "#48BB78"}
                textDecoration={"underline"}
                textDecorationThickness={"15%"}
                fontWeight={"500"}
                pt={"2%"}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Box
                    mr={isHovered ? "5px" : "40px"}
                    transition="margin 0.3s"
                    onClick={handleCreatorClick}
                    _hover={{
                      // color: "#48BB78",
                      color: selected === "Creator" ? "black" : "#48BB78",
                    }}
                  >
                    {selected === "Creator" ? "Creator" : "Product"}
                  </Box>
                  {isHovered && (
                    <Box
                      onClick={handleProductsClick}
                      transition="opacity 0.3s"
                      mr={isHovered ? "100px" : "40px"}
                      _hover={{
                        color: selected === "Product" ? "#48BB78" : "black",
                      }}
                      ml={"1px"}
                    >
                      {selected === "Product" ? "Creator" : "Product"}
                    </Box>
                  )}
                </Box>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
        {/* links with login button */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"50px"}
        >
          <Link>Fav Creators</Link>
          <Link>Orders</Link>
          <Link>Policies</Link>
          <Button variant={"none"}>Login</Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
