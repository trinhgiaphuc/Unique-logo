import * as React from 'react';

const features = {
  basic: [
    '- Logo',
    '- Bảng trình bày ý nghĩa logo',
    '- File gốc đuôi Ai vector',
    '- Các file hỗ trợ: PNG, JPEG, SVG, PDF',
    '- Mockup files',
  ],

  standard: [
    '- Tất cả quyền lợi của gói basic',
    '- App icon/favicon',
    '- Họa tiết riêng cho thương hiệu (ví dụ minh họa)',
    '- Social kit (FB cover, profile pic, website cover)',
  ],
  premium: [
    '- Tất đặc quyền của gói basic',
    '- Tất đặc quyền của gói standard',
    '- Bộ quy chuẩn logo (ví dụ minh họa)',
  ],
};

const PricingPage = () => {
  return (
    <div>
      <section className="pt-20 pb-24 2xl:py-40">
        <div className="container mx-auto px-4">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="mb-8 md:mb-14 text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
              CÁC GÓI THIẾT KẾ
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center -mx-3">
              <Card
                bg="bg-zinc-600"
                border="border-[#dca54c]"
                features={features.basic}
                pack="Gói Basic"
              />

              <Card
                bg="bg-zinc-600"
                border="border-[#dca54c]"
                features={features.standard}
                pack="Gói Standard"
              />

              <Card
                bg="bg-blue-600"
                border="border-[#dca54c]"
                features={features.premium}
                pack="Gói Premium"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

const Tick = () => (
  <span className="mr-6">
    <svg
      width="20"
      height="16"
      viewbox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
        fill="white"
      ></path>
    </svg>
  </span>
);

const Card = ({ bg, border, pack, features }) => (
  <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0 text-white">
    <div className={`px-12 py-16 ${bg} rounded-3xl`}>
      <div className={`pb-8 mb-14 border-b ${border}`}>
        <div className="flex justify-center items-center px-3 ">
          <h3 className="text-4xl text-center font-bold font-heading">
            {pack}
          </h3>
        </div>
      </div>
      <ul className="text-lg  mb-16">
        {features.map(feature => (
          <li key={feature} className="flex items-center mb-8">
            <Tick />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <a
          className="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold "
          href="#"
        >
          Liên Hệ Ngay
        </a>
      </div>
    </div>
  </div>
);
