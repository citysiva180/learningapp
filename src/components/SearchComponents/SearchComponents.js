import React, { useState, useEffect } from "react";
import { useCombobox } from "downshift";
import { InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
function SearchComponents() {
  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  //So many nested elements there...
  //useCombobox ==> onInputValueChange ==> setInputItems (custom) ==> users.filter(item =>  item.name.toLowerCase().startsWith(inputValue.toLowerCase())

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        users.filter(
          (item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase()) //This is where the magic happens
        )
      );
    },
  });

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>React Search Component</h1>
      <br></br>
      <br></br>
      <h2>Current User: {singleUser}</h2>
      <br></br>
      <br></br>
      <div {...getComboboxProps()}>
        <FormControl
          {...getInputProps()}
          placeholder="search"
          enterButton="search"
          size="large"
        />
      </div>
      <br></br>
      <br></br>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleUser(item.name)}
            >
              <li
                style={
                  highlightedIndex === index ? { background: "papayawhip" } : {}
                }
              >
                <h4>{item.name}</h4>
              </li>
            </span>
          ))}
      </ul>
    </div>
  );
}

export default SearchComponents;
