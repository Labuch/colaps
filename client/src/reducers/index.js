import {combineReducers} from 'redux';
import patternReducer from './patternReducer';
import metronomeReducer from './metronomeReducer';
import sampleReducer from './sampleReducer';
import loggedActionReducer from './loggedActionReducer';
import authReducer from  './authReducer';
import libraryReducer from "./libraryReducer";


export default combineReducers({
    auth: authReducer,
    patterns: patternReducer,
    metronome:metronomeReducer,
    samples: sampleReducer,
    lastAction: loggedActionReducer,
    library: libraryReducer,
});
