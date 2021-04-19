import React from 'react';
import { CardColumns,Card } from 'react-bootstrap';
import Img1 from '../img/weather.png';
import Img2 from '../img/workday.png';
import Img3 from '../img/team-profile.png';
import Img4 from '../img/note-taker.png';
import Img5 from '../img/tic-tac.png';
import Img6 from '../img/password-gen.png';
import Img7 from '../img/movie-queue.png';

function Portfolio () {
    return (
        <CardColumns className="portfolio-cards">
            <Card style={{ width: '18rem' }}>
    <Card.Img  variant="top" src={Img1} />
    <Card.Body>
      <Card.Title>Weather Dashboard</Card.Title>
      <Card.Text>
        Description of the project
      </Card.Text>
      <a href="https://mschellberg.github.io/weather-dashboard/">View Project</a><br></br>
      <a href="https://github.com/mschellberg/weather-dashboard">Github</a>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Img4} />
    <Card.Body>
      <Card.Title>Note Taker</Card.Title>
      <Card.Text>
      Description of the project
      </Card.Text>
      <a href="https://week-11-note-taker-express.herokuapp.com/notes">View Project</a><br></br>
      <a href="https://github.com/mschellberg/note-taker">Github</a>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Img2} />
    <Card.Body>
      <Card.Title>Work Day Planner</Card.Title>
      <Card.Text>
      Description of the project
      </Card.Text>
      <a href="https://mschellberg.github.io/workday/">View Project</a><br></br>
      <a href="https://github.com/mschellberg/workday">Github</a>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Img5} />
    <Card.Body>
      <Card.Title>Tic Tac Woah</Card.Title>
      <Card.Text>
      Description of the project
      </Card.Text>
      <a href="https://tic-tac-toe-project-two.herokuapp.com/">View Project</a><br></br>
      <a href="https://github.com/mschellberg/tic-tac-whoa">Github</a>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Img3} />
    <Card.Body>
      <Card.Title>Team Profile Generator</Card.Title>
      <Card.Text>
      Description of the project
      </Card.Text>
      <a href="https://mschellberg.github.io/team-profile-generator/">View Project</a><br></br>
      <a href="https://github.com/mschellberg/team-profile-generator">Github</a>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Img7} />
    <Card.Body>
      <Card.Title>Password Generator</Card.Title>
      <Card.Text>
      Description of the project
      </Card.Text>
      <a href="https://glacial-headland-73425.herokuapp.com/">View Project</a><br></br>
      <a href="https://github.com/mschellberg/my-movie-queue">Github</a>
    </Card.Body>
  </Card>
  
        </CardColumns>

    );
}

export default Portfolio;