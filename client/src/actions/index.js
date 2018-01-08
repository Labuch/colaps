import {START_METRONOME, STOP_METRONOME, SET_TEMPO, SET_MODE, TICK_METRONOME, ADD_CHANNEL, SWITCH_CASE} from './types'

export const startMetronome = () => async dispatch => {
   dispatch({ type:START_METRONOME });
};

export const stopMetronome = () => async dispatch => {
    dispatch({ type:STOP_METRONOME });
};

export const tickMetronome = () => async dispatch => {
    dispatch({ type:TICK_METRONOME });
};

export const setMode = (mode) => async dispatch => {
    dispatch({ type:SET_MODE, payload:mode });
};

export const setTempo = (tempo) => async dispatch => {
    dispatch({ type:SET_TEMPO, payload:tempo });
};

export const addChannel = () => async dispatch => {
    dispatch({ type:ADD_CHANNEL, payload: Date.now()});
};

export const switchCase = (channelId,caseIndex ) => async dispatch => {
    dispatch({ type:SWITCH_CASE, payload: {channelId,caseIndex}});
};