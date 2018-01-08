import {START_METRONOME, STOP_METRONOME, SET_TEMPO, TICK_METRONOME, SET_MODE} from '../actions/types'



export default function ( state = [], action){
    console.log(action);

    switch(action.type) {
        case STOP_METRONOME :
            return { ...state, running: false , count : 0 };
        case START_METRONOME:
            return { ...state, running: true , count : 0 };
        case SET_TEMPO:
            return { ...state, tempo : action.payload };
        case SET_MODE :
            return { ...state, mode : action.payload };
        case TICK_METRONOME:
            let newCount = (state.count + 1) % (state.mode);
            return { ...state, count : newCount  };
        default:
             return state;


    }
}

