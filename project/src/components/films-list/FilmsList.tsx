import { useState } from 'react';
import { Film } from '../../types/films';
import FilmCard from '../film-card/FilmCard';

type FilmListProps = {
  films: Film[];
}

function FilmsList({ films }: FilmListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFilm, setActiveCard] = useState({});

  const setActive = (id: number) => {
    const activeFilms = films.filter((film) => film.id === id);
    setActiveCard(activeFilms);
  };

  const filmsList =
    films?.map((film) => (
      <FilmCard key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} setActiveCard={setActive} />
    ));

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;
