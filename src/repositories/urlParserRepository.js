import axios from 'axios';

export function getArticleParsed(url) {
  const apiUrl = `http://localhost/reader?url=${url}`;

  return axios.get(apiUrl)
    .then(function(res) {
      return res.data;
    })
    .catch(function(e) {
      throw e;
    });
}
