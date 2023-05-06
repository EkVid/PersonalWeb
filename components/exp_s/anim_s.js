import { motion } from "framer-motion";
import { Center, Text, Box, Button } from "@chakra-ui/react";
import Exp_S from "./text_s";

const Anim_S = () => {
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
            <Exp_S />
          </motion.div>
        </Box>
      </Center>
    </>
  );
};

export default Anim_S;
