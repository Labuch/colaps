import {ADD_CHANNEL,SWITCH_CASE, DELETE_CHANNEL, SET_MODE} from '../actions/types'
import _ from 'lodash';

export default function ( state = [], action) {
    switch (action.type) {
        case ADD_CHANNEL :
            return {...state, [action.payload.channelId]: Array(action.payload.mode).fill(0) };
        case DELETE_CHANNEL:
            var newState = {...state};
            delete newState[action.payload.channelId];
            return newState;
        case SWITCH_CASE :
            var newpattern = state[action.payload.channelId].slice();
            newpattern[action.payload.caseIndex] = !newpattern[action.payload.caseIndex];
            return { ...state,  [action.payload.channelId] : newpattern };
        case SET_MODE:
            newState={...state};
            _.forIn(newState, (value, key) =>{
                if (value.length > action.payload)
                {
                    value.splice(15,1);
                    value.splice(11,1);
                    value.splice(7,1);
                    value.splice(3,1);
                    newState[key]= value;
                }
                if (value.length < action.payload)
                {
                    value.splice(11,0,0);
                    value.splice(8,0,0);
                    value.splice(5,0,0);
                    value.splice(2,0,0);
                    newState[key]= value;
                }
            })
            return newState ;
        default :
            return state;
    }
}
