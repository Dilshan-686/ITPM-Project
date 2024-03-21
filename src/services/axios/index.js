import axios from 'axios';

// axios base config
export default axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
});
