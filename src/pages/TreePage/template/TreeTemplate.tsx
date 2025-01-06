import React from "react";
import { Box, Divider } from "@mui/material";
import EditableControls from "../molecules/EditableControls";
import TreeSection from "../organisms/TreeSection";
import VisualizationSection from "../organisms/VisualizationSection";
import { TreeNodeData } from "../../../components/tree/TreeNode";

interface TreeTemplateProps {
    tree: TreeNodeData;
    onTreeChange: (tree: TreeNodeData) => void;
    editable: boolean;
    onToggleEditable: (checked: boolean) => void;
    onReset: () => void;
}

const TreeTemplate: React.FC<TreeTemplateProps> = ({ tree, onTreeChange, editable, onToggleEditable, onReset }) => {
    return (
        <Box sx={{ padding: 4 }}>
            <EditableControls editable={editable} onToggleEditable={onToggleEditable} onReset={onReset} />
            <TreeSection tree={tree} onChange={onTreeChange} editable={editable} />
            <Divider sx={{ marginY: 3 }} />
            <VisualizationSection tree={tree} />
        </Box>
    );
};

export default TreeTemplate;