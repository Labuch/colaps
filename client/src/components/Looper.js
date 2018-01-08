import  React from 'react';

import Metronome from './Metronome';
import SampleList from './SampleList';
import PatternMatrix from './PatternMatrix';
import Player from './Player';

const Looper = () => {

    return (
        <div >
            <SampleList/>
            <Metronome/>
            <PatternMatrix/>
            <Player />

        </div>
    );
};

export default Looper;