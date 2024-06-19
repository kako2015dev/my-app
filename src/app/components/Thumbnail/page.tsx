import styles from "./page.module.css";

// type TpVideo = {
//     url: string,
//     title: string,
//     description: string
//  }
export default function Thumbnail({video}) {
    return (
      <div>
        <span>{video.url}</span>
      </div>
    );
  }