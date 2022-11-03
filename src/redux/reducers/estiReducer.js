import * as AxiosService from '../../services/AxiosService';
import {GET_ESTIMATES} from '../constants/types';

const initialState = {
    estimates: []
}

export function getEstimates() {
    return {
        type: GET_ESTIMATES,
        payload: AxiosService.getEstimates()
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ESTIMATES.type + "_PENDING":
            return {...state, isLoading: true};
        case GET_ESTIMATES.type + "_FULFILLED":
            return {...state, isLoading: false, estimates: []};
        case GET_ESTIMATES.type + "_REJECTED":
            return {...state, isLoading: false};
            default:
            return state;
    }
}