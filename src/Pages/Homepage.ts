import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const categories = useSelector(state => state.categories);
  const history = useHistory();

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => history.push(`/category/${category.id}`)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
