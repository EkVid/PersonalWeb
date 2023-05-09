import React from "react";
import { anticipate, easeIn, easeInOut, motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  AttachmentIcon,
  ChatIcon,
  CheckCircleIcon,
  EditIcon,
  InfoIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import { AiFillHome, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";

const Bar_Work = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
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
              ></chakra.a>
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
                <Link href="/aboutme">
                  <Button variant="ghost" size="sm">
                    <InfoIcon marginRight={3} />
                    About Me
                  </Button>
                </Link>
                <Menu>
                  <Button
                    variant="ghost"
                    // colorScheme="brand"
                    leftIcon={<AttachmentIcon />}
                    size="sm"
                  >
                    <MenuButton> Resume </MenuButton>
                    <Portal>
                      <MenuList>
                        <Link href="/resumetech">
                          <MenuItem>Tech Related</MenuItem>
                        </Link>
                        <Link href="/resumesci">
                          <MenuItem>Science Related</MenuItem>
                        </Link>
                      </MenuList>
                    </Portal>
                  </Button>
                </Menu>
                <Link href="/experiences">
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<CheckCircleIcon />}
                    size="sm"
                  >
                    Experiences
                  </Button>
                </Link>
                <Link href="/publications">
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<EditIcon />}
                    size="sm"
                  >
                    Publications
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    w="full"
                    variant="ghost"
                    leftIcon={<ChatIcon />}
                    size="sm"
                  >
                    Contact
                  </Button>
                </Link>
                <Link href="/work">
                  <Button w="full" variant="ghost" size="sm">
                    Works
                  </Button>
                </Link>
                <Link
                  href="https://github.com/EkVid"
                  leftIcon={<CheckCircleIcon />}
                  size="sm"
                >
                  <Button variant="ghost" size="sm">
                    {" "}
                    <AiFillGithub size={25} />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/austin-yang-3544061ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm">
                    {" "}
                    <AiFillLinkedin size={25} />
                  </Button>
                </Link>
              </HStack>
              <Button onClick={toggleColorMode} variant={"ghost"}>
                {colorMode === "Light Mode" ? "Dark Mode" : "Mode"}
              </Button>

              <Link href="/contact">
                <Button w="full" variant="ghost">
                  Next Pg
                </Button>
              </Link>
            </HStack>
          </Flex>
        </motion.div>
      </chakra.header>
    </React.Fragment>
  );
};

export default dynamic(() => Promise.resolve(Bar_Work), { ssr: false });
