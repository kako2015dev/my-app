

import Thumbnail from '../Thumbnail/page'
import LikeButton from '../LikeButton/page'

import styles from "./page.module.css";

type TpVideo = {
    url: string,
    title: string,
    description: string
 }

export default function Video( {video}  ) {
    return (
      <div>
        <Thumbnail video =  {video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <LikeButton video={video} />
      </div>
    );
  }