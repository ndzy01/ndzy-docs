const App = () => {
  const arr = Array(100).fill(100);

  for (const item of arr) {
    console.log(item);
  }

  const obj = { a: 1, b: 2 };

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const ele = obj[key];

      console.log(ele);
    }
  }

  Object.keys(obj).map((item) => console.log(item));

  return null;
};

export default App;
