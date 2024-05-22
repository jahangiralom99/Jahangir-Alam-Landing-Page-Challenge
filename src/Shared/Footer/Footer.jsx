/* eslint-disable react/prop-types */
import { FaDribbbleSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#00df9a]" size={30} />
);

const Footer = () => {
  const items = [
    // Social media icons

    { type: "icon", icon: FaInstagram },
    { type: "icon", icon: FaTwitterSquare },
    { type: "icon", icon: FaDribbbleSquare },
    // Footer sections
    {
      type: "section",
      title: "Support",
      items: [
        "Privacy Policy",
        "Terms & Conditions",
        "Product FAQs",
        "Company Support",
        "Manage Account",
      ],
    },
    {
      type: "section",
      title: "Support",
      items: [
        "About Us",
        "Blog Post",
        "Product Features",
        "Company Info",
        "Company Info",
      ],
    },
    {
      type: "section",
      title: "Communnity",
      items: [
        "Become an affiliate",
        "Help Center",
        "Product FAQs",
        "Our Fourms",
        "Product API",
      ],
    },
  ];

  return (
    <footer className=" ">
      <div className=" max-w-screen-xl flex flex-col md:flex-row mx-auto py-16 px-4  gap-8 text-gray-600">
        {/* Left section with brand and social icons */}
        <div className="flex-1">
          <img
            className="w-40 h-30"
            src="https://i.ibb.co/GkbH8Gy/Eye-Glass-1.png"
            alt=""
          />
          <p className="py-4">
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampde
          </p>
          <div className="flex gap-3 md:w-[75%] my-6">
            {/* Mapping over social icons and rendering the SocialIcon component */}
            {items.map((item, index) =>
              item.type === "icon" ? (
                <SocialIcon key={index} icon={item.icon} />
              ) : null
            )}
          </div>
        </div>
        {/* Right section with footer content organized in sections */}
        <div className="grid flex-1 gap-5 grid-cols-2 lg:grid-cols-3 justify-between mt-6">
          {/* Mapping over sections and rendering content */}
          {items.map((item, index) =>
            item.type === "section" ? (
              <div key={index}>
                <h6 className="font-bold text-[#383838] text-xl">
                  {item.title}
                </h6>
                <ul>
                  {/* Mapping over items in each section */}
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-2 text-sm text-[#383838]">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      </div>
      <hr />
      <div className="flex justify-between max-w-screen-xl mx-auto px-4 mt-12 mb-12">
        <h1>Copyright © 2023 All rights reserved by Eyeglass</h1>
        <div className="flex items-center gap-3">
          <p className="hover:underline">Privacy Policy</p>
          <p className="hover:underline">Terms of service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
