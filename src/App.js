import { useEffect, useState } from "react";
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

import NewChecklist from './components/NewChecklist.js/index.js';
import Checklist from "./components/Checklist/index.js";


function App() {
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg'
  
  const [data, setData] = useState();

  const callChecklist = () => {
    const authAxios = axios.create({
      baseURL: 'http://18.139.50.74:8080',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
    authAxios.get('http://18.139.50.74:8080/checklist')
    .then(res => {
      console.log(res.data.data);
      setData(res.data.data);
    }).catch(err => console.log(err))
  }
  
  useEffect(() => {
    callChecklist();
  }, [data])


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <NewChecklist />
            <Checklist data={data && data} callChecklist={callChecklist}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
