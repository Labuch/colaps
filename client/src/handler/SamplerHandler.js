import {FETCH_SAMPLES, PLAY_SAMPLE} from '../actions/types';


class SamplerHandler {

    constructor(store){

        let ctx = new AudioContext();
        let audioBuffers = {};

        function handleAction() {
            let state = store.getState()

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