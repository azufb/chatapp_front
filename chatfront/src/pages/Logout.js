import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User from '../User';

export default function Logout() {
  useEffect(() => {
    let unmounted = false;
    const f = async () => {
      await User.logout();
    }
    f();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, []); 
  
  return (
    <Container className="center">
      <Row className="justify-content-md-center">
        <div>
          <div className="text-center">
            <Link to="/login">ログアウト</Link>
          </div>
        </div>
      </Row>
    </Container>
  );
}