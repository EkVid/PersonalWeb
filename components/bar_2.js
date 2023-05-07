import React from "react";
import { anticipate, easeIn, easeInOut, motion } from "framer-motion";
import dynamic from "next/dynamic";
import color_change from "./color_change";
import {
  AttachmentIcon,
  ChatIcon,
  CheckCircleIcon,
  EditIcon,
  InfoIcon,
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

const Navbar = () => {
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
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<AiFillHome />}
                  size="md"
                >
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
                  <Button variant="ghost" leftIcon={<InfoIcon />} size="md">
                    About Me
                  </Button>
                </Link>
                <Menu>
                  <Button
                    variant="ghost"
                    leftIcon={<AttachmentIcon />}
                    size="md"
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
                    variant="ghost"
                    leftIcon={<CheckCircleIcon />}
                    size="md"
                  >
                    Experiences
                  </Button>
                </Link>

                <Link href="/publications">
                  <Button variant="ghost" leftIcon={<EditIcon />} size="md">
                    Publications
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" leftIcon={<ChatIcon />} size="md">
                    Contact
                  </Button>
                </Link>
                <Link
                  href="https://github.com/EkVid"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <Button onClick={toggleColorMode} variant={"ghost"} size="md">
                  {colorMode === "Light Mode" ? "Dark Mode" : "Change Mode"}
                </Button>
              </HStack>
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

                  <Link href="/aboutme">
                    <Button variant="ghost" leftIcon={<InfoIcon />} size="sm">
                      About Me
                    </Button>
                  </Link>
                  <Link href="/exp_S">
                    <Button
                      variant="ghost"
                      leftIcon={<CheckCircleIcon />}
                      size="sm"
                    >
                      Experiences
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

                  <Link href="/publications">
                    <Button variant="ghost" size="sm">
                      Publications
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="ghost" leftIcon={<ChatIcon />} size="sm">
                      Contact
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/EkVid"
                    target="_blank"
                    rel="noopener noreferrer"
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

                  <Button onClick={toggleColorMode} variant={"ghost"}>
                    {colorMode === "Light Mode" ? "Dark Mode" : "Change Mode"}
                  </Button>
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
