import axios from "axios";
import { useContext } from "react";
import apiConfiguration from "../config";

import SongsContext from "../contexts/songsContext";
import spotifyToken from "../services/spotifyToken";

function useSpotify() {
  const { newReleases, setNewReleases } = useContext(SongsContext);

  const {
    api: { baseUrl, authUrl, clientId, clientSecret },
  } = apiConfiguration;

  const getNewReleases = async () => {
    const token = await spotifyToken();

    const {
      data: {
        albums: { items },
      },
    } = await axios.get(baseUrl + "/browse/new-releases", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setNewReleases(items);
  };

  return {
    newReleases,
    getNewReleases,
  };
}

export default useSpotify;
