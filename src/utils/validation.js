// const regexEmail =
//   /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/;
const regexName = /^[a-zA-Zа-яА-Я\sё-]+$/;

// Так как браузерная валидация считает почту типа "name@mail" вполне валидной,
// то приходится общараться к регулярному выражению, хотя это тоже не супер надежно.

export function validateEmail(email) {
  // Если почта не андефайнд
  if (email !== undefined) {
    // И если длина почты ноль
    if (email.length === 0) {
      // Выведи след сообщение
      return { invalid: true, message: 'Это поле не должно быть пустым!' };

      // если почта не проходит валидацию через ругулярное выражение то
    } else if (!regexEmail.test(email.toLowerCase())) {
      // Выведи след сообщение.
      // invalid здесь для того, чтобы можно было управлять состоянием кнопки
      return { invalid: true, message: 'Неверный формат почты!' };
      // если почта прошла валидацию через ругулярное выражение то
    } else if (regexEmail.test(email.toLowerCase())) {
      // состояние disabled кнопки false, без сообщений
      return { invalid: false, message: '' };
    }
  } else {
    // Если почта - undefined, то по умолчанию имейл невалидный и без сообщения.
    // Это чтобы при первом рендере не было предупреждения, типа инпут не должен быть пустым.
    return { invalid: true, message: '' };
  }
}

export function validateName(name) {
  if (name !== undefined) {
    if (name.length === 0) {
      return { invalid: true, message: 'Это поле не должно быть пустым!' };
    } else if (!regexName.test(name.toLowerCase())) {
      return {
        invalid: true,
        message:
          'Имя должно содержать только латиницу, кириллицу, пробел или дефис!'
      };
    } else if (regexName.test(name.toLowerCase())) {
      return { invalid: false, message: '' };
    }
  } else {
    return { invalid: true, message: '' };
  }
}
