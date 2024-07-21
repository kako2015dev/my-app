import styles from "./page.module.css";
import type  {TpVideo, VList} from '../MyTypes'


export default function LikeButton(video: TpVideo ) {
    return (
      <div>
        <span>{video.url}</span>
      </div>
    );
  }