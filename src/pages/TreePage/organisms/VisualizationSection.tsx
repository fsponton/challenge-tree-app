import React from "react";
import { Paper } from "@mui/material";
import TypographyAtom from "../atoms/TypographyAtom";
import TreeVisualization from "../../../components/tree/TreeVisualization";
import { TreeNodeData } from "../../../components/tree/TreeNode";

interface VisualizationSectionProps {
    tree: TreeNodeData;
}

const VisualizationSection: React.FC<VisualizationSectionProps> = ({ tree }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <TypographyAtom variant="h5" text="Visualización del Árbol" />
            <TreeVisualization data={tree} />
        </Paper>
    );
};

export default VisualizationSection;