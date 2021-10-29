import colors from "./colors";

export const generateRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
