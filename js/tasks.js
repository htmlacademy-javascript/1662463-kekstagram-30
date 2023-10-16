/*const users = [
  {
    id: 1,
    name: 'Aurora',
    isActive: true,
    age: 8
  },
  {
    id: 2,
    name: 'Nessie',
    isActive: false,
    age: 23
  },
  {
    id: 3,
    name: 'Fabbi',
    isActive: true,
    age: 20
  }
];

function getUsers(arr) {
  const names = [];
  for (let i = 0; i < arr.length; i++) {
    names.push(arr[i].name);
  }
  return names;
}

const getUsersByForEach = (arr) => {
  const names = [];
  arr.forEach((item) => {
    names.push(item.name);
  });
  return names;
};

const getUsersByMap = (arr) => arr.map((user) => user.name);

const getActiveUsers = (arr) => {
  const activeUsers = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].isActive) {
      activeUsers.push(arr[i].name);
    }
  }
  return activeUsers;
};

const getActiveUsersByFilter = (arr) => arr.filter((item) => item.isActive).map((element) => element.name);

const sortByAge = (arr) => arr.sort((a, b) => b.age - a.age).map((item) => item.name);

const isNameExist = (arr, name) => arr.some((user) => user.name === name);

console.log(isNameExist(users, 'Fabbi') ? 'There is a user with such a name' : 'No user with such a name');


//10.10.23 рисуем

const renderRectangle = (rows, cells) => {
  let rectangle = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cells; j++) {
      rectangle = rectangle + "*";
    }
    rectangle = rectangle + "\n";
  }
  return rectangle;
};

const renderEmptyRectangle = (rows, cells) => {
  let rectangle = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cells; j++) {
      rectangle += i > 0 && i < rows - 1 && j > 0 && j < cells - 1 ? " " : "*";
    }
    rectangle = rectangle + "\n";
  }
  return rectangle;
};

console.log(renderEmptyRectangle(5, 10));
*/
