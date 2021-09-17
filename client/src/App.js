import { useEffect , useState } from 'react'
import river from './river.jpg';
import './App.css';
import axios from  'axios';

function App() {

   const [user, setUser] = useState(null)
  //  const [text, setText] = useState(null)

  useEffect(() => {
  axios.get('/api')
  .then((response)=>{
    setUser(response.data)
  })
  }, [])

console.log(user)
// console.log(text)
  return user && (
    <div className="App">
      <header className="App-header">
        <img src={river} className="App-river" alt="river" />
         <div className="centered">{user.user.login}</div>


      </header>
    </div>
  );
}

export default App;
