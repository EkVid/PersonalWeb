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
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { Menu, MenuButton, Portal, MenuItem, MenuList } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import Toasts from "./toasts/toastd";
import Toastss from "./toasts/toastw";
import Toastsss from "./toasts/toastm";
import Toastssss from "./toasts/toastm2";
import Toasti from "./toasts/toasti";

const Avatars = () => {
  return (
<Stack direction="row">
      <Button variant="unstyled" size="sm" pr={150}>
        {" "}
        <Link href="https://instagram.com/austin_ed7?igshid=YmMyMTA2M2Y=">
          <Menu>
            <MenuButton>
              {" "}
              <AiFillInstagram size={100} />
          </Menu>
        </Link>
      </Button>

      <Button variant="unstyled" size="sm" pr={150}>
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
      <Button variant="unstyled" size="sm" pl={150}>
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
      <Button variant="unstyled" size="sm" pl={200}>
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
    </Stack>
  );
};

export default Avatars;
