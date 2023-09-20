import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [InputDetails, setInputDetails] = useState({});
    const navigate = useNavigate();

    let name, value;
    function RegisterInput(event){
          name = event.target.name;
          value = event.target.value;
          setInputDetails({
            ...InputDetails,
            [name] : value
        })     
      }

      console.log("input", InputDetails)

    const Registration = async (e)=>{
        e.preventDefault();
        InputDetails.status = 1

        console.log("inpu",InputDetails)
        
        try {
            await fetch("http://localhost:4000/user/register/", {
                method: 'POST',
                headers: {
                    // "Authorization": `${Token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(InputDetails)
            }).then((resp) => resp.json())
            .then(data => {
                setInputDetails(data)
            })
            // navigate("/login")

        } catch (error) {
            console.log(error.response.data.message)
        }
    }




      return (

        <div className='row col-md-12'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='container mt-5'>
                    <h2>Registration</h2>
                    <div className="form-group mt-5">
                        <label>Title:</label>
                        <input type="text" className="inputFiled form-control" placeholder="Enter Title" name="title" onChange={RegisterInput} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Description:</label>
                        <textarea type="text" className="inputFiled form-control" placeholder="Enter Title" name="description" onChange={RegisterInput} ></textarea>
                    </div>
                    <div className="form-group mt-3">
                        <label>Due Date:</label>
                        <input type="date" className="inputFiled form-control" placeholder="Enter Title" name="dueDate" onChange={RegisterInput} />
                    </div> 
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <button type="submit" onClick={ Registration} className="btn btn-primary"> Register</button>
                        </div>
                    </div>
             
                </div>
            </div>
        </div>
    );
}

export default Register;
