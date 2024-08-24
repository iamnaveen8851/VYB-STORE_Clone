import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [placeholder, setPlaceholder] = useState("Search Creator");
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState("Creator");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isBelow850px] = useMediaQuery("(max-width: 850px)");

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
        gap={"5%"}
        w={{
          base: "80%",
          xl: "80%",
        }}
        m={"auto"}
        mt={"1%"}
        position={"sticky"}
        top={0}
        bg={"rgba(0, 0, 0, 0.06)"}
        backdropFilter="blur(10px)" // Apply blur effect
        boxShadow={"sm"}
        rounded={"lg"}
        p={"15px"}
        borderRadius={"35px"}
      >
        {/* Logo and search bar in left box */}
        <Box
          // border={"1px solid red"}
          display={"flex"}
          justifyContent={isBelow850px ? "space-between" : "space-around"}
          alignItems={"center"}
          gap={{
            base: "0",
            xl: "10px",
          }}
          w={{
            base: "100%",
            sm: "500px",
            xl: "55%",
          }}
          m={"auto"}
        >
          <Box
            w={{
              base: "40%",
              xl: "auto",
            }}
            // border={"1px solid black"}
          >
            <Image
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F9fd5aba8692d70cefef4b3581c1daecf.cdn.bubble.io%2Ff1717142581576x589293308934299500%2FLOGO.gif?w=96&h=58&auto=compress&dpr=1.5&fit=max"
              w={{
                base: "120px",
                xl: "100px",
              }}
              h={{
                base: "50px",
                xl: "54px",
              }}
            />
          </Box>
          {/* Search bar */}
          <Box
            // border={"1px solid black"}
            w={{
              base: "100%", // Full width on mobile
              xl: "390px",
            }}
            m={{
              base: "auto", // Centered on mobile
              xl: "0",
            }}
          >
            <InputGroup p={"5px"}>
              <InputLeftElement pt={"10px"} pointerEvents="none">
                <SearchIcon
                  color="black"
                  h={"60%"}
                  w={"80%"}
                  ml={"10%"}
                  mt={"5%"}
                />
              </InputLeftElement>
              <Input
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "100%",
                  xl: "100%",
                }}
                border={"1px solid black"}
                borderRadius={"20px"}
                type="text"
                placeholder={isHovered ? "" : placeholder}
                _hover={{ paddingRight: "120px" }}
                _placeholder={{
                  marginRight: "20%",
                  marginBottom: "20%",
                }}
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
                pt={{
                  base: "5%",
                  xl: "2%",
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Box
                    mr={isHovered ? "5px" : "50px"}
                    transition="margin 0.3s"
                    onClick={handleCreatorClick}
                    _hover={{
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

        {/* Hamburger Menu (Visible only below 850px) */}
        {isBelow850px ? (
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            variant="outline"
            onClick={onOpen}
            ml="auto"
          />
        ) : (
          <Box
            // border={"1px solid black"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"50px"}
            w={"50%"}
            fontSize={"18px"}
            color={"rgba(0, 0, 0, 0.92)"}
            fontWeight={"450"}
          >
            <Link>Fav Creators</Link>
            <Link>Orders</Link>
            <Link>Policies</Link>
            <Button variant={"none"} fontSize={"18px"}>
              Login
            </Button>
          </Box>
        )}
      </Box>

      {/* Drawer for Hamburger Menu */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay bg="rgba(0, 0, 0, 0.0)" />
        <DrawerContent
          maxW="250px"
          backdropFilter="blur(7px)" // Apply blur effect
          bg={"rgba(0, 0, 0, 0.06)"}
        >
          <DrawerCloseButton />
          <DrawerBody m={"auto"} mt={"10%"}>
            <Link display="block" mb={4}>
              Fav Creators
            </Link>
            <Link display="block" mb={4}>
              Orders
            </Link>
            <Link display="block" mb={4}>
              Policies
            </Link>
            <Button variant={"none"} display="block">
              Login
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
