const INITIAL_STATE = {
  candidates: [],
};

const fetchCandidates = (state, payload) => {
  return {
    ...state,
    candidates: payload,
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CANDIDATES':
      return fetchCandidates({ ...state }, action.payload);
    default:
      return state;
  }
};

export default reducer;
