import axios from 'axios';

// AUTH CALLS
export function getEstimates() {
    return axios.get('/estimates')
}