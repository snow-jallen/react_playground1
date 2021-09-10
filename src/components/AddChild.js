import React, { useState } from "react";

const AddChild = ({ childUpdated }) => {

  const [showForm, setShowForm] = useState(false)

  const [enteredData, setEnteredData] = useState({
    name: 'New Child Name',
    birthdate: '2021-01-01',
    gender: 'F',
    id: Date.now()
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
      gender: 'M',
      id: Date.now()
    })
    setShowForm(false);
  }

  const showForm_clickHandled = (event) => {
    setShowForm((prevState) => !prevState)
  }

  const hideForm_clickHandled = () => setShowForm(false);

  if (showForm === false) {
    return <button onClick={showForm_clickHandled} className="btn mb-2 btn-primary">Add Child</button>
  }

  return (
    <form className="border border-3 container col-6" onSubmit={submitHandler}>
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
      <div className="mb-3">
        <div className="row gap-2">
          <button className="col-4 btn btn-outline-secondary" type='reset' onClick={hideForm_clickHandled}>Cancel</button>
          <button className="col-4 btn btn-primary" type='submit'>Add New Child</button>
        </div>
      </div>
    </form>);
}

export { AddChild }