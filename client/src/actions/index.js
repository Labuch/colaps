import axios from 'axios';

import {
    START_METRONOME, STOP_METRONOME, SET_TEMPO, SET_MODE, TICK_METRONOME, ADD_CHANNEL, SWITCH_CASE,
    INIT_METRONOME, SET_SAMPLE, DELETE_CHANNEL, SWITCH_SOUND_CHANNEL ,FETCH_USER, SAVE_SEQUENCE ,CHARGE_SEQUENCE,
    SAVE_SAMPLE,FETCH_SAMPLES, PLAY_SAMPLE ,DELETE_SAMPLE
} from './types'


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type:FETCH_USER, payload:res.data});
};
export const saveSequence = (parameters) => async dispatch => {
    const res = await axios.post('/api/sequence/save', parameters);
    dispatch({type: SAVE_SEQUENCE, payload: res});
};
export const chargeSequence = () => async dispatch => {
    const res = await axios.get('/api/sequence');
    dispatch({ type:CHARGE_SEQUENCE, payload: res.data});
};

export const saveSample = (name, buffer) => async dispatch => {

    const data  = new FormData();
    data.append('buffer', buffer);
    data.append('name', name);

    const res = await axios.post('/api/sample/save', data);
    dispatch({type: SAVE_SAMPLE, payload: res});
};


export const deleteSample = (sampleId) => async dispatch => {

    const res = await axios.delete('/api/sample/delete', { "params": {sampleId}});
    dispatch({type: DELETE_SAMPLE, payload: res});
};

export const playSample = (sampleId) => async dispatch => {
    dispatch({type: PLAY_SAMPLE, payload: sampleId});
};


export const fetchSamples = () => async dispatch => {
    const res = await axios.get('/api/samples');
    dispatch({ type:FETCH_SAMPLES, payload:res.data});
};

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

