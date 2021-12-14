
export const addTask = (description) => {
  return {
    type: "addtask",
    data: description,
   
  };
};
export const changedone = (id) => {
  return {
    type: "changedone",
    val:id
  };
};
export const filterTasks = (isDone) => {
  return {
    type: "filtertasks",
    payload: isDone,
  };
};