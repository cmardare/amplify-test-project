import React, {useEffect, useState} from "react";

import {API} from 'aws-amplify'

import '../assets/css/App.css';

import {
    AmplifySignOut
} from "@aws-amplify/ui-react";
import UserTable from "../components/UserTable";
import {Button, Col, Container, Row} from "react-bootstrap";

function Home() {
    const [newRow, setNewRow] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    function handleNewRow(){
        setNewRow(!newRow)
    }

    function saveRow(e){
        e.preventDefault()
        e.stopPropagation()

        API.post('usersapi', '/users', {
            body: {
                email,
                username,
                age
            }
        }).then((data) => console.log(data))
    }

    function onChange(name, value) {
        if(name === 'email') setEmail(value)
        if(name === 'username') setUsername(value)
        if(name === 'age') setAge(value)
    }

    useEffect(() => {
        API.get('usersapi', '/users/email/').then((data) => console.log(data))
    }, [])

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Button variant="secondary" onClick={handleNewRow}>
                            {!newRow ? "Add new row" : "Undo changes"}
                        </Button>
                        {newRow &&
                            <Button variant="primary" onClick={e => saveRow(e)}>
                                Save data
                            </Button>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <UserTable newRow={newRow} onChange={onChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AmplifySignOut />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
