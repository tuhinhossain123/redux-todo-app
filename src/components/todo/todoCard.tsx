const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-4">
      <input type="checkbox" name="" id="" />
      <p className="font-medium">Todo Title</p>
      <p className="font-medium">Time</p>
      <p className="font-medium">Description</p>
      <div className="space-x-6">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
