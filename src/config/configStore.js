import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todoSlice";
// 리듀서의 name으로 해라잉
/**
 * 모듈(Slice)이 여러개인 경우
 * 추가할때마다 reducer 안에 각 모듈의 slice.reducer를 추가해줘야 합니다.
 *
 * 아래 예시는 하나의 프로젝트 안에서 counter 기능과 todos 기능이 모두 있고,
 * 이것을 각각 모듈로 구현한 다음에 아래 코드로 2개의 모듈을 스토어에 연결해준 것 입니다.
 */
const store = configureStore({
  // configStore라는 메소드 하나로 모듈을 합치는 것과 스토어를 생성하는 것을 한번에 하고 있다.
  reducer: { todo },
  //리듀서 name으로 해라잉
});

export default store;
