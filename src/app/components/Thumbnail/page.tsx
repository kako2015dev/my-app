import styles from "./page.module.css";
import type  {TpVideo, VList} from '../MyTypes'

export default function Thumbnail(video: TpVideo): JSX.Element {
    return (
      <div>
        <span>{video.url}</span>
      </div>
    );
  }


