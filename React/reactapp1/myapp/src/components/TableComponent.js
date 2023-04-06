import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function TableComponenet(props) {
    function clickHandler(){
        alert('you click me')
    };
    return (
        <div style={{ border: "1px solid black", marginTop:"50px",marginLeft:"5px", padding:"10px", width:"99%" }}>
            <div>My Data Table</div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" onClick={clickHandler}>#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item,index)=>{
                        return(<tr id={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>)
                    
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}
export default TableComponenet;