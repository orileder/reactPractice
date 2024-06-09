import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState ('peter')
  const [age, setAge] = useState (24)
  const [hobby, setHobby] = useState ('surfing')
  const displayPerson = () => {
    setName ('jhon')
    setAge (27)
    setHobby ('jumping')
  } 
  return <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>enjoys: {hobby}</h3>
  <button className='btn' onClick={displayPerson}>show jhon</button>
  </>;
};

export default UseStateObject;
