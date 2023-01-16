import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import './style.scss';

function Post() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const BASE_URL = 'https://rickandmortyapi.com/api/character' + '/' + id;

  const getCharacter = () => {
    axios
      .get(BASE_URL)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="single-page">
      <div className="container">
        <div className="character-block">
          <img
            className="character-img"
            src={character.image}
            alt={character.name}
          />
          <div className="character-block-holder">
            <h1>{character.name}</h1>
            <span className="status-info">
              {character.status === 'Alive' && (
                <span className="status-icon green"></span>
              )}
              {character.status === 'Dead' && (
                <span className="status-icon red"></span>
              )}
              {character.status === 'unknown' && (
                <span className="status-icon gray"></span>
              )}
              <h3 className="text">{character.status}</h3>
            </span>
            <ul>
              <li>
                <h4>Species -</h4> {character.species}
              </li>
              <li>
                <h4>Gender -</h4> {character.gender}
              </li>
              <li>
                <h4>Type -</h4> {character.type ? character.type : 'Unknown'}
              </li>
            </ul>
          </div>
        </div>
        <h2>About</h2>
        <div className="character-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            mollitia sed sunt nihil! Ratione iusto similique cumque id? Soluta,
            facilis?
          </p>
          <Link className="btn" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
