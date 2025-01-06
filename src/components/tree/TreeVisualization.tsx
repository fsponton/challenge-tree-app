import React from 'react';
import Tree from 'react-d3-tree';
import { TreeNodeData } from './TreeNode';
import "./tree.styles.css"

interface TreeVisualizationProps {
    data: TreeNodeData;
}

export const getColorByLevel = (level: number) => {
    const colors = [
        '#4287f5', '#34c759', '#ff9500', '#af52de', '#ff3b30',
        '#f54291', '#52deaf', '#30d5ff', '#de8c52', '#c734c7',
        '#7b61ff', '#ff61a1', '#52de34', '#ffc700', '#f55b42',
        '#61d5de', '#7bd542', '#d5528c', '#de5242', '#8c34de',
        '#428bca', '#5bc0de', '#5cb85c', '#f0ad4e', '#d9534f',
        '#f5a623', '#50e3c2', '#4a90e2', '#9013fe', '#b8e986'
    ];
    return colors[level % colors.length];
};


const transformTreeForD3 = (node: TreeNodeData): any => {
    return {
        name: node.title,
        attributes: { ID: node.id, Level: node.level || 0 },
        children: node.children.map(transformTreeForD3),
    };
};

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ data }) => {
    const d3Data = transformTreeForD3(data);

    return (
        <div className="tree-visualization-container">
            <Tree
                data={d3Data}
                orientation="vertical"
                nodeSize={{ x: 200, y: 100 }}
                translate={{ x: 300, y: 250 }}
                renderCustomNodeElement={({ nodeDatum }) => (
                    <g>
                        <circle
                            r="30"
                            fill={getColorByLevel(nodeDatum.attributes?.Level as number || 0)}
                            strokeWidth="0"
                        />
                        <text
                            x="0"
                            y="5"
                            textAnchor="middle"
                            style={{ fontSize: '12px', fontWeight: '300', fill: '#fff' }}
                        >
                            {nodeDatum.attributes?.ID}
                        </text>
                        <text
                            x="40"
                            y="5"
                            style={{
                                fontSize: '20px',
                                fontWeight: 'normal',
                                fill: '#222',
                                textTransform: 'capitalize',
                            }}
                        >
                            {nodeDatum.name}
                        </text>
                    </g>
                )}
            />
        </div>
    );
};

export default TreeVisualization;


