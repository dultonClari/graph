import React from 'react';
import Graph from "react-graph-vis";

function RelationMapping({
  className,
}) {
    const graph = {
        nodes: [
          { id: 1, label: "ANDY", color: "#e09c41" },
          { id: 2, label: "SANJAY", color: "#e09c41" },
          { id: 3, label: "SENTA", color: "#e09c41" },
          { id: 4, label: "MUKESH", color: "#e09c41" },
          { id: 5, label: "VAIBHAV", color: "#e09c41" },
          { id: 6, label: "PHALGUN", color: "#e09c41" },
          { id: 7, label: "AJITH", color: "#e09c41" },
          { id: 8, label: "JACOB", color: "#e09c41" },
          { id: 9, label: "WILL", color: "#e09c41" },
          { id: 10, label: "CLARI", color: "#e09c41" },

        ],
        edges: [
            { from: 1, to: 10 }, 
            { from: 2, to: 1 }, 
            { from: 3, to: 2 },
            { from: 4, to: 2 }, 
            { from: 5, to: 2 },
            { from: 6, to: 2 },
            { from: 7, to: 2 },
            { from: 8, to: 2 },
            { from: 9, to: 1 },
        ]
      };
      
      const options = {
        layout: {
          hierarchical: false
        },
        edges: {
          color: "#000000"
        }
      };
      
      const events = {
        select: function(event) {
          var { nodes, edges } = event;
          console.log(nodes);
          console.log(edges);
        }
      };
      
  return (
    <div>
        <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />
    </div>
  );
}

export default RelationMapping;