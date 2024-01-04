import React from "react";
import { DTask } from "@/data/dnd";
import { Draggable } from "@hello-pangea/dnd";

type DndTaskProps = {
  task: DTask;
  index: number;
};
const DndTask = ({ task, index }: DndTaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot, rubic) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="shadow-md rounded-md bg-white py-2 px-4 cursor-pointer select-none"
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default DndTask;
