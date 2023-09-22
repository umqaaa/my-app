import "./App.css";
import Header from "./components/Header/Header";
import Photos from "./components/Pet/Photos/Photos";
import Home from "./components/Home/Home";
import Counter from "./components/Pet/Counter/Counter";
import UsersList from "./components/Pet/UsersList/UsersList";
import {Routes, Route} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default App;
