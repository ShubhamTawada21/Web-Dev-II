import React from 'react';

const ContentRow = ({ title, items }) => (
    <div className="content-section">
        <h2 className="section-title">{title}</h2>
        <div className="carousel-container">
            <div className="carousel">
                {items.map((movie) => (
                    <div key={movie.id} className="content-card">
                        <div className="card-image">{movie.icon}</div>
                        <div className="card-overlay">
                            <div className="play-icon" onClick={() => alert(`Playing ${movie.title}`)}>▶</div>
                        </div>
                        <div className="card-info">
                            <div className="card-title">{movie.title}</div>
                            <div className="card-rating">
                                {"★".repeat(movie.rating)}{"☆".repeat(5 - movie.rating)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ContentRow;