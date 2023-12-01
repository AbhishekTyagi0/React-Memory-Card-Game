import React, { useEffect, useState } from "react";
import GridGameItem from "./GridGameItem";

const GameBoard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/categories?api_key=MOtdefdqihoJctlGIFtLDu9Qe5sMQgiE"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const sliceData = data.data.slice(0, 12);

  // Shuffle the sliceData array using Fisher-Yates algorithm found it on stackoverflow
  const shuffledData = [...sliceData];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }

  return (
    <div className="container">
      {shuffledData.map((item) => (
        <GridGameItem
          key={item.gif.id}
          id={item.gif.id}
          images={item.gif.images.downsized.url}
        />
      ))}
    </div>
  );
};

export default GameBoard;
