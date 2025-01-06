import React from "react";
import { Button } from "@mui/material";

interface ButtonAtomProps {
    text: string;
    onClick: () => void;
    variant?: "contained" | "outlined";
    color?: "primary" | "secondary" | "error";
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({ text, onClick, variant = "contained", color = "primary" }) => {
    return <Button variant={variant} color={color} onClick={onClick}>{text}</Button>;
};

export default ButtonAtom;