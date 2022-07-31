import { Link } from 'react-router-dom';
import { Film } from '../../types/films';
import { useRef, useEffect } from 'react';
import classNames from 'classnames';
const PLAY_TIMEOUT = 1000;


type FilmCardProps = {
  film: Film;
  activeCard: number | null;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function FilmCard({ film, activeCard, onMouseEnter, onMouseLeave }: FilmCardProps): JSX.Element {

  const { id, previewImage, previewVideoLink, name } = film;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeCard === id) {
        videoRef.current?.play();
      }
    }, PLAY_TIMEOUT);
    if (activeCard !== id) {
      videoRef.current?.pause();
      videoRef.current?.load();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeCard, id]);

  return (
    <article className={
      classNames(
        'small-film-card',
        'catalog__films-card',
        { 'active': activeCard === id }
      )
    } onMouseEnter={() => onMouseEnter(id)} onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <video
          src={previewVideoLink}
          poster={previewImage}
          loop
          muted
          ref={videoRef}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`} title={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
