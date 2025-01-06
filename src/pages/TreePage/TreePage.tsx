import React, { useState, useEffect } from "react";
import TreeTemplate from "./template/TreeTemplate";
import { TreeNodeData } from "../../components/tree/TreeNode";
import { storageService } from "../../services/storageService";


export const TreePage: React.FC = () => {
    const defaultTree: TreeNodeData = { id: 0, title: "Nodo principal", children: [], level: 0 };

    const [tree, setTree] = useState<TreeNodeData>(() => storageService.getTree() || defaultTree);
    const [editable, setEditable] = useState(false);

    useEffect(() => {
        storageService.saveTree(tree);
    }, [tree]);

    const resetTree = () => {
        storageService.saveTree(defaultTree);
        setTree(defaultTree);
    };

    return (
        <TreeTemplate
            tree={tree}
            onTreeChange={setTree}
            editable={editable}
            onToggleEditable={setEditable}
            onReset={resetTree}
        />
    );
};