import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const wordList = [
  "Biochemist in training",
  "Full Stack Developer",
  "Casual Runner",
  "Polyglot",
  "Book Enthusiast",
];
const durationOfWord = 3;
const effectTime = 1;
const initDelay = 0.8;
const deltaMilliseconds = 50;
const Splash = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = () => {
      setIndex((prevIndex) => {
        return (prevIndex + 1) % wordList.length;
      });
    };

    // if we dont delay definition of setinterval, word change might
    // happen before animation
    setTimeout(() => {
      setInterval(timer, durationOfWord * 1000);
    }, initDelay * 1000 + deltaMilliseconds);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <motion.div
      // key={index}
      // animate={'show'}
      // initial='hide'
      key="changing-text"
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      transition={{
        duration: effectTime,
        repeatDelay: durationOfWord - effectTime,
        repeat: Infinity,
        delay: initDelay,
      }}
    >
      <Text p={5}>{wordList[index]}</Text>
    </motion.div>
  );
};
export default dynamic(() => Promise.resolve(Splash), { ssr: false });
