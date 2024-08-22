import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo_footer.png";
export default function index() {
  return (
    <div className=" bg-blue-900 z-0">
      <div className="container pt-40 gap-5 flex items-center justify-around">
        <div>
          <Image src={Logo} alt="Logo" />
          <p className="mt-5 w-80 text-justify italic">
            ACEFIC5 là Nhà thầu chính thi công tại các dự án lớn tại Hà Nội, Đà
            Nẵng và nhiều tỉnh thành thành phố trên cả nước. Công ty Cổ phần Đầu
            tư và Xây dựng ACE5 Thái Bình Dương luôn đáp ứng được các yêu cầu
            khắt khe của các Chủ đầu tư, luôn đem đến cho khách hàng và xã hội
            các sản phẩm với chất lượng tốt nhất, tiến độ nhanh nhất mà vẫn đảm
            bảo tính an toàn và hiệu quả đầu tư trên mỗi công trình....
          </p>
          <br></br>
          <p className=" text-md  m-0 indent-0">
            Copyright 2019 Acefic5. All Rights Reserved
          </p>
        </div>
        <div className="-my-70">
          <h1 className="uppercase text-bold underline">Dịch vụ</h1>
          <a>Primacy policy</a>
          <br></br>
          <a>Terms and conditions</a>
          <br></br>
          <a>Copyright Policy</a>
        </div>
        <div className="-my-70">
          <h1 className="uppercase text-bold underline">Dịch vụ</h1>
          <a>Primacy policy</a>
          <br></br>
          <a>Terms and conditions</a>
          <br></br>
          <a>Copyright Policy</a>
        </div>
      </div>
    </div>
  );
}
