import { useEffect, useState } from "react";
import axios from "axios";
import Score from "./Score.jsx";

export function App() {
  const [gifs, setGifs] = useState([]);
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/search?api_key=HjTcxr8LO7bjEP3j0oZ0METp4LNAFxV1&q=hollow+knight&limit=4&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
      )
      .then((response) => {
        const newGifs = response.data.data.map((gif) => ({
          id: gif.id,
          url: gif.images.fixed_height.url,
          clicked: false,
        }));
        setGifs(newGifs);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
  function reset() {
    gifs.map((gif) => (gif.clicked = false));
  }
  function handleClick(id) {
    shuffle(gifs);
    const clickGif = gifs.find((gif) => gif.id === id);
    if (clickGif.clicked) {
      console.log(`you re done ${score}` );
      setOver(true);
    } else {
      clickGif.clicked = true;
      setScore(score + 1);
      if (score == gifs.length-1){
        console.log("you win bitch");
      }
    }
  }
  function handleReset(){
    reset();
    setScore(0);
    setOver(false);
  }
  return (
    <div className="container">
      <Score score={score} />
      <div className="content">
        {gifs.map((gif) => (
          <div
            key={gif.id}
            className="card"
            onClick={() => over?"":handleClick(gif.id)}
          >
            <img src={gif.url} key={gif.id} className="img" />
          </div>
        ))}
      </div>
      <butto onClick={handleReset}>Reset</butto>
    </div>
  );
}
