import { selectTasks } from "@/features/tasks/taskSlice";
import { useAppSelector } from "@/hooks/hooks";
import TaskCard from "../modules/Task/TaskCard";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  // const filter = useAppSelector(selectFilter)
  console.log(tasks);
  // console.log(filter)

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <h1 className="text-xl">Task welcom to the pages</h1>

      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task= {task} />
        ))}
      </div>
    </div>
  );
}
