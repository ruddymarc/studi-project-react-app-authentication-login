import http from '../helpers/http';

export const authenticationService = {
  login: (userCredential) => (
    http.post('/login', JSON.stringify(userCredential))
      .then((response) => response.data)
      .catch((error) => console.log(error))
  ),
  logout: () => (
    http.post('/logout')
      .then((response) => response.data)
      .catch((error) => console.log(error))
  )
};
