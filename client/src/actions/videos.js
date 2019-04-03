import { searchByQueryRequest } from '../helpers/requests';

export const searchByQuery = (query) => {
  return () => {
    return searchByQueryRequest(query)
      .then(data => {
        console.log(data);

        return data;
      });
  }
};
