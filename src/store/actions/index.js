import fetchCandidates from '../../apis/fetchCandidates';

export const getCandidates = () => {
  return async (dispatch) => {
    await fetchCandidates().then((response) => {
      dispatch({
        type: 'FETCH_CANDIDATES',
        payload: response.data,
      });
    });
  };
};
