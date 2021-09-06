import React, { useState } from "react";

const AddChild = ({ childUpdated }) => {

  const [enteredData, setEnteredData] = useState({
    name: 'New Child Name',
    birthdate: '2021-01-01',
    gender: 'F'
  });

  const nameChangeHandler = (event) => setEnteredData((prevState) => ({ ...prevState, name: event.target.value }));
  const birthdateChangeHandler = (event) => setEnteredData((prevState) => ({ ...prevState, birthdate: Date.parse(event.target.value) }));
  const genderChangeHandler = (event) => setEnteredData(prevState => ({ ...prevState, gender: event.target.value }));

  const submitHandler = (event) => {
    event.preventDefault();
    childUpdated(enteredData);
    setEnteredData({
      name: '[added]',
      birthdate: '2021-01-01',
      gender: 'M'
    })
  }

  return (
    <form className="border border-3 mt-5 container col-3" onSubmit={submitHandler}>
      <h5 className="">Add a new child</h5>
      <div className="mb-3">
        <label className="form-label" htmlFor='name'>Name</label>
        <input className="form-control" id='name' type='text' onChange={nameChangeHandler} value={enteredData.name} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor='birthdate'>Birthdate</label>
        <input className="form-control" id='birthdate' type='date' onChange={birthdateChangeHandler} value={enteredData.birthdate} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor='gender'>Gender</label>
        <input className="form-control" id='gender' type='text' onChange={genderChangeHandler} value={enteredData.gender} />
      </div>
      <button className="btn btn-primary" type='submit'>Add New Child</button>
    </form>);
}

export { AddChild }