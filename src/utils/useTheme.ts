export const useTheme = (value: boolean) => {
  switch (value) {
    case true:
      return "black";
    case false:
      return "#fff";
    default:
      return "#fff";
  }
};
