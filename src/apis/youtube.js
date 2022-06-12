import axios from 'axios';
// API key from google developers for Youtube Data API
const KEY = 'AIzaSyDUxV_H9zBMtbqVsvKn__ynIbMAetopcEM';
// set up of API call and parameters
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        type: 'video',
        key: KEY
    }
});

