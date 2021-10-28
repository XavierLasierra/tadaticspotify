import axios from "axios";
import qs from "qs";
import apiConfiguration from "../config";

const spotifyToken = async () => {
  const clientId = apiConfiguration.api.clientId;
  const clientSecret = apiConfiguration.api.clientSecret;

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    return response.data.access_token;
  } catch (error) {
    //TODO error
  }
};

export default spotifyToken;
