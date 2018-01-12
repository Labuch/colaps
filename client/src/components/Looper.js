import  React from 'react';

import Metronome from '../containers/Metronome';
import SampleList from '../containers/SampleList';
import PatternMatrix from '../containers/PatternMatrix';
import Player from '../containers/Player';

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