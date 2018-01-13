import {START_METRONOME,  TICK_METRONOME } from '../actions/types'
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
            if (state.lastAction.type === START_METRONOME )
            {
                setTimeout(()=>store.dispatch({type: TICK_METRONOME}), 60000/(state.metronome.tempo * state.metronome.mode /4 ));

            }
            if (state.lastAction.type === TICK_METRONOME && state.metronome.running)
            {
                setTimeout(()=>store.dispatch({type: TICK_METRONOME}),  60000/(state.metronome.tempo * state.metronome.mode /4));

                const sourceBuffers = [];
                _.forIn( state.patterns, (value, key) =>{

                    if (!state.samples[key]["muted"])
                    {
                        const sourceBuffer = ctx.createBufferSource();
                            if (value[state.metronome.count])
                            {
                                sourceBuffer.buffer = audioBuffers[state.samples[key]["sample"]];
                                sourceBuffers.push(sourceBuffer);
                            }
                    }
                });
                sourceBuffers.forEach((sourceBuffer) =>{
                    sourceBuffer.connect(ctx.destination);
                    sourceBuffer.start();
                });


            }

        }

       store.subscribe(() => { handleAction()
       });
    }


}

export default AudioContextHandler ;

