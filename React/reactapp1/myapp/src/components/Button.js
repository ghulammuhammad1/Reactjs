import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Label from 'react-bootstrap/FormLabel'
import { useState } from 'react';
function ButtonComp(){
    function inc(){
        setCount(count+1)
    }
    function dec(){
        if(count===0){
            alert("Sorry you can't decrement value further")
        }
        else{
            setCount(count-1)
        }
        
    }
    function reset(){
        setCount(5)
    }

    const [count, setCount] = useState(5);
    
    return(
        <div style={{marginTop:"20px"}}>
            <div>Use State Example</div>
            <Button type="button" class="btn btn-primary" onClick={inc}>Inc</Button>
            <Label style={{marginLeft:"20px", marginRight:"20px"}}>Value: {count}</Label>
            <Button type='button' class="btn btn-success" onClick={dec}>Dec</Button>
            <div> <Button type='button' class="btn btn-danger" onClick={reset}>Reset</Button> </div>
            
        </div>
    );
}
export default ButtonComp;