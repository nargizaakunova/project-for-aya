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
          <div className="thumbContainer">
            <div>
              <a href="./sources.html">List of sources</a>
            </div>
            <div className="projectInfo">
              <div className="timeline"></div>
              <h2 className="serif">Break</h2>
            </div>
          </div>
        </SwiperSlide>
        {/* PAST EVENTS */}
        {PAST_EVENTS.map((event) => (
          <SwiperSlide key={`past-${event.id}`}>
            <div className="thumbContainer">
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

              <div className="projectInfo">
                <div className="timeline"></div>
                <h2 className="serif">{event.year}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* MAIN SLIDE */}
        <SwiperSlide className="swiper-slide first-slide">
          <h1>Gender equality in 152 years</h1>

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
            <div className="thumbContainer">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};

export default App;
