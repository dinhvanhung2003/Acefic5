// import React from "react";
// import Image from "next/image";
// import { useQuery } from "@tanstack/react-query";
// import { fetchApi } from "../../utils/callApi";

// interface NewsItem {
//   id: number;
//   title: string;
//   url: string;
//   time: {
//     day: number;
//     month: number;
//   };
//   view: number;
//   content: string;
// }

// const Index: React.FC = () => {
//   const { data } = useQuery({
//     queryKey: ["news"],
//     ueryFn: fetchApi,
//   });

//   return (
//     <div className="news-container">
//       {typeof window !== "undefined" &&
//         data?.map((item: NewsItem) => (
//           <div className="news-item mb-14" key={item.id}>
//             <div className="img relative pb-96 hidden mb-5 border-2 border-gray-400">
//               <p className="news__time z-10 bg-blue-500 top-5 left-5 w-14 rounded-md m-0">
//                 <span className="time__day">{item.time.day}</span>
//                 <span className="time__month">{item.time.month}</span>
//               </p>
//               <Image src={item.url} alt={item.title} width={200} height={100} />
//             </div>
//             <div className="text">
//               <p className="news__info">
//                 <span className="news__author">
//                   <i className="far fa-user" />
//                   ACE5
//                 </span>
//                 <span className="news__visit">
//                   <i className="far fa-eye" /> {item.view}
//                 </span>
//               </p>
//               <h4 className="title">
//                 <a href={item.url} className="link text-blue-500">
//                   {item.title}
//                 </a>
//               </h4>
//               <p className="desc">{item.content}</p>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Index;
