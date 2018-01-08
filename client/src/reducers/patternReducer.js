import {ADD_CHANNEL,SWITCH_CASE} from '../actions/types'

export default function ( state = [], action) {
    console.log(action);

    switch (action.type) {
        case ADD_CHANNEL :
            return {...state, [action.payload]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]};
        case SWITCH_CASE :
            var newpattern = state[action.payload.channelId].slice();
            console.log(newpattern);
            newpattern[action.payload.caseIndex] = !newpattern[action.payload.caseIndex];
            return { ...state,  [action.payload.channelId] : newpattern };
        default :
            let patterns = {
                channel_1: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                channel_2: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0]
            }

            return patterns;
    }
}
