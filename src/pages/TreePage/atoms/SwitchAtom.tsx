import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

interface SwitchAtomProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
}

const SwitchAtom: React.FC<SwitchAtomProps> = ({ checked, onChange, label }) => {
    return (
        <FormControlLabel
            control={<Switch checked={checked} onChange={(e) => onChange(e.target.checked)} color="primary" />}
            label={label}
        />
    );
};

export default SwitchAtom;