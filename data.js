const getData = () => ([
  {
    id: 1,
    name: "Jane Doe",
    age: 23,
    hobby: 'cooking',
  },
  {
    id: 2,
    name: "John Doe",
    age: 23,
    hobby: 'sleeping',
  },
  {
    id: 3,
    name: "Sam",
    age: 24,
    hobby: 'eating',
  },
  {
    id: 4,
    name: "Smith",
    age: 24,
    hobby: 'cooking',
  },
  {
    id: 5,
    name: "Lisa",
    age: 22,
    hobby: 'cooking',
  },
])

const getDataWithFriends = () => {
  const res = getData();
  for(let cur of res) {
    cur.friends = res.filter(item => {
      return item.hobby === cur.hobby && item.id !== cur.id;
    });
  }
  return res;
}
export default getDataWithFriends();