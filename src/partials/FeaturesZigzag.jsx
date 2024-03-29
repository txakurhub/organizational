import React from "react";
import { FormattedMessage } from "react-intl";

function FeaturesZigzag() {
  return (
    <section id="work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              <FormattedMessage id="prod.lema" />
            </div>
            <h1 className="h2 mb-4">
              <FormattedMessage id="prod.title" />
            </h1>
            <p className="text-xl text-gray-400">
              <FormattedMessage id="prod.subtitle" />
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* SOFFYSOFT IMG RIGHT */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <a href="https://github.com/No-Country/s7-27-m-desafioreactnative">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="https://res.cloudinary.com/ddkurzft6/image/upload/v1682120941/pawsitive/nop_h1v8vc.jpg"
                    width="540"
                    height="405"
                    alt="Features 01"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    <FormattedMessage id="prod.paw" />
                  </div>
                  <h3 className="h3 mb-3">Pawsitive</h3>
                  {/* <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.sf.1" />
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.sf.2" />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.sf.3" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SIN FRONTERAS IMG LEFT  */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <a href="https://github.com/No-Country/s6-06-t-react-native">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="https://res.cloudinary.com/ddkurzft6/image/upload/v1677860396/sin%20fronteras/sfpresentation_zsuybi.png"
                    width="540"
                    height="405"
                    alt="Features 02"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    {/* <FormattedMessage id="prod.ad" /> */} Social Network App
                  </div>
                  <h3 className="h3 mb-3">Sin Fronteras App</h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.sf.1" />
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.sf.2" />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.sf.3" />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.sf.4" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SOFFYSOFT IMG RIGHT */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <a href="https://soffysoft.com/">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="https://res.cloudinary.com/ddkurzft6/image/upload/v1675870176/soffysoft/Soffysoft_tucbup.png"
                    width="540"
                    height="405"
                    alt="Features 01"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    <FormattedMessage id="prod.itSolutions" />
                  </div>
                  <h3 className="h3 mb-3">Soffysoft Web Page</h3>
                  {/* <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.ss.1" />
                      </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.ss.2" />
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        <FormattedMessage id="wf.ss.3" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GRAVITY IMG LEFT */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <a href="https://www.agenciagravity.com/">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="https://res.cloudinary.com/ddkurzft6/image/upload/v1675350726/gravity/Captura_2_wdef9m.png"
                    width="540"
                    height="405"
                    alt="Features 02"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    <FormattedMessage id="prod.ad" />
                  </div>
                  <h3 className="h3 mb-3">Gravity Web Page</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    <FormattedMessage id="wf.gt.desc" />
                  </p>
                </div>
              </div>
            </div>

            {/* GORENT IMG RIGHT */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <a href="https://github.com/No-Country/app-real-state-c8-46-ft-pern">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="https://res.cloudinary.com/ddkurzft6/image/upload/v1670814470/gorent/gorent_kmrhxc.jpg"
                    width="540"
                    height="405"
                    alt="Features 03"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    <FormattedMessage id="prod.mobile" />
                  </div>
                  <h3 className="h3 mb-3">GoRent App</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    <FormattedMessage id="wf.gr.txt" />
                  </p>
                </div>
              </div>
            </div>

            {/* ECOMMERCE IMG LEFT */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <a href="https://sneakers-xxre.vercel.app/">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto"
                    src="https://res.cloudinary.com/ddkurzft6/image/upload/v1662052185/sneakers/homesneakersgithub_nsztst.jpg"
                    width="540"
                    height="405"
                    alt="Features 02"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    E-Commerce
                  </div>
                  <h3 className="h3 mb-3">Sneakers E-Commerce</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    <FormattedMessage id="wf.sn.desc" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;
