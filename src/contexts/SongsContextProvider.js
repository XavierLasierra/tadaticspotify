import React, { useState } from "react";

import SongsContext from "./songsContext";

function SongsContextProvider({ children }) {
  const [songs, setSongs] = useState(null);

  return (
    <SongsContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongsContext.Provider>
  );
}

export default SongsContextProvider;
