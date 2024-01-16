'use client';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import DeployImage from '../../public/static/images/deploy.png';
import EnvCardImage from '../../public/static/images/env-card.png';
import TypeImage from '../../public/static/images/type.png';
import ModalImage from '../../public/static/images/modal.png';

import BigModal1Image from '../../public/static/images/big_modal_1.png';
import BigModal2Image from '../../public/static/images/big_modal_2.png';
import BigModal3Image from '../../public/static/images/big_modal_3.png';
import BigModal4Image from '../../public/static/images/big_modal_4.png';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const handleScroll = async () => {
      const htmlElement = document.documentElement;
      const percentOfScreenHeightScrolled =
        htmlElement.scrollTop / htmlElement.clientHeight;

      htmlElement.style.setProperty(
        '--scroll',
        Math.min(percentOfScreenHeightScrolled * 100, 100).toString()
      );

      const scrollVal = Math.min(percentOfScreenHeightScrolled * 100, 100);

      const section1 = document.getElementById('section1');
      const section2 = document.getElementById('section2');
      const section3 = document.getElementById('section3');
      const section4 = document.getElementById('section4');

      const scrollPosition = window.scrollY;

      if (section1 && scrollPosition < section1.offsetTop * 1.2) {
        setActiveSection(1);
      } else if (section2 && scrollPosition < section2.offsetTop * 1.2) {
        setActiveSection(2);
      } else if (section3 && scrollPosition < section3.offsetTop * 1.2) {
        setActiveSection(3);
      } else if (section4 && scrollPosition < section4.offsetTop * 1.2) {
        setActiveSection(4);
      } else {
        setActiveSection(0);
      }

      await setScrollY(scrollVal);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-[200vh]">
      {/* Header Section */}
      <header
        className={cn(
          'flex items-center justify-between sticky top-0 h-10 p-20 z-40'
        )}
        style={{
          width: Math.round(scrollY) > 50 ? `${Math.round(scrollY)}%` : '50%',
          transform: `translate(0, ${Math.max(-25, -scrollY)}%)`,
        }}
      >
        <div>
          <svg
            id="wordmark"
            width="128"
            height="40"
            viewBox="0 0 128 40"
            fill="none"
            className="text-primary"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.5873 0V5.94155H61.6458V0H67.5873Z"
              fill="currentColor"
            ></path>
            <path
              d="M67.8011 30.8814H62.2309V14.1066H59.6406V9.19655H67.8011V30.8814Z"
              fill="currentColor"
            ></path>
            <path
              d="M127.141 30.8814V0.788525H121.571V30.8814H127.141Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9218 13.2172C9.95901 14.9777 9.47764 17.0132 9.47764 19.3238C9.47764 21.6619 9.95901 23.7112 10.9218 25.4716C11.912 27.2046 13.2874 28.5662 15.0478 29.5565C16.8083 30.5192 18.8438 31.0006 21.1544 31.0006C23.4375 31.0006 25.4455 30.5192 27.1785 29.5565C28.939 28.5662 30.3143 27.2046 31.3046 25.4716C32.2948 23.7112 32.79 21.6619 32.79 19.3238C32.79 17.0132 32.2948 14.9777 31.3046 13.2172C30.3143 11.4567 28.939 10.0951 27.1785 9.13239C25.4455 8.16964 23.4375 7.68826 21.1544 7.68826C18.8438 7.68826 16.8083 8.16964 15.0478 9.13239C13.2874 10.0951 11.912 11.4567 10.9218 13.2172ZM26.2295 15.7754C26.6971 16.7656 26.9309 17.9484 26.9309 19.3238C26.9309 20.7267 26.6971 21.937 26.2295 22.9547C25.7619 23.9725 25.1017 24.7565 24.249 25.3066C23.3963 25.8567 22.3647 26.1318 21.1544 26.1318C19.9166 26.1318 18.8576 25.8567 17.9773 25.3066C17.1246 24.7565 16.4645 23.9725 15.9968 22.9547C15.5567 21.937 15.3367 20.7267 15.3367 19.3238C15.3367 17.9484 15.5567 16.7656 15.9968 15.7754C16.4645 14.7576 17.1246 13.9736 17.9773 13.4235C18.8576 12.8459 19.9166 12.557 21.1544 12.557C22.3647 12.557 23.3963 12.8459 24.249 13.4235C25.1017 13.9736 25.7619 14.7576 26.2295 15.7754Z"
              fill="currentColor"
            ></path>
            <path
              d="M71.4837 19.4888C71.4837 17.1232 71.9789 15.0602 72.9691 13.2997C73.9594 11.5118 75.3347 10.1364 77.0952 9.17365C78.8556 8.18339 80.9187 7.68826 83.2843 7.68826C86.09 7.68826 88.4144 8.37594 90.2574 9.7513C92.2093 11.1788 93.5391 13.316 93.9296 15.702L88.1726 15.9312C87.8161 15.0427 87.1711 14.1227 86.4614 13.6298C85.4711 12.9146 84.3021 12.557 82.9542 12.557C81.1662 12.557 79.7771 13.1759 78.7869 14.4138C77.8241 15.6516 77.3428 17.302 77.3428 19.3651C77.3428 20.8229 77.5766 22.0608 78.0442 23.0785C78.5393 24.0963 79.2132 24.8665 80.066 25.3891C80.9187 25.9118 81.9089 26.1731 83.0367 26.1731C84.5221 26.1731 85.7187 25.788 86.6264 25.0178C87.3271 24.4201 87.8425 23.4543 88.1726 22.5788L94.0974 22.808C93.6927 24.5546 93.0673 26.1534 91.8253 27.4934C90.78 28.6212 89.4872 29.5014 87.9468 30.1341C86.4064 30.7393 84.7009 31.0418 82.8304 31.0418C80.5748 31.0418 78.5943 30.5742 76.8889 29.639C75.1834 28.6762 73.8493 27.3284 72.8866 25.5954C71.9514 23.8625 71.4837 21.8269 71.4837 19.4888Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.3842 26.463H49.7588C54.986 26.463 57.5358 28.932 57.5358 32.5504C57.5358 37.4458 52.8611 40 45.8066 40C38.667 40 35.0547 37.7013 35.0547 34.168C35.0547 31.9771 37.0201 30.6413 38.0516 30.6413V29.2264C37.1347 28.9971 35.9897 28.0802 35.9897 26.6758C35.9897 24.8879 36.9054 23.4957 39.0831 22.9307V21.6619C36.447 20.5158 35.6072 18.4359 35.6072 16.2464C35.6072 11.6063 39.9754 8.24334 45.8825 8.24334C47.478 8.24334 49.4135 8.51 50.5749 8.91972L53.0659 5.94155L56.8481 8.91972L54.5092 11.8759C55.5088 12.9906 56.0729 14.6294 56.0729 16.3741C56.0729 20.929 51.7472 23.9088 46.01 23.9088C44.9476 23.9088 42.9167 23.7811 41.9393 23.5257C41.3868 23.9088 41.2168 24.3771 41.2168 24.8879C41.2168 25.9947 42.1093 26.463 43.3842 26.463ZM50.6834 16.0761C50.6834 13.5848 48.0924 12.5265 45.8825 12.5265C43.7152 12.5265 41.0816 13.4235 41.0816 16.0761C41.0816 18.7287 43.6727 19.6257 45.925 19.6257C48.1349 19.6257 50.6834 18.5673 50.6834 16.0761ZM40.3669 33.0186C40.3669 34.8066 42.5768 35.4025 45.5516 35.4025C49.6313 35.4025 51.1612 34.466 51.1612 32.9335C51.1612 31.5287 50.1413 31.1882 48.8239 31.1882H42.8317C41.0469 31.1882 40.3669 32.0396 40.3669 33.0186Z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M104.619 17.8705L111.386 16.4233V16.0963C111.386 14.7484 111.042 13.7444 110.354 13.0842C109.666 12.4241 108.621 12.094 107.218 12.094C105.843 12.094 104.743 12.4516 103.917 13.1668C103.208 13.7578 102.773 14.6029 102.613 15.702H97.1379L97.192 15.2711C97.3845 13.6756 97.9347 12.314 98.8424 11.1862C99.7776 10.0585 100.988 9.19198 102.473 8.58682C103.986 7.98166 105.705 7.67908 107.631 7.67908C110.602 7.67908 112.94 8.39427 114.645 9.82464C116.351 11.2275 117.203 13.3181 117.203 16.0963V24.8436V30.29H111.71V26.5765H110.437C110.134 27.9244 109.35 29.0109 108.085 29.8361C106.847 30.6338 105.389 31.0327 103.711 31.0327C101.813 31.0327 100.245 30.4825 99.0074 29.3822C97.7971 28.2819 97.192 26.8378 97.192 25.0499C97.192 23.1794 97.7834 21.6527 98.9662 20.4699C100.176 19.2871 102.061 18.4206 104.619 17.8705ZM106.641 20.8L111.386 19.8434V23.0693C111.166 23.7295 110.767 24.3347 110.189 24.8848C109.639 25.435 108.993 25.8613 108.25 26.1639C107.507 26.4665 106.751 26.6178 105.981 26.6178C105.073 26.6178 104.33 26.4115 103.752 25.9989C103.202 25.5587 102.927 24.8848 102.927 23.9771C102.927 23.2619 103.189 22.6292 103.711 22.0791C104.234 21.5289 105.21 21.1026 106.641 20.8Z"
              fill="currentColor"
            ></path>
            <path
              d="M5.5702 30.8814V0.788525H0V30.8814H5.5702Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            id="mark"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `scale(${Math.max(0.75, 1 - scrollY / 100)}) rotate(${
                scrollY / 100
              }turn)`,
            }}
          >
            <path
              d="M21.8791 14.7796C21.8136 14.8645 21.6777 14.8204 21.6746 14.7131L21.2606 0.000840082L18.9785 0L18.5458 14.983C18.5427 15.0902 18.4068 15.1343 18.3413 15.0493L9.20889 3.18924L7.50028 4.429L16.0995 17.0199C16.16 17.1084 16.076 17.2239 15.9732 17.1937L1.37349 12.909L0.774414 14.754L15.3565 19.9526C15.4575 19.9886 15.4575 20.1315 15.3565 20.1675L0.817088 25.3605L1.36426 27.0424L16.4321 22.6114C16.535 22.5811 16.619 22.6967 16.5585 22.7852L7.71538 35.717L9.0078 36.656L17.776 25.2846C17.8415 25.1996 17.9774 25.2438 17.9804 25.351L18.3932 39.9987L21.8164 40L22.2048 26.5678C22.2079 26.4605 22.3438 26.4164 22.4093 26.5014L30.5807 37.1125L33.1205 35.2696L25.338 23.8733C25.2775 23.7847 25.3615 23.6692 25.4644 23.6995L38.6718 27.5877L39.5729 24.821L26.2598 20.0611C26.1588 20.025 26.1589 19.8823 26.2598 19.8462L39.542 15.1021L38.7124 12.5521L24.8481 16.6292C24.7451 16.6594 24.6611 16.5438 24.7217 16.4553L32.8625 4.55086L30.8777 3.10883L21.8791 14.7796Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </header>

      {/* Screen  */}
      <div
        id="screens"
        className="fixed w-full left-0 right-0 p-0 m-0 leading-[0] z-20 pointer-events-none"
        style={{
          transition: 'transform 0.1s ease-out',
          willChange: 'transform, bottom',
          bottom: `${Math.min(0, -10 + scrollY)}%`,
          transform: `translateX(calc(${Math.min(
            -25 + scrollY,
            0
          )}%)) scale(${Math.min(1, 0.5 + scrollY / 100)})`,
        }}
      >
        <figure
          style={{
            transform: `${
              activeSection === 1 ? 'translateY(0)' : 'translateY(100%)'
            }`,
          }}
        >
          <Image src={BigModal1Image} alt="Big Modal 1" />
        </figure>
        <figure
          style={{
            transform: `${
              activeSection === 2 ? 'translateY(20%)' : 'translateY(100%)'
            }`,
          }}
        >
          <Image src={BigModal2Image} alt="Big Modal 2" />
        </figure>
        <figure
          style={{
            transform: `${
              activeSection === 3 ? 'translateY(20%)' : 'translateY(100%)'
            }`,
          }}
        >
          <Image src={BigModal3Image} alt="Big Modal 3" />
        </figure>
        <figure
          style={{
            transform: `${
              activeSection === 4 ? 'translateY(20%)' : 'translateY(100%)'
            }`,
          }}
        >
          <Image src={BigModal4Image} alt="Big Modal 4" />
        </figure>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="fixed top-0 flex items-start justify-between p-0 w-full h-full"
        style={{
          transform: `translateY(${Math.max(-100, -scrollY)}%)`,
          transition: 'transform 0.3s ease',
        }}
      >
        <div className="relative w-1/2 h-full p-20 text-left flex items-start justify-center flex-col">
          <h1 className="mt-20 text-[110px] font-[560] mb-[0.3em] leading-[1em]">
            Build Better Backends
          </h1>
          <p className="block text-[28px] my-7">
            The only platform that gives AI the ability to autonomously build
            web services.
          </p>
          <div
            id="heroLeftBg"
            className="absolute -z-10 top-0 bottom-0 left-0 right-0 bg-[#F8FAF9]"
            style={{ opacity: 1 - scrollY / 50 }}
          ></div>
        </div>
        <div className="relative w-1/2 h-full flex items-start flex-col justify-center">
          <div className="elements">
            <figure
              className="top-[-90px] left-[15%] w-[680px] h-[364px]"
              style={{
                transform: `translateY(${Math.min(400, scrollY * 4)}px)`,
                transition: 'transform 0.3s ease',
              }}
            >
              <Image src={DeployImage} alt="Deploy" />
            </figure>
            <figure
              className="top-[28%] left-[-90px] w-[615px] h-[349px]"
              style={{
                transform: `translateX(${Math.min(100, -scrollY)}px)`,
                transition: 'transform 0.3s ease',
              }}
            >
              <Image src={EnvCardImage} alt="Env Card" />
            </figure>
            <figure
              className="right-[-75px] bottom-[-100px] w-[370px] h-[590px]"
              style={{
                transform: `translateX(${Math.min(300, scrollY * 3)}px)`,
                transition: 'transform 0.3s ease',
              }}
            >
              <Image src={TypeImage} alt="Type" />
            </figure>
            <figure
              className="bottom-[-200px] w-[462px] h-[515px]"
              style={{
                transform: `translateY(${Math.min(800, -scrollY * 8)}px)`,
                transition: 'transform 0.3s ease',
              }}
            >
              <Image src={ModalImage} alt="Modal" />
            </figure>
          </div>
          <div
            className="absolute -z-20 top-0 bottom-0 left-0 right-0"
            style={{
              background:
                'linear-gradient(210.65deg, #989D9D 0%, #BDC2C2 100%)',
              opacity: 1 - scrollY / 50,
            }}
          ></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="section1" className="mt-[80%]">
        <h1 className="text-[110px] leading-[1em] font-[560] mb-[0.3em]">
          Completely Visual
        </h1>
        <p className="block text-[28px] my-7">
          Never touch the command line, from provision to production.
        </p>
      </section>
      <section id="section2">
        <h1 className="text-[110px] leading-[1em] font-[560] mb-[0.3em]">
          Full Stack
        </h1>
        <p className="block text-[28px] my-7">
          Never manage infrastructure again.
          <br />
          One click gets you: a database, APIs, deployments, hosting, etc.
        </p>
      </section>
      <section id="section3">
        <h1 className="text-[110px] leading-[1em] font-[560] mb-[0.3em]">
          Launch Faster
        </h1>
        <p className="block text-[28px] my-7">
          Logical can get systems to market in minutes instead of weeks.
        </p>
      </section>
      <section id="section4">
        <h1 className="text-[110px] leading-[1em] font-[560] mb-[0.3em]">
          Build With AI
        </h1>
        <p className="block text-[28px] my-7">
          AI teammates can write, test, and deploy code on their own.
        </p>
      </section>

      {/* Final Section */}
      <section id="final">
        <h1 className="text-[110px] leading-[1em] font-[560] mb-[0.3em]">
          Get Started
        </h1>
        <p className="block text-[28px] my-7">Sign up for the beta today.</p>
        <div className="flex items-center justify-center">
          <button className="bg-primary text-white rounded-full py-3 px-6 text-[28px]">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}
