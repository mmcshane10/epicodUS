import React from 'react';
import Header from './Header';
import UsImg from './UsImg';
import Intro from './Intro';
import CardList from './CardList';

function HomePage() {
  return (
    <div>
      <Header/>
      <UsImg/>
      <Intro/>
      <CardList/>
    </div>
  );
}

export default HomePage;