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

  graphic1: require('./images/Graphics/1.png'),
  graphic2: require('./images/Graphics/2.png'),
  graphic3: require('./images/Graphics/3.png'),
  graphic4: require('./images/Graphics/4.png'),
  graphic5: require('./images/Graphics/5.png'),
};

export default IMAGES;

export const PAST_EVENTS = [
  {
    id: 'k1',
    year: 1865,
    title: 'Kurmanzhan Datka became the Queen of Alay',
    image: IMAGES.kurmandjan,
    className: 'kurmandjan',
  },
  {
    id: 'k2',
    year: 1876,
    title: 'Russian Empire colonized the last Kyrgyz lands in the south',
    image: IMAGES.nikolay,
    className: 'nikolay',
  },
  {
    id: 'k3',
    year: 1900,
    title:
      'Kyrgyz people in the Kyrgyz Exhibition in a "Human zoo" in Copenhagen',
    image: IMAGES.zoo,
    className: 'zoo',
  },
  {
    id: 'k4',
    year: 1918,
    title: 'Soviet women gain their rights',
    image: IMAGES.rights,
    className: 'rights',
  },
  {
    id: 'k5',
    year: 1927,
    title: 'Central Asian women burn their burqa',
    image: IMAGES.burqa,
    className: 'burqa',
  },
  {
    id: 'k6',
    year: 1955,
    title: 'Abortions allowed (again)',
    image: IMAGES.abortions,
    className: 'abortions',
  },
  {
    id: 'k7',
    year: 1991,
    title: 'Independence',
    image: IMAGES.independence,
    className: 'independence',
  },
  {
    id: 'k8',
    year: 2010,
    title: 'First woman president in Kyrgyzstan Roza Otunbaeva',
    image: IMAGES.otunbaeva,
    className: 'otunbaeva',
  },
  {
    id: 'k9',
    year: 2018,
    title: "Young Women Started to Build Kyrgyzstan's First Satellite",
    image: IMAGES.satellite,
    className: 'satellite',
  },
  {
    id: 'k10',
    year: 2022,
    title: "First ombudswoman in Kyrgyzstan's history",
    image: IMAGES.ombudswoman,
    className: 'ombudswoman',
  },
];

export const FUTURE_EVENTS = [
  {
    id: 'k1',
    year: 2024,
    title: 'First women in the moon (Artemis program)',
    image: IMAGES.artemis,
    className: 'artemis',
  },
  // {
  //   id: 'k1-1',
  //   year: ``,
  //   image: IMAGES.graphic1,
  //   className: 'graphic',
  // },
  {
    id: 'k2',
    year: 2025,
    title: 'The average salary in Kyrgyzstan will be almost 30 thousand soms',
    image: IMAGES.soms,
    className: 'pig',
  },
  // {
  //   id: 'k2-1',
  //   year: ``,
  //   image: IMAGES.graphic2,
  //   className: 'graphic',
  // },
  {
    id: 'k3',
    year: 2029,
    title:
      '10 years since the adoption of the law on the 30% gender quota in local councils',
    image: IMAGES.genderQuota,
    className: 'genderQuota',
  },
  // {
  //   id: 'k3-1',
  //   year: ``,
  //   image: IMAGES.graphic3,
  //   className: 'graphic',
  // },
  {
    id: 'k4',
    year: 2043,
    title:
      'Laws to prevent violence against women and girls placed everywhere (+21 years) ',
    image: IMAGES.againstViolence,
    className: 'kulak',
  },
  // {
  //   id: 'k4-1',
  //   year: ``,
  //   image: IMAGES.graphic4,
  //   className: 'graphic',
  // },
  {
    id: 'k5',
    year: 2062,
    title:
      'Equal representation in national parliaments (globally) (+40 years)',
    image: IMAGES.equalRepresentationParliaments,
    className: 'parliament',
  },
  // {
  //   id: 'k5-1',
  //   year: ``,
  //   image: IMAGES.graphic5,
  //   className: 'graphic',
  // },
  {
    id: 'k6',
    year: 2162,
    title:
      'Equal representation in leadership positions in the workplace (globally) (+140 years)',
    image: IMAGES.equalRepresentationLeadership,
    className: 'leadership',
  },
  // {
  //   id: 'k6-1',
  //   year: ``,
  //   image: IMAGES.graphic6,
  //   className: 'graphic',
  // },
  {
    id: 'k7',
    year: 2174,
    title: 'Central Asia will close the gender gap',
    image: IMAGES.genderGap,
    className: 'genderGap',
  },
  {
    id: 'k8',
    year: 2308,
    title: 'Gender equality achieved globally (+286 years)',
    image: IMAGES.genderEquality,
    className: 'unicorn',
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
