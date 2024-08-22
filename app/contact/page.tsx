import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import local from "../assets/images/icon_local.gif";
import local_white from "../assets/images/icon_local_white.gif";
import icon_call from "../assets/images/icon_call.gif";
import icon_call_white from "../assets/images/icon_call_white.gif";
import icon_mail from "../assets/images/icon_mail.gif";
import icon_mail_white from "../assets/images/icon_mail_white.gif";
export default function page() {
  return (
    <div>
      <div className="text-blue-900 bg-gray-100 shadow-lg">
        <Header></Header>
      </div>
      <div className=" bg-slate-300">
        <div className="banner container p-12">
          <p className="text-center text-blue-900 uppercase text-extrabold text-3xl">
            Liên hệ
          </p>
          <div className="flex justify-center">
            <Link href="/" className="text-blue-900 text-center">
              Trang chủ/
            </Link>
            <Link href="/contact" className="text-blue-900">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
      <section className="section-contact pt-16 pb-16">
        <div className="container">
          <div className="bs-row flex flex-row flex-wrap">
            <div className="bs-col">
              <div className="module module-contact">
                <div className="module-content">
                  <div className="bs-row row-sm-15 -ml-10 -mr-10">
                    <div className="bs-col lg-33-15 sm-50-15 flex gap-5">
                      /
                      <div className="contact-item aos-init aos-animate flex items-center pl-20 relative h-10 mb-5">
                        <div className="img-local w-24 h-24 relative bg-gray-300 rounded-full top-0 left-0 hover:bg-green-400 hover:shadow-2xl hover: shadow-green-500">
                          <Image
                            src={local}
                            alt="local"
                            className="base__img absolute  top-3/6 left-3/6 shadow-xl"
                          />
                          <Image
                            src={local_white}
                            alt="local_white"
                            className="hover__img absolute top-3/6 left-3/6 shadow-xl hidden"
                          />
                        </div>
                        <div className="text">
                          <p className="desc text-sm text-blue-600 pl-3">
                            Floor 2, Lot 8 +15 NV, Area HH1 O16<br></br> Tay Ho
                            Tay, P. Xuan La, Tay Ho<br></br> District, Hanoi
                            City.
                          </p>
                        </div>
                      </div>
                      <div className="contact-item aos-init aos-animate flex items-center pl-20 relative h-10 mb-5">
                        <div className="img-local w-24 h-24 relative bg-gray-300 rounded-full top-0 left-0 hover:bg-green-400 hover:shadow-2xl hover: shadow-green-500">
                          <Image
                            src={icon_call}
                            alt="local"
                            className="base__img absolute  top-3/6 left-3/6 shadow-xl"
                          />
                          <Image
                            src={icon_call_white}
                            alt="local_white"
                            className="hover__img absolute top-3/6 left-3/6 shadow-xl hidden"
                          />
                        </div>
                        <div className="text">
                          <p className="desc text-xl text-blue-600 pl-3">
                            024.6666.7069
                          </p>
                        </div>
                      </div>
                      <div className="contact-item aos-init aos-animate flex items-center pl-20 relative h-10 mb-5">
                        <div className="img-local w-24 h-24 relative bg-gray-300 rounded-full top-0 left-0 hover:bg-green-400 hover:shadow-2xl hover: shadow-green-500">
                          <Image
                            src={icon_mail}
                            alt="local"
                            className="base__img absolute  top-3/6 left-3/6 shadow-xl"
                          />
                          <Image
                            src={icon_mail_white}
                            alt="local_white"
                            className="hover__img absolute top-3/6 left-3/6 shadow-xl hidden"
                          />
                        </div>
                        <div className="text">
                          <p className="desc text-sm text-blue-600 pl-3">
                            vanphongace5.ace@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section-form relative overflow- bg-green-300 pb-12 w-full h-96">
        <div className="container">
          <div className="bs-row flex">
            <div className="bs-col">
              <div className="module module-form relative  pt-8 z-10 bg-green-300 ml-96 pl-10 h-96 ">
                <div className="module-header pb-4">
                  <p
                    className="title aos-init aos-animate font-sans uppercase text-2xl text-white mb-1"
                    // data-aos="fade-left"
                    // data-aos-delay={800}
                  >
                    Contact
                  </p>
                  <p
                    className="desc aos-init aos-animate"
                    // data-aos="fade-left"
                    // data-aos-delay={900}
                  >
                    Provide information so we can assist you
                  </p>
                </div>
                <div className="module-content ">
                  <div className="form-content">
                    <form
                      className="text-center outline-none"
                      method="POST"
                      // action="http://acefic5.vn/send-contact"
                      // acceptCharset="UTF-8"
                    >
                      <input
                        name="_token"
                        type="hidden"
                        defaultValue="81Li3JAt2wON61VNe6T9b2MEU4eyt0dQjCKmbJxS"
                      />
                      <div className="grid grid-wrap gap-3 grid-cols-2 mx-auto ">
                        <div className="bs-col xs-50-5">
                          <div
                            className="form-item aos-init aos-animate"
                            data-aos="fade-left"
                            data-aos-delay={1000}
                          >
                            <input
                              name="name"
                              type="text"
                              className="form__input rounded-sm p-2"
                              placeholder="Name"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div
                          className="bs-col xs-50-5 aos-init aos-animate"
                          data-aos="fade-left"
                          data-aos-delay={1100}
                        >
                          <div className="form-item">
                            <input
                              name="address"
                              type="text"
                              className="form__input"
                              placeholder="Address"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div
                          className="bs-col xs-50-5 aos-init aos-animate"
                          data-aos="fade-left"
                          data-aos-delay={1200}
                        >
                          <div className="form-item">
                            <input
                              name="email"
                              type="text"
                              className="form__input"
                              placeholder="Email"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div
                          className="bs-col xs-50-5 aos-init aos-animate"
                          data-aos="fade-left"
                          data-aos-delay={1300}
                        >
                          <div className="form-item">
                            <input
                              name="phone"
                              type="text"
                              className="form__input"
                              placeholder="Phone"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="bs-col xs-100-5 aos-init aos-animate mt-2 w-full"
                        data-aos="fade-left"
                        data-aos-delay={1400}
                      >
                        <div className="form-item">
                          <textarea
                            name="content"
                            className="form__textarea"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="bs-col xs-100-5 aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-delay={1500}
                      >
                        <div className="form-item ">
                          <button
                            className="form__btn rounded-md p-2  text-black"
                            type="submit"
                          >
                            Send message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map absolute h-full w-2/4 left-0 top-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.971825801364!2d105.76805841445471!3d21.033813292982703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b98dce4b6f%3A0x536956e4e6c376ea!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gQnl0ZVNvZnQgVmnhu4d0IE5hbQ!5e0!3m2!1sen!2s!4v1583742257690!5m2!1sen!2s"
            width={600}
            height={450}
            frameBorder={0}
            className="page_speed_381915631 abtolute top-0 left-0 w-full h-full"
            // allowFullScreen=""
          />
        </div>
      </section> */}
      <section className="section-form relative bg-green-400  w-full h-96 pb z-0">
        <div className="flex flex-wrap h-96">
          {/* Contact Form Section */}
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.971825801364!2d105.76805841445471!3d21.033813292982703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b98dce4b6f%3A0x536956e4e6c376ea!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gQnl0ZVNvZnQgVmnhu4d0IE5hbQ!5e0!3m2!1sen!2s!4v1583742257690!5m2!1sen!2s"
              frameBorder={0}
              className="w-ful h-full"
              height="900"
              width="1000"
              // allowFullScreen="true"
            />
          </div>
          <div className="w-full lg:w-2/5 bg-green-400 px-10 pt-8 ">
            <div className="text-white mb-6">
              <h2 className="text-2xl uppercase mb-1">Liên hệ</h2>
              <p>Cung cấp thông tin để chúng tôi có thể hỗ trợ bạn</p>
            </div>
            <form method="POST" className="text-center outline-none h-1/6">
              {/* CSRF Token */}
              {/* Assuming this is a Laravel application, include CSRF token */}
              {/* @csrf */}
              <div className="grid grid-cols-2 gap-4 mb-4 outline-none">
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  className="form-input mb-2 block w-full px-2 py-1 text-black rounded-sm outline-none opacity-50 z-10 placeholder-white"
                  // required=""
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-input rounded-sm p-2 text-black outline-none opacity-50 placeholder-white"
                  // required=""
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Tổ chức"
                  className="form-input rounded-sm p-2 text-black outline-none opacity-50 placeholder-white"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Số điện thoại"
                  className="form-input rounded-sm p-2 text-black outline-none opacity-50 placeholder-white "
                />
              </div>
              <textarea
                name="message"
                placeholder="Nội dung..."
                className="form-textarea w-full rounded-sm p-2 text-black outline-none opacity-50 placeholder-white"
                // required=""
                defaultValue={""}
              />
              <button
                type="submit"
                className="form-btn mt-4 rounded-sm p-2 uppercase bg-white text-black w-full outline-none"
              >
                Gửi tin
              </button>
            </form>
          </div>
          {/* Map Section */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
