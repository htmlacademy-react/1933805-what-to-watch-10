import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FILMS } from './mocks/films';

const filmDetails = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={filmDetails.TITLE}
      genre={filmDetails.GENRE}
      releaseDate={filmDetails.RELEASE_DATE}
      films={FILMS}
    />

  </React.StrictMode>,
);


