import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com/",
   headers: {
        Authorization: "Client-ID 1WvTOKl_I6fhfYzIP38Nc8QuACVvsflGA0gb9HB1w7o",
      },
})
