"use client";

import initialData from "@/data/dnd";
import { useState } from "react";

const UIPage = () => {
  const [data, setData] = useState(initialData);

  return (
    <div>
      {data.columnOrder.map((colId) => {
        const col = data.columns[colId];
        const tasks = col.taskIds.map((taskId) => data.tasks[taskId]);

        return col.title;
      })}
    </div>
  );
};

export default UIPage;
