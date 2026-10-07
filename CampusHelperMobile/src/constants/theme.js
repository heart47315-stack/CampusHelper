import colors from "./colors";

const theme = {
  colors,

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },

  radius: {
    sm: 12,
    md: 16,
    lg: 22,
    xl: 28,
    pill: 999,
  },

  shadow: {
    card: {
      shadowColor: "#8B5CF6",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.10,
      shadowRadius: 15,
      elevation: 4,
    },
  },
};

export default theme;