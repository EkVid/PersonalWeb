import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, title, framework }) => (
  <Box w="100%" textAlign="center">
    <Text
      fontFamily={"serif"}
      fontSize={{ base: "15px", md: "15px", lg: "15px" }}
    >
      {framework}
    </Text>
    <br></br>
    <Text
      fontFamily={"serif"}
      fontWeight={"bold"}
      fontSize={{ base: "18px", md: "20px", lg: "25px" }}
    >
      {title}
    </Text>

    <Text
      fontFamily={"serif"}
      fontSize={{ base: "15px", md: "18px", lg: "20px" }}
    >
      {children}
    </Text>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
