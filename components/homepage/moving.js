import { motion } from "framer-motion";
import { Center, Box } from "@chakra-ui/react";
import Changes from "./change";
import T from "./text";
import Introduction from "./introduction";
import dynamic from "next/dynamic";

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
          ></motion.div>
        </Box>
      </Center>
    </>
  );
};

export default dynamic(() => Promise.resolve(Spla), { ssr: false });
