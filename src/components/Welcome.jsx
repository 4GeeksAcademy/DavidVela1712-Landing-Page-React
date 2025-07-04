import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Welcome() {
  return (
    <div>
          <p className='display-1'>Welcome</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <Button variant="primary">Call to action</Button>
    </div>
  );
}

export default Welcome;