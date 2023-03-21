import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
function App() {
  return (
    <>
      <div className='row h-[180px] bg-red-400'>
        <div className='col-2 flex flex-col'>
          <span>Andon Board</span>
          <div className='flex-1 bg-white items-center flex justify-center text-9xl'>000</div>
        </div>
        <div className='col-4'>
          2AFI7
        </div>
        <div className='col-2'>
          RUN
        </div>
        <div className='col-4'>
          <div className=' flex flex-col h-100'>
            <div className='flex-1 bg-green-500'>MM-DD-YYYY</div>
            <div className='flex-1 bg-pink-500'>HH:mm:ss</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
