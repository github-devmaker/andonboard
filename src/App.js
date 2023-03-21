import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <>
      <div className='grid grid-cols-4 bg-blue-900 text-white h-[150px]'>
        <div className='flex flex-col px-3 pb-3'>
          <div>Andon Board</div>
          <div className='flex-1 grid place-items-center items-center   text-8xl text-yellow-400 font-semibold'>123</div>
        </div>
        <div>
        <div className='grid place-items-center h-100 font-semibold text-8xl'>
            2AFI7
          </div>
        </div>
        <div className='bg-black text-8xl grid place-items-center font-semibold'>
        RUN
        </div>
        <div>
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
