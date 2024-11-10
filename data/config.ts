import cnss from '@/assets/images/certifications/cnss.webp'
import develop from '@/assets/images/certifications/develop.webp'
import pentesting from '@/assets/images/certifications/pentesting.webp'
import remote from '@/assets/images/certifications/remoteWork.webp'

import TutorHub from '@/assets/images/projects/tutorhub.webp'
import DEX from '@/assets/images/projects/dex.webp'
import Car from '@/assets/images/projects/carpart.webp'
import Bus from '@/assets/images/projects/buslink.webp'
import Covid from '@/assets/images/projects/covid.webp'
import Weather from '@/assets/images/projects/weather.webp'
import Wallet from '@/assets/images/projects/wallet.webp'
import Personality from '@/assets/images/projects/personality.webp'
import Profile from '@/assets/images/profile/lightPic.webp'

import Simplex from '@/assets/images/experience/simplex.png'
import Fiverr from '@/assets/images/experience/fiverr.png'

import COMSATS from '@/assets/images/education/comsats-university-islamabad.webp'
import PGC from '@/assets/images/education/punjab-group-of-colleges.webp'

import IT from '@/assets/images/publications/it.webp'
import predict from '@/assets/images/publications/predict.webp'
import master from '@/assets/images/publications/master.webp'

const herolinks = [
    {
        name: 'email',
        url: 'mailto:bilalsheikh2500@gmail.com'
    },
    {
        name: 'whatsapp',
        url: 'https://wa.me/923324187624?text=Hi%20Bilal%2C%20I%20want%20to%20hire%20you%20for%20my%20project'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/billypentester/'
    },
    {
        name: 'messenger',
        url: 'https://messenger.com/t/billypentester'
    }
]

const expertise = [
    {
        title: 'Frontend',
        skills: [
            {
                name: 'react',
                viewBox: '0 0 32 32'
            },
            {
                name: 'vue',
                viewBox: '0 0 32 32'
            },
            {
                name: 'tailwind',
                viewBox: '0 0 32 32'
            },
            {
                name: 'redux',
                viewBox: '0 0 32 32'
            },
            {
                name: 'typescript',
                viewBox: '0 0 32 32'
            },
            {
                name: 'nextjs',
                viewBox: '0 0 32 32'
            },
            {
                name: 'sass',
                viewBox: '0 -32 256 256'
            }
        ]
    },
    {
        title: 'Backend',
        skills: [
            {
                name: 'nodejs',
                viewBox: '0 0 32 32'
            },
            {
                name: 'expressjs',
                viewBox: '0 0 24 24'
            },
            {
                name: 'firebase',
                viewBox: '0 0 32 32'
            },
            {
                name: 'kafka',
                viewBox: '-78.5 0 413 413'
            },
            {
                name: 'jest',
                viewBox: '0 0 32 32'
            },
            {
                name: 'graphql',
                viewBox: '0 0 32 32'
            }
        ]
    },
    {
        title: 'Database',
        skills: [
            {
                name: 'mysql',
                viewBox: '0 0 24 24'
            },
            {
                name: 'postgresql',
                viewBox: '-4 0 264 264'
            },
            {
                name: 'mongodb',
                viewBox: '0 0 32 32'
            },
            {
                name: 'redis',
                viewBox: '0 -18 256 256'
            }
        ]
    }
]

const urls = [
    {
        name: 'email',
        url: 'mailto:mailto:bilalsheikh2500@gmail.com'
    },
    {
        name: 'whatsapp',
        url: 'https://wa.me/923324187624?text=Hi%20Bilal%2C%20I%20want%20to%20hire%20you%20for%20my%20project'
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/billypentester/'
    }
]

const edu = [
    {
      id: 1,
      title: 'Bachelor in Computer Science',
      university: 'COMSATS University Islamabad',
      date: '2019 - 2023',
      city: 'Lahore',
      image: COMSATS
    },
    {
      id: 2,
      title: 'Intermediate in Computer Science',
      university: 'Punjab Group of Colleges',
      date: '2017 - 2019',
      city: 'Lahore',
      image: PGC
    }
]

const cert = [
    {
      title: 'Certified Network Security Specialist',
      image: cnss
    },
    {
      title: 'Develop Applications with GCP',
      image: develop
    },
    {
      title: 'Advance Peneration Testing',
      image: pentesting
    },
    {
      title: 'Remote Work Certification',
      image: remote
    }
]

const work = [
    {
        title: 'TutorHub',
        image: TutorHub,
    },
    {
        title: 'Decenteralized Exchange',
        image: DEX,
    },
    {
        title: 'Car Part Ecommerce',
        image: Car,
    },
    {
        title: 'Bus Link',
        image: Bus,
    },
    {
        title: 'Covid Tracker',
        image: Covid,
    },
    {
        title: 'Weather App',
        image: Weather,
    },
    {
        title: 'Wallet Authenticator',
        image: Wallet,
    },
    {
        title: 'Personality Prediction',
        image: Personality,
    }
]

const experience = [
    {
        id: 'e1',
        title: 'Software Engineer',
        company: 'Simplex Technology Solutions',
        location: 'Lahore',
        duration: 'Sep 2023 - Present',
        logo: Simplex
    },
    {
        id: 'e2',
        title: 'MERN Developer',
        company: 'Fiverr',
        location: 'Remote',
        duration: 'Sep 2022 - Sep 2023',
        logo: Fiverr
    }
]

const publications = [
    {
      title: 'Predict your personality',
      description: 'How does one assess your personality based on a survey or interview question?',
      link: 'https://medium.com/mlearning-ai/predict-your-personality-f2c5d3701dc3',
      image: predict,
      tags: ['ML', 'AI']
    },
    {
      title: 'Ultimate 10 Stages to Master Backend Development',
      description: "A step-by-step guide to getting a job as a good backend developer",
      link: "https://billypentester.medium.com/ultimate-10-stages-to-master-backend-development-f6f65f22a327",
      image: master,
      tags: ['JS', 'Backend']
    },
    {
      title: 'Ethics and the IT Professional',
      description: 'Why ethics are important to follow? ',
      link: "https://billypentester.medium.com/ethics-and-the-it-professional-8b108a4f0ee",
      image: IT,
      tags: ['ethics', 'IT']
    }
]

export { urls, expertise, edu, cert, work, publications, Profile, herolinks, experience }
