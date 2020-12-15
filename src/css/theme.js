export default {
  space: [0, 2, 6, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Cabin, sans-serif",
    heading: "Cabin, sans-serif",
  },
  fontSizes: [16, 40, 18, 25],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    primary: "#37bc96",
    secondary: "#F9F1D7",
    light: "#FFFFFF",
    dark: "#3F100B",
    text: "#774644",
    gray: "#eeeeee",
    primaryhover: "#c14108",
  },
  breakpoints: [576, 768, 992, 1200],
  mq() {
    return this.breakpoints.map(bp => `@media (max-width: ${bp}px)`)
  },
  phone: "561-333-4500",
}
