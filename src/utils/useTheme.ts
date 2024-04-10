export const useTheme = (color: string) => {
  switch (color) {
    case "dark":
      return "black";
    case "light":
      return "#fff";
    default:
      return "#fff";
  }
};
