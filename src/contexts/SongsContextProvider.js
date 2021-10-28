import React, { useState } from "react";

import SongsContext from "./songsContext";

function SongsContextProvider({ children }) {
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylist, setFeaturedPlaylist] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <SongsContext.Provider
      value={{
        newReleases,
        setNewReleases,
        featuredPlaylist,
        setFeaturedPlaylist,
        categories,
        setCategories,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
}

export default SongsContextProvider;
