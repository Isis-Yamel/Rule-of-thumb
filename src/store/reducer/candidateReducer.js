const INITIAL_STATE = {
  candidates: [],
};

const fetchCandidates = (state, payload) => {
  return {
    ...state,
    candidates: payload,
  };
};

const calculatePercentages = (state, vote) => {
  return state.candidates.map(element => {
    if (element.id === vote.id) {
      if (vote.status === "positive") {
        element.thumbUp += 1;
        element.total += 1;
      } else {
        element.thumbDown += 1;
        element.total += 1;
      }
    }

    return element;
  });
}

const streamVotes = (state, vote) => {
  return ({
    ...state,
    candidates: calculatePercentages(state, vote)
  })
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CANDIDATES':
      return fetchCandidates({ ...state }, action.payload);
    case 'STREAM_VOTES':
      return streamVotes({ ...state }, action.payload);
    default:
      return state;
  }
};

export default reducer;
