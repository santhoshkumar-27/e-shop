import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from '../Shared/interface';

const HomePage = () => {
  const categories = useSelector((state: State) => state.categories);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => navigate(`/category/${category.id}`)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
