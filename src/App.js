import './App.css';
import Tic from './components/Tic';
import {Typography} from '@mui/material'

function App() {
  return (
    <div>
      <Typography style={{color:'white',marginLeft:'38%',marginTop:'2%',letterSpacing:'10px'}} varient="h2">
        <h1>TIC-TAC-TOE</h1></Typography>
     <Tic/>
    </div>
  );
}

export default App;
