import './style.scss';
import { IconSearch } from '../Icons';

function Search({ searchCharachter }) {
  return (
    <div className="search-form">
      <input
        onKeyUp={searchCharachter}
        type={'search'}
        placeholder="Search Charachter"
      />
      <span className="search-icon">
        <IconSearch />
      </span>
    </div>
  );
}

export default Search;
