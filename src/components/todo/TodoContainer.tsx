import { useAppSelector } from "@/redux/hook";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <TodoModal />
        <TodoFilter />
      </div>
      <div className="w-full h-full bg-primary-gradient rounded-md  p-[5px]">
        {todos.length < 1 ? (
          <div className="bg-white flex justify-center items-center p-5">
            <p className="font-medium text-2xl py-3">
              There is no task pending
            </p>
          </div>
        ) : (
          <div className="bg-white p-5 w-full h-full rounded space-y-3">
            {todos?.map((todo, index) => (
              <TodoCard key={index} {...todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
