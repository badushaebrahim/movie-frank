import React from 'react'
import { Button } from '@material-ui/core';
import '../home.css';

function Homebtns() {
	
  
  return (
    <div>
	    <a href="/login"> <Button className="button_style" variant="contained" color="primary" size="small"    >Login</Button></a>
	    <a href="/Register"> <Button  className="button_style"  variant="contained"color="primary"size="small" >Register</Button> </a>
	    </div>
  )
}

export default Homebtns