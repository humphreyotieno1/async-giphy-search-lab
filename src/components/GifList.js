import React from 'react'

function GifList({ gifs }) {
    return (
      <div className="row">
        {gifs.map((gif) => (
          <div key={gif.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={gif.images.original.url} className="card-img-top" alt={gif.title} />
              <div className="card-body">
                <h5 className="card-title">{gif.title}</h5>
                <a href={gif.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View on Giphy</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default GifList