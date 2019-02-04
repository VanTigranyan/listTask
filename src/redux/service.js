/*
 * Mocking data for listContainer
 * */
let list = [
  {
    listId: "2dd4",
    name: "List 2",
    isActive: false
  },
  {
    listId: "2dew4",
    name: "List 3",
    isActive: true
  },
  {
    listId: "2sdsd4",
    name: "List 4",
    isActive: false
  },
  {
    listId: "asas24",
    name: "List 5",
    isActive: true
  },
  {
    listId: "swwd32fd",
    name: "List 6",
    isActive: true
  },
  {
    listId: "dwd334",
    name: "List 7",
    isActive: false
  }
];
/*
 *   Fake asynchronous function for getting list
 * */
export const getLists = () => {
  const res = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(list);
    }, 1000);
  });
  return res;
};

/*
 *   Fake function for changing status of a listContainer
 * */
export const changeStatus = (index, isActive) => {

  const res = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Successfully changed'), 1000);
  });

  return res;
};

/*
 *   Fake function that simulate the deleting of an item!
 * */
export const deleteItem = index => {
  //TODO: here must be a logic with deleting item on the server!

  //We simulate that server responded with ok
  const res = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Item Deleted"), 1000);
  });

  return res;
};


/*
*   Fake function to simulate name updating!
* */
export const updateName = (index, name) => {

  const res = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Successfully updated!'), 1000);
  });

  return res;
};


/*
*   Fake function to simulate new Item Creating!
* */
export const createItem = name => {
  //Making fake random id
  const rand = Math.floor(Math.random() * 2000);
  const id = name.split('').reverse().join("") + rand;
  const item = {
    id: id,
    name: name,
    isActive: true
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(item), 1000);
  });
};

export default {
  getLists,
  changeStatus,
  deleteItem,
  updateName,
  createItem,
};
