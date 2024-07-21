type TpVideo = {
    id?: number,
    url: string,
    title: string,
    description: string
 }

 type VList = {
    videos: TpVideo[],
    emptyHeading: string
  }


  export type {TpVideo ,VList}