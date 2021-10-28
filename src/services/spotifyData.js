import axios from "axios";
import spotifyToken from "./spotifyToken";

const spotifyData = async (baseUrl, path) => {
  const token = await spotifyToken();

  const { data } = await axios.get(baseUrl + path, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return data;
};

export default spotifyData;
