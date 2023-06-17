/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { validateEmail } from '../../utils/helpers';
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
import Preloader from '../Preloader/Preloader';

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
  const [isOK, setIsOK] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  console.log(apiErrors);

  const mainApi = new MainApi({
    url: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`
    }
  });

  // очистка ошибок при переходе на другие страницы
  useEffect(() => {
    setApiErrors({
      login: {},
      register: {},
      profile: {}
    });
  }, [location]);

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
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    isLoggedIn &&
      mainApi
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((error) => {
          console.log(`Что-то пошло не так... (${error})`);
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
      .catch((error) => {
        setIsOK(false);
        setApiErrors({ ...apiErrors, login: error });
        console.log(error);
      });
  };

  const handleRegister = (values) => {
    auth
      .register(values.name, values.email, values.password)
      .then((res) => {
        handleLogin(values);
      })
      .catch((error) => {
        setIsOK(false);
        setApiErrors({ ...apiErrors, register: error });
        console.log(error);
      });
  };

  const handleUpdateUser = (user) => {
    mainApi
      .editProfile(user)
      .then(() => {
        setApiErrors({ ...apiErrors, profile: {} });
        setCurrentUser({
          ...currentUser,
          name: user.name,
          email: user.email
        });
        setIsOK(true);
      })
      .catch((error) => {
        setIsOK(false);
        setApiErrors({ ...apiErrors, profile: error });
        console.log(error);
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
        {headerPaths.includes(location.pathname) && (
          <Header isLoggedIn={isLoggedIn} />
        )}
        {isLoading && <Preloader />}
        <main>
          <Routes>
            <Route path="/" element={<Main />} />

            <Route
              path="/signup"
              element={
                <Register
                  onRegister={handleRegister}
                  isLoggedIn={isLoggedIn}
                  apiErrors={apiErrors}
                />
              }
            />

            <Route
              path="/signin"
              element={
                <Login
                  onLogin={handleLogin}
                  isLoggedIn={isLoggedIn}
                  apiErrors={apiErrors}
                />
              }
            />

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

            <Route path="*" element={<NotFound isLoggedIn={isLoggedIn} />} />
          </Routes>
        </main>
        {footerPaths.includes(location.pathname) && <Footer />}
      </CurrentUserContext.Provider>
      )
    </div>
  );
}

export default App;
