

import Thumbnail from '../Thumbnail/page'
import LikeButton from '../LikeButton/page'
import type  {TpVideo, VList} from '../MyTypes'


import styles from "./page.module.css";


export default function Video( video1: TpVideo ) {
    return (
      <div>
        <Thumbnail {...video1} />
        <a href={video1.url}>
          <h3>{video1.title}</h3>
          <p>{video1.description}</p>
        </a>
        <LikeButton {...video1} />
      </div>
    );
  }