import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import shirt1 from '../images/clothes/shirt1.png';
import shirt2 from '../images/clothes/shirt2.png';
import coat1 from '../images/clothes/coat1.png';
import pants2 from '../images/clothes/pants2.png';
import coat2 from '../images/Denim.jpeg';
import "./CreateGrid.css";
import {Button} from "react-bootstrap";

const IMAGES = {
    image1: shirt1,
    image2: shirt2,
    image3: coat1,
    image4: pants2,
    image5: coat2
  };

const options = [
    { id: 'img1', content: IMAGES.image1 },
    { id: 'img2', content: IMAGES.image2 },
    { id: 'img3', content: IMAGES.image3 },
    { id: 'img4', content: IMAGES.image4 },
    { id: 'img5', content: IMAGES.image5 }
];

const columnsFromBackend = 
    {
        "Wardrobe-Clothes": {
            name: "Wardrobe Clothes",
            items: options
        },
        "Outfit-Assembler": {
            name: "Outfit",
            items:[]
        }
    }
;

function OutfitBuiler() {
    const [columns, setColumns] = useState(columnsFromBackend);

    const handleSubmit = () => {
      alert("Outfit Submitted!");
    };

    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;
      
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = columns[source.droppableId];
          const destColumn = columns[destination.droppableId];
          const sourceItems = [...sourceColumn.items];
          const destItems = [...destColumn.items];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems
            }
          });
        } else {
          const column = columns[source.droppableId];
          const copiedItems = [...column.items];
          const [removed] = copiedItems.splice(source.index, 1);
          copiedItems.splice(destination.index, 0, removed);
          setColumns({
            ...columns,
            [source.droppableId]: {
              ...column,
              items: copiedItems
            }
          });
        }
      };

    return (
        <div className="builder" style={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], _index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                  key={columnId}
                >
                  <div className="heading">
                  <h2>{column.name}</h2>
                  </div>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 250,
                              minHeight: 500
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "lightgrey"
                                            : "white",
                                          color: "white",
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                          <div className="bld-wrap"> 
                                          <img src={item.content} alt="article"/>
                                          </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
          <Button className="createbutton" variant='dark' href='/create' onClick={handleSubmit}>Create</Button>
        </div>
      );
}

export default OutfitBuiler;