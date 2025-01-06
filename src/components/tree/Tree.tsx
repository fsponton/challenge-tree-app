import React from "react";
import TreeNode from "./TreeNode";
import { TreeNodeData } from "./TreeNode";
import { Typography, Box, Paper } from "@mui/material";
import "./tree.styles.css"

interface TreeProps {
    value: TreeNodeData;
    onChange: (newValue: TreeNodeData) => void;
    editable: boolean;
}

export const Tree: React.FC<TreeProps> = ({ value, onChange, editable }) => {

    const handleAddChild = (parentNode: TreeNodeData, newTitle: string) => {
        const nextId = findMaxId(value) + 1;
        const newChild: TreeNodeData = {
            id: nextId,
            title: newTitle,
            children: [],
            level: parentNode.level + 1,
        };
        parentNode.children.push(newChild);
        onChange({ ...value });
    };

    const handleRemoveNode = (_parentNode: TreeNodeData, nodeId: number) => {
        const removeNodeRecursively = (node: TreeNodeData, nodeId: number): TreeNodeData | null => {
            if (node.id === nodeId) {
                return null;
            }

            // recorrer en forma recursiva
            const updatedChildren = node.children
                .map((child) => removeNodeRecursively(child, nodeId))
                .filter((child): child is TreeNodeData => child !== null);

            return {
                ...node,
                children: updatedChildren, // actualizacion de hijos
            };
        };

        // actualizacion para el grafico del arbol
        const updatedTree = removeNodeRecursively(value, nodeId);
        if (updatedTree) {
            onChange({ ...updatedTree });
        }
    };

    const findMaxId = (node: TreeNodeData): number => {
        let maxId = node.id;
        node.children.forEach((child) => {
            maxId = Math.max(maxId, findMaxId(child));
        });
        return maxId;
    };

    const handleToggleCollapse = (nodeId: number) => {
        const toggleCollapseRecursively = (node: TreeNodeData): TreeNodeData => {
            if (node.id === nodeId) {
                return { ...node, collapsed: !node.collapsed };
            }

            return { ...node, children: node.children.map(toggleCollapseRecursively) };
        };

        onChange(toggleCollapseRecursively(value));
    };


    return (
        <Paper elevation={3} sx={{ padding: 2, marginY: 2 }}>
            <Typography variant="h5" gutterBottom>
                Árbol General
            </Typography>

            <Box component="ul" className="tree-container" sx={{ paddingLeft: 2, margin: 0 }}>
                <TreeNode
                    node={value}
                    editable={editable}
                    onAddChild={handleAddChild}
                    onRemoveNode={handleRemoveNode}
                    onToggleCollapse={handleToggleCollapse}
                />
            </Box>
        </Paper>
    );
};