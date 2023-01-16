import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './assets/styles/style.scss';
import './components/Filter/style.scss';
import './components/Search/style.scss';
import Filter from './components/Filter';
import Search from './components/Search';
import Intro from './components/Intro';
import Card from './components/Card';

import heroBgImg from './assets/images/intro-img.jpg';

function App() {
  const BASE_URL = 'https://rickandmortyapi.com/api/character';

  const [characters, setCharacter] = useState([]);
  const [isComplited, setItComplited] = useState(false);
  const [page, setPage] = useState(1);
  const [selectValueGender, setSelectValueGender] = useState(null);
  const [selectValueStatus, setSelectValueStatus] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const getCharacters = () => {
    axios
      .get(BASE_URL, {
        params: {
          page: page,
          name: searchQuery,
          status: (selectValueStatus && selectValueStatus.value) || '',
          gender: (selectValueGender && selectValueGender.value) || '',
        },
      })
      .then((res) => {
        page >= res.data.info.pages
          ? setItComplited(false)
          : setItComplited(true);
        page === 1
          ? setCharacter([...res.data.results])
          : setCharacter([...characters, ...res.data.results]);
      })
      .catch(() => {
        setCharacter([]);
        setItComplited(false);
      });
  };

  const loadMoreCharacters = () => {
    setPage((preventPageNumber) => preventPageNumber + 1);
  };

  const searchCharachter = (e) => {
    setPage(1);
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    getCharacters();
  }, [page, selectValueGender, selectValueStatus, searchQuery]);

  const cards = characters.map((character) => {
    return (
      <div className="col" key={character.id}>
        <Card
          img={character.image}
          title={character.name}
          status={character.status}
          species={character.species}
          url={character.id}
        />
      </div>
    );
  });

  return (
    <>
      <Intro img={heroBgImg} />
      <div className="container">
        <div className="card-wrapp">
          <div className="toolbar">
            <Filter
              setSelectValueStatus={setSelectValueStatus}
              setSelectValueGender={setSelectValueGender}
              setPage={setPage}
            />
            <Search searchCharachter={searchCharachter} />
          </div>
          <div className="grid">
            {!cards.length ? (
              <div className="no-results">No result 😥</div>
            ) : (
              cards
            )}
          </div>
          <div className="btn-holder">
            {isComplited && (
              <button className="btn" onClick={loadMoreCharacters}>
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
