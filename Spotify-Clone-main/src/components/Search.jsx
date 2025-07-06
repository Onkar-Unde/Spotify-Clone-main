import Navbar from "../components/Navbar";
import { useState } from "react";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const Search = () => {
  const [query, setQuery] = useState("");

  const filteredAlbums = albumsData.filter((album) =>
    album.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
     <Navbar/>
      <div className="p-4 text-white">
        <input
          type="text"
          placeholder="Search for songs, albums, artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded-xl bg-[#242424] text-white outline-none"
        />

        {query.length === 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Browse all genres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Pop", "Rock", "Hip-Hop", "Classical", "Jazz", "EDM", "Podcasts"].map(
                (genre, idx) => (
                  <div
                    key={idx}
                    className="bg-[#181818] hover:bg-[#282828] p-4 rounded-xl cursor-pointer text-center font-semibold"
                  >
                    {genre}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {query.length > 0 && (
          <>
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Albums</h2>
              <div className="flex overflow-auto gap-4">
                {filteredAlbums.length ? (
                  filteredAlbums.map((album, idx) => (
                    <AlbumItem
                      key={idx}
                      id={album.id}
                      name={album.name}
                      desc={album.desc}
                      image={album.image}
                    />
                  ))
                ) : (
                  <p className="text-gray-400">No albums found.</p>
                )}
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Songs</h2>
              <div className="flex overflow-auto gap-4">
                {filteredSongs.length ? (
                  filteredSongs.map((song, idx) => (
                    <SongItem
                      key={idx}
                      id={song.id}
                      name={song.name}
                      desc={song.desc}
                      image={song.image}
                    />
                  ))
                ) : (
                  <p className="text-gray-400">No songs found.</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
