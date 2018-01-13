import {
    START_METRONOME, STOP_METRONOME, SET_TEMPO, SET_MODE, TICK_METRONOME, ADD_CHANNEL, SWITCH_CASE,
    INIT_METRONOME, SET_SAMPLE, DELETE_CHANNEL, SWITCH_SOUND_CHANNEL
} from './types'


export const initMetronome = () => async dispatch => {
    dispatch({ type:INIT_METRONOME});
};
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

export const addChannel = (mode) => async dispatch => {
    dispatch({ type:ADD_CHANNEL, payload: {channelId: Date.now(), mode }});
};
export const switchSoundChannel = (channelId) => async dispatch => {
    dispatch({ type:SWITCH_SOUND_CHANNEL, payload: {channelId}});
};

export const deleteChannel = (channelId) => async dispatch => {
    dispatch({ type:DELETE_CHANNEL, payload: {channelId}});
};
export const switchCase = (channelId, caseIndex ) => async dispatch => {
    dispatch({ type:SWITCH_CASE, payload: {channelId,caseIndex}});
};
export const setSample = (channelId, sample) => async dispatch => {
    dispatch({ type:SET_SAMPLE, payload: {channelId, sample}});
};
