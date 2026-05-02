import React from 'react';
import { categories } from '../data/movieData';

const CategoryPills = ({ active, onChange }) => (
    <div className="category-pills">
        {categories.map(cat => (
            <button 
                key={cat} 
                className={`pill ${active === cat ? 'active' : ''}`}
                onClick={() => onChange(cat)}
            >
                {cat}
            </button>
        ))}
    </div>
);

export default CategoryPills;