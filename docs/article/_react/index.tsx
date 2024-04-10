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

  const loop = (arr: any[]) => {
    if (Array.isArray(arr)) {
      arr.forEach((item) => {
        if (item.children) {
          loop(item.children);
        } else {
          // xxx
        }
      });
    }
  };

  return null;
};

export default App;
