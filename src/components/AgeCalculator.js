import React, { useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function AgeCalculator()
{
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () =>
  {
    const today = new Date();
    const dob = new Date(dateOfBirth);
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const ageInMilliseconds = today - dob;
    const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear);
    setAge(ageInYears);
  };

  return (
    <div className="container">
      <h1 className="heading">Age Calculator</h1>
      <p>Enter your date of birth</p>
      <div className="input-container">
        <input className="input-date" type='date' id="birthday" name="birthday" placeholder='DD-MM-YYYY' onChange={(e) => setDateOfBirth(e.target.value)}/>
      </div>
      <br />
      <Button className="btn btn-primary" onClick={calculateAge}>Calculate Age</Button>
      <br />
      <br />
      <p className="age">You are {age} years old</p>
    </div>
  );
}

export default AgeCalculator;