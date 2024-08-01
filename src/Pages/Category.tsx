import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Category, State } from '../Shared/interface';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = useSelector((state: State) =>
    state.categories.find(cat => cat.id === parseInt(categoryId as string))
  );
  const navigate = useNavigate();

  return (
    <div>
      <h2>{(category as Category).name}</h2>
      <ul>
        {(category as Category).items.map(item => (
          <li key={item.id} onClick={() => navigate(`/item/${item.id}`)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
