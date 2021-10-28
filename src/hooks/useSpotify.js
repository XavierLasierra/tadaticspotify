import { useContext } from "react";
import apiConfiguration from "../config";

import SongsContext from "../contexts/songsContext";
import spotifyData from "../services/spotifyData";

function useSpotify() {
  const { newReleases, setNewReleases, featuredPlaylist, setFeaturedPlaylist } =
    useContext(SongsContext);

  const {
    api: { baseUrl },
  } = apiConfiguration;

  const getNewReleases = async () => {
    const {
      albums: { items },
    } = await spotifyData(baseUrl, "/browse/new-releases");

    setNewReleases(items);
  };

  const getFeaturedPlaylist = async () => {
    const {
      playlists: { items },
    } = await spotifyData(baseUrl, "/browse/featured-playlists");
    setFeaturedPlaylist(items);
  };

  return {
    newReleases,
    featuredPlaylist,
    getNewReleases,
    getFeaturedPlaylist,
  };
}

export default useSpotify;
