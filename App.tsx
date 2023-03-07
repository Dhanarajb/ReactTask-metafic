import React, { useEffect, useState } from 'react';
import './style.css';
const USERS_API = 'https://63a5d671f8f3f6d4ab011f37.mockapi.io/api/v1/users';

interface UserProps {
  name: string;
  avatar: string;
  id: string;
}

const App = () => {
  const [list, setList] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(USERS_API);
      const json = await response.json();
      console.log(json);
      setList(json);
    }
    fetchData();
  }, []);

  // Raj kar --> jaR rak
  // Raj kar --> rak jaR

  // AB CD --> BA DC

  /*
  //  split('').reverse().join('')


  */

  const ReverseTheName = (name: string, index: number) => {
    const revName = name
      .split(' ')
      .map((word) => word.split('').reverse().join(''))
      .join(' ');

    const copyList = [...list];
    copyList[index].name = revName;
    setList(copyList);
  };

  return (
    <div className="App">
      {list.map((item, ind) => {
        return (
          <div
            onClick={() => ReverseTheName(item.name, ind)}
            key={item.id}
            className="card"
          >
            <h3>{item.name}</h3>
            <img src={item.avatar} alt="avatar" />
          </div>
        );
      })}
    </div>
  );
};
export default App;
