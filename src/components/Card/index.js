import { Link } from 'react-router-dom';

import './style.scss';
import { IconArrow } from '../Icons';

function Card({ style, img, title, status, species, url }) {
  const cardStyle = style === 'horizontal' ? 'card card-horizontal' : 'card';

  return (
    <div className={cardStyle}>
      <img src={img} alt={title} className="card-img" />
      <div className="card-holder">
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">
            <span className="status-info">
              {status === 'Alive' && (
                <span className="status-icon green"></span>
              )}
              {status === 'Dead' && <span className="status-icon red"></span>}
              {status === 'unknown' && (
                <span className="status-icon gray"></span>
              )}
              <span className="text">
                {status} - {species}
              </span>
            </span>
          </p>
        </div>
        <div className="card-footer">
          <Link className="btn btn-more" to={`/character/${url}`}>
            Read more
            <IconArrow />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
