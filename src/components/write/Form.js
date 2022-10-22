import { useRef } from "react";
import { useDispatch } from "react-redux";
import { __gettodo, __postTodo } from "../../modules/todoSlice";

const Form = () => {
  const titleRef = useRef();
  const contentRef = useRef();

  const dispatch = useDispatch();

  return (
    <div>
      <p>제목</p>
      <input ref={titleRef} />
      <p>내용</p>
      <input ref={contentRef} />
      <br />
      <button
        onClick={() => {
          const postData = {
            title: titleRef.current.value,
            content: contentRef.current.value,
          };
          console.log(postData);
          dispatch(__postTodo(postData));
          titleRef.current.value = "";
          contentRef.current.value = "";
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default Form;
