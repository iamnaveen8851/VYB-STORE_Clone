import { Box, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

function Homepage() {
  const videoRef = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 850px)");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 2000); // 2000ms = 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);
  return (
    <>
      <Box>
        {/* <video ref={videoRef} muted loop>
          <source src="hero section web.mp4" type="video/mp4" />
        </video> */}
        {isMobile ? (
          <video ref={videoRef} muted loop width="100%">
            <source src="hero section mobile.mp4" type="video/mp4" />
          </video>
        ) : (
          <video ref={videoRef} muted loop width="100%">
            <source src="hero section web.mp4" type="video/mp4" />
          </video>
        )}
      </Box>
      <Box border={"1px solid black"} w={"80%"} m={"auto"}>
        
      </Box>
    </>
  );
}

export default Homepage;
