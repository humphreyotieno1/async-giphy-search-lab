import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = async (query) => {
      setSearchQuery(query);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=4R2G4ovol8KPPTi48wxCrPxLCf3EeWIm&rating=g`);
          const data = await response.json();
          setGifs(data.data.slice(0, 3));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (searchQuery) {
        fetchData();
      }
    }, [searchQuery]);
  
    return (
      <div className="container mt-4">
        <GifSearch onSubmit={handleSubmit} />
        <GifList gifs={gifs} />
      </div>
    );
  }
export default GifListContainer