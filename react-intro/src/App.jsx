import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
function App() {
   const [email , setEmail] = useState('')
   const [emailDirty, setEmailDirty] = useState(false)
   const [emailError, setEmailError] = useState('Поле не может быть пустым')
   const [formValid , setFormValid] =useState(false)

useEffect(()=> {
  if(emailError){
    setFormValid(false)
  } else {
    setFormValid(true)
  }
}, [emailError])

function handleSubmit(e) {
  e.preventDefault()
  console.log(email);
  setEmail('')
}

const emailHandler = (e) => {
  setEmail(e.target.value)
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!re.test(String(e.target.value).toLowerCase())){
    setEmailError('некорректный емаил')
  } else{
    setEmailError( 'Поле введено правильно')
  }
}
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
    }
   } 
  return (
    <div className="app">
    <form onSubmit={(e)=> handleSubmit(e)}>
      <h1>Регистрация</h1>
      {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
      <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={email} name='email' type="text" placeholder='Напишите емаил' />
      <button disabled={formValid} type='submit'>Add</button>
    </form>
    </div>
  );
}

export default App;
