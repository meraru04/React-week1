export const Todolist = ({
  title,
  delBtnHandler,
  type,
  btnToggle,
  typeTodo,
}) => {
  return (
    <div className="todo_list_container">
      <h2 className="todoTitle">{title}</h2>
      <div className="todo_wrap">
        {typeTodo.map((item) => (
          <div className={'todolist'} key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.context}</p>
            <div className="todoBtn-group">
              <button
                className="todoBtn Del"
                onClick={() => delBtnHandler(item.id)}
              >
                삭제하기
              </button>
              <button className="todoBtn" onClick={() => btnToggle(item.id)}>
                {type ? "취소" : "완료"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
