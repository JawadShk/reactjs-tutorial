import React from 'react';
import { Button, Alert } from 'react-bootstrap';

function ReactBootstrap() {
  return (
    <div>
        <h1>ReactBootstrap</h1>
        <Button onClick={()=> alert("Hii")}>Click Me</Button>{' '}
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
        
        <Alert className='mt-2' variant="danger">
          This is a warning alert—check it out!
        </Alert>
    </div>
  )
}

export default ReactBootstrap;