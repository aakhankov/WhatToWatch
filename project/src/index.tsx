import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { fakeFilms } from './mocks/films';
import { fakeReviews } from './mocks/review';

ReactDOM.render(
  <React.StrictMode>
    <App
      films={fakeFilms}
      currentFilm={fakeFilms[0]}
      reviews={fakeReviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
