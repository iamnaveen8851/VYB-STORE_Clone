import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  SearchIcon,
  HamburgerIcon,
  Icon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { FaBars, FaTimes, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
function CartIcon() {
  return (
    <>
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 15.875C7.5 16.1222 7.42669 16.3639 7.28934 16.5695C7.15199 16.775 6.95676 16.9352 6.72835 17.0299C6.49995 17.1245 6.24861 17.1492 6.00614 17.101C5.76366 17.0527 5.54093 16.9337 5.36612 16.7589C5.1913 16.5841 5.07225 16.3613 5.02402 16.1189C4.97579 15.8764 5.00054 15.6251 5.09515 15.3966C5.18976 15.1682 5.34998 14.973 5.55554 14.8357C5.7611 14.6983 6.00277 14.625 6.25 14.625C6.58152 14.625 6.89946 14.7567 7.13388 14.9911C7.3683 15.2255 7.5 15.5435 7.5 15.875ZM14.375 14.625C14.1278 14.625 13.8861 14.6983 13.6805 14.8357C13.475 14.973 13.3148 15.1682 13.2201 15.3966C13.1255 15.6251 13.1008 15.8764 13.149 16.1189C13.1972 16.3613 13.3163 16.5841 13.4911 16.7589C13.6659 16.9337 13.8887 17.0527 14.1311 17.101C14.3736 17.1492 14.6249 17.1245 14.8534 17.0299C15.0818 16.9352 15.277 16.775 15.4143 16.5695C15.5517 16.3639 15.625 16.1222 15.625 15.875C15.625 15.5435 15.4933 15.2255 15.2589 14.9911C15.0245 14.7567 14.7065 14.625 14.375 14.625ZM18.0977 4.80859L15.8687 12.0516C15.752 12.4355 15.5146 12.7716 15.1918 13.01C14.8689 13.2484 14.4779 13.3764 14.0766 13.375H6.56797C6.16092 13.3735 5.76531 13.2401 5.4404 12.9949C5.11548 12.7497 4.87874 12.4059 4.76562 12.0148L1.93906 2.125H0.625C0.45924 2.125 0.300269 2.05915 0.183058 1.94194C0.065848 1.82473 0 1.66576 0 1.5C0 1.33424 0.065848 1.17527 0.183058 1.05806C0.300269 0.940848 0.45924 0.875 0.625 0.875H1.93906C2.21048 0.8759 2.4743 0.964678 2.69104 1.12805C2.90778 1.29141 3.06579 1.52058 3.14141 1.78125L3.775 4H17.5C17.5978 3.99996 17.6943 4.02288 17.7816 4.06691C17.8689 4.11094 17.9447 4.17485 18.0028 4.25351C18.061 4.33216 18.0998 4.42336 18.1163 4.51977C18.1328 4.61618 18.1264 4.7151 18.0977 4.80859ZM16.6539 5.25H4.13203L5.96719 11.6719C6.00452 11.8024 6.08335 11.9172 6.19174 11.999C6.30014 12.0807 6.4322 12.125 6.56797 12.125H14.0766C14.2103 12.125 14.3405 12.0822 14.4481 12.0027C14.5557 11.9233 14.6349 11.8114 14.6742 11.6836L16.6539 5.25Z"
          fill="#404040"
        />
      </svg>
    </>
  );
}

function AboutIcon() {
  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM9 15.875C7.64026 15.875 6.31105 15.4718 5.18046 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.6309C2.12798 10.3747 1.99183 8.99237 2.2571 7.65875C2.52238 6.32513 3.17716 5.10013 4.13864 4.13864C5.10013 3.17716 6.32514 2.52237 7.65876 2.2571C8.99238 1.99183 10.3747 2.12798 11.631 2.64833C12.8872 3.16868 13.9609 4.04987 14.7164 5.18045C15.4718 6.31104 15.875 7.64025 15.875 9C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM10.25 12.75C10.25 12.9158 10.1842 13.0747 10.0669 13.1919C9.94974 13.3092 9.79076 13.375 9.625 13.375C9.29348 13.375 8.97554 13.2433 8.74112 13.0089C8.5067 12.7745 8.375 12.4565 8.375 12.125V9C8.20924 9 8.05027 8.93415 7.93306 8.81694C7.81585 8.69973 7.75 8.54076 7.75 8.375C7.75 8.20924 7.81585 8.05027 7.93306 7.93306C8.05027 7.81585 8.20924 7.75 8.375 7.75C8.70652 7.75 9.02447 7.8817 9.25889 8.11612C9.49331 8.35054 9.625 8.66848 9.625 9V12.125C9.79076 12.125 9.94974 12.1908 10.0669 12.3081C10.1842 12.4253 10.25 12.5842 10.25 12.75ZM7.75 5.5625C7.75 5.37708 7.80499 5.19582 7.908 5.04165C8.01101 4.88748 8.15743 4.76732 8.32874 4.69636C8.50004 4.62541 8.68854 4.60684 8.8704 4.64301C9.05226 4.67919 9.2193 4.76848 9.35042 4.89959C9.48153 5.0307 9.57082 5.19775 9.60699 5.3796C9.64316 5.56146 9.6246 5.74996 9.55364 5.92127C9.48268 6.09257 9.36252 6.23899 9.20835 6.342C9.05418 6.44502 8.87292 6.5 8.6875 6.5C8.43886 6.5 8.20041 6.40123 8.02459 6.22541C7.84878 6.0496 7.75 5.81114 7.75 5.5625Z"
          fill="#404040"
        />
      </svg>
    </>
  );
}

function ContactIcon() {
  return (
    <>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7727 3.27031C14.025 2.51514 13.1357 1.91486 12.1558 1.50383C11.1758 1.09281 10.1244 0.879121 9.06172 0.875H9C6.84512 0.875 4.77849 1.73102 3.25476 3.25476C1.73102 4.77849 0.875 6.84512 0.875 9V13.375C0.875 13.8723 1.07254 14.3492 1.42417 14.7008C1.77581 15.0525 2.25272 15.25 2.75 15.25H4C4.49728 15.25 4.9742 15.0525 5.32583 14.7008C5.67746 14.3492 5.875 13.8723 5.875 13.375V10.25C5.875 9.75272 5.67746 9.27581 5.32583 8.92417C4.9742 8.57254 4.49728 8.375 4 8.375H2.15313C2.27366 7.07182 2.76315 5.83 3.56424 4.79508C4.36532 3.76016 5.44481 2.97502 6.67617 2.53169C7.90753 2.08836 9.23975 2.0052 10.5167 2.29196C11.7936 2.57872 12.9624 3.22352 13.8859 4.15078C15.0148 5.28539 15.7091 6.78052 15.8477 8.375H14C13.5027 8.375 13.0258 8.57254 12.6742 8.92417C12.3225 9.27581 12.125 9.75272 12.125 10.25V13.375C12.125 13.8723 12.3225 14.3492 12.6742 14.7008C13.0258 15.0525 13.5027 15.25 14 15.25H15.875C15.875 15.7473 15.6775 16.2242 15.3258 16.5758C14.9742 16.9275 14.4973 17.125 14 17.125H9.625C9.45924 17.125 9.30027 17.1908 9.18306 17.3081C9.06585 17.4253 9 17.5842 9 17.75C9 17.9158 9.06585 18.0747 9.18306 18.1919C9.30027 18.3092 9.45924 18.375 9.625 18.375H14C14.8288 18.375 15.6237 18.0458 16.2097 17.4597C16.7958 16.8737 17.125 16.0788 17.125 15.25V9C17.1291 7.93717 16.9234 6.88398 16.5197 5.90077C16.1161 4.91757 15.5224 4.02368 14.7727 3.27031ZM4 9.625C4.16576 9.625 4.32473 9.69085 4.44194 9.80806C4.55915 9.92527 4.625 10.0842 4.625 10.25V13.375C4.625 13.5408 4.55915 13.6997 4.44194 13.8169C4.32473 13.9342 4.16576 14 4 14H2.75C2.58424 14 2.42527 13.9342 2.30806 13.8169C2.19085 13.6997 2.125 13.5408 2.125 13.375V9.625H4ZM14 14C13.8342 14 13.6753 13.9342 13.5581 13.8169C13.4408 13.6997 13.375 13.5408 13.375 13.375V10.25C13.375 10.0842 13.4408 9.92527 13.5581 9.80806C13.6753 9.69085 13.8342 9.625 14 9.625H15.875V14H14Z"
          fill="#404040"
        />
      </svg>
    </>
  );
}
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
        top={"3%"}
        zIndex={10}
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
            <Link to="/">
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
            </Link>
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
                  ml={"14%"}
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
                  base: "3%",
                  md : "3%",
                  lg : "3%",
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
            mb={"3%"}
            fontSize="30px" // Increase the font size of the icon
            boxSize="45px"
          />
        ) : (
          <Box
            // border={"1px solid black"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"50px"}
            w={"65%"}
            fontSize={"18px"}
            color={"rgba(0, 0, 0, 0.92)"}
            fontWeight={"450"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={"5px"}
            >
              <CartIcon />
              <Link>Cart</Link>
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={"5px"}
            >
              <AboutIcon />
              <Link>About</Link>
            </Box>

            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={"5px"}
            >
              <ContactIcon />
              <Link>Contact</Link>
            </Box>
            <Menu>
              <MenuButton
                variant={"none"}
                backdropFilter="blur(7px)"
                border={"1px solid black"}
                borderRadius={"10px"}
                bg={"#FFFFFF"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                <Icon
                  boxSize={5}
                  bg={"grey"}
                  p={"2px"}
                  borderRadius={"10px"}
                  color="white"
                  variant="none"
                  as={FaUser}
                />
              </MenuButton>
              <MenuList
                borderRadius={"5px"}
                bg={"#FFFFFF"}
                mt={"-3%"}
                ml={"20%"}
              >
                <MenuItem ml={"35%"} bg={"white"} backdropFilter="blur(10px)">
                  Profile
                </MenuItem>
                <MenuItem ml={"35%"} bg={"white"} backdropFilter="blur(10px)">
                  <Link to="/login"> Login</Link>
                </MenuItem>
              </MenuList>
            </Menu>
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
            <Box
              display="flex"
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={"5px"}
              mb={4}
            >
              <Link>Contact</Link>
            </Box>
            <Link
              display="flex"
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={"10px"}
              mb={4}
            >
              Cart
            </Link>
            <Link
              display="flex"
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={"5px"}
              mb={4}
            >
              About
            </Link>

            <Button variant={"none"} display="block">
              <Link to="/login">Login</Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
