import React from 'react';
import {Container, Row} from "react-bootstrap"
import Contact from './Contact';

const Contacts = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    {
                        props.usersData.map((user)=>{
                            return <Contact userInfo={user} key={user.id} 
                            deleteUser={props.deleteUser}
                            editUser={props.editUser}/>
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Contacts;