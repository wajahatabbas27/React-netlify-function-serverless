import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`/.netlify/functions/hello`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [])
  console.log(data)
  return (
    <div >
      Hello from {data.message}
    </div>
  );
}

export default App;
