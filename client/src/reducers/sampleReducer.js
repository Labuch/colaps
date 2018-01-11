import {ADD_CHANNEL,SET_SAMPLE, DELETE_CHANNEL} from '../actions/types'

export default function ( state = [], action){
   switch(action.type) {
        case ADD_CHANNEL :
            return {...state , [action.payload.channelId]: "crash" };
        case SET_SAMPLE :
            return  {...state , [ action.payload.channelId]: action.payload.sample }
       case DELETE_CHANNEL:
            var newState = {...state};
            delete newState[action.payload.channelId];
            return newState;
        default :
            return state;
    }
}
