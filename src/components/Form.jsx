import React from 'react'
import { Card } from '@mui/material'

import './styles.css';
import Buttons from './Buttons';


const Form = () => {

  return (
    <Card className='formone'>
        <form >
        <h1>Log In</h1>
            <div className='inputs'>
                <label>First Name:
                    <input type='text' placeholder='Fisrt Name'></input>
                </label><br></br>
                <label>Last Name:
                    <input type='text' placeholder='Last Name'></input>
                </label><br></br>
                <label>Username:
                    <input type='text' placeholder='Username'></input>
                </label>
            </div>
            <div>
                <Buttons />
            </div>

            
        </form>
    </Card>
  )
}

export default Form