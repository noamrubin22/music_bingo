import React from 'react';
import VolumeMuteRoundedIcon from '@material-ui/icons/VolumeMuteRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import './MuteButton.css';

function MuteButton({ isMuted, toggleMute }) {
  const Icon = isMuted ? VolumeMuteRoundedIcon : VolumeUpRoundedIcon;
  const onClick = () => toggleMute();

  return (
    <button className="mute-btn" onClick={onClick}>
      <Icon>mute</Icon>
    </button>
  );
}

export default MuteButton;
