import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { __deletTodo, __patchTodo } from "../../modules/todoSlice";

const Box = ({ todos }) => {
  const [edit, isEdit] = useState(false);
  const dispatch = useDispatch();
  // const titleRef = useRef();
  // const contentRef = useRef();
  const [title, setTitle] = useState(todos.title);
  const [content, setContent] = useState(todos.content);

  return (
    <div>
      {edit ? (
        <div key={todos.id}>
          <div>{todos.id}</div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={todos.title}
          />
          <input
            onChange={(e) => setContent(e.target.value)}
            defaultValue={todos.content}
          />
        </div>
      ) : (
        <div key={todos.id}>
          <div>{todos.id}</div>
          <p>{todos.title}</p>
          <p> {todos.content}</p>
        </div>
      )}
      <button
        onClick={() => {
          if (!edit) {
            //만약 true라면 isEdit을 true로 바꾸고
            isEdit(!edit); //false라면 patchtodo에다가 map으로 돌린 todos들이랑 title, content 수정한거를 가져와서 dispatch에 보내주고 다시 false로 바꾼다.
          } else {
            dispatch(
              __patchTodo({
                ...todos,
                title: title,
                content: content,
              })
            );
            isEdit(!edit);
          }
        }}
      >
        {!edit ? "수정하기" : "저장하기"}
      </button>
      <button onClick={() => dispatch(__deletTodo(todos.id))}>삭제하기</button>
    </div>
  );
};
export default Box;
