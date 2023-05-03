import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import Color_change from "./color_change";
import { chakra } from "@chakra-ui/react";
import {
  AttachmentIcon,
  CopyIcon,
  ChatIcon,
  CheckCircleIcon,
  EditIcon,
  InfoIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Box,
  IconButton,
  VStack,
  CloseButton,
  Button,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillBell,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillCameraVideoFill, BsPlus } from "react-icons/bs";
import { VisuallyHidden } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem, Portal } from "@chakra-ui/react";

const Bar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
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
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Link href="/">
                  <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                    HomePage
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
                  <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                    Experiences
                  </Button>
                </Link>
                <Link href="/publications">
                  <Button
                    w="full"
                    variant="ghost"
                    //colorScheme="brand"
                    leftIcon={<AttachmentIcon />}
                  >
                    Publications
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    w="full"
                    variant="ghost"
                    //colorScheme="brand"
                    leftIcon={<AttachmentIcon />}
                  >
                    Contact
                  </Button>
                </Link>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
              <Avatar size="sm" name="Austin" src="/images/profile.jpg" />
            </chakra.a>

            <HStack
              spacing={5}
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Link href="/">
                <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                  HomePage
                </Button>
              </Link>

              <Link href="/aboutme">
                <Button variant="ghost" leftIcon={<InfoIcon />} size="sm">
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
                  variant="ghost"
                  leftIcon={<CheckCircleIcon />}
                  size="sm"
                >
                  Experiences
                </Button>
              </Link>

              <Link href="/publications">
                <Button variant="ghost" leftIcon={<EditIcon />} size="sm">
                  Publications
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="ghost" leftIcon={<ChatIcon />} size="sm">
                  Contact
                </Button>
              </Link>

              <Link href="https://github.com">
                <Button variant="ghost" size="sm">
                  {" "}
                  <AiFillGithub size={25} />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/feed/">
                <Button variant="ghost" size="sm">
                  {" "}
                  <AiFillLinkedin size={25} />
                </Button>
              </Link>
            </HStack>
          </HStack>
          <HStack
            spacing={300}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              rounded="sm"
              _hover={{
                color: "gray.800",
                _dark: {
                  color: "gray.600",
                },
              }}
            >
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>
          </HStack>
          <Color_change />
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default Bar;
