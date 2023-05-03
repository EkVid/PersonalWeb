import { motion } from "framer-motion";
import { Center, Text, Box, Button } from "@chakra-ui/react";
import Titles from "./text";

const Sp = () => {
  return (
    <>
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
          <Titles />
        </motion.div>
      </Box>
    </>
  );
};

export default Sp;
