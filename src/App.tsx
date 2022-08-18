import { useState } from "react";
import "./App.css";
import ChooseBackground from "./components/chooseBackground/ChooseBackground";
import InputComp from "./components/input/InputComp";

function App() {
  const [toogleChooseImg, setToogleChooseImg] = useState<boolean>(true);
  const [toogleTitle, setToogleTitle] = useState<boolean>(false);
  const [toogleInpuComp, setToogleInputComp] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("Choose Title");
  const [fontSize, setFontSize] = useState<number>(35);
  const [url, setUrl] = useState<string>(
    "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1803&q=80"
  );
  const [font, setFont] = useState<string>("Alfa Slab One");

  return (
    <div
      style={{
        paddingTop: "5vh",
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
      className='App'
    >
      {toogleTitle ? (
        <h1 style={{ fontFamily: `${font}`, fontSize: `${fontSize}px` }}>
          {title}
        </h1>
      ) : null}
      {toogleInpuComp ? (
        <InputComp
          setFont={setFont}
          setToogleInputComp={setToogleInputComp}
          setTitle={setTitle}
          title={title}
          setFontSize={setFontSize}
          fontSize={fontSize}
        />
      ) : null}
      {toogleChooseImg ? (
        <ChooseBackground
          setToogleInputComp={setToogleInputComp}
          setToogleTitle={setToogleTitle}
          setToogleChooseImg={setToogleChooseImg}
          setUrl={setUrl}
        />
      ) : null}
    </div>
  );
}

export default App;

// useContext
