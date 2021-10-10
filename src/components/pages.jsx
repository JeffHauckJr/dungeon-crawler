import { Route, Redirect } from "react-router-dom";
import { GAME_ROUTE, HOME_ROUTE, } from "../constants";
import Home from "./home.jsx";
import Game from "./game.jsx";


const Pages = ({playerName, setPlayerName}) => {
    return (
      <>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path={HOME_ROUTE}>
          <Home 
          playerName={playerName}
          setPlayerName={setPlayerName}
          />
        </Route>
        <Route path={GAME_ROUTE}>
          <Game playerName={playerName}
          setPlayerName={setPlayerName} />
        </Route>
      </>
    );
  };

  export default Pages