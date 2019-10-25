import React,{useState, useEffect} from 'react';
import api from '../../services/api';

export default function Home() {
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadName() {
      const response = await api.get();
      const { data } = response;

      setName(data);
    }

    loadName();
  }, []);

  return (
    <h1>Home</h1>
  );
}
