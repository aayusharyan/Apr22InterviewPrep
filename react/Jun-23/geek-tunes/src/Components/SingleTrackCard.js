import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { changePlayingTrack } from '../slice';
import playingAnimation from '../playing-animation.gif';
import AudioWave from './AudioWave';

const SingleTrackCard = ({ trackDetail, index }) => {
  const dispatch = useDispatch();
  const isPlaying = useSelector(state => state.playingTrack == trackDetail.id);


  const playSong = () => {
    dispatch(changePlayingTrack(trackDetail.id));
  }

  return (
    <>
      <div onClick={playSong} className={`w-full sm:w-5/12 md:w-1/4 lg:w-1/5 border-2 flex items-center hover:bg-blue-100 hover:border-blue-700 ${isPlaying ? "border-blue-700 bg-blue-100" : "border-gray-700"} rounded-md p-3 cursor-pointer`}>
        <span>{index}.</span>
        <span className='ml-2'>{trackDetail.name}</span>
        {isPlaying ? (
          <div className='h-9 w-9 mr-2 ml-auto inline-block'>
            <AudioWave />
          </div>
          // <img src={playingAnimation} alt="Playing animation" className=""/>
        ) : (
          <span className='text-4xl ml-auto justify-self-end -mt-1 cursor-pointer hover:text-blue-500'><FontAwesomeIcon icon={faCirclePlay} /></span>
        )}
      </div>
    </>
  )
}

export default SingleTrackCard