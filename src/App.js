import React, {useState} from 'react';
import './App.css';
import List from './Components/List.js';
import listdata from './Components/listdata.json';

function App() {
  const [listData, setListData] = useState(listdata);
  const [inputVal, setInputVal] = useState('');
  const toggleItem = (id) => {
    const newData = listData.map( item => {
      if(item.id === id) {
        return {...item, isComplete: !item.isComplete}
      } else return {...item}
    });
    setListData(newData);
  };
  const updateDelete = () => {
    const newData = listData.filter( item => !item.isComplete);
    setListData(newData);
  }
  const handleInput = (e) =>{
    setInputVal(e.target.value);
  }
  const handleSubmit = () => {
    let newItem = {id: listData.length + 1, isComplete: false, content: inputVal};
    let data = [...listData, newItem];
    setListData(data);
    setInputVal('');
  }
  return (
    <div className="App">
      <div className='app-header'>To Do List!</div>
      <div className='add-item'>
        <input type='text' value={inputVal} onChange={handleInput}/>
        <button onClick={handleSubmit}>Add Item</button>
      </div>
      <List data={listData} toggle={toggleItem} filter={updateDelete}/>
    </div>
  );
}

export default App;
