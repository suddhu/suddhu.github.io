import React from 'react'

type SocialLink = {
  label: string
  link: string
}

export type NewsItem = {
  date: string
  content: React.ReactNode
}

type ResearchPaper = {
  title: string
  authors: string
  authorLinks?: { [key: string]: string }
  venue: string
  year: string
  description: string
  image: string
  images?: string[]
  links: {
    paper?: string
    website?: string
    code?: string
    data?: string
    twitter?: string
    presentation?: string
    slides?: string
    poster?: string
  }
  highlights?: string[]
  press?: string[]
}

export const EMAIL = 'suddhus@gmail.com'

export const BIO = (
  <p className="text-justify m-0 pt-2.5">
    Sudharshan Suresh (he/him) is a senior staff research scientist at Boston Dynamics, working on machine learning and dexterity for Atlas. He earned a Ph.D. from the Robotics Institute at Carnegie Mellon University, working on touch, dexterity, and robot learning. He was also a visiting researcher at FAIR (Meta), working with the dexterous manipulation team. His thesis enabled robots to learn from vision and touch, see popular work like NeuralFeels and MidasTouch. Prior to this, he completed his Masters in Robotics at CMU, working on field robotics and underwater exploration. His work has been presented at Science Robotics, CoRL, RSS, ICRA, IROS, and RA-L. Sudharshan is a 2025 RSS Pioneer, a recipient of the Hima and Jive Fellowship at CMU, and the best paper finalist in service robotics at ICRA.
  </p>
)

// Top navigation links rendered as pill-style tabs under the header.
// Replace '#' with your real URLs.
export const NAV_LINKS: SocialLink[] = [
  { label: 'CV', link: '/cv/CV_Suddhu.pdf' },
  { label: 'Scholar', link: 'https://scholar.google.com/citations?user=dNX1oxoAAAAJ&hl=en' },
  { label: 'Github', link: 'https://github.com/suddhu/' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/sudharshansuresh/' },
  { label: 'Twitter', link: 'https://twitter.com/suddhus' },
  { label: 'Short bio', link: '#' },
]

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title: 'NeuralFeels with neural fields: Visuo-tactile perception for in-hand manipulation',
    authors: 'Sudharshan Suresh, Haozhi Qi, Tingfan Wu, Taosha Fan, Luis Pineda, Mike Lambeta, Jitendra Malik, Mrinal Kalakrishnan, Roberto Calandra, Michael Kaess, Joe Ortiz, Mustafa Mukadam',
    authorLinks: {
      'Haozhi Qi': 'https://haozhi.io/',
      'Tingfan Wu': 'https://scholar.google.com/citations?user=9bt2Z5QAAAAJ&hl=en',
      'Taosha Fan': 'https://scholar.google.com/citations?user=3PJeg1wAAAAJ&hl=en',
      'Luis Pineda': 'https://scholar.google.com/citations?user=rebEn8oAAAAJ&hl=en',
      'Mike Lambeta': 'https://scholar.google.com/citations?user=p6DCMrQAAAAJ&hl=en',
      'Jitendra Malik': 'https://people.eecs.berkeley.edu/~malik/',
      'Mrinal Kalakrishnan': 'https://scholar.google.com/citations?user=DMTuJzAAAAAJ&hl=en',
      'Roberto Calandra': 'https://scholar.google.ch/citations?user=fA0rYxMAAAAJ&hl=en',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/',
      'Joe Ortiz': 'https://joeaortiz.github.io/',
      'Mustafa Mukadam': 'https://www.mustafamukadam.com/'
    },
    venue: 'Science Robotics',
    year: '2024',
    description: 'Neural perception with vision and touch yields robust tracking and reconstruction for in-hand manipulation',
    image: '/media/neuralfeels_science.jpeg',
    links: {
      paper: 'https://www.science.org/stoken/author-tokens/ST-2331/full',
      website: 'https://suddhu.github.io/neural-feels/',
      code: 'https://github.com/facebookresearch/neuralfeels',
      data: 'https://huggingface.co/collections/suddhu/neuralfeels-673184a97ddcac2df69ff489',
      twitter: 'https://x.com/Suddhus/status/1856781256941510752',
      presentation: 'https://youtu.be/KOHh0awhSEg?si=sjSEdC54lKEY3hFy'
    },
    highlights: ['Featured as journal cover'],
    press: [
      'CMU Robotics [https://www.ri.cmu.edu/cmu-and-partners-redefine-robotic-perception-with-neuralfeels/]',
      'AI at Meta [https://x.com/AIatMeta/status/1856798670592905398]'
    ]
  },
  {
    title: 'General In-Hand Object Rotation with Vision and Touch',
    authors: 'Haozhi Qi, Brent Yi, Sudharshan Suresh, Mike Lambeta, Yi Ma, Roberto Calandra, Jitendra Malik',
    authorLinks: {
      'Haozhi Qi': 'https://haozhi.io/',
      'Brent Yi': 'https://scholar.google.com/citations?user=Ecy6lXwAAAAJ&hl=en',
      'Mike Lambeta': 'https://scholar.google.com/citations?user=p6DCMrQAAAAJ&hl=en',
      'Yi Ma': 'http://people.eecs.berkeley.edu/~yima/',
      'Roberto Calandra': 'https://www.robertocalandra.com/about/',
      'Jitendra Malik': 'https://people.eecs.berkeley.edu/~malik/',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/'
    },
    venue: 'Proc. Conf. on Robot Learning, CoRL',
    year: '2023',
    description: 'A visuotactile transformer gives us general dexterity for multi-axis object rotation in the wild.',
    image: '/media/rotateit.mp4',
    links: {
      paper: 'https://arxiv.org/abs/2309.09979',
      website: 'https://haozhi.io/rotateit',
      presentation: 'https://www.youtube.com/watch?v=Uh-ltingRzk'
    },
    press: [
      'New Scientist (UK) [https://www.newscientist.com/article/2394911-robotic-hand-has-the-dexterity-to-handle-tricky-objects-with-care/]',
      'TU Dresden News [https://tu-dresden.de/ing/informatik/die-fakultaet/news/publikation-ueber-das-erlernen-des-drehens-von-objekten-in-der-hand-durch-sehen-und-tasten-veroeffentlicht]'
    ]
  },
  {
    title: 'MidasTouch: Monte-Carlo inference over distributions across sliding touch',
    authors: 'Sudharshan Suresh, Zilin Si, Stuart Anderson, Michael Kaess, Mustafa Mukadam',
    authorLinks: {
      'Zilin Si': 'https://si-lynnn.github.io/',
      'Stuart Anderson': 'https://www.linkedin.com/in/stuartoanderson',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/',
      'Mustafa Mukadam': 'https://www.mustafamukadam.com/'
    },
    venue: 'Proc. Conf. on Robot Learning, CoRL',
    year: '2022',
    description: "Where's Waldo? but for robot touch: tracking a robot finger on an object from geometry captured by touch.",
    image: '/media/midastouch.m4v',
    images: ['/media/midastouch.m4v'],
    links: {
      paper: 'https://arxiv.org/abs/2210.14210',
      website: 'https://suddhu.github.io/midastouch-tactile/',
      code: 'https://github.com/facebookresearch/MidasTouch',
      presentation: 'https://youtu.be/L-h8t9-iSFE'
    },
    highlights: ['Oral: 6% acceptance rate']
  },
  {
    title: 'ShapeMap 3-D: Efficient shape mapping through dense touch and vision',
    authors: 'Sudharshan Suresh, Zilin Si, Joshua Mangelson, Wenzhen Yuan, Michael Kaess',
    authorLinks: {
      'Zilin Si': 'https://si-lynnn.github.io/',
      'Joshua Mangelson': 'https://frostlab.byu.edu/directory/joshua-mangelson',
      'Wenzhen Yuan': 'http://robotouch.ri.cmu.edu/yuanwz/',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/'
    },
    venue: 'IEEE Intl. Conf. on Robotics and Automation, ICRA',
    year: '2022',
    description: 'Online reconstruction of 3D objects from dense touch and vision via Gaussian processes.',
    image: '/media/shapemap.m4v',
    links: {
      paper: 'https://arxiv.org/abs/2109.09884',
      website: 'https://suddhu.github.io/shape-map/',
      code: 'https://github.com/rpl-cmu/shape-map-3D',
      presentation: 'https://youtu.be/y3uCoj7qOgA'
    }
  },
  {
    title: 'Tactile SLAM: Real-time inference of shape and pose from planar pushing',
    authors: 'Sudharshan Suresh, Maria Bauza, Peter Yu, Joshua Mangelson, Alberto Rodriguez, Michael Kaess',
    authorLinks: {
      'Maria Bauza': 'http://web.mit.edu/bauza/www/',
      'Peter Yu': 'http://people.csail.mit.edu/peterkty/',
      'Joshua Mangelson': 'https://frostlab.byu.edu/directory/joshua-mangelson',
      'Alberto Rodriguez': 'https://meche.mit.edu/people/faculty/ALBERTOR@MIT.EDU',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/'
    },
    venue: 'IEEE Intl. Conf. on Robotics and Automation, ICRA',
    year: '2021',
    description: 'Full SLAM from force/torque sensing for planar pushing: combining a factor graph with an implicit surface.',
    image: '/media/tactile_slam.gif',
    links: {
      paper: 'https://arxiv.org/abs/2011.07044',
      website: 'https://suddhu.github.io/tactile-slam/',
      presentation: 'https://youtu.be/77VnwArHOhk'
    },
    highlights: ['Best paper award in service robotics finalist']
  },
  {
    title: 'Active SLAM using 3D submap saliency for underwater volumetric exploration',
    authors: 'Sudharshan Suresh, Paloma Sodhi, Joshua Mangelson, David Wettergreen, Michael Kaess',
    authorLinks: {
      'Paloma Sodhi': 'https://palomasodhi.com/',
      'Joshua Mangelson': 'https://frostlab.byu.edu/directory/joshua-mangelson',
      'David Wettergreen': 'https://www.ri.cmu.edu/ri-faculty/david-s-wettergreen/',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/'
    },
    venue: 'IEEE Intl. Conf. on Robotics and Automation, ICRA',
    year: '2020',
    description: 'Balancing volumetric exploration and pose uncertainty in 3D underwater SLAM via SONAR submap saliency.',
    image: '/media/active_slam.gif',
    links: {
      paper: 'http://www.cs.cmu.edu/~kaess/pub/Suresh20icra.pdf',
      presentation: 'https://youtu.be/4HgdWJlL8JY'
    }
  },
  {
    title: 'ARAS: ambiguity-aware robust active SLAM using multi-hypothesis estimates',
    authors: 'Ming Hsiao, Joshua Mangelson, Sudharshan Suresh, Christian Debrunner, Michael Kaess',
    authorLinks: {
      'Ming Hsiao': 'https://www.linkedin.com/in/ming-hsiao-8b8b8b8b/',
      'Joshua Mangelson': 'https://frostlab.byu.edu/directory/joshua-mangelson',
      'Christian Debrunner': 'https://www.linkedin.com/in/christian-debrunner-8b8b8b8b/',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/'
    },
    venue: 'IEEE Intl. Conf. on Intelligent Robots and Systems, IROS',
    year: '2020',
    description: 'Active SLAM with multi-hypothesis state estimates for robust indoor mapping with handheld sensors',
    image: '/media/aras.png',
    links: {
      paper: 'https://www.cs.cmu.edu/~kaess/pub/Hsiao20iros.pdf'
    }
  },
  {
    title: 'Through-water stereo SLAM with refraction correction for AUV localization',
    authors: 'Sudharshan Suresh, Eric Westman, Michael Kaess',
    authorLinks: {
      'Eric Westman': 'https://www.ri.cmu.edu/ri-faculty/eric-westman/',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/'
    },
    venue: 'IEEE Robotics and Automation Letters (RA-L), presented at ICRA',
    year: '2019',
    description: 'Dealing with refraction in underwater visual SLAM, inspired by multimedia photogrammetry.',
    image: '/media/through_water_1.gif',
    images: ['/media/through_water_1.gif', '/media/through_water_2.gif'],
    links: {
      paper: 'http://www.cs.cmu.edu/~kaess/pub/Suresh19ral.pdf',
      presentation: 'https://youtu.be/fZZTDyLymBs'
    }
  },
  {
    title: 'Localized imaging and mapping for underwater fuel storage basins',
    authors: 'Jerry Hsiung, Andrew Tallaksen, Lawrence Papincak, Sudharshan Suresh, Heather Jones, Red Whittaker, Michael Kaess',
    authorLinks: {
      'Jerry Hsiung': 'https://www.linkedin.com/in/jerry-hsiung-8b8b8b8b/',
      'Andrew Tallaksen': 'https://www.linkedin.com/in/andrew-tallaksen-8b8b8b8b/',
      'Lawrence Papincak': 'https://www.linkedin.com/in/lawrence-papincak-8b8b8b8b/',
      'Heather Jones': 'https://www.linkedin.com/in/heather-jones-8b8b8b8b/',
      'Red Whittaker': 'https://www.ri.cmu.edu/ri-faculty/red-whittaker/',
      'Michael Kaess': 'https://www.cs.cmu.edu/~kaess/'
    },
    venue: 'Proc. Symposium on Waste Management, WM',
    year: '2018',
    description: 'We build an underwater platform comprising of stereo, IMU, standard + structured lighting, and depth.',
    image: '/media/underwater_1.gif',
    images: ['/media/underwater_1.gif', '/media/underwater_2.gif'],
    links: {
      paper: 'data/papers/wm18_final.pdf',
      slides: 'data/papers/wm18_presentation.pdf',
      presentation: 'https://www.youtube.com/watch?v=R6JUAJq4rE4&feature=youtu.be'
    }
  },
  {
    title: 'Camera-Only Kinematics for Small Lunar Rovers',
    authors: 'Sudharshan Suresh, Eugene Fang, Red Whittaker',
    authorLinks: {
      'Eugene Fang': 'https://www.linkedin.com/in/eugene-fang-8b8b8b8b/',
      'Red Whittaker': 'https://www.ri.cmu.edu/ri-faculty/red-whittaker/'
    },
    venue: 'Robotics Institute Summer Scholars Working Paper Journal',
    year: '2016',
    description: 'Tracking a lunar rover\'s kinematic state through self-perception with a downward-facing fisheye lens.',
    image: '/media/rover_1.gif',
    images: ['/media/rover_1.gif', '/media/rover_2.gif'],
    links: {
      paper: 'data/papers/RISS2016.pdf',
      presentation: 'https://youtu.be/-D7WXVTPXuo',
      poster: 'https://www.hou.usra.edu/meetings/leag2016/eposter/5026.pdf'
    }
  },
  {
    title: 'Object category understanding via eye fixations on freehand sketches',
    authors: 'Ravi Kiran Sarvadevabhatla, Sudharshan Suresh, R. Venkatesh Babu',
    authorLinks: {
      'Ravi Kiran Sarvadevabhatla': 'https://ravika.github.io/',
      'R. Venkatesh Babu': 'https://cds.iisc.ac.in/faculty/venky/'
    },
    venue: 'IEEE Trans. on Image Processing, TIP',
    year: '2017',
    description: 'We understand free-hand sketches through human gaze fixations based on visual saliency.',
    image: '/media/sketch_analysis.png',
    links: {
      paper: 'https://arxiv.org/pdf/1703.06554.pdf',
      website: 'http://val.cds.iisc.ac.in/sketchfix/',
      data: 'https://www.dropbox.com/s/zook724xg256x27/SketchFix-160.zip?dl=0'
    }
  }
]
