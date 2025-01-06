import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainPage.styles.css";

export const MainPage: React.FC = () => {
    const navigate = useNavigate();

    const handleEnterTree = () => {
        navigate("/treePage");
    };

    return (
        <div className="main-page">
            <h1 className="main-title">🌳 Bienvenido a la App de Árboles Interactivos 🌳</h1>
            <p className="main-description">
                Explora la forma más visual e intuitiva de gestionar estructuras jerárquicas. Esta aplicación está diseñada para
                ayudarte a crear, editar y visualizar árboles dinámicos de forma sencilla y eficiente.
            </p>
            <ul className="features-list">
                <li>🌟 <strong>Agregar nodos:</strong> Amplía tu árbol añadiendo hijos a cualquier nodo.</li>
                <li>🗑️ <strong>Eliminar nodos:</strong> Borra nodos junto con sus descendientes.</li>
                <li>🔽 <strong>Expandir/Colapsar:</strong> Facilita la navegación mostrando u ocultando hijos.</li>
                <li>🔄 <strong>Reinicio del árbol:</strong> Restablece la estructura a su estado inicial.</li>
                <li>🎨 <strong>Colores por nivel:</strong> Identifica niveles con colores únicos.</li>
                <li>✅ <strong>Modo editable:</strong> Activa o desactiva la edición según tus necesidades.</li>
                <li>📣 <strong>Notificaciones:</strong> Recibe mensajes en tiempo real de tus acciones.</li>
            </ul>
            <button className="enter-tree-button" onClick={handleEnterTree}>
                🚀 Comienza Ahora
            </button>
            <div className="instructions">
                <h2 className="instructions-title">📚 Instrucciones de Uso</h2>
                <div className="instruction-step">
                    <span className="step-number">1️⃣</span>
                    <p className="step-text">
                        <strong>Modo Editable:</strong> Activa el interruptor "Modo Editable" en la parte superior izquierda. Haz clic en "+" para agregar nodos o en el ícono 🗑️ para eliminar nodos.
                    </p>
                </div>
                <div className="instruction-step">
                    <span className="step-number">2️⃣</span>
                    <p className="step-text">
                        <strong>Expandir y Colapsar:</strong> Haz clic en "▾" para colapsar o "▸" para expandir nodos con hijos.
                    </p>
                </div>
                <div className="instruction-step">
                    <span className="step-number">3️⃣</span>
                    <p className="step-text">
                        <strong>Reinicio del Árbol:</strong> Haz clic en el botón "Reiniciar Árbol" para restaurar la estructura inicial.
                    </p>
                </div>
                <div className="instruction-step">
                    <span className="step-number">4️⃣</span>
                    <p className="step-text">
                        <strong>Visualización Gráfica:</strong> Observa el árbol en la parte inferior, con nodos codificados por colores según su nivel.
                    </p>
                </div>
                <div className="instruction-step">
                    <span className="step-number">5️⃣</span>
                    <p className="step-text">
                        <strong>Notificaciones:</strong> Recibe mensajes en tiempo real por cada acción realizada (agregar, eliminar, etc.).
                    </p>
                </div>
            </div>
        </div>
    );
};