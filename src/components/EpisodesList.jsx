import React from "react";
import map from "lodash.map";
import { Link } from "react-router-dom";

const EpisodesList = ({ episodes, selectEpisode, playing, index }) => {
  return (
    <div className="episodes-list">
      {map(episodes, (episode, i) => {
        return (
          <div className="episode" key={i}>
            <div className="thumbnail">
              <i
                onClick={() => selectEpisode(episode, i)}
                className={
                  playing && index === i
                    ? "far fa-pause-circle"
                    : "far fa-play-circle"
                }
              />
              <img src={episode.image_url} alt="episode" />
            </div>
            <Link to={`/episodes/${episode.episode_id}`}>
              <h3>{episode.title}</h3>
            </Link>
            <p>Show Duration: {formatTime(episode.duration / 1000)}</p>
          </div>
        );
      })}
    </div>
  );
};

const formatTime = seconds => {
  const sec = parseInt(seconds % 60);
  const min = parseInt((seconds / 60) % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
};

export default EpisodesList;
