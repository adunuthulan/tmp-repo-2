import bikeImage from "./imgs/bike.jpg";
import sleepyImage from "./imgs/sleepy.jpeg";
import chadsImage from "./imgs/chads.jpg";
import catImage from "./imgs/cat.jpeg";
import wellImage from "./imgs/well.jpg";
import rosesImage from "./imgs/roses.jpg";
import computerImage from "./imgs/computer.jpg";
import weddingImage from "./imgs/wedding.jpg";
import pushupsVideo from "./imgs/pushups.mp4";
import dogImage from "./imgs/dog.jpg";
import iceImage from "./imgs/ice.jpg";
import stairsImage from "./imgs/stairs.jpg";

// convert the list above to a map where the key is the name and the value is the text
export const fathersDayResponses = {
  bike: {
    text: "Here is a father after a long bike ride to San Francisco on June 20th, 2021",
    image: bikeImage,
  },
  sleepy: {
    text: "Here is a sleepy father on his birthday after a long day of partying on August 5th, 2019",
    image: sleepyImage,
  },
  chads: {
    text: "Here are some chads as requested at a wedding on November 1st, 2023",
    image: chadsImage,
  },
  cat: {
    text: "Here is a father petting a cat in Athens, Greece on February 19th, 2019",
    image: catImage,
  },
  well: {
    text: "Here are two fathers extracting water from a well like they did in their childhoods,  June 28th, 2015",
    image: wellImage,
  },
  roses: {
    text: "Here is a father and a mother smiling happily in an arch of roses in Victoria, Canada on July 20th, 2022",
    image: rosesImage,
  },
  computer: {
    text: "Here is a son who will eventually be a father working on a computer a long time ago",
    image: computerImage,
  },
  wedding: {
    text: "Here is a man and woman who will eventually be parents getting married (I think) probably on May 26th",
    image: weddingImage,
  },
  pushups: {
    text: "Here is a father doing pushups as punishment for not following the rules of the game on July 3rd, 2023",
    video: pushupsVideo,
  },
  dog: {
    text: "Here is a father and mother standing in their new house with a very cute looking dog on September 15th, 2023",
    image: dogImage,
  },
  ice: {
    text: "Here is a father looking very upset at the large amount of ice in his drink at this expensive restaurant in San Francisco on May 26th, 2024",
    image: iceImage,
  },
  stairs: {
    text: "Here is a father sitting on the stairs of his friend's daughter's nicely furnished apartment in San Francisco on December 16th, 2023",
    image: stairsImage,
  },
};

export const getRandomResponse = () => {
  const keys = Object.keys(fathersDayResponses);
  return keys[Math.floor(Math.random() * keys.length)];
};

export const getFathersDayResponse = (text) => {
  const lowerCaseText = text.toLowerCase();

  if (lowerCaseText.includes("father")) {
    return {
      text: "Happy Father's Day!",
    };
  }

  for (const [key, value] of Object.entries(fathersDayResponses)) {
    if (lowerCaseText.includes(key)) {
      const response = { ...value };
      response.name = key;
      return response;
    }
  }

  return null;
};
