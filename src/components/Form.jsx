import React from 'react'
import { Card } from '@mui/material'
import {Button} from '@mui/material';
import './styles.css';
import {Save} from '@mui/icons-material';
import {Cancel} from '@mui/icons-material';

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
            <Button 
            startIcon={<Cancel />}
            variant="outlined" 
            color="error" >
                CANCEL
            </Button>
            <Button 
            startIcon = {<Save />}
            variant="outlined" 
            type='submit'>
                SUBMIT
            </Button>
            </div>
        </form>
    </Card>
  )
}

export default Form