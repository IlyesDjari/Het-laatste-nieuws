import { useEffect, useState } from "react"
import VideoPlayer from "./VideoPlayer"
import axios from "axios"
import Loader from "./Loader";


function Fun () {

  const [videos, setVideos] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);
  const allVideos: any[] = [];


  let path = window.location.pathname;
  let url = path.substring(1);

  useEffect(() => {
    fetchData();
  }, [])
    function fetchData () {
         axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=500&playlistId=${url}&key=AIzaSyBagmGIMDlcE6wBBE9zFsbB4etWXHIxI_Q`)
       .then(response => {
         setVideos(response.data.items)
         setLoading(false);
       })
      }

   videos.map(({snippet}) => (
     allVideos.push(snippet.resourceId.videoId)
     ))

   if (isLoading) {
     return <Loader/>
   } else { return  (<VideoPlayer allVideos={allVideos} videos={videos} />)}

}

export default Fun;