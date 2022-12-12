import YouTube, { YouTubeProps } from 'react-youtube';
import '../layouts/videoplayer.scss';
import {useReducer } from "react"


function VideoPlayer(props : any)  {
  
  const initialState = { count: 0 };
  const reducer = (state: any, action : any) => {
    if( state.count + action.payload === 0 ) {
      return { count: 0 };
    } else {
    switch (action.type) {
      case 'increment':
        return { count: state.count + action.payload };
      case 'decrement':
        return { count: state.count - action.payload };
      case 'reset':
        return { count: 0 };
      default:
        return state;
    }}
  };
  const [state, dispatch] = useReducer(reducer, initialState); 

  const opts: YouTubeProps['opts'] = {
    height: '460',
    width: '460',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls:0,
      disablekb:1,
      showinfo: 0,
      rel : 0,
      modestbranding: 1,
    },
  };

  const date = props.videos[state.count].snippet.publishedAt
  const newDate = []
  newDate.push(date.substring(8,10), date.substring(5,7), date.substring(0,4));
  const finalDate = `${newDate[0]}/${newDate[1]}/${newDate[2]}`

  return (
    <><>

      <YouTube key={props.allVideos[state.count]} className='playingVideo' opts={opts} videoId={props.allVideos[state.count]} /></>

      {state.count > 0 ? 
      <button className='prev' onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
      <img src={require('../images/prev.png')} alt="volgendevideo" />
        Vorige video
      </button> 
      : null
      }

{state.count < 35 ? 
 <button className='next' onClick={() => dispatch({ type: 'increment', payload: 1 })}>
 Volgende video
 <img src={require('../images/next.png')} alt="volgendevideo" />
</button>
: null 
}

      <div className='infoContent'>
      <h2 className='title'>{props.videos[state.count].snippet.title}</h2>
      <div className='channelInfo'>
      <img className='image' src={props.videos[state.count].snippet.thumbnails.high.url} alt="" />
      <div className='channelTime'>
      <h3>{props.videos[state.count].snippet.channelTitle}</h3>
      <h4>{finalDate}</h4>
      </div>
      </div>
      <p className='description'>{ props.videos[state.count].snippet.description ? props.videos[state.count].snippet.description : "De gebruiker heeft geen beschrijving voor deze video" }</p>
      </div></>

  )
}

export default VideoPlayer;