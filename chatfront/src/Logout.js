import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User from './User';

/*export default class Logout extends Component {
  async componentDidMount() {
    await User.logout();
  }

  render() {
    return (
      <Container className="center">
        <Row className="justify-content-md-center">
          <div>
            <h2>ログアウトしました</h2>
            <div className="text-center">
              <Link to="/login">ログイン画面へ</Link>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}*/

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