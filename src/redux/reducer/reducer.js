const states = {
  tasks: [],
  filter: [
   
  ],
};

const reducer = (state = states, action) => {
  //   const id = action.id;
  const desc = action.data;
  const idd = action.val;
  const done = action.payload;

  switch (action.type) {
    case "addtask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            description: desc,
            isDone: "false",
        
          },
        ],
      };

    case "changedone":
      const elementsIndex=state.tasks.findIndex(element=>element.id===idd);
      const newArray = [...state.tasks];
      newArray[elementsIndex].isDone = "true";
      return {
        ...state,
        tasks:newArray
   
         };
    case "filtertasks":
      return {
        ...state,
        filter: state.tasks.filter((element) => element.isDone === done),
      };

    default:
      return state;
  }
};
export default reducer;
