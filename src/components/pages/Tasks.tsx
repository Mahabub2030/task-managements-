import { selectFilter, selectTasks } from "@/features/tasks/taskSlice"
import { useAppSelector } from "@/hooks/hooks"


export default function Tasks() {

  const tasks = useAppSelector(selectTasks)
  const filter = useAppSelector(selectFilter)
  console.log(tasks,filter)



  return (
    <div>
      <h1 className="text-xl">Task welcom to the pages</h1>
    </div>
  )
}
