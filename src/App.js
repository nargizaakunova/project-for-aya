/* eslint-disable no-useless-escape */
import { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import { PAST_EVENTS } from './index';
import { FUTURE_EVENTS } from './index';

const isMobileOrTablet = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log('isMobileOrTablet', isMobileOrTablet());
    console.log(PAST_EVENTS);
    setIsMobile(() => isMobileOrTablet());
  }, []);

  const onSwiper = (swiper) => {
    console.log(swiper);
    swiper.slideTo(0);
  };

  return (
    <Fragment>
      <Swiper
        speed={1200}
        className="swiper-container"
        modules={[FreeMode, Mousewheel, Keyboard]}
        loopedSlides={15}
        loop={true}
        slidesPerView="auto"
        grabCursor="true"
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        freeMode={{
          enabled: true,
        }}
        mousewheel={true}
        onSwiper={onSwiper}
      >
        {/* BREAK */}
        <SwiperSlide>
          <div className="thumbContainer sources">
            <div>
              <a href="./sources.html">List of sources</a>
            </div>
            {/* <div className="projectInfo">
              <div className="timeline"></div>
              <h2 className="serif">Break</h2>
            </div> */}
          </div>
        </SwiperSlide>
        {/* PAST EVENTS */}
        {PAST_EVENTS.map((event) => (
          <SwiperSlide key={`past-${event.id}`}>
            <div className={`thumbContainer past ${event.className || ''}`}>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {event.title}
              </p>
              <img src={event.image} alt="Event in timeline" />

              {/* <div className="projectInfo">
                <div className="timeline"></div>
                <h2 className="serif">{event.year}</h2>
              </div> */}
            </div>
            <div className="projectInfo">
              <div className="timeline"></div>
              <h2 className="serif">{event.year}</h2>
            </div>
          </SwiperSlide>
        ))}

        {/* MAIN SLIDE */}
        <SwiperSlide className="swiper-slide first-slide">
          <h1>Gender equality</h1>

          <svg
            className={isMobile ? 'rotate90degrees' : ''}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            clipRule="evenodd"
            viewBox="0 0 247 390"
          >
            <path
              id="wheel"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              d="M123.359 79.775v72.843"
            ></path>
            <path
              id="mouse"
              fill="none"
              stroke="#000"
              strokeWidth="20"
              d="M236.717 123.359C236.717 60.794 185.923 10 123.359 10 60.794 10 10 60.794 10 123.359v143.237c0 62.565 50.794 113.359 113.359 113.359 62.564 0 113.358-50.794 113.358-113.359V123.359z"
            ></path>
          </svg>
          <p>{!isMobile ? 'Scroll up/down' : 'Swipe left/right'}</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 800 400"
          >
            <defs>
              <symbol
                id="wind-one"
                preserveAspectRatio="none"
                viewBox="-10 -10 220 100"
              >
                <path
                  fill="none"
                  stroke="#0A6463"
                  strokeMiterlimit="10"
                  d="M198.36 63.26c-16.89-13.33-36.29-25.2-85.14-3.35S5.9 85.45.39 38.61 50.27-7.5 60.57 14.63s-1.76 40.88-18.98 34.01-16.72-31.2.53-21.04"
                ></path>
              </symbol>
              <symbol
                id="wind-two"
                preserveAspectRatio="none"
                viewBox="-10 -10 220 100"
              >
                <path
                  fill="none"
                  stroke="#0A6463"
                  strokeMiterlimit="10"
                  d="M126.18 5.53C67.68-4.05 10.55-3.91 1.37 28.27S31.9 75.31 42.82 70.31s21.94-15.4 16.15-28.88-31.06-7-31.51 0S23.82 54.15 35 54.55"
                ></path>
              </symbol>
              <symbol
                id="wind-three"
                preserveAspectRatio="none"
                viewBox="-10 -10 220 100"
              >
                <path
                  fill="none"
                  stroke="#0A6463"
                  strokeMiterlimit="10"
                  d="M166.93 65.99c-16.84-8.37-57.49 2.93-73.86 6.55S11.32 99.15.95 41.63C-2.49 22.5 3.78 10.82 13.74 4.87c20-11.92 54.9-.71 56.08 19.88 1.77 30.86-29.6 38.59-42.23 13.86-8.94-17.5 21.22-15.44 15.86-4.22"
                ></path>
              </symbol>
              <symbol id="hair-bottom" viewBox="40 320 500 400">
                <path
                  fill="#FFF"
                  d="M470.25 367.38c37.15 8.98 41.59 17.87 47.17 36.74 5.58 18.88 16.26 75.61-139.08 116s-280.07-13.8-312.46-72.96-18.92-101.11-18.92-101.11 5 73.89 67.55 95.75c94.49 33.01 218.16-107.68 355.74-74.42z"
                ></path>
                <path
                  fill="none"
                  d="M462.41 372.75c39.75 8.75 50.35 24.11 41.07 56.59s-127.7 77.97-174.21 82.32-103.4 26.04-202.46-12.43"
                ></path>
                <path
                  fill="none"
                  d="M475.65 381.69c12.82 4.52 23.19 13.66 23.21 25.85.02 17.46-10.46 26.92-36.45 41.21C407 479.22 310.11 512.77 229 510.46S91.1 477.34 91.1 477.34"
                ></path>
                <path
                  fill="none"
                  d="M475.5 385.78c13.42 11.31 14.75 12.73 16.25 18.35 1.5 5.62 4.44 9.88-7.78 18.88-12.22 9-142.01 59.25-201.86 65.5s-160.71-1.29-190.22-32.3-39.49-38.81-45.98-85.13c-1.16-8.32.42-22.56.42-22.56"
                ></path>
                <path
                  fill="none"
                  d="M457.56 378.11C383 385 225.5 460.82 167.59 460.73c-57.91-.1-88.33-27.57-99.19-44.47s-19.47-28.15-21.43-70.2"
                ></path>
                <path
                  fill="none"
                  d="M459.98 391.54c-72.98 13.13-188.56 84.44-242.75 84.02-54.2-.43-80.09 4.09-137.66-31.56"
                ></path>
              </symbol>
              <symbol id="hair-middle" viewBox="40 320 500 400">
                <path
                  fill="#FFF"
                  d="M484.53 402.8c-1.77 19.51-82.62 62.35-104.5 68.09-21.88 5.74-88.75 18.2-135.89-19.01s-49.18-74.04-86.83-79.13-42.8.53-42.8.53 22.5-16.02 62.49-5.82 36.97 21.87 70.99 23.99c51.65 3.22 125.63-57.1 169.13-47.78 43.51 9.31 70.27 27.59 67.41 59.13z"
                ></path>
                <path
                  fill="none"
                  d="M458.78 423c-33.11-.34-47.46 7.3-83.62 22.65-36.16 15.35-88.61 7.56-136.23-15.42-23.26-11.23-35.83-21.27-35.83-21.27 25.42 25.82 62.29 51.65 120.02 52.83s97.65-14.74 125.98-33.12"
                ></path>
                <path
                  fill="none"
                  d="M440 393.75c-25.42 30.6-54.21 47.76-98.33 46.32s-76.35-6.83-111.01-23.12-40.56-25.4-40.56-25.4"
                ></path>
                <path
                  fill="none"
                  d="M455.46 384c-33.19.66-78.63 39.84-106.79 42.65-28.16 2.81-84.06 3.34-129.31-22.25-18.64-10.54-38.79-22.04-38.79-22.04"
                ></path>
                <path
                  fill="none"
                  d="M465 384c-50.32-21.39-90.41-7.14-124.04 13.26s-89.44 11.9-137.87-7.83c-48.43-19.73-31.51-21.63-86.14-18.37"
                ></path>
                <path
                  fill="none"
                  d="M468.37 380.3c-100.7-39.3-160.13 10.83-189.91 16.43-29.79 5.6-100.44-22.65-122.09-28.66-9.7-2.69-35.19 1.71-35.19 1.71"
                ></path>
              </symbol>
              <symbol id="body" viewBox="40 320 500 400">
                <path
                  fill="#CB42A4"
                  d="M437.5 629.45c1.44 22.42 9.09 41.22 9.09 41.22h9.91s-2.29-34.04.94-40.36-19.94-.86-19.94-.86zM464.38 629.12c2.62 9.25 4.89 26.79 3 38.42 4.61.77 9.88 1.34 9.88 1.34s.88-8.22 1.62-10.88c.59-2.1 2.88-15.38 2.88-19.88s-.76-10.87-.76-10.87l-16.62 1.87z"
                ></path>
                <ellipse
                  cx="420.65"
                  cy="447.7"
                  fill="#FBD6B1"
                  rx="5.96"
                  ry="5.5"
                  transform="rotate(-16.63 420.673 447.71)"
                ></ellipse>
                <ellipse
                  cx="490.38"
                  cy="442.15"
                  fill="#FBD6B1"
                  rx="7.14"
                  ry="6.17"
                  transform="rotate(15.515 490.416 442.195)"
                ></ellipse>
                <ellipse
                  cx="406.87"
                  cy="581.15"
                  fill="#FBD6B1"
                  rx="10.16"
                  ry="12.53"
                  transform="rotate(32.77 406.842 581.117)"
                ></ellipse>
                <ellipse
                  cx="505.24"
                  cy="580.4"
                  fill="#FBD6B1"
                  rx="10.66"
                  ry="12.82"
                  transform="rotate(-27.567 505.184 580.35)"
                ></ellipse>
                <path
                  fill="#e1d2ff"
                  d="M481 472.84c14.67 10.83 24.8 44.49 30 57.02 5.2 12.53 13.28 38.69 7.47 43.78-5.8 5.09-16.17 6.34-29.32 5.19-13.15-1.15-74.33 3.89-74.33 3.89s-22.47-4.76-25.81-15.73 12.71-21.64 15.98-26.15c3.28-4.51 15.59-33.33 16.85-45.01s14.82-19.61 14.82-19.61l44.34-3.38z"
                ></path>
                <path
                  fill="#e1d2ff"
                  d="M435.64 500.46c1.83 10.88-1.81 29.93-11.23 50.9-9.41 20.97-15.91 53.84-15.52 62.11.39 8.27 1.91 8.83 1.91 8.83s20.06 9.73 49.22 9.38 39.31-2.45 45.98-9.4c0-22.62-8-37.97-13.66-61.28s-7.45-39.99-6.45-64.89"
                ></path>
                <path
                  fill="none"
                  d="M459.12 489.02c-.29 9.87-7.46 14.53-9.33 40.83-1.66 23.33 2.13 80.85 7.35 90.74s5.28 11.06 5.28 11.06"
                ></path>
                <path fill="none" d="M446.79 510.2L456.58 520.56"></path>
                <path fill="none" d="M444.63 517.91L457.94 512"></path>
                <path fill="none" d="M456.09 541.86L444.79 553.61"></path>
                <path fill="none" d="M445.14 544.93L455.57 553.12"></path>
                <path fill="none" d="M456.8 573.59L444.32 585.32"></path>
                <path fill="none" d="M443.75 575.37L456.5 583.23"></path>
                <path fill="none" d="M459.05 607.14L449.9 616.86"></path>
                <path fill="none" d="M446.59 607.14L461.07 614.51"></path>
                <path
                  fill="#FECB0D"
                  d="M446.59 690.61c-.3-8.3-4.95-24.5-4.95-24.5 5.58 3.05 15.99 1.57 17.41 0-2.14 6.53-2.56 21.1-2.47 24.5-4.58.06-9.99 0-9.99 0zM465.53 664.48c-1.67 9.83.8 22.45 2.97 26.15 5.5-.3 11.21-2.58 11.21-2.58-2.24-7.9 2.96-20.51 2.96-20.51-6.58 1.26-17.14-3.06-17.14-3.06z"
                ></path>
                <path
                  fill="#FECB0D"
                  d="M463.48 698.97c0 5.72-4.96 8.36-11.08 8.36s-11.08-2.64-11.08-8.36c0-5.72 4.96-10.36 11.08-10.36s11.08 4.64 11.08 10.36zM488.24 698.42c0 6.1-5.21 8.91-11.63 8.91s-11.63-2.81-11.63-8.91 5.21-11.04 11.63-11.04 11.63 4.94 11.63 11.04zM436.67 469.42c-4.37 7.16-4.85 8.26 6.03 12.42 10.88 4.16 28.9 3.51 35.47-.18s5.6-8.03 5.81-12.23c.21-4.2-5.81-8.44-5.81-8.44l-41.5 8.43z"
                ></path>
                <path
                  fill="#FECB0D"
                  d="M438.94 456.33c-8.15 9.74-9.67 13.28-6.09 17.48 3.58 4.2 26.98 1.05 34.04-1.22 7.06-2.27 16.47-6.39 16.36-14.1-.11-7.71-7.91-7.94-7.91-7.94l-36.4 5.78z"
                ></path>
                <ellipse
                  cx="455.19"
                  cy="423.72"
                  fill="#FBD6B1"
                  rx="39.42"
                  ry="38.39"
                ></ellipse>
                <path
                  fill="none"
                  d="M429.34 431.6c3.16-5.6 7.33-10.14 10.66 1.21M467.24 432.63c4.26-9.46 8.93-8.54 10.93 0M451.77 439.86c-3.44 3.31-2.15 4.45 1.87 5.8M457.63 453.45c2.87.57 4.72-.99 4.72-.99"
                ></path>
                <path
                  fill="#FFF"
                  d="M480.44 391.89c.39 11.26 12.42 21.57 12.42 21.57s2.25-8.03-.77-14.11c-3.02-6.07-11.65-7.46-11.65-7.46"
                ></path>
              </symbol>
              <symbol id="hair-top" viewBox="40 320 500 400">
                <path
                  fill="#FFF"
                  d="M489.17 381.42c1.32 13.75-21.77 26.84-42.17 29.19-49 5.65-96.61-41.62-130.29-34.04-17.1 3.85-35.01 26.82-35.01 26.82s4.73-31.67 22.84-44.03 37.58-28.94 93.19-28.31 90.06 36.01 91.44 50.37z"
                ></path>
                <path
                  fill="none"
                  d="M487.06 381.91c-25.35-17.38-45.36-27.09-94.88-23.57s-83.94 2.42-110.48 45.04c-6.53 10.48 12.77-30.87 39.47-44.03 27-13.31 68.58-12.36 105.33-8.36s61.77 29.38 61.77 29.38"
                ></path>
                <path
                  fill="none"
                  d="M486.1 383.25c-13.43 12.08-30.12 12.34-53.77 6.23s-65.99-23.31-97.99-19.06-37.37 13.89-37.37 13.89"
                ></path>
                <path
                  fill="none"
                  d="M468.37 404.57c-16.37 2.45-34.54.65-49.19-7.31-14.66-7.96-31.26-21.77-55.11-23.98M485.61 381.69c-17.07-4.97-109.34-24.95-128.61-20.74"
                ></path>
              </symbol>
            </defs>
            <g transform="translate(450 60)">
              <use
                width="500"
                height="400"
                x="-450"
                y="-60"
                stroke="#1d1d1d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="bottom"
                xlinkHref="#hair-bottom"
              ></use>
            </g>
            <use
              width="500"
              height="400"
              x="-450"
              y="-60"
              stroke="#1d1d1d"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="middle"
              transform="translate(450 60)"
              xlinkHref="#hair-middle"
            ></use>
            <use
              width="500"
              height="400"
              stroke="#1d1d1d"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              xlinkHref="#body"
            ></use>
            <use
              width="500"
              height="400"
              x="-450"
              y="-60"
              stroke="#1d1d1d"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="top"
              transform="translate(450 60)"
              xlinkHref="#hair-top"
            ></use>
            <use
              width="600"
              height="200"
              x="50"
              y="100"
              strokeLinecap="round"
              strokeWidth="3"
              className="wind"
              xlinkHref="#wind-one"
            ></use>
            <use
              width="600"
              height="200"
              x="150"
              strokeLinecap="round"
              strokeWidth="3"
              className="wind"
              xlinkHref="#wind-three"
            ></use>
            <use
              width="600"
              height="200"
              x="200"
              y="250"
              strokeLinecap="round"
              strokeWidth="3"
              className="wind"
              xlinkHref="#wind-two"
            ></use>
          </svg>

          <div className="left">
            <p> Past</p>
            <svg
              className="actionHint"
              width="18px"
              height="17px"
              viewBox="0 0 18 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="prev"
                transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)"
              >
                <polygon
                  className="arrow"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <polygon
                  className="arrow-fixed"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
              </g>
            </svg>
          </div>
          <div className="right">
            <p>Future</p>
            <svg
              className="actionHint"
              width="18px"
              height="17px"
              viewBox="-1 0 18 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              // xmlns="http://www.w3.org/1999/xlink"
            >
              <g>
                <polygon
                  className="arrow"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <polygon
                  className="arrow-fixed"
                  points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
                ></polygon>
                <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
              </g>
            </svg>
          </div>
        </SwiperSlide>
        {/* FUTURE EVENTS */}
        {FUTURE_EVENTS.map((event) => (
          <SwiperSlide key={`future-${event.id}`}>
            <div className={`thumbContainer ${event.className || 'future'}`}>
              <p>{event.title}</p>
              <img src={event.image} alt="Event in timeline" />

              {/* <div className="projectInfo">
                {event.year ? (
                  <div className="timeline"></div>
                ) : (
                  <div className="timeline absent"></div>
                )}
                {event.year ? (
                  <h2 className="serif">{event.year}</h2>
                ) : (
                  <h2 className="serif">&nbsp;</h2>
                )}
              </div> */}
            </div>
            <div className="projectInfo">
              {event.year ? (
                <div className="timeline"></div>
              ) : (
                <div className="timeline absent"></div>
              )}
              {event.year ? (
                <h2 className="serif">{event.year}</h2>
              ) : (
                <h2 className="serif">&nbsp;</h2>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default App;
