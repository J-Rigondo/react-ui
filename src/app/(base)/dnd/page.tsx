"use client";

import initialData from "@/data/dnd";
import { useState } from "react";
import DndColumn from "@/components/dnd/dnd-column";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
const DNDPage = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result: DropResult) => {};

  return (
    <div className="p-24">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((colId) => {
          const col = data.columns[colId];
          const tasks = col.taskIds.map((taskId) => data.tasks[taskId]);

          return <DndColumn key={col.id} column={col} tasks={tasks} />;
        })}
      </DragDropContext>
    </div>
  );
};

export default DNDPage;
