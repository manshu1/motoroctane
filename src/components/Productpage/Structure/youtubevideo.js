import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestVideos = ({ channelLink }) => {
  const [latestVideos, setLatestVideos] = useState([]);

  useEffect(() => {
    const channelId = channelLink.split('/channel/')[1];

    axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
      params: {
        part: 'contentDetails',
        id: channelId,
        key: 'AIzaSyBk1NXZvrVBokXeTXZSmdAb_G6wLf6Gay8',
      },
    })
    .then(response => {
      const playlistId = response.data.items[0].contentDetails.relatedPlaylists.uploads;

      // Fetch all videos from the uploads playlist (handle pagination)
      fetchAllVideos(playlistId);
    })
    .catch(error => {
      console.error('Error fetching videos:', error);
    });
  }, [channelLink]);

  const fetchAllVideos = async (playlistId, nextPageToken = null) => {
    const maxResults = 5;
    let videos = [];

    try {
      while (true) {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
            part: 'snippet',
            playlistId: playlistId,
            maxResults: maxResults,
            pageToken: nextPageToken,
            key: 'AIzaSyBk1NXZvrVBokXeTXZSmdAb_G6wLf6Gay8',
          },
        });

        videos = videos.concat(response.data.items);

        if (!response.data.nextPageToken || videos.length >= maxResults) {
          break;
        }

        nextPageToken = response.data.nextPageToken;
      }

      setLatestVideos(videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  if (!latestVideos.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='youtube-viddeoleft'>
      <div className='youtube-video-hori'>YOUTUBE VIDEOS</div>
      <div className="video-list">
        {latestVideos.map(video => (
            <div className='oldeversion-videos'>
          <div key={video.id} className="video-item">
            <iframe
              title={video.snippet.title}
              width="213"
              height="115"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className='videoinfos'>
            <h3 className='video-title'>{video.snippet.title}</h3>
            <p className='video-descreption'>{video.snippet.description}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestVideos;
