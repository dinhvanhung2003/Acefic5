"use client";
import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../../utils/callApi";
import { Projects } from "../../Types";
import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Index() {
  const { data, isError, isLoading } = useQuery<Projects[]>({
    queryKey: ["projects"],
    queryFn: () => fetchApi("projects"),
    suspense: true,
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }
  const StyleProject = styled.div`
    .list_project {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
  `;
  return (
    <>
      <div className="container">
        <div className="flex flex-row w-full gap-4 justify-between">
          <div>
            <p className="uppercase text-green-500">Dự án mới nhất</p>
            <p className="uppercase text-blue-500 font-bold text-2xl">
              Dự án<br></br> nổi bật
            </p>
            <br></br>
            <nav>
              <ul className="uppercase text-blue-800 indent-4 flex flex-col gap-4">
                <li>Tất cả</li>
                <li>Thương mai</li>
                <li>Giáo dục</li>
                <li>Bệnh viện</li>
                <li>Thường trú</li>
                <li>Văn phòng</li>
                <li>Tái thiết</li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-row">
            <div className=" float-right flex gap-2">
              <div className="bg-green-500 rounded-full h-8 p-2">
                <FaLongArrowAltLeft />
              </div>
              <div className="bg-green-500 rounded-full h-8 p-2">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
          <StyleProject>
            <div>
              <div className="list_project grid justify-between gap-6">
                {data?.map((item) => (
                  <div className=" " key={item.id}>
                    <div className=" ">
                      <Image
                        className=""
                        src={item.url}
                        alt="img_project"
                        width="250"
                        height="400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StyleProject>
        </div>
      </div>
    </>
  );
}
