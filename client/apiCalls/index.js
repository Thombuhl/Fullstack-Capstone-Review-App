import axios from 'axios';

const fetchAllRes = async () => {
    return (
        await axios.get('/api/restaurants', {
            headers: {
                authorization: window.localStorage.getItem('token'),
            },
        })
    ).data;
};

const fetchResReviews = async (id) => {
    return (
        await axios.get(`/api/restaurants/${id}/ratings`, {
            headers: {
                authorization: window.localStorage.getItem('token'),
            },
        })
    ).data;
};

export { fetchAllRes, fetchResReviews };
