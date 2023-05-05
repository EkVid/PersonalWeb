import { motion } from "framer-motion";
import { Center, Text, Box, Button, Link } from "@chakra-ui/react";
import Changes from "./change";
import T from "./text";
import Introduction from "./introduction";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Spla = () => {
  return (
    <>
      <Center h="80vh">
        <Box
          textStyle="h1"
          textAlign={"center"}
          fontFamily={`'Raleway', sans-serif`}
        >
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <T />
            <Changes />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Introduction />
          </motion.div>
        </Box>
      </Center>

      <Center h="30vh">
        <Box
          textStyle={{ base: "txt", md: "h2" }}
          // textAlign={"center"}
          fontFamily={`'Raleway', sans-serif`}
          w={{ base: "100%", md: "70%" }}
        >
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Center>
              <Link href="/aboutme">
                <Text
                  fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                  spacing={3}
                  pt={5}
                  fontFamily={"serif"}
                >
                  Read the about me page here <ExternalLinkIcon />
                </Text>
              </Link>
            </Center>
          </motion.div>
        </Box>
      </Center>
    </>
  );
};

export default Spla;
