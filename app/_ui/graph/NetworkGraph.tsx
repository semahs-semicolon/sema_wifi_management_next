"use client"
import { useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from '@react-sigma/core'
import "@react-sigma/core/lib/react-sigma.min.css";
import { AddApClientNode } from '@/app/_utils/graph/AddApClientNode'
const sigmaStyle = { height: "400px", width: "100vw", backgroundColor: "#f0f0f0"};

export const LoadGraph = () => {
    const loadGraph = useLoadGraph();
    useEffect(() => {
        const graph = new Graph();
        graph.addNode("root", { x: 0, y: 0, size: 20, label: "Root Router 2F(10.244.104.56)", color: "#FA4F40" });
        AddApClientNode(graph, "root").then(() => {
            loadGraph(graph);
        })
    }, [loadGraph]);
    return null;
};

// Component that display the graph
export const DisplayGraph = () => {
    return (
        <SigmaContainer style={sigmaStyle} settings={{renderEdgeLabels: true}}>
            <LoadGraph />
        </SigmaContainer>
    );
};
