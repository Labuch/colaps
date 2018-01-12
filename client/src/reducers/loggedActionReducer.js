import {LOG_ACTION } from '../actions/types';

export default function ( state = [], action){

    return { type: action.type , payload: action.payload}

}