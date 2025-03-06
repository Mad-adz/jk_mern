import { Link } from "react-router-dom";
import { jaikosha } from "../assets/images";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-emerald-700">
        <div className="container">
          <div className="px-6 py-12">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-4">
                <div>
                  <Link to="/">
                    <div className="flex items-center space-x-2 text-2xl font-medium">
                      <span>
                        <img
                          src={jaikosha}
                          alt="AI Logo"
                          width="64"
                          height="64"
                          className="w-16"
                        />
                      </span>
                      <span className="text-white">
                        Jai Kosha <br />
                        Foundation
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="max-w-sm lg:pr-16 text-md text-white">
                  Enhance productivity and efficiency with cutting-edge
                  artificial intelligence solutions for your business
                  operations.
                </div>
                <div className="flex space-x-3">
                  <Link
                    to=""
                    // target="_blank"
                    className="text-white hover:text-white text-xl font-semibold"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebookF />
                  </Link>
                  <Link
                    to=""
                    // target="_blank"
                    className="text-white hover:text-white text-xl font-semibold"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram />
                  </Link>
                  <Link
                    to=""
                    // target="_blank"
                    className="text-white hover:text-white text-xl font-semibold"
                  >
                    <span className="sr-only">Youtube</span>
                    <FaYoutube />
                  </Link>
                  <Link
                    to=""
                    // target="_blank"
                    className="text-white hover:text-white text-xl font-semibold"
                  >
                    <span className="sr-only">Youtube</span>
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to=""
                    // target="_blank"
                    className="text-white hover:text-white text-xl font-semibold"
                  >
                    <span className="sr-only">Youtube</span>
                    <FaXTwitter />
                  </Link>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Quick Links
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link
                          to="/"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="autobiography"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Autobiography
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="contact"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Resources
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link
                          to="meditation-practices"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Meditation Practices
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="superior-yoga"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Superior Yoga
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="audio-video-sermons"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Audio & Video Sermons
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="spiritual-devices"
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Spiritual Devices
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Services
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Aagamam
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Gurukula Vaalkai
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Jothidakkalai
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Yendra Prayogam
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Inner Alignement Yoga
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 text-white">
                      Others
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="text-md leading-6 text-gray-300 hover:text-gray-50"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
              <div className="text-md text-center text-white">
                Copyright © 2024 - Jai Kosha. All Rights Reserved.
                {/* Crafted with <span className="text-gray-50">♥</span> by AI enthusiasts at
                <a rel="noopener" href="/">
                  AIOps.
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;