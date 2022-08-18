import { FormEvent } from "react";
import Styles from "./chooseBackground.module.css";
interface Props {
  setUrl: (img: string) => void;
  setToogleChooseImg: (img: boolean) => void;
  setToogleTitle: (img: boolean) => void;
  setToogleInputComp: (img: boolean) => void;
}

const ChooseBackground: React.FC<Props> = ({
  setUrl,
  setToogleChooseImg,
  setToogleTitle,
  setToogleInputComp,
}) => {
  const handelClick = () => {
    setToogleTitle(true);
    setToogleChooseImg(false);
    setToogleInputComp(true);
  };
  return (
    <div className={Styles.container}>
      <h1>Choose background</h1>
      <img
        onClick={() => handelClick()}
        onMouseOver={() =>
          setUrl(
            "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1803&q=80"
          )
        }
        className={Styles.img}
        src='https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1803&q=80'
        alt=''
      />
      <img
        onClick={() => handelClick()}
        onMouseOver={() =>
          setUrl(
            "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
          )
        }
        className={Styles.img}
        src='https://images.unsplash.com/photo-1570299437488-d430e1e677c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80'
        alt=''
      />
      <img
        onClick={() => handelClick()}
        onMouseOver={() =>
          setUrl(
            "https://images.unsplash.com/photo-1501560379-05951a742668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          )
        }
        className={Styles.img}
        src='https://images.unsplash.com/photo-1501560379-05951a742668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt=''
      />
      <img
        onClick={() => handelClick()}
        onMouseOver={() =>
          setUrl(
            "https://images.unsplash.com/photo-1605007493699-af65834f8a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          )
        }
        className={Styles.img}
        src='https://images.unsplash.com/photo-1605007493699-af65834f8a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        alt=''
      />
      <img
        onClick={() => handelClick()}
        onMouseOver={() =>
          setUrl(
            "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          )
        }
        className={Styles.img}
        src='https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'
        alt=''
      />
      <img
        onClick={() => handelClick()}
        onMouseOver={() =>
          setUrl(
            "https://images.unsplash.com/photo-1510765355166-88d0a7dd8d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          )
        }
        className={Styles.img}
        src='https://images.unsplash.com/photo-1510765355166-88d0a7dd8d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
        alt=''
      />
    </div>
  );
};

export default ChooseBackground;
