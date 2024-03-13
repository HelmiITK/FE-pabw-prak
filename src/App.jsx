import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";

import Protected from "./components/Protected";
import NoAccessToken from "./components/NoAccessToken";
import NotFoundPage from "./pages/NotFoundPage";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <HomePage />
                </Protected>
              }
            />

            <Route
              path="/login"
              element={
                <NoAccessToken>
                  <LoginPage />
                </NoAccessToken>
              }
            />

            <Route
              path="/regis"
              element={
                <NoAccessToken>
                  <RegisterPage />
                </NoAccessToken>
              }
            />

            <Route
              path="//myprofile"
              element={
                <Protected>
                  <UserPage />
                </Protected>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
