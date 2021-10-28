import React, { useEffect } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import useSpotify from "../../../hooks/useSpotify";

export default function Discover() {
  const { newReleases, getNewReleases, featuredPlaylist, getFeaturedPlaylist } =
    useSpotify();

  useEffect(() => {
    getNewReleases();
    getFeaturedPlaylist();
  }, []);
  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock
        text="FEATURED PLAYLISTS"
        id="featured"
        data={featuredPlaylist}
      />
      <DiscoverBlock text="BROWSE" id="browse" data={[]} imagesKey="icons" />
    </div>
  );
}
