import { useEffect, useState } from "react";
import axios from 'axios';

const NewChecklist = () => {
    const [checklist, setChecklist] = useState('test');
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W119.i2OVQdxr08dmIqwP7cWOJk5Ye4fySFUqofl-w6FKbm4EwXTStfm0u-sGhDvDVUqNG8Cc7STtUJlawVAP057Jlg';

    const submitChecklist = () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        
        const bodyParameters = {
           name: checklist
        };
        
        axios.post( 
          'http://18.139.50.74:8080/checklist',
          bodyParameters,
          config
        ).then(console.log).catch(console.log);

    }

    return (
        <>
            <div className="py-5">
                <h1>New Checklist</h1>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Checklist" onChange={(e) => setChecklist(e.target.value)}/>
                </div>
                <div className="btn btn-primary" onClick={submitChecklist}>Submit Checklist</div>
            </div>
        </>
    )
}

export default NewChecklist;