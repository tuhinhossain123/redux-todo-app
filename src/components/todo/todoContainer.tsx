import TodoCard from "./todoCard";
const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl p-8 space-y-3">
        <div className="bg-white p-5 rounded-lg flex justify-center items-center">
          <p className="text-xl font-semibold">There is no task pending</p>
        </div>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
      </div>
    </div>
  );
};

export default TodoContainer;
