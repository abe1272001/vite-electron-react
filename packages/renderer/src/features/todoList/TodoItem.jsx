
function TodoItem({ todo }) {
  const { text } = todo;
  // remove funtion
  // const removeDelete = () => {

  // }
  return (
    <div>
      {text}
      <button>
        remove
      </button>
    </div>
  );
}

export default TodoItem;
