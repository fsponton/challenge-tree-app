# Tree App 🌳

Tree App es una aplicación interactiva para gestionar árboles jerárquicos, permitiendo agregar, eliminar, visualizar y personalizar nodos en un entorno dinámico y visual.

---

## 🚀 Características

- **Modo Editable:** Agrega y elimina nodos en tiempo real.
- **Visualización Dinámica:** Visualiza el árbol en un gráfico interactivo.
- **Colores por Nivel:** Los nodos están codificados con colores según su nivel jerárquico.
- **Restablecimiento del Árbol:** Reinicia la estructura del árbol a su estado inicial con un solo clic.
- **Notificaciones:** Recibe mensajes en tiempo real sobre las acciones realizadas.

---

## 📋 Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada).
- [npm](https://www.npmjs.com/), que viene incluido con Node.js.

---

## 🛠️ Instalación y Ejecución

Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tree-app.git
   cd tree-app
2. **Instalar dependencias**:
   ```bash
    npm install 

3. **Iniciar Aplicación**
    ```bash
    npm run dev

## Estructura del proyecto


tree-app/
├── src/
│   ├── components/
│   │   └── tree/                 # Componentes específicos del árbol (Tree, TreeNode, TreeVisualization).
│   │       ├── Tree.tsx
│   │       ├── TreeNode.tsx
│   │       ├── TreeVisualization.tsx
│   │       └── tree.styles.css   # Estilos para los componentes del árbol.
│   ├── contexts/
│   │   └── NotificationContext.tsx # Contexto para notificaciones.
│   ├── pages/
│   │   ├── TreePage/
│   │   │   ├── atoms/            # Componentes básicos reutilizables (ButtonAtom, SwitchAtom, TypographyAtom).
│   │   │   │   ├── ButtonAtom.tsx
│   │   │   │   ├── SwitchAtom.tsx
│   │   │   │   └── TypographyAtom.tsx
│   │   │   ├── molecules/        # Componentes más complejos (EditableControls, etc.).
│   │   │   │   └── EditableControls.tsx
│   │   │   ├── organisms/        # Componentes estructurales principales (TreeSection, VisualizationSection).
│   │   │   │   ├── TreeSection.tsx
│   │   │   │   └── VisualizationSection.tsx
│   │   │   ├── template/         # Página principal de árbol.
│   │   │   │   ├── TreePage.tsx
│   │   │   │   ├── mainPage.styles.css
│   │   │   │   └── MainPage.tsx
│   ├── services/
│   │   └── storageService.ts     # Servicio de almacenamiento local.
│   ├── App.tsx                   # Componente principal de la aplicación.
│   ├── main.tsx                  # Punto de entrada principal.
│   └── index.css                 # Estilos globales.
├── public/                       # Archivos públicos (imágenes, íconos, etc.).
├── tsconfig.app.json             # Configuración TypeScript para la app.
├── tsconfig.node.json            # Configuración TypeScript para Node.js.
├── vite.config.ts                # Configuración de Vite.
├── package.json                  # Configuración del proyecto y dependencias.
├── package-lock.json             # Información de las dependencias instaladas.
├── README.md                     # Documentación del proyecto.
└── .gitignore                    # Archivos ignorados por Git.