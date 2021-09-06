import React, {useState} from "react";

const AddChild = ({childUpdated}) => {

  const [enteredData, setEnteredData] = useState({
    name: 'New Child Name',
    birthdate: '2021-01-01',
    gender: 'F'
  });
  
  const nameChangeHandler = (event) => setEnteredData((prevState) => ({...prevState, name: event.target.value}));
  const birthdateChangeHandler = (event) => setEnteredData((prevState) => ({...prevState, birthdate: Date.parse(event.target.value)}));
  const genderChangeHandler = (event) => setEnteredData(prevState => ({...prevState, gender: event.target.value}));

  const submitHandler = (event) => {
    event.preventDefault();
    childUpdated(enteredData);
    setEnteredData({
      name: '[added]',
      birthdate: '2021-01-01',
      gender: 'M'
    })
  }

  return (<div>
    <form onSubmit={submitHandler}>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' onChange={nameChangeHandler} value={enteredData.name} />
      <label htmlFor='birthdate'>Birthdate</label>
      <input id='birthdate' type='date' onChange={birthdateChangeHandler} value={enteredData.birthdate} />
      <label htmlFor='gender'>Gender</label>
      <input id='gender' type='text' onChange={genderChangeHandler} value={enteredData.gender} />
      <button type='submit'>Add</button>
    </form>
  </div>);
}

export {AddChild}