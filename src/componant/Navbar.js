import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbarr=()=> {
return (
<div className='ll'>
    <Nav className='ee'>

<Nav.Item><Link to="/">Home</Link></Nav.Item>
<Nav.Item><Link to="/Aboutus">Aboutus</Link></Nav.Item>
<Nav.Item><Link to="/ME">ME</Link></Nav.Item>

    </Nav>
</div>)

 }
 export default Navbarr;