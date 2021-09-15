import { useEffect , useState } from 'react'
import river from './river.jpg';
import './App.css';
import axios from  'axios';

function App() {

   const [image, setImage] = useState(null)

  useEffect(() => {
   setImage({river})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={river} className="App-river" alt="river" />
        <div class="centered">Node + React</div>
      </header>
    </div>
  );
}

export default App;
