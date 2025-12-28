import Left from "./components/Left";
import Main from "./components/Main";
import style from "./App.module.css";
import styled from "./index.module.css";
import Header from "./components/Header"
import Footer from './components/Footer';
export default function Asosiy() {
  return (
    <>
    <Header></Header>
      <Main />
      <Left />
      <Footer></Footer>
    </>
  );
}
