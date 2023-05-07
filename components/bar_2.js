import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import color_change from "./color_change";
import {
  AttachmentIcon,
  ChatIcon,
  CheckCircleIcon,
  EditIcon,
  InfoIcon,
} from "@chakra-ui/icons";
import { AiFillHome } from "react-icons/ai";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  CloseButton,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { IconButton } from "@chakra-ui/button";
import { MoonIcon, SunIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import Color_change from "./color_change";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      {/* <Box {...props}> */}
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={3}
        shadow="md"
      >
        <motion.div
          className="title"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0, type: "spring", stiffness: 70 }}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Home Page"
                display="flex"
                alignItems="center"
              >
                <VisuallyHidden>Angus</VisuallyHidden>
              </chakra.a>
               <Link href="/">
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  HomePage
                </Button>
              </Link>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{ base: "none", md: "inline-flex" }}
              >
                <Link href="/experiences">
                  <Button variant="ghost">Experiences</Button>
                </Link>
                <Link href="/experiences">
                  <Button variant="ghost">About Me</Button>
                </Link>
                <Link href="/resume">
                  <Button variant="ghost">
                    {/* <Button colorScheme="teal" size="sm"> */}
                    Resume
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="ghost">Projects</Button>
                </Link>
                <Link href="/posts">
                  <Button variant="ghost">Publications</Button>
                </Link>
                <Link href="/experiences">
                  <Button variant="ghost">Contact</Button>
                </Link>
              </HStack>
              <Color_change />
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue("gray.800", "inherit")}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Link href="/experiences">
                    <Button variant="ghost">Experiences</Button>
                  </Link>
                  <Link href="/projects">
                    <Button variant="ghost">Projects</Button>
                  </Link>
                  <Link href="/posts">
                    <Button variant="ghost">Posts</Button>
                  </Link>
                  <Link href="/resume">
                    <Button variant="ghost">
                      {/* <Button colorScheme="teal" size="sm"> */}
                      Resume
                    </Button>
                  </Link>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </motion.div>
      </chakra.header>
      {/* </Box> */}
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
