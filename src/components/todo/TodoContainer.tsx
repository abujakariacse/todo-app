import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <Button className="bg-primary-gradient text-lg font-semibold">
          Add Todo
        </Button>
        <button>Filter</button>
      </div>
      <div className="w-full h-full bg-primary-gradient rounded-md  p-[5px]">
        {/*  <div className="bg-white p-3 text-center rounded-md">
          <p className="font-medium text-2xl">There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
