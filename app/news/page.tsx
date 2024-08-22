"use client";
import React from "react";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Image from "next/image";
import { fetchApi } from "../utils/callApi";
import styled from "styled-components";
import Link from "next/link";
import { News } from "../Types/index";
import { useQuery } from "@tanstack/react-query";
import newImage from "../assets/images/villa.png";
import { useRouter } from "next/router";

const NewStyled = styled.div``;

const Page = () => {
  // const router = useRouter();
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
    <div>
      <div className="text-blue-900 bg-gray-100">
        <Header />
      </div>
      <div className=" bg-slate-300">
        <div className="banner container p-12">
          <p className="text-center text-blue-900 uppercase text-extrabold text-3xl">
            News
          </p>
          <div className="flex justify-center">
            <Link href="/" className="text-blue-900 text-center">
              Home/
            </Link>
            <Link href="/news" className="text-blue-900">
              News
            </Link>
          </div>
        </div>
      </div>
      <section className="section-news pt-16 pb-14">
        <div className="container">
          <div className="news-main">
            <div className="news-collection grid grid-cols-2 gap-3">
              {data?.map((item, index) => (
                <div className="news-item mb-14" key={index}>
                  <div className="image relative text-xs text-center">
                    <Image src={newImage} alt="News" width="450" height="400" />
                    <div className="date-badge bg-sky-500 w-15 p-1 absolute top-3 left-4">
                      <span className="date-day">{item.time.day}</span>
                      <br></br>
                      <span className="date-month">{item.time.month}</span>
                    </div>
                  </div>
                  <div className="text">
                    <div className="meta-info">
                      <span className="date-posted">{item.time.month}</span> |
                      <span className="view-count">{item.view}</span>
                    </div>
                    <h4 className="title mt-4 text-justify">
                      <Link href={`/news/${item.id}`} passHref>
                        <span className="link hover:text-blue-500 text-xl text-black w-full font-bold relative pointer">
                          {item.title}
                        </span>
                      </Link>
                    </h4>
                    <p className="summary text-black">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
