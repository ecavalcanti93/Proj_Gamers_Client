import { useState } from 'react';

function SearchBar (props) {

    const [word, setWord] = useState('');

    const handleSearch = e => {
        setWord(e.target.value);
        props.setGames(e.target.value);
    }

    return (
        <>
            <label>Search</label><br/>
            <input name='search' value={word} type='text' onChange={handleSearch} />
        </>
    )
}


export default SearchBar;