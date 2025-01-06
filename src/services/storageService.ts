const STORAGE_KEY = "treeData";
// La keey del storage deberia estar en un .env, para que sea mas facil de ejecutar la app lo comento. Pero es algo que deberia estar aparte 'siempre'.

import { TreeNodeData } from "../components/tree/TreeNode";


export const storageService = {
    getTree: (): TreeNodeData | null => {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            console.log("Leyendo de localStorage:", data);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error("Error al leer de localStorage:", e);
            return null;
        }
    },

    saveTree: (tree: TreeNodeData) => {
        console.log("Guardando en localStorage:", tree);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tree));
        } catch (e) {
            console.error("Error al guardar en localStorage:", e);
        }
    },
};