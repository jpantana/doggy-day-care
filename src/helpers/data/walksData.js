import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const postWalk = walk => axios.post(`${baseUrl}/walks.json`, walk);

const deleteWalk = walkId => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const putWalk = (walkId, updateWalk) => axios.put(`${baseUrl}/walks/${walkId}.json`, updateWalk);

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((res) => {
      const walks = [];
      if (Object.keys(res.data).length >= 0) { // THIS MAY HAVE BROKEN CODE
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          walks.push(res.data[fbKey]);
        });
      }
      resolve(walks);
    }).catch(err => reject(err));
});

export default { getWalks, postWalk, deleteWalk, putWalk };