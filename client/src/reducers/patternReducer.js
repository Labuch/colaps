import {ADD_CHANNEL, SWITCH_CASE, DELETE_CHANNEL, SET_MODE, CHARGE_SEQUENCE} from '../actions/types'

const convert3to4 = (array) => {
    let index = array.length;
    while (index > 2) {
        array.splice(index,0,0);
        index = index - 3; 
    }
    return array;
}
const convert4to3 = (array) => {
    let index = array.length;
    while (index > 3) {
        array.splice(index-1,1);
        index = index - 4; 
    }
    return array;
}

const getmode = (lenght) => lenght/8 >=3 ? lenght/8 : lenght/4; 
    

export default function ( state = [], action) {

    switch (action.type) {
        case ADD_CHANNEL :
            return {...state, [action.payload.channelId]: Array(action.payload.mode).fill(0) };
        case DELETE_CHANNEL:
            let newState = {...state};
            delete newState[action.payload.channelId];
            return newState;
        case CHARGE_SEQUENCE:
            let patterns = action.payload[0].parameters.patterns;
            return { ...patterns};
        case SWITCH_CASE :
            var newpattern = state[action.payload.channelId].slice();
            newpattern[action.payload.caseIndex] = !newpattern[action.payload.caseIndex];
            return { ...state,  [action.payload.channelId] : newpattern };
        case SET_MODE:
            let channels = {...state};
            return Object.entries(channels).map((entrie)=>{
                let length = entrie[1].length;
                let channel = entrie[1];

                if (getmode(length) > getmode(action.payload))
                {
                    channel = convert4to3(channel);
                }
                if (getmode(length) < getmode(action.payload))
                {
                    channel = convert3to4(channel);
                }
                length = channel.length;
                if (length > action.payload){
                    channel = channel.slice(0,action.payload);
                }
                if (length < action.payload){
                    channel = [...channel, ...new Array(action.payload-length).fill(0)];
                }

                return [entrie[0],channel];
            }).reduce((accu,channel)=>{
                accu[channel[0]] = channel[1]
                return accu;}, {});
        default :
            return state;
    }
}
