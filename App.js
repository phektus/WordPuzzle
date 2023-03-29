import Game from './Game';
import Router from "./components/Router";

export default () => {
  const game = Game.init();
  return (
    <Router game={game} />
  );
} 
