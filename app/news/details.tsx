"use client";
import React from "react";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const fetchNewsById = async (id: string) => {
  const res = await fetch(`/api/news/${id}`);
  if (!res.ok) {
    throw new Error("Error fetching news");
  }
  return res.json();
};

const NewsDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(["newsDetail", id], () => fetchNewsById(id as string), { enabled: !!id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching news</div>;
  }
  return (
    <div>
      <div className="text-blue-900 bg-gray-100">
        <Header />
      </div>
      <div className="bg-slate-300">
        <div className="banner container p-12">
          <p className="text-center text-blue-900 uppercase text-extrabold text-3xl">
            Contact
          </p>
          <div className="flex justify-center">
            <Link href="/" className="text-blue-900 text-center">
              Home/
            </Link>
            <Link href="/contact" className="text-blue-900">
              News
            </Link>
          </div>
        </div>
      </div>
      {news && (
        <div>
          <h2>{news.title}</h2>
          <p>{news.content}</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
