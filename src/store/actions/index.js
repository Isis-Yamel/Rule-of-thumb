import fetchCandidates from '../../apis/fetchCandidates';

export const getCandidates = () => {
  if (localStorage.getItem('state') !== null) {
    const data = JSON.parse(localStorage.getItem('state'))
    return dispatch => {
      dispatch({
        type: 'FETCH_CANDIDATES',
        payload: data.candidates.candidates,
      })
    };
  }

  return async (dispatch) => {
    await fetchCandidates().then((response) => {

      dispatch({
        type: 'FETCH_CANDIDATES',
        payload: response.data,
      });
    });
  };
};

export const getVotes = (data) => {
  return dispatch => {
    dispatch({
      type: 'STREAM_VOTES',
      payload: data,
    })
  };
};
