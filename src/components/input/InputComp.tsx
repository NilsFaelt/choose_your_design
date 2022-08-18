import { FormEvent, useEffect, useState } from "react";
import Styles from "./inputComp.module.css";
import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import { ChromePicker } from "react-color";

interface Props {
  fontSize: number;
  title: string;
  color: string;
  setTitle: (title: string) => void;
  setFont: (title: string) => void;
  setFontSize: (size: number) => void;
  setToogleInputComp: (title: boolean) => void;
  setColor: (color: string) => void;
}
const InputComp: React.FC<Props> = ({
  setTitle,
  title,
  setToogleInputComp,
  setFont,
  setFontSize,
  fontSize,
  color,
  setColor,
}) => {
  const [toogleColorPicker, setToogleColorPicker] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const arrOfFonts = ["Alfa Slab One", "Cinzel", "Michroma"];
  console.log(color);

  useEffect(() => {
    setFont(arrOfFonts[1]);
  }, []);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setToogleInputComp(false);
  };

  const dicreaseCount = () => {
    if (count !== 0) {
      setCount((prevstate) => prevstate - 1);
      setFont(arrOfFonts[count]);
    } else if (count === 0) {
      setCount(2);
      setFont(arrOfFonts[count]);
    }
  };
  const increaseCount = () => {
    if (count !== 2) {
      setCount((prevstate) => prevstate + 1);
      setFont(arrOfFonts[count]);
    } else if (count === 2) {
      setCount(0);
      setFont(arrOfFonts[count]);
    }
  };

  const dicreaseFont = () => {
    if (fontSize > 10) {
      setFontSize(fontSize - 5);
    } else return;
  };
  const increaseFont = () => {
    if (fontSize < 100) {
      setFontSize(fontSize + 5);
    } else return;
  };

  return (
    <div className={Styles.container}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        className={Styles.input}
        type='text'
        placeholder='Choose Title'
        value={title}
      />
      <div className={Styles.chooseFontDiv}>
        <ChevronDoubleLeftIcon
          onClick={dicreaseCount}
          className={Styles.arrow}
        />
        <p style={{ marginTop: "0.6vh" }}>Font-Family</p>
        <ChevronDoubleRightIcon
          onClick={increaseCount}
          className={Styles.arrow}
        />
      </div>
      <div className={Styles.chooseFontDiv}>
        <ChevronDoubleLeftIcon
          onClick={dicreaseFont}
          className={Styles.arrow}
        />
        <p style={{ marginTop: "0.6vh" }}>Font-Size</p>
        <ChevronDoubleRightIcon
          onClick={increaseFont}
          className={Styles.arrow}
        />
      </div>
      <div className={Styles.chooseFontDiv}>
        <p
          onClick={() => setToogleColorPicker(!toogleColorPicker)}
          style={{ cursor: "pointer" }}
        >
          Change Title Color?
        </p>
      </div>

      <button onClick={(e) => handleClick(e)}>Choose</button>
      {toogleColorPicker ? (
        <div className={Styles.colorDiv}>
          <p
            onClick={() => setToogleColorPicker(false)}
            style={{ color: "white", cursor: "pointer" }}
          >
            Close
          </p>
          <ChromePicker
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default InputComp;
