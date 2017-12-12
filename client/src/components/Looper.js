import  React from 'react';

import Metronome from './Metronome';
import SampleList from './SampleList';
import PatternMatrix from './PatternMatrix';
import Player from './Player';

const Looper = () => {

    return (
        <div style={{textAlign:'center'}}>
            <Metronome/>
            <SampleList/>
            <PatternMatrix/>
            <Player />

        </div>
    );
};

export default Looper;