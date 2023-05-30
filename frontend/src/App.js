import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  
  useEffect(() => {
    axios.get('/api').then((res) => {
      setPeople(res.data);
    });
  }, []);

  return (
    people && people.map((p, key) => (
       <p key={key}>{p.id} {p.name} {p.age}</p>
    ))
  );
}

export default App;
