import './App.css';
import { useState } from 'react';
import Data from './Data.json';

function App() {
  const [searchTerm, setSearchTerm ] = useState ("");
  return (
    <div className="container">
      <div className='inputContainer'>
        <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
          <input className='search' type='text' placeholder='Konsey Üyesi Giriniz'
          onChange={(e)=> setSearchTerm(e.target.value)}
          />
      </div>
      <div className='dataContainer'>
        {
          Data
          .filter((val) => {
            if(searchTerm==""){
              return val;
            }else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
              return val;
            }
          }).map((val) => {
            return(
              <div className='data' key={val.id}>
                <img src={val.image}/>
                <h3>{val.title}</h3>
                <p>{val.Description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
