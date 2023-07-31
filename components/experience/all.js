import ProjectPreview from ".//expcomp";
import ProjectPreview2 from ".//exp2";
import ProjectPreview3 from ".//exp3";
import ProjectPreview4 from ".//exp4";
import ProjectPreview5 from "./exp_mall";
import { Center, Text, Divider, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const All = () => {
  return (
    <>
      <Center h="310vh">
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
            <ProjectPreview />
            <ProjectPreview4 />
            <ProjectPreview2 />
            <ProjectPreview3 />
            <ProjectPreview5 />
          </motion.div>
        </Box>
      </Center>
    </>
  );
};

export default dynamic(() => Promise.resolve(All), { ssr: false });
