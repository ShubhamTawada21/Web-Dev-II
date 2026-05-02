import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import CategoryPills from './components/CategoryPills';
import Featured from './components/Featured';
import Footer from './components/Footer';
import { movies } from './data/movieData';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredMovies = selectedCategory === 'All' 
        ? movies 
        : movies.filter(movie => movie.category === selectedCategory);

    return (
        <div className="App">
            <Navbar />
            <Hero />
            
            <CategoryPills 
                active={selectedCategory} 
                onChange={setSelectedCategory} 
            />

            <ContentRow title="Trending Now" items={filteredMovies} />
            
            <Featured />
            
            <ContentRow title="New Releases" items={movies.slice().reverse()} />
            
            <Footer />
        </div>
    );
}

export default App;