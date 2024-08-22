export interface News {
  id: string;
  title: string;
  url: string;
  alt: string;
  time: {
    day: number;
    month: number;
  };
  view: number;
  content: string;
}
export interface Projects {
  id: number;
  title: string;
  url: string;
}
