import {START_METRONOME, STOP_METRONOME, SET_TEMPO, TICK_METRONOME, SET_MODE,INIT_METRONOME } from '../actions/types'


export default function ( state = [], action){

    switch(action.type) {
        case INIT_METRONOME :
            return {running: false , count : -1, mode: 16, tempo:130 }
        case STOP_METRONOME :
            return { ...state, running: false};
        case START_METRONOME:
            return { ...state, running: true};
        case SET_TEMPO:
            return { ...state, tempo : action.payload };
        case SET_MODE :
            return { ...state, mode : action.payload };
        case TICK_METRONOME:
            let newCount = (state.count + 1) % (state.mode);
            return { ...state, count : newCount };
        default:
             return state;


    }
}

