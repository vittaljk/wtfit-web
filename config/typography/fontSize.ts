const letterSpacing = require("./letterSpacing");

const fontVariants = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

module.exports = {
  h0: [
    "54px",
    {
      lineHeight: "64px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h1: [
    "48px",
    {
      lineHeight: "56px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h2: [
    "61px",
    {
      lineHeight: "96px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h3: [
    "49px",
    {
      lineHeight: "72px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h4: [
    "39px",
    {
      lineHeight: "56px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h5: [
    "31px",
    {
      lineHeight: "40px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h6: [
    "31px",
    {
      lineHeight: "48px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h7: [
    "25px",
    {
      lineHeight: "40px",
      fontWeight: fontVariants.medium,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h8: [
    "20px",
    {
      lineHeight: "32px",
      fontWeight: fontVariants.medium,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h9: [
    "16px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.normal,
    },
  ],
  h10: [
    "13px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.normal,
    },
  ],
  body1: [
    "16px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
  body2: [
    "16px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.medium,
      letterSpacing: letterSpacing.normal,
    },
  ],
  body3: [
    "14px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
  caption: [
    "13px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
  micro: [
    "11px",
    {
      lineHeight: "16px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.wide,
    },
  ],
  buttonSmall: [
    "11px",
    {
      lineHeight: "16px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.medium,
    },
  ],
  buttonMedium: [
    "13px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.medium,
    },
  ],
  buttonLarge: [
    "16px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.semiBold,
      letterSpacing: letterSpacing.medium,
    },
  ],
  title: [
    "44px",
    {
      lineHeight: "56px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
  titleMedium: [
    "34px",
    {
      lineHeight: "40px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
  titleSmall: [
    "28px",
    {
      lineHeight: "40px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
  p: [
    "16px",
    {
      lineHeight: "24px",
      fontWeight: fontVariants.regular,
      letterSpacing: letterSpacing.normal,
    },
  ],
};
