const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "pink",
  "orange",
  "purple",
];
export const generateRandomColors = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
