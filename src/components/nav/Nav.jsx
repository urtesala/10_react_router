import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link to='/'> Home page</Link>
      <Link to='/about'>About page</Link>
      <Link to='/contacts'>Contact page</Link>
    </nav>
  );
}
export default Nav;
