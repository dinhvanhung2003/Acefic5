"use client";
import { useState } from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Image from "next/image";
import AboutUsImage from "./assets/images/about_img.gif";
import ServiceIMG from "./assets/images/serviceIMG.jpg";
import tuyendung from "./assets/images/tuyendung.jpg";
import branch_item1 from "./assets/images/branch-item1.jpg";
import branch_item2 from "./assets/images/branch-item2.jpg";
import branch_item3 from "./assets/images/branch-item3.jpg";
import { Suspense } from "react";
import NewHome from "./components/NewHome/index";
import Projects from "./components/Projects/index";

import styled from "styled-components";
const StyledDiv = styled.div.attrs({
  content: "relative bg-white p-4 rounded-md shadow-lg text-blue-800",
})`
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    border: 2px solid #2b6cb0;
    border-left: none;
    border-bottom-right-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    opacity: 0.5;
  }
`;
const HomeStyled = styled.div`
  .home {
    background-image: url(${"http://acefic5.vn/storage/banners/banner-imggif.png"});
    background-repeat: no-repeat;
    background-size: 62%;
    background-position: top right;
    height: 2000px;
    .btn_see_more::before,
    .btn_see_more::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 10px;
    }

    .btn_see_more::before {
      top: -9%;
      left: -5%;
      border-left: 2px solid #32f532;
      border-top: 2px solid #32f532;
    }
    .btn_see_more::after {
      bottom: -9%;
      right: -5%;
      border-right: 2px solid #32f532;
      border-bottom: 2px solid #32f532;
    }
    .breaking_el::after {
      content: "";
      position: absolute;
      width: 90px;
      height: 6px;
      top: 30%;
      left: 100%;
      margin-left: 10px;
      background-color: #808080;
    }
    .partner {
      /* background-image: url("./assets/images/bg_partner.png"); */
      background: white;
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
`;
export default function index() {
  return (
    <HomeStyled>
      <div className="home flex flex-col gap-10">
        <Header />
        <div className="container mt-48 ">
          <h1 className="text-blue-900  font-bold-100 text-5xl uppercase font-sans">
            From concept to<br></br> creation.
          </h1>
          <br></br>
          <p className="text-blue-900">
            It is a long established fact that a reader will be distracted by
            the
            <br></br> readable content.
          </p>
          <br></br>
          <button className="bg-green-500 p-2 w-35 text-base btn_see_more relative">
            Xem thêm
          </button>
        </div>
        <div className="container flex mt-96 gap-10 text-3xl">
          <Image src={AboutUsImage} alt="about-us" />
          <div className="">
            <h1 className="text-blue-900 uppercase font-bold mt-5">
              Về chúng tôi
            </h1>
            <div className="w-5 h-5 bg-lime-400 mt-4 relative  breaking_el"></div>
            <p className="pt-11 leading-6 text-blue-900 italic mb-34 text-base w-96">
              Scarcely on striking packages by so property in delicate. Up or
              well must less rent read walk so be. Easy sold at do hour sing
              spot. Any meant has cease too the decay. Since party burst am it
              match. By or blushes between besides offices noisier as. Sending
              do brought winding compass in. Paid day till shed only fact age
              its end.
            </p>
            <button className="bg-green-400 p-2 text-sm btn_see_more relative">
              Xem thêm
            </button>
          </div>
        </div>
        <div className="container">
          <h1 className="uppercase text-blue-900 text-4xl font-sans font-bold">
            Lĩnh vực hoạt động
          </h1>
          <div className="w-5 h-5 bg-lime-400 mt-4 relative  breaking_el"></div>
          <div className="flex justify-between gap-10 items-center">
            <div className="md-45-15 mt-32">
              <div className="text pl-11 pt-1">
                <div className="mb-7">
                  <div className="head">
                    <p className="title font-sans uppercase text-blue-900 relative ml-3 z-10 text-xl font-bold">
                      <span className="number -top-10 -left-11 absolute z-0 text-extrabold text-gray-400 text-6xl">
                        01
                      </span>
                      THIẾT KẾ KIẾN TRÚC{" "}
                    </p>
                  </div>

                  <div className="content px-2.5 py-2.4 text-xs leading-5 z-10  bg-white p-4  rounded-md half-border-left">
                    <p className="desc mb-1 text-blue-800">
                      {" "}
                      Scare on striking packages by so property in delicate.Up
                      or well<br></br>must less rent read walk so be.Easy sold
                      at do hour sing spot.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text pl-11 pt-9">
                <div className="mb-7">
                  <div className="head">
                    <p className="title font-sans uppercase text-blue-900 relative ml-3 z-10 text-xl  font-bold">
                      <span className="number -top-10 -left-11 absolute z-0 text-extrabold text-gray-400 text-6xl">
                        02
                      </span>
                      THIẾT KẾ KIẾN TRÚC{" "}
                    </p>
                  </div>
                  <div className="content px-2.5 py-2.4 text-xs leading-5 z-10  bg-white p-4  rounded-md half-border-left">
                    <p className="desc mb-1 text-blue-800">
                      Scare on striking packages by so property in delicate.Up
                      or well<br></br>must less rent read walk so be.Easy sold
                      at do hour sing spot.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text pl-11 pt-9">
                <div className="mb-7">
                  <div className="head">
                    <p className="title font-sans uppercase text-blue-900 relative ml-3 z-10 text-xl  font-bold">
                      <span className="number -top-10 -left-11 absolute z-0 text-extrabold text-gray-400 text-6xl">
                        03
                      </span>
                      THIẾT KẾ KIẾN TRÚC{" "}
                    </p>
                  </div>
                  <div className="content px-2.5 py-2.4 text-xs leading-5 z-10  bg-white p-4  rounded-md half-border-left">
                    <p className="desc mb-1 text-blue-800">
                      {" "}
                      Scare on striking packages by so property in delicate.Up
                      or well<br></br>must less rent read walk so be.Easy sold
                      at do hour sing spot.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text pl-11 pt-9">
                <div className="mb-7">
                  <div className="head">
                    <p className="title font-sans uppercase text-blue-900 relative ml-3 z-10 text-xl  font-bold">
                      <span className="number -top-10 -left-11 absolute z-0 text-extrabold text-gray-400 text-6xl">
                        04
                      </span>
                      THIẾT KẾ KIẾN TRÚC{" "}
                    </p>
                  </div>
                  <div className="relative bg-white p-4 rounded-md shadow-lg text-blue-800">
                    <div className="content px-2.5 py-2.4 text-xs leading-5 z-10  bg-white p-4  rounded-md half-border-left">
                      <p className="desc mb-1 text-blue-800">
                        {" "}
                        Scare on striking packages by so property in delicate.Up
                        or well<br></br>must less rent read walk so be.Easy sold
                        at do hour sing spot.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text pl-11 pt-9">
                <div className="mb-7">
                  <div className="head">
                    <p className="title font-sans uppercase text-blue-900 relative ml-3 z-10 text-xl  font-bold">
                      <span className="number -top-10 -left-11 absolute z-0 text-extrabold text-gray-400 text-6xl">
                        05
                      </span>
                      THIẾT KẾ KIẾN TRÚC{" "}
                    </p>
                  </div>
                  <div className="content px-2.5 py-2.4 text-xs leading-5 z-10  bg-white p-4  rounded-md half-border-left">
                    <p className="desc mb-1 text-blue-800">
                      {" "}
                      Scare on striking packages by so property in delicate.Up
                      or well<br></br>must less rent read walk so be.Easy sold
                      at do hour sing spot.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Image src={ServiceIMG} alt="service_img" />
          </div>
        </div>
        <Suspense>
          <Projects></Projects>
        </Suspense>
        <div className="container flex gap-12 ">
          <Image src={tuyendung} alt="tuyen_dung" />
          <div className="font-sans  text-blue-900 ">
            <h1 className="uppercase font-bold text-5xl mt-8 ">Tuyển dụng</h1>
            <p className="pt-9 text-sm leading-6 mb-6">
              Resources exquisite set arranging moonlight sem him household
              <br></br> had. Months had too ham cousin remove far spirit. She
              procuring the<br></br> why performed continual improving.
            </p>
            <button className="rounded-2xl uppercase bg-green-400 p-3 text-white">
              Nộp đơn
            </button>
          </div>
        </div>

        <div className="pt-36  container  ">
          <div className="module-header">
            <p className="title  font-sans text-5xl uppercase mb-6 text-blue-900 text-center">
              Tin Mới Nhất
            </p>
            <span className="style " />
          </div>
          <div className="flex container gap-5">
            <Suspense>
              <NewHome></NewHome>
            </Suspense>
          </div>
          <p className="style__section"> News </p>
          <div className="h-10 w-16 rounded-lg">
            <a href="#" className=" ">
              View more <span className="p-10" />
            </a>
          </div>
          {/* <div className="map">
            <canvas
              id="map"
              width={1140}
              height={711}
              style={{ width: 1140, height: "711.656px" }}
            />
          </div> */}
        </div>
        <div className="container -mb-32 z-10 rounded-md partner mt-48">
          <div className="m-auto rounded-lg z-10 shadow-xl">
            <div className="pt-8 text-center head">
              <p className="uppercase font-sans text-xl text-extrabold text-gray-500">
                ĐỐI TÁC KHÁCH HÀNG
              </p>
            </div>
            <div className="content text-center pt-5 over overflow-hidden">
              <div className="branch-slide">
                <div className="item  flex justify-around ">
                  <div className="branch-item bg-white shadow-xl relative top-0 mb-10 p-4 text-center">
                    <a
                      href="https://vingroup.net/"
                      className="link w-full h-full block left-0 top-0 z-10 "
                    >
                      <Image src={branch_item1} alt="Vingroup" className="" />
                    </a>
                  </div>
                  <div className="branch-item bg-white shadow-xl relative top-0 mb-10 p-4 text-center">
                    <a
                      href="https://vingroup.net/"
                      className="link w-full h-full block left-0 top-0 z-10 "
                    >
                      <Image src={branch_item2} alt="Vingroup" className="" />
                    </a>
                  </div>
                  <div className="branch-item bg-white shadow-xl relative top-0 mb-10 p-4 text-center">
                    <a
                      href="https://vingroup.net/"
                      className="link w-full h-full block left-0 top-0 z-10 "
                    >
                      <Image src={branch_item3} alt="Vingroup" className="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
        <Footer />
      </div>
    </HomeStyled>
  );
}
