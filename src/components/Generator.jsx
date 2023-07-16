import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Generator = () => {
  const { number } = useParams();

  const [randomNumber, setRandomNumber] = useState();

  const generateRandomNumber = (upperBound) => {
    setRandomNumber(Math.floor(Math.random() * upperBound) + 1);
  };

  useEffect(() => {
    generateRandomNumber(Number(number));
  }, [number]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <span className="text-9xl text-blue-500">{randomNumber}</span>
      <button
        onClick={() => generateRandomNumber(Number(number))}
        className="absolute bottom-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Regenerate Number
      </button>
    </div>
  );
};
