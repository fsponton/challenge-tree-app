import React from "react";
import { Paper } from "@mui/material";
import TypographyAtom from "../atoms/TypographyAtom";
import { Tree } from "../../../components/tree/Tree";
import { TreeNodeData } from "../../../components/tree/TreeNode";

interface TreeSectionProps {
    tree: TreeNodeData;
    onChange: (tree: TreeNodeData) => void;
    editable: boolean;
}

const TreeSection: React.FC<TreeSectionProps> = ({ tree, onChange, editable }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
            <TypographyAtom variant="h5" text="Estructura del Árbol" />
            <Tree value={tree} onChange={onChange} editable={editable} />
        </Paper>
    );
};

export default TreeSection;