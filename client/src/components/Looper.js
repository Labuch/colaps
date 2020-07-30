import React from 'react';
import styled from 'styled-components';
import Metronome from '../containers/Metronome';
import SampleList from '../containers/SampleSelectors';
import PatternMatrix from '../containers/PatternMatrix';
import Player from '../containers/Player';

const LooperContainer = styled.div`
  display: flex;
  width: 100%;
`;
const MusicBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`;

const Looper = () => {
  return (
    <LooperContainer>
      <SampleList />
      <MusicBox>
        <Metronome />
        <PatternMatrix />
        <Player />
      </MusicBox>
    </LooperContainer>
  );
};

export default Looper;
