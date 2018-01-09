import {ADD_CHANNEL,SWITCH_CASE, DELETE_CHANNEL, SET_MODE} from '../actions/types'
import _ from 'lodash';

export default function ( state = [], action) {
    switch (action.type) {
        case ADD_CHANNEL :
            return {...state, [action.payload]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};
        case DELETE_CHANNEL:
            var newState = state
            delete newState[action.payload.channelId];
            return newState;
        case SWITCH_CASE :
            var newpattern = state[action.payload.channelId].slice();
            newpattern[action.payload.caseIndex] = !newpattern[action.payload.caseIndex];
            return { ...state,  [action.payload.channelId] : newpattern };
        case SET_MODE:

            newState={};
            _.forIn(state, (value, key) =>{
                if (value.length != action.payload){
                    var newpattern = value.slice(action.payload);

                }
            } )


            return newState ;
        default :
            return state;
    }
}
