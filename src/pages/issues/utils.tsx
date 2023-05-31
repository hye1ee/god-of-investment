export const scoreColor = (score: string): string => {
  let color = "";
  if (score == "호재") color = "green";
  else if ((score = "중립")) color = "yellow";
  else if ((score = "악재")) color = "red";
  return color;
};
