import axios from 'axios';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const fetchArticlesWithQuery = async searchQuery => {
  try {
    const response = await axios.get(`/search?query=${searchQuery}`);
    //return response.date.hits;
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    //console.log(response.data.hits);
    //return response.data;
    return response.data.hits;

    // if (response.status === 200 && response.data && response.data.hits) {
    //     return response.date.hits
    // }  else {
    //     throw new Error('Invalid response from the API');
    // }
  } catch (error) {
    console.log('Error Api', error);
  }
};

export default fetchArticlesWithQuery;

// export default {
//     fetchArticlesWithQuery,
//   };
