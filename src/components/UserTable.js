import React from "react";
import {Table} from "react-bootstrap";

function UserTable(props) {
    function inputItem(e){
        e.preventDefault()

        props.onChange(e.target.name, e.target.value)
    }

    return (
        <Table responsive striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {props.newRow &&
            <tr>
                <td><input name="email" onChange={(e) => inputItem(e)}/></td>
                <td><input name="username" onChange={(e) => inputItem(e)}/></td>
                <td><input name="age" onChange={(e) => inputItem(e)}/></td>
            </tr>
            }
            {props.data && props.data.map((user, index) => (
                <tr key={index}>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.age}</td>
                </tr>
            ))
            }
            </tbody>
        </Table>
    )
}

export default UserTable;