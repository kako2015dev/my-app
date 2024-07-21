import Video from '../Video/page'
import type  {TpVideo, VList} from '../MyTypes'




export default function VideoList( props: VList ) {
    const count = props.videos.length;
    let heading = props.emptyHeading;
    if (count > 0) {
      const noun = count > 1 ? 'Videos' : 'Video';
      heading = count + ' ' + noun;
    }
    return (
      <section>
        <h2>{heading}</h2>
        {props.videos.map(video =>
          <Video key={video.id} {...video} />
        )}
      </section>
    );
  }

  