import {START_METRONOME, STOP_METRONOME, SET_TEMPO, TICK_METRONOME, SET_MODE,INIT_METRONOME, SET_KIT } from '../actions/types'



export default function ( state = [], action){
    console.log(action);
    switch(action.type) {
        case INIT_METRONOME :
            return {running: false , count : 0, mode: 16, tempo:90 ,kit:1}
        case STOP_METRONOME :
            return { ...state, running: false , count : 0 };
        case START_METRONOME:
            return { ...state, running: true , count : 0 };
        case SET_TEMPO:
            return { ...state, tempo : action.payload };
        case SET_MODE :
            return { ...state, mode : action.payload };
        case SET_KIT :
            return { ...state, kit : action.payload };
        case TICK_METRONOME:
            let newCount = (state.count + 1) % (state.mode);
            return { ...state, count : newCount  };
        default:
             return state;


    }
}

