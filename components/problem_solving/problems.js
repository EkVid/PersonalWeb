import { Center, Text, Divider, Link, Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

const Problem_Sols = () => {
  return (
    <div>
      <Center>
        <Text
          fontSize={{ base: "30px", md: "40px", lg: "40px" }}
          spacing={3}
          pt={50}
          fontWeight={"bold"}
          fontFamily={"serif"}
        >
          Maths Putnam Problems
        </Text>
      </Center>

      <Center>
        <Text
          fontSize={{ base: "20px", md: "25px", lg: "30px" }}
          spacing={3}
          pt={50}
          //   pl={15}
          fontWeight={"bold"}
          fontFamily={"serif"}
        >
          {" "}
          Some interesting problems during the weekly problem solving meetings:{" "}
        </Text>
      </Center>
      <br></br>
      <br></br>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={3}
            pt={10}
            fontFamily={"serif"}
          >
            {" "}
            <Latex>
              1. Consider the function f from N to N such that: $f(1) = 1$,
              $f(2n) = f(n)$, $f(2n+1) = f(2n)+1$.
            </Latex>
          </Text>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={3}
            pt={10}
            fontFamily={"serif"}
            fontStyle={"italic"}
          >
            {" "}
            <Latex>
              Give an algorithm for computing this function. (At most 1 sentence
              long)
            </Latex>
          </Text>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={3}
            pt={10}
            fontFamily={"serif"}
            fontStyle={"italic"}
          >
            {" "}
            Retrieved from Zeitz 2.2.11
          </Text>
        </Box>
      </Center>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={3}
            pt={10}
            paddingLeft={{ base: 0, md: 10, lg: 40 }}
            paddingRight={{ base: 0, md: 10, lg: 40 }}
            fontFamily={"serif"}
          >
            {" "}
            <Latex>
              2. Show that for any $ a, b $ belongs to $Z$ with $b =/= 0$. There
              are $q, r$ belongs to $Z$ with $|r|$ smaller than $b$ such that: $
              a = bq + r$
            </Latex>
          </Text>
        </Box>
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={0}
            pt={10}
            paddingLeft={{ base: 0, md: 10, lg: 40 }}
            paddingRight={{ base: 0, md: 10, lg: 40 }}
            fontFamily={"serif"}
          >
            {" "}
            3. A regular icosahedron is a convex polyhedron having 12 vertices
            and 20 faces; the faces are cogruent equilateral triangles. On each
            face of a regular icosahedron is written a nonnegative integer such
            that the sum of all 20 integers is 39.
          </Text>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={0}
            pt={10}
            paddingLeft={{ base: 0, md: 10, lg: 40 }}
            paddingRight={{ base: 0, md: 10, lg: 40 }}
            fontFamily={"serif"}
            fontStyle={"italic"}
          >
            {" "}
            Show that there are two faces that share a vertex and have the same
            integer written on them.
          </Text>
        </Box>
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={0}
            pt={10}
            paddingLeft={{ base: 0, md: 10, lg: 40 }}
            paddingRight={{ base: 0, md: 10, lg: 40 }}
            fontFamily={"serif"}
          >
            4. Suppose that each of 20 students has made a choice of anywhere
            from 0 to 6 courses from a total of 6 courses offered.
          </Text>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={0}
            pt={10}
            paddingLeft={{ base: 0, md: 10, lg: 40 }}
            paddingRight={{ base: 0, md: 10, lg: 40 }}
            fontFamily={"serif"}
            fontStyle={"italic"}
          >
            Prove or disprove: there are 5 students and 2 courses such that all
            5 have chosen both courses or all 5 have chosen neither course.
          </Text>
        </Box>
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Center>
        <Box>
          <Text
            fontSize={{ base: "17px", md: "20px", lg: "23px" }}
            spacing={0}
            pt={10}
            paddingLeft={{ base: 0, md: 10, lg: 40 }}
            paddingRight={{ base: 0, md: 10, lg: 40 }}
            fontFamily={"serif"}
          >
            5. Prove that from ten distinct two digit numbers, one can always
            choose two disjoint nonempty subsets, so that their elements have
            the same sum.
          </Text>
        </Box>
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Problem_Sols), { ssr: false });
