import {ADD_CHANNEL} from '../actions/types'

export default function ( state = [], action){

    console.log(action);

    switch(action.type) {
        case ADD_CHANNEL :
            return {...state , [action.payload]: "crash" };

        default :
            let samples =  {   channel_1: "kick",
                               channel_2: "crash"
            }
            return samples;
    }
}
