import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import DisplayAlbum from "./components/DisplayAlbum";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Display/>
        </div>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto" />
    </div>
  );
};

export default App;
