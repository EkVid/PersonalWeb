import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Stack,
  Link,
  Image,
  Button,
  Toast,
} from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPhone, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { Menu, MenuButton, Portal, MenuItem, MenuList } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import Toasts from "./toasts/toastd";
import Toastss from "./toasts/toastw";
import Toastsss from "./toasts/toastm";
import Toastssss from "./toasts/toastm2";
import Toasti from "./toasts/toasti";
import dynamic from "next/dynamic";

const Avatars = () => {
  return (
    <Stack direction={{ base: "column", lg: "row" }}>
      <Button variant="unstyled" size="sm" pr={{ lg: "150px" }}>
        {" "}
        <Menu>
          <MenuButton>
            {" "}
            <AiFillInstagram size={100} />
          </MenuButton>
          <Portal>
            <></>
            <MenuList>
              <MenuItem
                onClick={() => navigator.clipboard.writeText("austin_ed7")}
              >
                <Toasti />
              </MenuItem>
              <Alert>
                <AlertIcon />
                Click to save it!
              </Alert>
            </MenuList>
          </Portal>
        </Menu>
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>   
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Link
        href="https://www.linkedin.com/in/austin-yang-3544061ba/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="unstyled"
          size="sm"
          pr={{ lg: "150px" }}
          pt={{ lg: "0px" }}
        >
          {" "}
          <AiFillLinkedin size={100} />
        </Button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Button
        variant="unstyled"
        size="sm"
        pr={{ lg: "70px" }}
        pt={{ lg: "0px" }}
      >
        {" "}
        <Menu>
          <MenuButton>
            {" "}
            <AiFillPhone size={100} />
          </MenuButton>
          <Portal>
            <MenuList>
              <MenuItem
                onClick={() => navigator.clipboard.writeText("4164768350")}
              >
                <Toastss />
              </MenuItem>
              <Alert>
                <AlertIcon />
                Click to save it!
              </Alert>
            </MenuList>
          </Portal>
        </Menu>
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Button
        variant="unstyled"
        size="sm"
        pl={{ lg: "100px" }}
        pt={{ lg: "0px" }}
      >
        {" "}
        <Menu>
          <MenuButton>
            {" "}
            <Image
              boxSize="300px"
              src="/images/discord.png"
              alt="Discord Icon"
              width={100}
              height={100}
            />
          </MenuButton>
          <Portal>
            <MenuList>
              <MenuItem
                onClick={() => navigator.clipboard.writeText("Vivini#6145")}
              >
                <Toasts />
              </MenuItem>
              <Alert>
                <AlertIcon />
                Click to save it!
              </Alert>
            </MenuList>
          </Portal>
        </Menu>
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Button
        variant="unstyled"
        size="sm"
        pl={{ lg: "200px" }}
        pt={{ lg: "0px" }}
      >
        {" "}
        <Menu>
          <MenuButton>
            {" "}
            <AiFillMail size={100} />
          </MenuButton>
          <Portal>
            <MenuList>
              <MenuItem
                onClick={() =>
                  navigator.clipboard.writeText("au.yang@mail.utoronto.ca")
                }
              >
                <Toastsss />
              </MenuItem>
              <MenuItem
                onClick={() =>
                  navigator.clipboard.writeText("austinjas014@gmail.com")
                }
              >
                <Toastssss />
              </MenuItem>
              <Alert>
                <AlertIcon />
                Click to save it!
              </Alert>
            </MenuList>
          </Portal>
        </Menu>
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Stack>
  );
};

export default dynamic(() => Promise.resolve(Avatars), { ssr: false });
