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
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default TableComponenet;