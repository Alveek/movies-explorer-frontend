/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import MainApi from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { auth } from '../../utils/Auth';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [apiErrors, setApiErrors] = useState({
    login: {},
    register: {},
    profile: {}
  });
  const [isOK, setIsOK] = useState(true);

  console.log(apiErrors);
  const [movies, setMovies] = useState([]);
  const mainApi = new MainApi({
    url: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  });

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    isLoggedIn &&
      Promise.all([mainApi.getUserInfo(), moviesApi.getMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setMovies(movies);
        })
        .catch((err) => {
          console.log(`Что-то пошло не так... (${err})`);
        });
  }, [isLoggedIn]);

  const handleLogin = (values) => {
    auth
      .authorize(values.email, values.password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setIsLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegister = (values) => {
    auth
      .register(values.name, values.email, values.password)
      .then((res) => {
        // navigate('/signin');
        handleLogin(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateUser = (user) => {
    mainApi
      .editProfile(user)
      .then(() => {
        setApiErrors({ ...apiErrors, profile: {} });
        setCurrentUser({ ...currentUser, name: user.name, email: user.email });
        setIsOK(true);
      })
      .catch((err) => {
        setIsOK(false);
        setApiErrors({ ...apiErrors, profile: err });
        console.log(err);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    navigate('/');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ currentUser }}>
        {headerPaths.includes(location.pathname) ? (
          <Header isLoggedIn={isLoggedIn} />
        ) : (
          ''
        )}
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/signup"
              element={<Register onRegister={handleRegister} />}
            />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  movies={movies}
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  apiErrors={apiErrors}
                  isOK={isOK}
                  onSignOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {footerPaths.includes(location.pathname) ? <Footer /> : ''}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
