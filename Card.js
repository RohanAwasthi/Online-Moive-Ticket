import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaImage } from 'react-icons/fa';

function BasicExample({image,title,text}) {
  return (
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;