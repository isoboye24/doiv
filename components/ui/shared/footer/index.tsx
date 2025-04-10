import QuickLink from './quick-link';
import BottomFooter from './bottom-footer';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
import SocialMedia from './social-media';
import {
  faFacebookF,
  faInstagram,
  faXing,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const color = '#e78d00';
  return (
    <>
      <footer className="border-t footer-bg md:px-9 sm:px-4 pt-9 pb-1">
        <div className="grid gap-4 md:grid-cols-3 p-4 mb-6">
          <div className="text-gray-400 px-3 mb-5 sm:mb-0 col-span-2/3">
            <div className="flex justify-center items-center">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="Logo"
                className="mb-8"
              />
            </div>
            <p className="px-2 lg:px-15 text-justify text-base lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="grid gap-2 grid-cols-2 text-center">
            <div className="">
              <h2 className="text-gray-300 mb-6">Legal</h2>
              <p className="mb-3">
                <QuickLink linkText="Privacy Policy" url="/privacy-policy" />
              </p>
              <p className="mb-3">
                <QuickLink
                  linkText="Terms of Service"
                  url="/terms-of-service"
                />
              </p>
              <p className="mb-3">
                <QuickLink linkText="Data Protection" url="/data-protection" />
              </p>
            </div>

            <div className="">
              <h2 className="text-gray-300 mb-6">Quick Links</h2>
              <div className="">
                <p className="mb-3 ">
                  <QuickLink linkText="About Us" url="/about" />
                </p>
                <p className="mb-3">
                  <QuickLink linkText="Contact Us" url="/contact" />
                </p>
                <p className="mb-3">
                  <QuickLink linkText="Projects" url="/projects" />
                </p>
                <p className="mb-3">
                  <QuickLink linkText="Skills" url="/about" />
                </p>
                <p className="mb-3">
                  <QuickLink linkText="Blog" url="/blog" />
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="justify-center">
              <h2 className="mb-6 text-gray-300">Follow me on:</h2>
              <div className="flex items-center justify-center gap-5">
                <SocialMedia
                  icon={faFacebookF}
                  bgColor={color}
                  size={20}
                  url="https://www.facebook.com/isoboye.vincent/"
                />
                <SocialMedia
                  icon={faInstagram}
                  bgColor={color}
                  size={20}
                  url="https://www.facebook.com/isoboye.vincent/"
                />
                <SocialMedia
                  icon={faXing}
                  bgColor={color}
                  size={20}
                  url="https://www.facebook.com/isoboye.vincent/"
                />
              </div>
            </div>
          </div>
        </div>

        <BottomFooter />
      </footer>
    </>
  );
};

export default Footer;
