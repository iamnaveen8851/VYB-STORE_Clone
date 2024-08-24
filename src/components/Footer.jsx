import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Box
        w={{
          base: "90%",
          xl: "55%",
        }}
        m={"auto"}
        display={"grid"}
        gridTemplateColumns={"repeat(1,1fr)"}
        justifyContent={"space-around"}
        gap={"2%"}

        //  border={"1px solid black"}
      >
        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        How does the VYB Store work?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  VYB Store is an influencer marketplace. You can monetize your
                  travel itinerary, merchandise, digital content, and fashion
                  brand. And much more yet to come.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        How do I get started with the VYB Store?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  {/* <br /> */}
                  Getting started with VYB Store is super easy! Simply sign up
                  for an account, create your store, and start sharing your
                  store link in your Instagram bio with the audience.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        What does “Zero Cost” mean?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  {/* <br /> */}
                  Zero cost means vybing with us is completely free. You don’t
                  have to pay a single rupee to build your store and monetize
                  your audience.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        How do I track my earnings on VYB Store?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  We provide you with detailed analytics to track your earnings
                  and performance. You can see how many purchases your links
                  have generated, as well as your total earnings.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        What kind of products can I sell on VYB Store?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  You can sell a variety of products on VYB Store, including
                  physical merchandise, digital downloads, and even services
                  like travel itineraries and plenty more.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        How do I withdraw my earnings?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  We offer various payout options, including bank transfers. In
                  the earning section under your profile click the withdraw
                  button to withdraw your earnings. Withdrawal will be available
                  every 14 days.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        How can I get support if I have any questions or issues?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  If you have any questions or issues, you can reach out to VYB
                  Store's customer support team via email at
                  support@vybstore.com. We're here to help you succeed!
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        Do I need technical skills to use the platform?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  No, not at all! Our platform is designed with
                  user-friendliness in mind. You can easily navigate and set up
                  your store without any technical expertise. It's as simple as
                  a few clicks to get started!
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text
                        fontWeight={"550"}
                        color={"#234E52"}
                        overflow={"hidden"}
                        whiteSpace="normal"
                        
                      >
                        We didn't find any account with those login credentials?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  You did google Sign in for the first time, so now "Reset
                  Password" on login page. You will receive magic link on the
                  email. Use that link to change your password. Happy Vybing!
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem
            borderRadius="15px" // Set border radius for the item
            overflow="hidden" // Ensure the border radius is applied properly
            mb={2} // Add margin between items if needed
            bg="#E5F0F1"
            p={"3px"}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <Text fontWeight={"550"} color={"#234E52"}>
                        This email is already in use?
                      </Text>
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="14px" border={"2px solid black"} />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel
                  pb={4}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  color={"#234E52"}
                >
                  <hr
                    style={{
                      border: "1px solid black",
                      width: "100%",
                      // margin: "auto",
                      marginBottom: "1%",
                    }}
                  />
                  You did email login first time. So, you probably need to
                  connect Google. You can do email login and go to profile
                  section and press "Connect Google". Next time you should be
                  able to do Google login seamlessly. in case you've forgotten
                  the password, press "Reset Password"
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

export default Footer;
