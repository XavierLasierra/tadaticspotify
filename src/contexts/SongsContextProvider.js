import React, { useState } from "react";

import SongsContext from "./songsContext";

function SongsContextProvider({ children }) {
  const [newReleases, setNewReleases] = useState([]);

  return (
    <SongsContext.Provider value={{ newReleases, setNewReleases }}>
      {children}
    </SongsContext.Provider>
  );
}

export default SongsContextProvider;
