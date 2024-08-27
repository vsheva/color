import { useEffect, useState } from 'react';

const RandomColor = () => {
  const [typeColor, setTypeColor] = useState('hex');
  const [currentColor, setCurrentColor] = useState('#000000');

  //генерируем el
  const randomElInArr = length => {
    return Math.floor(Math.random() * length);
  };

  const createHexColor = () => {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let heks = '#';

    for (let i = 0; i < 6; i++) {
      heks = heks + arr[randomElInArr(arr.length)];
      //console.log('heks', heks);
    }
    setCurrentColor(heks);
  };

  const createRgbColor = () => {
    let r = randomElInArr(256);
    let g = randomElInArr(256);
    let b = randomElInArr(256);
    console.log(r, g, b);
    let rgb = `rgb(${r},${g},${b})`;
    setCurrentColor(rgb);
  };

  useEffect(() => {
    console.log('here');
    typeColor === 'rgb' ? createRgbColor() : createHexColor();
  }, [typeColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: currentColor,
      }}
    >
      <button onClick={() => setTypeColor('hex')}>Generate HEX Color</button>
      <button onClick={() => setTypeColor('rgb')}>Generate RGB Color</button>
      <button onClick={typeColor == 'hex' ? () => createHexColor() : () => createRgbColor()}>
        Generate Random Color
      </button>
      <div>
        <h3>{typeColor == 'hex' ? 'HEX Color' : 'RGB Color'}</h3>
        <h1>{currentColor}</h1>
      </div>
    </div>
  );
};

export default RandomColor;

//#123456
//rgb(12,24, 65)
