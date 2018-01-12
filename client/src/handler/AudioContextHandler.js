import {START_METRONOME, STOP_METRONOME, SET_TEMPO, TICK_METRONOME, SET_MODE,INIT_METRONOME, SET_KIT } from '../actions/types'
import _ from 'lodash';

class AudioContextHandler {



   constructor  (store){


        let ctx = new AudioContext();

        let listfile = ["kick","snap","snare","tom"];
        let audioBuffers = {};


        listfile.forEach((name)=>{
            const request = new XMLHttpRequest();
            request.open('GET','sample/'+ name +'.wav', true);
            request.responseType = 'arraybuffer';
            request.onload = function() {
                ctx.decodeAudioData(request.response, function(buffer) {
                    audioBuffers[name] = buffer;
                });
            };
            request.send();

        });


        function handleAction() {
           let state = store.getState()
            console.log("action:",state.lastAction );
            if (state.lastAction.type == START_METRONOME )
            {
                setTimeout(()=>store.dispatch({type: TICK_METRONOME}), 60000/state.metronome.tempo);

            }
            if (state.lastAction.type == TICK_METRONOME && state.metronome.running)
            {

                const sourceBuffers = [];
                _.forIn( state.patterns, (value, key) =>{
                    const sourceBuffer = ctx.createBufferSource();
                    if (value[state.metronome.count])
                    {
                            console.log(audioBuffers[state.samples[key]]);
                        sourceBuffer.buffer = audioBuffers[state.samples[key]];

                        sourceBuffers.push(sourceBuffer);
                    }
                });


                sourceBuffers.forEach((sourceBuffer) =>{
                    sourceBuffer.connect(ctx.destination);
                    sourceBuffer.start();
                });

                setTimeout(()=>store.dispatch({type: TICK_METRONOME}), 60000/state.metronome.tempo);
            }

        }

       store.subscribe(() => { handleAction()
       });
    }


}

export default AudioContextHandler ;

