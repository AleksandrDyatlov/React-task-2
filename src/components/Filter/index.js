import { useState } from 'react';
import Select, { components } from 'react-select';

import './style.scss';

function Filter({ setSelectValueStatus, setSelectValueGender, setPage }) {
  const [selectGender, setSelectGender] = useState(null);
  const [selectStatus, setSelectStatus] = useState(null);

  const selectOptionsGender = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Genderless ', label: 'Genderless ' },
    { value: 'Unknown', label: 'Unknown' },
  ];

  const selectOptionsStatus = [
    { value: 'Alive', label: 'Alive' },
    { value: 'Dead ', label: 'Dead ' },
    { value: 'Unknown', label: 'Unknown' },
  ];

  const Placeholder = (props) => {
    return <components.Placeholder {...props} />;
  };

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? '#F2F2F2' : '#303033',
      boxShadow: state.isFocused ? 'none' : 'none',
      outline: state.isFocused ? 'none' : 'none',
      backgroundColor: '#303033',
      borderRadius: '10px',
      '&:hover': {
        borderColor: '#F2F2F2',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      paddingLeft: '21px',
      paddingRight: '5px',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: 'transparent',
    }),
    input: (base) => ({
      ...base,
      fontSize: '16px',
      color: '#F2F2F2',
      fontWeight: 300,
      lineHeight: 2,
      paddingBottom: '7px',
      paddingTop: '7px',
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: '16px',
      color: '#F2F2F2',
      fontWeight: 300,
    }),
    singleValue: (base) => ({
      ...base,
      color: '#F2F2F2',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: 'inherit',
      '&:hover': {
        color: 'inherit',
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#303033',
      color: '#fff',
      margin: 0,
      borderRadius: '10px',
      overflow: 'hidden',
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
    option: (base) => ({
      ...base,
      color: '#fff',
      backgroundColor: '#303033',
      paddingLeft: '21px',
      paddingRight: '21px',
      '&:hover': {
        color: '#303033',
        backgroundColor: '#F2F2F2',
      },
    }),
  };

  const SelectStatus = () => (
    <Select
      defaultValue={selectStatus}
      options={selectOptionsStatus}
      components={{ Placeholder }}
      placeholder={'Select state'}
      styles={selectStyles}
      onChange={(e) => {
        setPage(1);
        setSelectValueStatus(e);
        setSelectStatus(e);
      }}
    />
  );

  const SelectGender = () => (
    <Select
      defaultValue={selectGender}
      options={selectOptionsGender}
      components={{ Placeholder }}
      placeholder={'Select gender'}
      styles={selectStyles}
      onChange={(e) => {
        setPage(1);
        setSelectValueGender(e);
        setSelectGender(e);
      }}
    />
  );

  return (
    <div className="filter-bar">
      <div className="filter-col">
        <SelectStatus />
      </div>
      <div className="filter-col">
        <SelectGender />
      </div>
    </div>
  );
}

export default Filter;
