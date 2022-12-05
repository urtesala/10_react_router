import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <Link className='active' to='/'>
        Home page
      </Link>
      <Link to='/about'>About page</Link>
      <Link to='/contacts'>Contact page</Link>
      <Link to='/users'>Users</Link>
    </nav>
  );
}
export default Nav;
