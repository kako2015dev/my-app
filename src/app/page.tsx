import Image from "next/image";
import styles from "./page.module.css";
import Video from './components/Video/page'
import VideoList from './components/VideoList/page'



export default function Home() {
  let vo = {url: 'aaa', title:'bbb' , description:'ccc'}
  let vsList = [
    {id: 1, url: 'aaa1', title:'bbb1' , description:'ccc1'},
    {id: 2, url: 'aaa2', title:'bbb2' , description:'ccc2'},
    {id: 3, url: 'aaa3', title:'bbb3' , description:'ccc3'},
    {id: 4, url: 'aaa4', title:'bbb4' , description:'ccc4'}
  ]



  return (
    <main className={styles.main}>
      <h1>hi all 123</h1>
      <Video video = {vo} ></Video>
      <hr />
      <VideoList videos = {vsList}  emptyHeading = ""></VideoList>

    </main>
  );
}
