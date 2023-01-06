import './App.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Items from './components/Items';
import HrmlAdd from './components/HrmlAdd';
import Login from './components/Login';
import { useNavigate } from "react-router-dom"

const navi = ()=>{
  const navigator = useNavigate()
}
function App() {
  return (
    
      <Provider store={Store}>
        
        <div className='container'>
          <h1 className='title'>My Apllication</h1>
          <button onClick={navigator('/login')}>Log in</button>
          <Login/>
          <Items/>
        </div>
        
      
        
      </Provider>

       


    
  )
}

export default App;
