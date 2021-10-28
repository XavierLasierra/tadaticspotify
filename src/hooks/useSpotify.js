import { useContext } from "react";
import apiConfiguration from "../config";

import SongsContext from "../contexts/songsContext";
import spotifyData from "../services/spotifyData";

function useSpotify() {
  const {
    newReleases,
    setNewReleases,
    featuredPlaylist,
    setFeaturedPlaylist,
    categories,
    setCategories,
  } = useContext(SongsContext);

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

  const getCategories = async () => {
    const {
      categories: { items },
    } = await spotifyData(baseUrl, "/browse/categories");
    setCategories(items);
  };

  return {
    newReleases,
    featuredPlaylist,
    categories,
    getNewReleases,
    getFeaturedPlaylist,
    getCategories,
  };
}

export default useSpotify;
