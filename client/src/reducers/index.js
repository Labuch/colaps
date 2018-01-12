import {combineReducers} from 'redux';
import patternReducer from './patternReducer';
import metronomeReducer from './metronomeReducer';
import sampleReducer from './sampleReducer';
import loggedActionReducer from './loggedActionReducer';


export default combineReducers({
    patterns: patternReducer,
    metronome:metronomeReducer,
    samples: sampleReducer,
    lastAction: loggedActionReducer
});
