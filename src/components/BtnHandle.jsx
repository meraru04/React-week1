function BtnHandle(todolists, setTodolists) {
  const delBtnHandler = (id) => {
    const deleteTodo = todolists.filter((item) => item.id !== id);
    setTodolists(deleteTodo);
  };

  const cancleHandler = (id) => {
    const cancleTodo = todolists.map((item) => {
      if (item.id === id) return { ...item, set: false };
      return item;
    });
    setTodolists(cancleTodo);
  };

  const completeHandler = (id) => {
    const completeTodo = todolists.map((item) => {
      if (item.id === id) return { ...item, set: true };
      return item;
    });
    setTodolists(completeTodo);
  };
  return { delBtnHandler, cancleHandler, completeHandler };
}

export default BtnHandle;
