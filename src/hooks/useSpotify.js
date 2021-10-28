import { useCallback, useContext } from "react";
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

  const getNewReleases = useCallback(async () => {
    const {
      albums: { items },
    } = await spotifyData(baseUrl, "/browse/new-releases");

    setNewReleases(items);
  }, [baseUrl, setNewReleases]);

  const getFeaturedPlaylist = useCallback(async () => {
    const {
      playlists: { items },
    } = await spotifyData(baseUrl, "/browse/featured-playlists");
    setFeaturedPlaylist(items);
  }, [baseUrl, setFeaturedPlaylist]);

  const getCategories = useCallback(async () => {
    const {
      categories: { items },
    } = await spotifyData(baseUrl, "/browse/categories");
    setCategories(items);
  }, [baseUrl, setCategories]);

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
