/*
import {getWeather} from "./App.js";




const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {

    isFetching: true,
};


const fetchReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getWeatherAC = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    await getWeather();
    dispatch(toggleIsFetching(false));
}



export default fetchReducer;*/
