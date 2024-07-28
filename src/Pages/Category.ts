import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = useSelector(state =>
    state.categories.find(cat => cat.id === parseInt(categoryId))
  );
  const history = useHistory();

  return (
    <div>
      <h2>{category.name}</h2>
      <ul>
        {category.items.map(item => (
          <li key={item.id} onClick={() => history.push(`/item/${item.id}`)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
