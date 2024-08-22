"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../../utils/callApi";
import { News } from "../../Types/index";
import Image from "next/image";

const Index = () => {
  const { data, isError, isLoading } = useQuery<News[]>({
    queryKey: ["news"],
    queryFn: () => fetchApi("news"),
    suspense: true,
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      {data?.map((item) => (
        <div className="container relative gap-5 z-0" key={item.id}>
          <Image
            src={item.url}
            alt="new1"
            className="rounded-sm w-full z-0 relative"
            width={400}
            height={300}
          />
          <div className="absolute bg-white-300 w-4/5 z-50 rounded-sm m-auto left-10 top-40 space-x-0 h-82 hover:shadow-lg p-4 z-100 text-gray-400 shadow-md">
            <div className="time  text-sm">
              {item.time.day}, {item.time.month}, 2020 | {item.view}
            </div>
            <h3 className="text-lg  hover:text-blue-500 hover:pointer text-black">
              {item.title}
            </h3>
            <br></br>
            <div className="flex items-center gap-1">
              <p className="text-sm text-black">Xem thêm</p>
              <button className="bg-green-400 rounded-sm p-3 w-10 h-10 shadow-md relative">
                <span className="top-2 left-4 absolute">+</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Index;
