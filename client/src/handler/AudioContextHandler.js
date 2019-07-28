import {FETCH_SAMPLES, START_METRONOME, TICK_METRONOME} from '../actions/types';
import _ from 'lodash';

class AudioContextHandler {



   constructor(store){


        let ctx = new AudioContext();

        let audioBuffers = {};

        function handleAction() {
           let state = store.getState()

            if (state.lastAction.type === FETCH_SAMPLES)
            {
                state.lastAction.payload.forEach((sample)=>{
                    var binarydata = sample.buffer.split(',')[1];
                    var buf = Buffer.from(binarydata, 'base64');
                    var arrayBuffer = new ArrayBuffer(buf.length);
                    var view = new Uint8Array(arrayBuffer);
                    for (var i = 0; i < buf.length; ++i) {
                        view[i] = buf[i];
                    }
                    ctx.decodeAudioData(arrayBuffer, function(bufferdecoded) {
                        audioBuffers[sample._id] = bufferdecoded;
                    });
                });
            }

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

