import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const IMAGES = {
  kurmandjan: require('./images/Past-visuals/kurmandjan.png'),
  nikolay: require('./images/Past-visuals/nikolay.png'),
  otunbaeva: require('./images/Past-visuals/otunbaeva.png'),
  ombudswoman: require('./images/Past-visuals/ombudswoman.png'),
  independence: require('./images/Past-visuals/independence.png'),
  rights: require('./images/Past-visuals/rights.png'),
  zoo: require('./images/Past-visuals/zoo.png'),
  satellite: require('./images/Past-visuals/womenSatellite.jpeg'),
  burqa: require('./images/Past-visuals/burqa.jpeg'),
  abortions: require('./images/Past-visuals/abortions.png'),

  genderQuota: require('./images/Future-visuals/30_gender_quota.png'),
  soms: require('./images/Future-visuals/30k_soms.png'),
  againstViolence: require('./images/Future-visuals/Against_violence_applied_everywhere.png'),
  artemis: require('./images/Future-visuals/Artemis.png'),
  equalRepresentationLeadership: require('./images/Future-visuals/Equal_representation_in_leadership_positions_in_the_workplace_globally.png'),
  equalRepresentationParliaments: require('./images/Future-visuals/Equal_representation_in_national_parliaments_globally.png'),
  genderEquality: require('./images/Future-visuals/Gender_equality_achieved_globally.png'),
  genderGap: require('./images/Future-visuals/Gender_Gap_closed_in_Kyrgyzstan.png'),

  graphics: {
    en: {
      graphic1: require('./images/en/Graphics/1.png'),
      graphic2: require('./images/en/Graphics/2.png'),
      graphic3: require('./images/en/Graphics/3.png'),
      graphic4: require('./images/en/Graphics/4.png'),
      graphic5: require('./images/en/Graphics/5.png'),
    },
    ru: {
      graphic1: require('./images/ru/Graphics/1.png'),
      graphic2: require('./images/ru/Graphics/2.png'),
      graphic3: require('./images/ru/Graphics/3.png'),
      graphic4: require('./images/ru/Graphics/4.png'),
      graphic5: require('./images/ru/Graphics/5.png'),
      graphic6: require('./images/ru/Graphics/6.png'),
    },
  },
};

export default IMAGES;

export const PAST_EVENTS = [
  {
    id: 'kurmandjan',
    year: 1865,
    image: IMAGES.kurmandjan,
    className: 'kurmandjan',
  },
  {
    id: 'nikolay',
    year: 1876,
    image: IMAGES.nikolay,
    className: 'nikolay',
  },
  {
    id: 'zoo',
    year: 1900,
    image: IMAGES.zoo,
    className: 'zoo',
  },
  {
    id: 'rights',
    year: 1918,
    image: IMAGES.rights,
    className: 'rights',
  },
  {
    id: 'burqa',
    year: 1927,
    image: IMAGES.burqa,
    className: 'burqa',
  },
  {
    id: 'abortions',
    year: 1955,
    image: IMAGES.abortions,
    className: 'abortions',
  },
  {
    id: 'independence',
    year: 1991,
    image: IMAGES.independence,
    className: 'independence',
  },
  {
    id: 'otunbaeva',
    year: 2010,
    image: IMAGES.otunbaeva,
    className: 'otunbaeva',
  },
  {
    id: 'satellite',
    year: 2018,
    image: IMAGES.satellite,
    className: 'satellite',
  },
  {
    id: 'ombudswoman',
    year: 2022,
    image: IMAGES.ombudswoman,
    className: 'ombudswoman',
  },
];

export const FUTURE_EVENTS = [
  {
    id: 'artemis',
    year: 2024,
    image: IMAGES.artemis,
    className: 'artemis',
  },

  {
    id: 'pig',
    year: 2025,
    image: IMAGES.soms,
    className: 'pig',
  },

  {
    id: 'genderQuota',
    year: 2029,
    image: IMAGES.genderQuota,
    className: 'genderQuota',
  },

  {
    id: 'kulak',
    year: 2043,
    image: IMAGES.againstViolence,
    className: 'kulak',
  },

  {
    id: 'parliament',
    year: 2062,
    image: IMAGES.equalRepresentationParliaments,
    className: 'parliament',
  },

  {
    id: 'leadership',
    year: 2162,
    image: IMAGES.equalRepresentationLeadership,
    className: 'leadership',
  },
  {
    id: 'genderGap',
    year: 2174,
    image: IMAGES.genderGap,
    className: 'genderGap',
  },
  {
    id: 'unicorn',
    year: 2308,
    image: IMAGES.genderEquality,
    className: 'unicorn',
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
