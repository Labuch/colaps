import {FETCH_SAMPLES, PLAY_SAMPLE} from '../actions/types';
import { } from '../actions/types';


class SamplerHandler {

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
            if (state.lastAction.type === PLAY_SAMPLE)
            {
                const sourceBuffer = ctx.createBufferSource();
                sourceBuffer.buffer = audioBuffers[state.lastAction.payload];
                sourceBuffer.connect(ctx.destination);
                sourceBuffer.start();
            }

        }
        store.subscribe(() => { handleAction()
        });
    }

}

export default  SamplerHandler ;