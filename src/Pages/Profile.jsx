import { EditIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaHeading,
  FaInstagram,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaStrikethrough,
  FaUnderline,
  FaYoutube,
} from "react-icons/fa";
import { z } from "zod";

// Define Zod schemas for validation
// profile schema
const usernameSchema = z
  .string()
  .min(2, "Username must be at least 2 characters long");
const emailSchema = z.string().email("Invalid email address");
const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters long");
const phoneNumberSchema = z
  .string()
  .regex(/^\d{10}$/, "Phone number must be 10 digits");

// store schema

const urlSchema = z.string().url("Invalid URL format");
const genreSchema = z.string().min(1, "Genre is required");
const aboutSchema = z.string().min(10, "About must be at least 10 characters");
const accountHolderSchema = z.string().min(1, "Account Holder is required");
const acNumberSchema = z
  .string()
  .length(10, "Account Number must be 10 digits");
const ifscSchema = z.string().length(11, "IFSC code must be 11 characters");
const panNumSchema = z.string().length(10, "PAN Number must be 10 characters");
const gstSchema = z.string().optional(); // GST is optional

function Profile() {
  // State to hold input values

  // profile states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [errors, setErrors] = useState({});
  const [activeSection, setActiveSection] = useState("profile"); // New state to manage active section
  const [editorValue, setEditorValue] = useState("");
  const [isGstVisible, setIsGstVisible] = useState(false);

  // store states
  const [instaFollowers, setInstaFollowers] = useState("");
  const [instaId, setInstaId] = useState("");
  const [youtubeFollowers, setYoutubeFollowers] = useState("");
  const [youtubeId, setYoutubeId] = useState("");
  const [url, setUrl] = useState("");
  const [genre, setGenre] = useState("");
  const [about, setAbout] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [acNumber, setAcNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [panNum, setPanNum] = useState("");
  const [gst, setGst] = useState("");
  const [storeErrors, setStoreErrors] = useState({});

  // Handle form submission
  const handleProfileSubmit = () => {
    // Validate each field
    const usernameResult = usernameSchema.safeParse(username);
    const emailResult = emailSchema.safeParse(email);
    const passwordResult = passwordSchema.safeParse(password);
    const phoneNumberResult = phoneNumberSchema.safeParse(phoneNumber);

    // Collect errors
    const newErrors = {};
    if (!usernameResult.success)
      newErrors.username = usernameResult.error.errors[0].message;
    if (!emailResult.success)
      newErrors.email = emailResult.error.errors[0].message;
    if (!passwordResult.success)
      newErrors.password = passwordResult.error.errors[0].message;
    if (!phoneNumberResult.success)
      newErrors.phoneNumber = phoneNumberResult.error.errors[0].message;

    // Update error state
    setErrors(newErrors);

    // If no errors, proceed with form submission (e.g., send data to an API)
    setShowSuccessAlert(true);
    if (Object.keys(newErrors).length === 0) {
      console.log("Alert should be visible");
      // Submit form data
    }
  };

  const handleStoreSubmit = () => {
    // Validate each field

    const urlResult = urlSchema.safeParse(url); // Add schema for URL
    const genreResult = genreSchema.safeParse(genre); // Add schema for Genre
    const aboutResult = aboutSchema.safeParse(about); // Add schema for About
    const accountHolderResult = accountHolderSchema.safeParse(accountHolder); // Add schema for Account Holder
    const acNumberResult = acNumberSchema.safeParse(acNumber); // Add schema for Account Number
    const ifscResult = ifscSchema.safeParse(ifsc); // Add schema for IFSC
    const panNumResult = panNumSchema.safeParse(panNum); // Add schema for PAN Number
    const gstResult = gstSchema.safeParse(gst); // Add schema for GST

    // Collect errors
    const newStoreErrors = {};

    if (!urlResult.success)
      newStoreErrors.url = urlResult.error.errors[0].message;
    if (!genreResult.success)
      newStoreErrors.genre = genreResult.error.errors[0].message;
    if (!aboutResult.success)
      newStoreErrors.about = aboutResult.error.errors[0].message;
    if (!accountHolderResult.success)
      newStoreErrors.accountHolder =
        accountHolderResult.error.errors[0].message;
    if (!acNumberResult.success)
      newStoreErrors.acNumber = acNumberResult.error.errors[0].message;
    if (!ifscResult.success)
      newStoreErrors.ifsc = ifscResult.error.errors[0].message;
    if (!panNumResult.success)
      newStoreErrors.panNum = panNumResult.error.errors[0].message;
    if (!gstResult.success)
      newStoreErrors.gst = gstResult.error.errors[0].message;

    // Update error state
    setStoreErrors(newStoreErrors);

    // If no errors, proceed with form submission
    if (Object.keys(newStoreErrors).length === 0) {
      setShowSuccessAlert(true);
      // Handle form submission (e.g., send data to server)
    }
  };

  return (
    <>
      {showSuccessAlert && (
        <Box>
          <Alert w={"100%"} display={"flex"} justifyContent={"center"}  status="success">
            <AlertIcon />
            <Text textAlign={"center"}>Saved!</Text>
          </Alert>
        </Box>
      )}
      <Box
        w={"80%"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        m={"auto"}
        gap={"5px"}
      >
        <Box
          display={{
            base: "none",
            md: "block",
          }}
          m={"auto"}
          w={"40%"}
          border={"1px solid black"}
          borderRadius={"15px"}
          p={"10px"}
        >
          {/* Profile Image */}
          <Box w={"50%"} m={"auto"} borderRadius={"50px"}>
            <Image w={"100%"} src="profile-pic.png" alt="" />
          </Box>

          <Box
            w={{
              base: "60%",
              md: "65%",
              lg: "60%",
              xl: "47%",
              "2xl": "47%",
            }}
            display={"flex"}
            alignItems={"center"}
            m={"auto"}
          >
            {/* Icon of edit */}
            <Icon m={"auto"} boxSize={5} color={"#003C3C"} as={EditIcon} />
            <Text color={"#003C3C"} fontWeight={"450"} textAlign={"center"}>
              Change Profile Picture
            </Text>
          </Box>

          {/* Profile Title */}
          <Box mt={"1%"}>
            <Text fontSize={"30px"} textAlign={"center"} fontWeight={"650"}>
              Samira Hadid
            </Text>
          </Box>

          {/* Buttons */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            gap={"10px"}
            m={"auto"}
            w={"62%"}
            mt={"5%"}
          >
            <Button
              borderRadius={"10px"}
              w={"100%"}
              border={"1px solid #003C3C"}
              color={activeSection === "profile" ? "white" : "#003C3C"}
              bg={activeSection === "profile" ? "#003C3C" : "transparent"}
              variant={"none"}
              _hover={{
                boxShadow: "md",
              }}
              onClick={() => setActiveSection("profile")}
            >
              Profile
            </Button>
            <Button
              borderRadius={"10px"}
              w={"100%"}
              border={"1px solid #003C3C"}
              color={activeSection === "store" ? "white" : "#003C3C"}
              bg={activeSection === "store" ? "#003C3C" : "transparent"}
              variant={"none"}
              _hover={{
                boxShadow: "md",
              }}
              onClick={() => setActiveSection("store")} // Updated to change form
            >
              My Store
            </Button>
            <Button
              borderRadius={"10px"}
              w={"100%"}
              border={"1px solid #003C3C"}
              color={activeSection === "earning" ? "white" : "#003C3C"}
              bg={activeSection === "earning" ? "#003C3C" : "transparent"}
              variant={"none"}
              _hover={{
                boxShadow: "md",
              }}
              onClick={() => setActiveSection("earning")}
            >
              Earning
            </Button>
            <Button
              borderRadius={"10px"}
              w={"100%"}
              border={"1px solid #003C3C"}
              variant={"none"}
              color={activeSection === "address" ? "white" : "#003C3C"}
              bg={activeSection === "address" ? "#003C3C" : "transparent"}
              _hover={{
                boxShadow: "md",
              }}
              onClick={() => setActiveSection("address")}
            >
              Address
            </Button>

            <Button
              borderRadius={"10px"}
              w={"100%"}
              border={"1px solid #003C3C"}
              bg={"#003C3C"}
              color={"#ffff"}
              variant={"none"}
              _hover={{
                boxShadow: "md",
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>

        {/* Right side profile form */}
        <Box
          w={{
            base: "100%",
            md: "58%",
            lg: "58%",
            xl: "56%",
          }}
          maxH={"565px"}
          overflowY="auto"
          border={"1px solid black"}
          p={"20px"}
          mt={"2%"}
          borderRadius={"15px"}
        >
          <Heading>
            {activeSection === "profile" ? "Profile" : "Creator Store"}
          </Heading>
          <br />
          {activeSection === "profile" ? (
            <Box>
              {/* Profile form fields */}
              <FormControl>
                <FormLabel
                  textAlign={"left"}
                  color={"#000000"}
                  fontSize={"28px"}
                  fontWeight={"650"}
                >
                  User Name
                </FormLabel>
                <Input
                  border={"1px solid black"}
                  borderRadius={"15px"}
                  type="text"
                  placeholder="Enter user name"
                  _focus={{
                    border: "2px solid #003C3C",
                    boxShadow: "md",
                  }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <Text ml={"2%"} color="red.500">
                    {errors.username}
                  </Text>
                )}
              </FormControl>
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
                  borderRadius={"15px"}
                  _focus={{
                    border: "2px solid #003C3C",
                    boxShadow: "md",
                  }}
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <Text ml={"2%"} color="red.500">
                    {errors.email}
                  </Text>
                )}

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
                  borderRadius={"15px"}
                  _focus={{
                    border: "2px solid #003C3C",
                    boxShadow: "md",
                  }}
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <Text ml={"2%"} color="red.500">
                    {errors.password}
                  </Text>
                )}
              </FormControl>

              <br />
              <FormControl>
                <FormLabel
                  textAlign={"left"}
                  color={"#000000"}
                  fontSize={"28px"}
                  fontWeight={"650"}
                >
                  Phone Number
                </FormLabel>
                <Input
                  border={"1px solid black"}
                  borderRadius={"15px"}
                  _focus={{
                    border: "2px solid #003C3C",
                    boxShadow: "md",
                  }}
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                  <Text ml={"2%"} color="red.500">
                    {errors.phoneNumber}
                  </Text>
                )}
              </FormControl>
              <br />
              <Button
                w={"30%"}
                bg={"#003C3C"}
                color={"white"}
                borderRadius={"15px"}
                _hover={{
                  bg: "#007575",
                  boxShadow: "md",
                }}
                onClick={handleProfileSubmit}
              >
                Save
              </Button>
            </Box>
          ) : (
            ""
          )}

          {activeSection === "store" ? (
            <Box>
              {/* My Store form fields or content */}
              {/* Cover Image */}
              <Box w={"60%"} m={"left"} borderRadius={"10px"}>
                <Image w={"100%"} src="cover-image.png" alt="" />
              </Box>

              <Box
                w={{
                  base: "60%",
                  md: "65%",
                  lg: "60%",
                  xl: "40%",
                  "2xl": "47%",
                }}
                display={"flex"}
                alignItems={"center"}
                m={"left"}
              >
                {/* Icon of edit */}
                <Icon m={"auto"} boxSize={5} color={"#003C3C"} as={EditIcon} />
                <Text color={"#003C3C"} fontWeight={"450"} textAlign={"center"}>
                  Change Profile Picture
                </Text>
              </Box>
              <Box mt={"2%"} m={"left"}>
                <Text
                  ml={"3.5%"}
                  fontSize={"25px"}
                  color={"black"}
                  fontWeight={"800"}
                  textAlign={"left"}
                >
                  Link Social Media Account
                </Text>
              </Box>

              {/* main parent of  social media Box  */}
              <Box
                display={"grid"}
                justifyContent={"space-around"}
                alignItems={"center"}
                gap={"10px"}
              >
                {/* insta form */}
                <Box
                  w={"80%"}
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  gap={"2%"}
                  p={"5px"}
                  border={"1px solid grey"}
                  borderRadius={"12px"}
                >
                  <Icon as={FaInstagram} color={"pink"} boxSize={9} />
                  <Input
                    border={"1px solid grey"}
                    borderRadius={"15px"}
                    w={"50%"}
                    value={instaFollowers}
                    onChange={(e) => setInstaFollowers(e.target.value)}
                    type="text"
                    placeholder="Followers Count"
                  />
                  {storeErrors.instaFollowers && (
                    <Text color="red.500">{storeErrors.instaFollowers}</Text>
                  )}
                  <Input
                    border={"1px solid grey"}
                    borderRadius={"15px"}
                    w={"50%"}
                    type="text"
                    placeholder="Insta ID"
                    value={instaId}
                    onChange={(e) => setInstaId(e.target.value)}
                  />
                  {storeErrors.instaId && (
                    <Text color="red.500">{storeErrors.instaId}</Text>
                  )}
                </Box>
                {/* youtube */}
                <Box
                  w={"80%"}
                  display={"flex"}
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  gap={"2%"}
                  p={"5px"}
                  border={"1px solid grey"}
                  borderRadius={"12px"}
                >
                  <Icon as={FaYoutube} color={"red"} boxSize={9} />
                  <Input
                    border={"1px solid grey"}
                    borderRadius={"15px"}
                    w={"50%"}
                    type="text"
                    placeholder="Followers Count"
                    value={youtubeFollowers}
                    onChange={(e) => setYoutubeFollowers(e.target.value)}
                  />
                  {storeErrors.youtubeFollowers && (
                    <Text color="red.500">{storeErrors.youtubeFollowers}</Text>
                  )}
                  <Input
                    border={"1px solid grey"}
                    borderRadius={"15px"}
                    w={"50%"}
                    type="text"
                    placeholder="Insta ID"
                    value={youtubeId}
                    onChange={(e) => setYoutubeId(e.target.value)}
                  />
                  {storeErrors.youtubeId && (
                    <Text color="red.500">{storeErrors.youtubeId}</Text>
                  )}
                </Box>
              </Box>

              {/* claim your url  */}
              <Box mt={"2%"} m={"left"}>
                <Text
                  ml={"3.5%"}
                  fontSize={"25px"}
                  color={"black"}
                  fontWeight={"800"}
                  textAlign={"left"}
                >
                  Claim Your Store URL
                </Text>
              </Box>

              <Box w={"95%"} ml={"3%"}>
                <Input
                  border={"1px solid grey"}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Username for store"
                  _placeholder={{ color: "gray.500", fontSize: "15px" }}
                  size={"lg"}
                />
                {storeErrors.url && (
                  <Text color={"red.500"}>{storeErrors.url}</Text>
                )}
              </Box>

              {/* Select Genre */}
              <Box mt={"2%"} m={"left"}>
                <Text
                  ml={"3.5%"}
                  fontSize={"25px"}
                  color={"black"}
                  fontWeight={"800"}
                  textAlign={"left"}
                >
                  Select Genre
                </Text>
              </Box>

              <Box w={"95%"} ml={"3%"}>
                <Select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  icon={""}
                  border={"1px solid grey"}
                  placeholder="Choose genre"
                  size={"lg"}
                  maxH="200px" // Maximum height to trigger scrollbar if content exceeds
                  overflowY="auto" // Enable vertical scrollbar
                  sx={{
                    appearance: "none", // Remove default styling
                    background: "none", // Remove default background
                    border: "1px solid grey", // Custom border
                    paddingRight: "2.5rem", // Space for the arrow (if needed)
                    fontSize: "15px",
                    "&::-ms-expand": {
                      display: "none", // Hide default arrow in Internet Explorer and Edge
                    },
                  }}
                >
                  <option value="action">Travel</option>
                  <option value="comedy">Photographer</option>
                  <option value="drama">Influencers</option>
                  <option value="fantasy">Fintech</option>
                  <option value="horror">News</option>
                  <option value="romance">Education</option>
                  <option value="sci-fi">Podcast</option>
                  <option value="thriller">Automobile</option>
                  <option value="thriller">Tech and Gadgets</option>
                  <option value="thriller">Artist</option>
                  <option value="thriller">IG Coaches</option>
                  <option value="thriller">Tips & Tricks</option>
                  <option value="thriller">Fitness</option>
                  <option value="thriller">Lifestyle</option>
                  <option value="thriller">Food</option>
                  <option value="thriller">Vlogger</option>
                  <option value="thriller">Designer</option>
                  <option value="thriller">Cover Artist</option>
                  <option value="thriller">Rapper & Composers</option>
                </Select>
                {storeErrors.genre && (
                  <Text color={"red.500"}>{storeErrors.genre}</Text>
                )}
              </Box>

              {/* About ME */}
              <Box mt={"2%"} m={"left"}>
                <Text
                  ml={"3.5%"}
                  fontSize={"25px"}
                  color={"black"}
                  fontWeight={"800"}
                  textAlign={"left"}
                >
                  About Me
                </Text>
              </Box>
              <Box>
                <Box
                  w={"95%"}
                  ml={"3%"}
                  border="1px solid #CBD5E0"
                  borderRadius="md"
                  p={2}
                >
                  <ButtonGroup
                    variant="outline"
                    spacing={1}
                    mb={2}
                    flexWrap="wrap"
                    maxW="100%"
                    justifyContent="flex-start"
                  >
                    <Select
                      sx={{
                        option: {
                          maxHeight: "150px", // Set the max height of the dropdown
                          overflowY: "auto", // Enable vertical scrolling
                        },
                      }}
                      size="sm"
                      maxW="120px"
                      placeholder="Sans Serif"
                    >
                      <option value="">Sans Serif</option>
                      <option value="">Abeezee</option>
                      <option value="">Arial</option>
                      <option value="">Arvo</option>
                      <option value="">B612</option>
                      <option value="">Cardo</option>
                      <option value="">Cousine</option>
                      <option value="">Crimson</option>
                      <option value="">Droid Sans</option>
                      <option value="">Exo 2</option>
                      <option value="">Fira Sans</option>
                      <option value="">Karla</option>
                      <option value="">Lora</option>
                      <option value="">Lato</option>
                      <option value="">Mirza</option>
                      <option value="">Monspace</option>
                      <option value="">Muli</option>
                      <option value="">Nunito</option>
                      <option value="">Oswald</option>
                    </Select>
                    <IconButton
                      icon={<FaBold />}
                      aria-label="Bold"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaItalic />}
                      aria-label="Italic"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaUnderline />}
                      aria-label="Underline"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaStrikethrough />}
                      aria-label="Strikethrough"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaLink />}
                      aria-label="Insert Link"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaAlignLeft />}
                      aria-label="Align Left"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaAlignCenter />}
                      aria-label="Align Center"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaAlignRight />}
                      aria-label="Align Right"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaListUl />}
                      aria-label="Unordered List"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaListOl />}
                      aria-label="Ordered List"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaHeading />}
                      aria-label="Heading 1"
                      fontSize="12px"
                    />
                    <IconButton
                      icon={<FaHeading />}
                      aria-label="Heading 2"
                      fontSize="12px"
                    />
                  </ButtonGroup>
                  <Textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="Write something here..."
                    minH="150px"
                  />
                  {storeErrors.about && (
                    <Text color={"red.500"}>{storeErrors.about}</Text>
                  )}
                </Box>
              </Box>

              {/* Bank Details */}
              <Box mt={"2%"} m={"left"}>
                <Text
                  ml={"3.5%"}
                  fontSize={"25px"}
                  color={"black"}
                  fontWeight={"800"}
                  textAlign={"left"}
                >
                  Bank Details
                </Text>
              </Box>

              <Box
                border={"1px solid black"}
                w={"95%"}
                ml={"3%"}
                borderRadius={"10px"}
              >
                {/* Account Holer Name */}
                <Box mt={"2%"} m={"left"}>
                  <Text
                    ml={"3.5%"}
                    fontSize={"25px"}
                    color={"black"}
                    fontWeight={"800"}
                    textAlign={"left"}
                  >
                    Account Holder Name
                  </Text>
                </Box>
                <Box w={"95%"} ml={"3%"}>
                  <Input
                    type="text"
                    _placeholder={{ color: "gray.500", fontSize: "15px" }}
                    size={"lg"}
                    placeholder="Account Holder Name"
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                  />
                  {storeErrors.accountHolder && (
                    <Text color={"red.500"}>{storeErrors.accountHolder}</Text>
                  )}
                </Box>
                {/* Account Number */}
                <Box mt={"2%"} m={"left"}>
                  <Text
                    ml={"3.5%"}
                    fontSize={"25px"}
                    color={"black"}
                    fontWeight={"800"}
                    textAlign={"left"}
                  >
                    Account Number
                  </Text>
                </Box>
                <Box w={"95%"} ml={"3%"}>
                  <Input
                    type="number"
                    _placeholder={{ color: "gray.500", fontSize: "15px" }}
                    size={"lg"}
                    placeholder="Account Number"
                    value={acNumber}
                    onChange={(e) => setAcNumber(e.target.value)}
                  />
                  {storeErrors.acNumber && (
                    <Text color={"red.500"}>{storeErrors.acNumber}</Text>
                  )}
                </Box>

                {/* IFSC */}
                <Box mt={"2%"} m={"left"}>
                  <Text
                    ml={"3.5%"}
                    fontSize={"25px"}
                    color={"black"}
                    fontWeight={"800"}
                    textAlign={"left"}
                  >
                    IFSC Code
                  </Text>
                </Box>
                <Box w={"95%"} ml={"3%"}>
                  <Input
                    type="text"
                    _placeholder={{ color: "gray.500", fontSize: "15px" }}
                    size={"lg"}
                    placeholder="IFSC code"
                    value={ifsc}
                    onChange={(e) => setIfsc(e.target.value)}
                  />
                  {storeErrors.ifsc && (
                    <Text color={"red.500"}>{storeErrors.ifsc}</Text>
                  )}
                </Box>
                <br />
              </Box>

              {/* PAN CARD NUMBER */}
              <Box mt={"2%"} m={"left"}>
                <Text
                  ml={"3.5%"}
                  fontSize={"25px"}
                  color={"black"}
                  fontWeight={"800"}
                  textAlign={"left"}
                >
                  Add PAN Card Number
                </Text>
              </Box>
              <Box w={"95%"} ml={"3%"}>
                <Input
                  type="text"
                  _placeholder={{ color: "gray.500", fontSize: "15px" }}
                  size={"lg"}
                  placeholder="createnary/your_name"
                  value={panNum}
                  onChange={(e) => setPanNum(e.target.value)}
                />
                {storeErrors.panNum && (
                  <Text color={"red.500"}>{storeErrors.panNum}</Text>
                )}
              </Box>

              <Box
                w={"95%"}
                display={"flex"}
                justifyContent={"space-between"}
                mt={"2%"}
                m={"left"}
              >
                <Text
                  ml={"3.5%"}
                  fontSize={"25px"}
                  color={"black"}
                  fontWeight={"800"}
                  textAlign={"left"}
                >
                  GST Registered ?
                </Text>
                <Box mt="2%">
                  <Checkbox
                    isChecked={isGstVisible}
                    onChange={(e) => setIsGstVisible(e.target.checked)}
                  ></Checkbox>
                </Box>
              </Box>
              {/* GST input render conditionally */}
              {isGstVisible && (
                <Box w={"95%"} ml="3.5%" mt="2%">
                  <Input
                    placeholder="Enter GST Number"
                    border="1px solid grey"
                    _placeholder={{
                      fontSize: "15px",
                      color: "gray.500",
                    }}
                    size="lg"
                    value={gst}
                    onChange={(e) => setGst(e.target.value)}
                  />
                  {storeErrors.gst && (
                    <Text color={"red.500"}>{storeErrors.gst}</Text>
                  )}
                </Box>
              )}

              {/* button to save */}
              <br />
              <Box
                //    border={"1px solid black"}

                w={"30%"}
                ml={"10%"}
              >
                <Button
                  borderRadius={"10px"}
                  w={"100%"}
                  h={"50px"}
                  bg={"#003C3C"}
                  color={"#ffff"}
                  onClick={handleStoreSubmit}
                >
                  Save
                </Button>
              </Box>
            </Box>
          ) : (
            ""
          )}

          {/* Earning */}
          {activeSection === "earning" ? (
            <Box>
              <Image src="graph data.png" />
            </Box>
          ) : (
            ""
          )}
          {/* Address */}
          {activeSection === "address" ? <Box>Address</Box> : ""}
        </Box>
      </Box>
    </>
  );
}

export default Profile;
