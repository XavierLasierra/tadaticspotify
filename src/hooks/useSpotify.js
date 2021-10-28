import { useContext } from "react";

import SongsContext from "../contexts/songsContext";

function useAuth() {
  const { user, setUser } = useContext(SongsContext);

  return {
    user,
  };
}

export default useAuth;
