

class AudioContextHandler {

    constructor(store){

        let state = store.getState();
        let ctx = new AudioContext()

        const sourceBuffer = ctx.createBufferSource();
        const request = new XMLHttpRequest();
        request.open('GET','sample/Ratatat-Sunblocks.mp3', true);
        request.responseType = 'arraybuffer';
        request.onload = function() {
            let audioData = request.response;
            ctx.decodeAudioData(audioData, function(buffer) {
                sourceBuffer.buffer = buffer;
                sourceBuffer.loop= true ;

            });
        };
        request.send();
        sourceBuffer.connect(ctx.destination);

        sourceBuffer.start();


    }




}

export default AudioContextHandler ;

