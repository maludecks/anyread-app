import axios from 'axios';

export function getArticleParsed(url) {
  const apiUrl = `http://localhost:3000/parse?url=${url}`;

  return axios.get(apiUrl)
    .then(function(res) {
      return res.data;
    })
    .catch(function(e) {
      throw e;
    });
}
