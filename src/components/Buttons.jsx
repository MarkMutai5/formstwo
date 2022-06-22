import React from 'react'
import {Save} from '@mui/icons-material';
import {Cancel} from '@mui/icons-material';
import {Button} from '@mui/material';

function Buttons() {
  return (
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
  )
}

export default Buttons