import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const CategoryList = ({ categories }) => {
    console.log(categories)
    return (
        <div className="category-list">
            {categories.map(category =>
                <Link to={`/wiki/${category.name.toLowerCase()}/`} >
                    <CategoryCard id={`${category.name.toLowerCase()}`} categoryData={category} />
                </Link>
            )}
        </div>
    );
}

export default CategoryList;
