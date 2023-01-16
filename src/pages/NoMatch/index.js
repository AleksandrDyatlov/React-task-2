import { Link } from 'react-router-dom';

import './style.scss';
import bgImg from '../../assets/images/404-img.png';

function NoMatch() {
  return (
    <div
      className="page-404 bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <h1>404</h1>
        <Link className="btn" to="/">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NoMatch;
