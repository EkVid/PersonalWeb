import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import Problem_Sols from "./problems";
import dynamic from "next/dynamic";

const Effect = () => {
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
          <Problem_Sols />
        </motion.div>
      </Box>
    </>
  );
};

export default dynamic(() => Promise.resolve(Effect), { ssr: false });
