import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __gettodo, __deletTodo } from "../../modules/todoSlice";
import Box from "./Box";

const Form = () => {
  const dispatch = useDispatch();
  const { todo, isLoading, error } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(__gettodo());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div>이전으로 </div>
      {todo.map((todos) => (
        <Box key={todos.id} todos={todos}></Box>
      ))}
    </div>
  );
};

export default Form;
