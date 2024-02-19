import React, { useState} from 'react'

function GifSearch({ onSubmit }) {
    const [query, setQuery] = useState('');
  
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(query);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for gifs..."
            value={query}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    );
  }

export default GifSearch