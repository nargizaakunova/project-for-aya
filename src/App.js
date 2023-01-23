/* eslint-disable no-useless-escape */
import { Fragment, useState, useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import IMAGES, { PAST_EVENTS } from './index';
import { FUTURE_EVENTS } from './index';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Main Page
        past: 'Past',
        future: 'Future',
        title: 'When Kyrgyzstan will close the Gender Pay Gap?',
        scroll: 'Scroll up/down',
        swipe: 'Swipe up/down',
        descriptionMainPage:
          'Gender pay gap is a difference between average annual earnings of women and men. According to the Central Asia will close the gender gap in 152 years. Let’s see what happened in 152 years in the past and what will happen in the future.',
        // Past events
        kurmandjan: 'Kurmanzhan Datka became the Queen of Alay',
        nikolay: 'Russian Empire colonized the last Kyrgyz lands in the south',
        zoo: 'Kyrgyz people in the Kyrgyz Exhibition in a "Human zoo" in Copenhagen',
        rights: 'Soviet women gain their rights',
        burqa: 'Central Asian women burn their burqa',
        abortions: 'Abortions allowed (again)',
        independence: 'Independence',
        otunbaeva: 'First woman president in Kyrgyzstan Roza Otunbaeva',
        satellite: "Young Women Started to Build Kyrgyzstan's First Satellite",
        ombudswoman: "First ombudswoman in Kyrgyzstan's history",
        // Future events
        artemis: 'First women in the moon (Artemis program)',
        pig: 'The average salary in Kyrgyzstan will be almost 30 thousand soms',
        genderQuota:
          '10 years since the adoption of the law on the 30% gender quota in local councils',
        kulak:
          'Laws to prevent violence against women and girls placed everywhere (+21 years)',
        parliament:
          'Equal representation in national parliaments (globally) (+40 years)',
        leadership:
          'Equal representation in leadership positions in the workplace (globally) (+140 years)',
        genderGap: 'Central Asia will close the gender gap (+152 years)',
        unicorn: 'Gender equality achieved globally (+286 years)',
        // List of sources
        sources: 'List of sources',
        button: 'Go to Current Time',
      },
    },
    ru: {
      translation: {
        // Main Page
        past: 'Прошлое',
        future: 'Будущее',
        title: 'Когда Кыргызстан устранит гендерный разрыв в оплате труда? ',
        scroll: 'Скрольте вниз/вверх',
        swipe: 'Свайпайте вниз/вверх',
        descriptionMainPage:
          'Гендерный разрыв в оплате труда - это разница между среднегодовым заработком женщин и мужчин. Согласно отчету Global Gender Gap Report 2022, Центральная Азия ликвидирует гендерный разрыв через 152 года. Давайте посмотрим, что произошло за 152 года в прошлом и что произойдет в будущем (скролл влево и вправо где будет вся дата в иксель).',
        // Past events
        kurmandjan:
          'Курманжан Датка становится Алайской царицей (157 лет назад)',
        nikolay:
          'Российская империя колонизирует последние земли Кыргызстана на юге (146 лет назад)',
        zoo: 'Кыргызы и кыргызский кочевой быт на выставке в человеческом зоопарке Копенгагена (122 года назад)',
        rights: 'СССР провозгласил гендерное равенство (104 года назад)',
        burqa: 'Центральноазиатские женщины сжигают паранджу (95 лет назад)',
        abortions: 'Аборты (снова) легализованы в СССР (67 лет назад)',
        independence:
          'Кыргызская Республика обрела независимость (31 год назад)',
        otunbaeva:
          'Роза Отунбаева - Первая женщина президент в Кыргызстане и Центральной Азии (12 лет назад)',
        satellite:
          'Девушки из "Kyrgyz Satelite" начали строить первый спутник Кыргызстана (4 года назад)',
        ombudswoman: 'Первая омбудсвумен в истории Кыргызстана',
        // Future
        artemis:
          'Первая женщина на Луне (Космическая программа Артемида)  (+2 года)',
        pig: 'Средняя зарплата в Кыргызстане достигнет 30 000 сомов (+3 года)',
        genderQuota:
          '10 лет с момента принятия 30-процентной гендерной квоты в местных кенешах',
        kulak:
          'Законы, направленные на предотвращение насилия в отношении женщин и девочек, принимаются повсеместно (+21 год)',
        parliament:
          'Равное представительство в национальных парламентах (во всем мире) (+40 лет)',
        leadership:
          'Равное представительство на руководящих должностях на рабочем месте (во всем мире) (+140 лет)',
        genderGap: 'Центральная Азия ликвидирует гендерный разрыв (+152 года)',
        unicorn: 'Гендерное равенство достигнуто во всем мире (+286 лет)',
        // List of sources
        sources: 'Список ресурсов',
        button: 'Вернуться в настоящее время',
      },
    },
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

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

const isMobile = isMobileOrTablet();

const App = () => {
  const [swiperInst, setSwiperInst] = useState(null);
  const [initialProgress, setInitialProgress] = useState(null);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.lang) {
      i18n.changeLanguage(params.lang);
    }
    console.log(i18n.language);
  }, [i18n]);

  const mainPageIndex = isMobile ? 12 : 31;

  const onSwiper = (swiper) => {
    setSwiperInst(swiper);
    swiper.slideTo(mainPageIndex, 0);
  };

  const scrollLeftHandler = () => {
    setInitialProgress(swiperInst.progress);
    swiperInst.slideTo(swiperInst.activeIndex - 1);
    swiperInst.mousewheel.enable();
  };
  const scrollRightHandler = () => {
    setInitialProgress(swiperInst.progress);
    swiperInst.slideTo(swiperInst.activeIndex + 1);
    swiperInst.mousewheel.enable();
  };

  const onScroll = (event) => {
    if (
      event.target.scrollTop + event.target.clientHeight + 50 >=
      event.target.scrollHeight
    ) {
      setInitialProgress(swiperInst.progress);
      if (!swiperInst.mousewheel.enabled) {
        swiperInst.mousewheel.enable();
      }
    }
    if (event.target.scrollTop === 0) {
      setInitialProgress(swiperInst.progress);
      if (!swiperInst.mousewheel.enabled) {
        swiperInst.mousewheel.enable();
      }
    }
  };

  const onSliderScroll = (swiper) => {
    const scrollableContent = swiper.slides[swiper.activeIndex].querySelector(
      '.scrollable-content'
    );

    if (initialProgress >= swiper.progress && scrollableContent) {
      if (scrollableContent.scrollTop !== 0) {
        swiper.slideTo(mainPageIndex, 0);
        swiper.mousewheel.disable();
      }

      if (
        scrollableContent.scrollTop === 0 &&
        swiper.translate < swiper.previousTranslate
      ) {
        swiper.slideTo(mainPageIndex, 200);
        swiper.mousewheel.disable();
      }
    }
  };

  const goToMainPage = () => {
    swiperInst.slideTo(mainPageIndex);

    const scrollableContent = swiperInst.slides[
      swiperInst.activeIndex
    ].querySelector('.scrollable-content');

    if (scrollableContent) {
      scrollableContent.scrollTop = 0;
      setTimeout(() => {
        swiperInst.mousewheel.disable();
      });
    }
  };

  return (
    <Fragment>
      <Swiper
        longSwipes={false}
        speed={1200}
        className="swiper-container"
        modules={[FreeMode, Mousewheel, Keyboard]}
        loopedSlides={isMobile ? undefined : 20}
        loop={true}
        slidesPerView={isMobile ? 1 : 'auto'}
        grabCursor="true"
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        freeMode={{
          enabled: true,
          momentumBounce: false,
        }}
        cssMode={isMobile}
        mousewheel={false}
        onSwiper={onSwiper}
        onScroll={onSliderScroll}
      >
        {/* BREAK */}
        <SwiperSlide>
          <div className="thumbContainer sources">
            <div>
              <a href="./sources.html">{t('sources')}</a>
              <button className="go-to-main" onClick={goToMainPage}>
                {t('button')}
              </button>
            </div>
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
                {t(event.id)}
              </p>
              <img src={event.image} alt="Event in timeline" />
            </div>
            <div className="projectInfo">
              <div className="timeline"></div>
              <h2 className="serif">{event.year}</h2>
            </div>
          </SwiperSlide>
        ))}

        {/* MAIN SLIDE */}
        <SwiperSlide className="swiper-slide first-slide">
          <div className="scrollable-content" onScroll={onScroll}>
            <div className="left" onClick={scrollLeftHandler}>
              <p style={{ color: '#787878' }}>{t('past')}</p>
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
            <div className="right" onClick={scrollRightHandler}>
              <p style={{ color: '#787878' }}>{t('future')}</p>
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
            <span className="languages">
              <a href="?lang=ru">RU / </a>
              <a href="?lang=en">EN</a>
            </span>
            <h1>{t('title')}</h1>

            <svg
              style={{ overflow: 'visible', marginBottom: '8px' }}
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
            <p>{!isMobile ? t('scroll') : t('swipe')}</p>

            <p className="description">{t('descriptionMainPage')}</p>
            <img
              className="graphicImage"
              src={IMAGES.graphics[i18n.language].graphic1}
              alt="Graphic 1"
            />
            <img
              className="graphicImage"
              src={IMAGES.graphics[i18n.language].graphic2}
              alt="Graphic 2"
            />
            <img
              className="graphicImage"
              src={IMAGES.graphics[i18n.language].graphic3}
              alt="Graphic 3"
            />
            <img
              className="graphicImage"
              src={IMAGES.graphics[i18n.language].graphic4}
              alt="Graphic 4"
            />
            <img
              className="graphicImage"
              src={IMAGES.graphics[i18n.language].graphic5}
              alt="Graphic 5"
            />
          </div>
        </SwiperSlide>
        {/* FUTURE EVENTS */}
        {FUTURE_EVENTS.map((event) => (
          <SwiperSlide key={`future-${event.id}`}>
            <div className={`thumbContainer future ${event.className || ''}`}>
              <p>{t(event.id)}</p>
              <img src={event.image} alt="Event in timeline" />
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
