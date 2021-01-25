import api from './index';

const fetchCandidates = async () => {
  return await api.get('/candidates');
};

export default fetchCandidates;
