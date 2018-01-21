import {FETCH_SAMPLES} from '../actions/types'

export default function ( state = [], action){

    switch(action.type) {
        case FETCH_SAMPLES :
            return action.payload || false;
        default :
            return state;
    }
}
