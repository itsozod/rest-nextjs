export const useTheme = (value: boolean) => {
  switch (value) {
    case true:
      return "hsl(207, 26%, 17%)";
    case false:
      return "hsl(0, 0%, 98%)";
    default:
      return "hsl(0, 0%, 98%)";
  }
};
