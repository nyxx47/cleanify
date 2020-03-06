import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import {
  borderRadius,
  buttonStyle,
  space,
  fontSize,
  variant
} from "styled-system";

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes"
});

const Button = styled("button")(
  {
    appearance: "button",
    border: 0,
    outline: 0
  },
  borderRadius,
  buttonStyle,
  buttonSize,
  space,
  fontSize
);

Button.defaultProps = {
  variant: "primary",
  size: "medium"
};

const baseTheme = {
  space: [0, 2, 4, 8, 16, 32],
  fontSizes: [14, 16, 18, 24, 32],
  colors: {
    blue: "#078dee",
    grey: "#c5d3ee",
    danger: "#ac1d39"
  },
  radius: [0, 2, 4, 8, 10, 20,30,40,50]
};




const theme = {
  ...baseTheme,
  buttons: {
    primary: {
      color: "white",
      backgroundColor: baseTheme.colors.blue
    },
    secondary: {
      color: "white",
      backgroundColor: baseTheme.colors.grey
    },
    danger: {
      color: "white",
      backgroundColor: baseTheme.colors.danger
    }
  },
  buttonSizes: {
    medium: {
      fontSize: baseTheme.fontSizes[2],
      padding: `8px 16px`,
      borderRadius: baseTheme.radius[2]
    },
    large: {
      fontSize: baseTheme.fontSizes[2],
      padding: `12px 24px`,
      borderRadius: baseTheme.radius[2]
    }
  }
};

export default function Buttons({ text, background, size }) {
  return (
    <ThemeProvider theme={theme}>
      <Button size={size} variant={background}>{text}</Button>
    </ThemeProvider>
  )
}