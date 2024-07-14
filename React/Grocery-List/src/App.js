import Footer from "./Footer";
import Content from "./Content";
import Header from "./Header";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const setAndSaveItem = (newItems) => {
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
    setItems(newItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setAndSaveItem(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setAndSaveItem(listItems);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) => {
          return item.item.toLowerCase().includes(search.toLowerCase());
        })}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
