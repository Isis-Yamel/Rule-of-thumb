import fetchCandidates from '../../apis/fetchCandidates';

export const getCandidates = () => {
  return async (dispatch) => {
    fetchCandidates().then((response) => {
      dispatch({
        type: 'FETCH_CANDIDATES',
        payload: response.data,
      });
    });
  };
};
