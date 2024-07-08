import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["bob", "Sarika", "dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
    console.log(name);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  const handleClick1 = () => {
    console.log(count);
  };
  return (
    <main>
      Hello {name}!<button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick1}>Click Me</button>
    </main>
  );
};

export default Content;
