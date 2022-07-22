import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/LoginPage';
import MyList from '../../pages/my-list-page/MyListPage';
import MoviePage from '../../pages/movie-page/MoviePage';
import PlayerPage from '../../pages/player-page/PlayerPage';
import EmptyPage from '../../pages/empty-page/EmptyPage';
import PrivateRoute from '../private-route/PrivateRoute';
import { Film } from '../../types/films';
import AddReviewPage from '../../pages/add-review-page/AddReviewPage';

type MainPageFilm = {
  title: string;
  genre: string;
  releaseDate: number;
  films: Film[];
}

function App({ title, genre, releaseDate, films }: MainPageFilm): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage title={title} genre={genre} releaseDate={releaseDate} films={films} />}
        />
        <Route path={AppRoute.SignIn} element={<LoginPage />} />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<MoviePage films={films} />} />
        <Route path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReviewPage films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage films={films} />} />
        <Route path={AppRoute.NotFound} element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
