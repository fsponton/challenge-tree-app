import React, { useState } from "react";
import { IconButton, TextField, Button, Box, Typography } from "@mui/material";
import { Add, Delete, ExpandLess, ExpandMore, Check, Close } from "@mui/icons-material";
import { useNotification } from "../../contexts/NotificactionContext";
import "./tree.styles.css";
import { getColorByLevel } from "./TreeVisualization";


export interface TreeNodeData {
    id: number;
    title: string;
    children: TreeNodeData[];
    level: number;
    collapsed?: boolean;
}


interface TreeNodeProps {
    node: TreeNodeData;
    editable: boolean;
    onAddChild: (parentNode: TreeNodeData, newTitle: string) => void;
    onRemoveNode: (parentNode: TreeNodeData, nodeId: number) => void;
    onToggleCollapse: (nodeId: number) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, editable, onAddChild, onRemoveNode, onToggleCollapse }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const { showNotification } = useNotification();

    const handleAdd = () => {
        if (newTitle.trim() === "") return;
        onAddChild(node, newTitle);
        showNotification(`Se agregó hijo con title: ${newTitle} al nodo ID: ${node.id}`, "success");
        setNewTitle("");
        setIsAdding(false);
    };

    const handleRemove = () => {
        onRemoveNode(node, node.id);
        showNotification(`Se eliminó nodo con ID: ${node.id}`, "success");
    };

    return (
        <Box component="li" sx={{ margin: "0.5rem 0", listStyle: "none", padding: 0 }}>
            <Box
                className="node-content"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginBottom: isAdding ? "0.5rem" : 0,
                }}
            >
                <Box className="icon-wrapper" sx={{ display: "flex", justifyContent: "center", width: "24px" }}>
                    {node.children.length > 0 ? (
                        <IconButton size="small" onClick={() => onToggleCollapse(node.id)}>
                            {node.collapsed ? <ExpandMore /> : <ExpandLess />}
                        </IconButton>
                    ) : (
                        <Typography component="span" sx={{ fontSize: "1rem", color: "#aaa" }}>
                            -
                        </Typography>
                    )}
                </Box>


                <Typography
                    className="node-title"
                    variant="body1"
                    sx={{ fontWeight: "normal", marginRight: 1 }}
                >
                    {node.title}
                </Typography>

                <Typography
                    className="node-level"
                    variant="body2"
                    sx={{
                        color: getColorByLevel(node.level),
                        fontSize: "0.85rem",
                        background: "#222"
                    }}
                >
                    (nodo ID: {node.id}, Nivel {node.level})
                </Typography>


                {editable && (
                    <>
                        <IconButton size="small" onClick={() => setIsAdding(!isAdding)} color="primary">
                            <Add />
                        </IconButton>
                        {node.level > 0 && (
                            <IconButton size="small" onClick={handleRemove} color="error">
                                <Delete />
                            </IconButton>
                        )}
                    </>
                )}
            </Box>

            {isAdding && (
                <Box sx={{ marginLeft: 3 }}>
                    <TextField
                        size="small"
                        label="Nuevo hijo"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        variant="outlined"
                    />
                    <Button
                        onClick={handleAdd}
                        variant="contained"
                        color="success"
                        startIcon={<Check />}
                        sx={{ marginLeft: "0.5rem" }}
                    >
                        Aceptar
                    </Button>
                    <Button
                        onClick={() => setIsAdding(false)}
                        variant="outlined"
                        color="error"
                        startIcon={<Close />}
                        sx={{ marginLeft: "0.5rem" }}
                    >
                        Cancelar
                    </Button>
                </Box>
            )}

            {!node.collapsed && node.children.length > 0 && (
                <Box component="ul" sx={{ paddingLeft: 2, margin: 0 }}>
                    {node.children.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            editable={editable}
                            onAddChild={onAddChild}
                            onRemoveNode={onRemoveNode}
                            onToggleCollapse={onToggleCollapse}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default TreeNode;