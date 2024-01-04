import { DColumn, DTask } from "@/data/dnd";
import DndTask from "@/components/dnd/dnd-task";
import { Droppable } from "@hello-pangea/dnd";

type DndColumnProps = {
  column: DColumn;
  tasks: DTask[];
};

const DndColumn = ({ column, tasks }: DndColumnProps) => {
  return (
    <div className="w-[300px] border border-slate-200 p-6 rounded shadow-md">
      <h3 className="pb-4 font-medium text-lg">{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4"
          >
            {tasks.map((task, idx) => (
              <DndTask key={task.id} task={task} index={idx} />
            ))}
            {/* drag 하는 중에 자리 유지 */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DndColumn;
