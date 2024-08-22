"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import VnFlag from "../../assets/images/vnflag.png";
import { AiFillPhone, AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import styled from "styled-components";
import Logo from "../../assets/images/logo.gif";

const HeaderStyled = styled.header`
  .hotline {
    font-family: "Avo";
  }
  .nav-header {
    font-family: "Opensanslight";
    padding: 25px;
    .menu-list__item:hover,
    .menu-list__item:active {
      background-color: #65c065;
    }
    .menu-list__item::before,
    .menu-list__item::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 10px;

      display: none;
    }

    .menu-list__item:hover::before,
    .menu-list__item:active::before,
    .menu-list__item:hover::after,
    .menu-list__item:active::after {
      display: block;
    }

    .menu-list__item::before {
      top: -9%;
      left: -5%;
      border-left: 2px solid #32f532;
      border-top: 2px solid #32f532;
    }

    .menu-list__item::after {
      bottom: -9%;
      right: -5%;
      border-right: 2px solid #32f532;
      border-bottom: 2px solid #32f532;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="border-2 border-gray-300 border-t-0 ">
        <div className="container p-2 flex justify-between items-center">
          <div className="flex gap-3 ">
            <AiFillPhone className="icon_phone_header mt-0.5" />
            <div className="uppercase italic font-bold text-blue-900 hotline">
              hotline: 1900 2863
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <form className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="rounded-xl p-3 w-42 h-5 outline-none text-sm"
              ></input>
              <AiOutlineSearch className="icon_search absolute top-1 right-3"></AiOutlineSearch>
            </form>

            <div className="w-12 h-8 bg-white p-1 flex items-center">
              <Image src={VnFlag} alt="VietNamFlag" className="w-6 h-4" />
              <BsChevronDown className="icon_drop ml-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex justify-between items-center ">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        <nav className="sticky top-0  flex gap-6 items-center nav-header">
          <Link
            className="text-white-900 font-bold  p-2 menu-list__item relative"
            href="/"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            TRANG CHỦ
          </Link>
          <Link
            className="text-white-900 font-bold   p-2 menu-list__item relative"
            href="/"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            GIỚI THIỆU
          </Link>
          <Link
            href=""
            className="text-white-900 font-bold   p-2 menu-list__item relative"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            LĨNH VỰC
          </Link>
          <Link
            href=""
            className="text-white-900 font-bold p-2 menu-list__item relative"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            DỰ ÁN
          </Link>
          <Link
            className="text-white-900 font-bold p-2 menu-list__item relative"
            href="/news"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            TIN TỨC
          </Link>
          <Link
            href=""
            className="text-white-900 font-bold p-2 menu-list__item relative"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            TUYỂN DỤNG
          </Link>
          <Link
            className="text-white-900  font-bold p-2 menu-list__item relative"
            href="/contact"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            LIÊN HỆ
          </Link>
        </nav>
      </div>
    </HeaderStyled>
  );
}
