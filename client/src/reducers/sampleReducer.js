import {ADD_CHANNEL,SET_SAMPLE, DELETE_CHANNEL, SWITCH_SOUND_CHANNEL,CHARGE_SEQUENCE} from '../actions/types'

export default function ( state = [], action){

    switch(action.type) {
        case ADD_CHANNEL :
            return {...state , [action.payload.channelId]: {sample : "kick", muted:false } };
        case SET_SAMPLE :
            var newsample = state[action.payload.channelId];
            newsample.sample = action.payload.sample;
            return { ...state,  [action.payload.channelId] : newsample };
        case CHARGE_SEQUENCE:
            console.log(action.payload[0]);
                let samples = action.payload[0].parameters.samples;
                return { ...samples};
        case SWITCH_SOUND_CHANNEL:
            var newsample = state[action.payload.channelId];
            newsample.muted = !newsample.muted;
            return { ...state,  [action.payload.channelId] : newsample };
        case DELETE_CHANNEL:
            var newState = {...state};
            delete newState[action.payload.channelId];
            return newState;
        default :
            return state;
    }
}
