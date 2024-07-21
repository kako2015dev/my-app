import Image from "next/image";
import styles from "./page.module.css";
import Video from './components/Video/page'
import VideoList from './components/VideoList/page'
import type  {TpVideo, VList} from './components/MyTypes'
import vData  from './components/MyData'

export default function Home() {
  let vo: TpVideo = {url: 'aaa', title:'bbb' , description:'ccc'}
  


  return (
    <main className={styles.main}>
      <h1>hi all 123</h1>
      <Video  {...vo} ></Video>
      <hr />
      <VideoList videos = {vData.vsList}  emptyHeading = ""></VideoList>
    </main>
  );
}
