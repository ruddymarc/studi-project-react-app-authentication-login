import React, { createContext, useContext } from 'react';
import { authenticationService } from '../services/authentication';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const params = {
    signIn: (login, password) => {
      const userCredential = {
        login, password
      };
      authenticationService
        .login(userCredential)
        .then((loginData) => {
          if (loginData) {
            window.history.pushState({}, undefined, '/protected')
            window.localStorage.setItem('token', loginData.token)
          }
        })
    },
    signOut: () => {
      authenticationService
        .logout()
        .then((logoutData) => {
          if (logoutData) {
            window.history.pushState({}, undefined, '/')
            window.localStorage.removeItem('token')
          }
        })
    },
  };
  
  return (
    <AuthContext.Provider value={params}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext must be used with a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
