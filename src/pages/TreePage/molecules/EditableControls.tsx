import React from "react";
import { Box } from "@mui/material";
import SwitchAtom from "../atoms/SwitchAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import TypographyAtom from "../atoms/TypographyAtom";

interface EditableControlsProps {
    editable: boolean;
    onToggleEditable: (checked: boolean) => void;
    onReset: () => void;
}

const EditableControls: React.FC<EditableControlsProps> = ({ editable, onToggleEditable, onReset }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "start", marginBottom: "1rem" }}>
            <TypographyAtom variant="h4" text="Árbol Interactivo" />
            <br />
            <Box sx={{ display: "flex", gap: 2 }}>
                <SwitchAtom
                    checked={editable}
                    onChange={onToggleEditable}
                    label={editable ? "Modo Editable" : "Modo Vista"}
                />
                {editable && <ButtonAtom text="Reiniciar Árbol" onClick={onReset} color="secondary" />}
            </Box>
        </Box>
    );
};

export default EditableControls;