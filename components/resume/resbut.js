import { Button, ButtonGroup, Center, Link, Text } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const Resumebutton = () => {
  return (
    <Center pt={5}>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Link href="/images/t_resume.jpg" download="Resume">
          <Button width={200} height={50}>
            Download as jpg
            <Text ml={1}>
              {" "}
              <DownloadIcon />
            </Text>
          </Button>
        </Link>
      </ButtonGroup>
    </Center>
  );
};

export default Resumebutton;
