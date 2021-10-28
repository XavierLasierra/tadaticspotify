import React from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";

export default function Discover() {
  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={[]} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={[]} />
      <DiscoverBlock text="BROWSE" id="browse" data={[]} imagesKey="icons" />
    </div>
  );
}
