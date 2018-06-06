import React from 'react';
import CategoryList from 'components/Homepage/CategoryList/CategoryList';
import Terms from 'components/Homepage/Terms/Terms';

const HomeScreen = () => (
  <div className="search">
    <CategoryList />
    <Terms />
  </div>
);

export { HomeScreen };
export default (HomeScreen);
