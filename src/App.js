import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card'
import no_photo from './img/no_photo.webp'

function App() {
  return (
    <>
      <Card imgUrl={no_photo} imgAlt={'no_photo'}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
      <Card>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
    </>
  );
}

export default App;
