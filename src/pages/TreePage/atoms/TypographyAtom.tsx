import React from "react";
import { Typography } from "@mui/material";

interface TypographyAtomProps {
  variant: "h4" | "h5" | "body1";
  text: string;
  align?: "left" | "center" | "right";
  gutterBottom?: boolean;
}

const TypographyAtom: React.FC<TypographyAtomProps> = ({ variant, text, align, gutterBottom }) => {
  return <Typography variant={variant} align={align} gutterBottom={gutterBottom}>{text}</Typography>;
};

export default TypographyAtom;