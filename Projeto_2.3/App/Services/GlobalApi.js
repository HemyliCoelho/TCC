import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyDPXiu-JoVuKSLEMxRC1LlHZMv-jeoLAQk";

const nearByPlace = (type) => axios.get(BASE_URL +
    "/nearbysearch/json?" +
    "&location=-31.3317%2C-54.1067&radius=1500&type=" + type +
    "&key=" + API_KEY);

const searchByText = (searchText) => axios.get(BASE_URL +
    "/textsearch/json?query=" + searchText +
    "&key=" + API_KEY);

export default {
    nearByPlace,
    searchByText
};
