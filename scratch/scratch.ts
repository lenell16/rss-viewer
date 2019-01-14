import * as got from 'got';
import { promisify } from 'util';
import { parseString } from 'xml2js';

import firebase from './firebase';

const db = firebase.firestore();

const scrapeFeeds = db.collection('scrapeFeeds');

const getSnapshotArray = (snapshot: FirebaseFirestore.QuerySnapshot): any[] => {
  const snapArray = [];
  snapshot.forEach(doc =>
    snapArray.push({ id: doc.id, ...doc.data(), ref: doc.ref })
  );
  return snapArray;
};

const fetchFeedString = async (feedUrl: string): Promise<string> => {
  const response = await got(feedUrl);
  return response.data;
};

const parseStringPromise = (xmlString: string): Promise<{}> =>
  new Promise((resolve, reject) => {
    parseString(xmlString, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });

const parseXml = async (xmlString: string): Promise<{}> =>
  await parseStringPromise(xmlString);

const mapPromise = mapFn => (values: any[]): Promise<any[]> =>
  Promise.all(values.map(mapFn));

const entry = [
  {
    id: ['yt:video:bqtE6Q79PPs'],
    'yt:videoId': ['bqtE6Q79PPs'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Error Correction & International Book Codes - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=bqtE6Q79PPs'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2019-01-02T16:30:00+00:00'],
    updated: ['2019-01-09T22:27:31+00:00'],
    'media:group': [
      {
        'media:title': [
          'Error Correction & International Book Codes - Computerphile'
        ],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/bqtE6Q79PPs?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i3.ytimg.com/vi/bqtE6Q79PPs/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "Moving on from crude error correction to more sophisticated methods, Professor Brailsford demostrates using the ISBN 'book code'. \n\nError Correction: https://www.youtube.com/watch?v=5sskbSvha9M \nReed Solomon Codes: COMING SOON\n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '1765',
                  average: '4.93',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '48466'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:CDpL9wOQcus'],
    'yt:videoId': ['CDpL9wOQcus'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Additional Processors - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=CDpL9wOQcus'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-12-27T19:03:56+00:00'],
    updated: ['2019-01-09T21:45:06+00:00'],
    'media:group': [
      {
        'media:title': ['Additional Processors - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/CDpL9wOQcus?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i4.ytimg.com/vi/CDpL9wOQcus/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "After the multi-processor video we look at processors that are central-ish.... Dr Steve Bagley takes apart the old IBM PC. \n\nEXTRA BITS: https://youtu.be/06bGCdvV1S4 \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '1980',
                  average: '4.93',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '62621'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:SiJpkucGa1o'],
    'yt:videoId': ['SiJpkucGa1o'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Separable Filters and a Bauble - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=SiJpkucGa1o'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-12-21T18:19:27+00:00'],
    updated: ['2019-01-09T22:24:53+00:00'],
    'media:group': [
      {
        'media:title': ['Separable Filters and a Bauble - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/SiJpkucGa1o?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i4.ytimg.com/vi/SiJpkucGa1o/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "How do image processing apps and realtime applications apply effects so quickly? Dr Mike Pound decides to blur his Christmas Tree...\n\nMike's code: http://GitHub.com/mikepound/convolve \n\nEXTRA BITS: https://youtu.be/MHIS59Se66k \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '1855',
                  average: '4.98',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '51225'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:p8-rZOCn5rQ'],
    'yt:videoId': ['p8-rZOCn5rQ'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: [
      "What's your Favourite Programming Language? (sound check Q) - Computerphile"
    ],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=p8-rZOCn5rQ'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-12-18T12:38:13+00:00'],
    updated: ['2019-01-09T21:39:37+00:00'],
    'media:group': [
      {
        'media:title': [
          "What's your Favourite Programming Language? (sound check Q) - Computerphile"
        ],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/p8-rZOCn5rQ?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i1.ytimg.com/vi/p8-rZOCn5rQ/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "For the past year, we've been asking this as a sound-check question. Here are the results!\n\nProfessor Graham Hutton (Haskell)\nJoseph Best (BBC Basic)\nDavid CX (Java / Python)\nLorraine Underwood (PHP)\nRob Miles (Python)\nCharles Arthur (Python)\nSarah Spencer (Javascript)\nMatt Denton (C)\nMatt Lloyd (C/Python/PHP)\nIan Dickinson (C)\nTom Sheridan (Python)\nSpencer Owen (Forth)\nRob Morley (PHP)\nProfessor Brian Kernighan (C/AWK/Python)\nRebecca Tickle (Javascript)\nDr Robert Smith (Common Lisp)\nAaron Jackson (Lisp / Matlab)\nProfessor David Brailsford (C)\nKate Green (HTML LOL)\nDr Steve Bagley (6502 Assembler)\nDr Max Wilson (Javascript)\nJason Fitzpatrick (Basic)\nProfessor Ross Anderson (Exim / Python)\nAdrian Marinescu (Matlab)\nMatt Phillips (68000 Assembler)\nDr Mike Pound (C#)\nProfessor Phil Moriarty (LabView)\n\n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '6010',
                  average: '4.93',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '167707'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:7ENFeb-J75k'],
    'yt:videoId': ['7ENFeb-J75k'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Multithreading Code - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=7ENFeb-J75k'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-12-14T13:04:24+00:00'],
    updated: ['2019-01-09T11:08:45+00:00'],
    'media:group': [
      {
        'media:title': ['Multithreading Code - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/7ENFeb-J75k?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i4.ytimg.com/vi/7ENFeb-J75k/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "We take multithreaded code for granted, but what's needed to make it work properly. We need two Dr Steve Bagleys to make this illustrate this! \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '3678',
                  average: '4.94',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '96442'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:tDVPcqGpEnM'],
    'yt:videoId': ['tDVPcqGpEnM'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Apache Spark - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=tDVPcqGpEnM'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-12-12T18:28:02+00:00'],
    updated: ['2019-01-09T12:32:01+00:00'],
    'media:group': [
      {
        'media:title': ['Apache Spark - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/tDVPcqGpEnM?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i1.ytimg.com/vi/tDVPcqGpEnM/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "Analysing big data stored on a cluster is not easy. Spark allows you to do so much more than just MapReduce. Rebecca Tickle takes us through some code. \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '2032',
                  average: '4.84',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '73288'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:3RvkfuXUv1c'],
    'yt:videoId': ['3RvkfuXUv1c'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Multiple Processor Systems - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=3RvkfuXUv1c'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-12-07T16:08:29+00:00'],
    updated: ['2019-01-09T19:01:35+00:00'],
    'media:group': [
      {
        'media:title': ['Multiple Processor Systems - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/3RvkfuXUv1c?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i4.ytimg.com/vi/3RvkfuXUv1c/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "Just what does it mean to have a multi-processor system? Dr Steve Bagley on symmetric and assymmetric multi-processor systems. \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '2346',
                  average: '4.86',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '66324'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:cvhKoniK5Uo'],
    'yt:videoId': ['cvhKoniK5Uo'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['MapReduce - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=cvhKoniK5Uo'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-12-04T16:04:13+00:00'],
    updated: ['2019-01-09T20:59:31+00:00'],
    'media:group': [
      {
        'media:title': ['MapReduce - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/cvhKoniK5Uo?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i4.ytimg.com/vi/cvhKoniK5Uo/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "Peforming operations in parallel on big data. Rebecca Tickle explains MapReduce. \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '2811',
                  average: '4.72',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '74847'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:RG2Z7Xgthb4'],
    'yt:videoId': ['RG2Z7Xgthb4'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['BEAST & The GPU Cluster - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=RG2Z7Xgthb4'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-11-28T22:25:26+00:00'],
    updated: ['2019-01-09T18:40:56+00:00'],
    'media:group': [
      {
        'media:title': ['BEAST & The GPU Cluster - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/RG2Z7Xgthb4?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i3.ytimg.com/vi/RG2Z7Xgthb4/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          'After our password cracking video people wanted to see "Beast" the machine Mike used. The team have been improving the setup though... Joe Best and Aaron Jackson explain.\n\nRogue, 4 Titan X Maxwell\nBeast, 4 Titan X Maxwell\nDeadpool, 4 Titan XP\nStorm, 8 1080 Ti\nHavok, 8 Titan XP\nMagneto, 4 1080 Ti\nGambit, 4 1080 Ti\nZorin, 3 Titan X Pascal\nThadeus, 2 Titan X Pascal (undergrad machine)\n\nIn general there are around 230 CPU cores and 1TB of RAM across all machines.\n\nHigh Performance Computing : https://youtu.be/jBsc83_4RsQ \nPassword Cracking: https://youtu.be/7U-RbOKanYs \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran\'s Numberphile. More at http://www.bradyharan.com'
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '1656',
                  average: '4.90',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '50887'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:9sO2qdTci-s'],
    'yt:videoId': ['9sO2qdTci-s'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Double Ratchet Messaging Encryption - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=9sO2qdTci-s'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-11-23T15:08:36+00:00'],
    updated: ['2019-01-09T12:32:17+00:00'],
    'media:group': [
      {
        'media:title': ['Double Ratchet Messaging Encryption - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/9sO2qdTci-s?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i2.ytimg.com/vi/9sO2qdTci-s/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "How does instant messaging encryption protect against attack? Dr Mike Pound on the double ratchet. \n\nDiffie Hellman Key Exchange Explained: https://youtu.be/NmM9HA2MQGI \nSignal Protocol: https://youtu.be/DXv1boalsDI \nEndianness Explained with an Egg: https://youtu.be/NcaiHcBvDR4 \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '2234',
                  average: '4.96',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '65477'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:NcaiHcBvDR4'],
    'yt:videoId': ['NcaiHcBvDR4'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Endianness Explained With an Egg - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=NcaiHcBvDR4'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-11-21T20:39:39+00:00'],
    updated: ['2019-01-09T07:09:35+00:00'],
    'media:group': [
      {
        'media:title': ['Endianness Explained With an Egg - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/NcaiHcBvDR4?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i3.ytimg.com/vi/NcaiHcBvDR4/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "Byte ordering, or boiled egg orientation, endianness is important! Dr Steve Bagley on the computer science topic named after something from an 18th century novel....\n\nThe copy of Gulliver's Travels used in the graphics was found at archive.org and can be viewed here: http://bit.ly/C_Gulliver\n\nThe animations of the hex to binary have a classic 'out by one' error - it occurred between keyboard and chair during the graphics creation process.... Sean\n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '1806',
                  average: '4.95',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '50242'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:DXv1boalsDI'],
    'yt:videoId': ['DXv1boalsDI'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Instant Messaging and the Signal Protocol - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=DXv1boalsDI'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-11-16T18:52:01+00:00'],
    updated: ['2019-01-09T19:37:47+00:00'],
    'media:group': [
      {
        'media:title': [
          'Instant Messaging and the Signal Protocol - Computerphile'
        ],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/DXv1boalsDI?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i1.ytimg.com/vi/DXv1boalsDI/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "How do instant message apps do end to end encryption when one phone may not even be switched on yet? Dr Mike Pound on the Signal protocol at the core of most messaging apps.\n\nDouble Ratchet: COMING SOON!\n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '3790',
                  average: '4.95',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '113593'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:k6PzjGwyKuY'],
    'yt:videoId': ['k6PzjGwyKuY'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ["What's Behind Port Smash? - Computerphile"],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=k6PzjGwyKuY'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-11-13T16:41:40+00:00'],
    updated: ['2019-01-09T16:56:12+00:00'],
    'media:group': [
      {
        'media:title': ["What's Behind Port Smash? - Computerphile"],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/k6PzjGwyKuY?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i4.ytimg.com/vi/k6PzjGwyKuY/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "The Port Smash exploits Hyperthreading and timings to work out what other programs are doing. Dr Steve Bagley looks at how.\n\nSpectre & Meltdown: https://youtu.be/I5mRwzVvFGE \nOut of Order CPUs: https://youtu.be/_qvOlL8nhN4 \n\nZig Zag Decryption: https://www.youtube.com/watch?v=yxx3Bkmv3ck \nPhysics of Computer Chips: https://www.youtube.com/watch?v=xkLAhU74f3s&t=74s \nDigital Images: https://www.youtube.com/watch?v=06OHflWNCOE&t=12s \nDeadly Truth of General AI: https://www.youtube.com/watch?v=tcdVC4e6EV4&t=11s \n\n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '1878',
                  average: '4.91',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '61294'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:bnRNiE_OVWA'],
    'yt:videoId': ['bnRNiE_OVWA'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['Infinite Data Structures: To Infinity & Beyond! - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=bnRNiE_OVWA'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-11-06T11:36:27+00:00'],
    updated: ['2019-01-09T14:46:08+00:00'],
    'media:group': [
      {
        'media:title': [
          'Infinite Data Structures: To Infinity & Beyond! - Computerphile'
        ],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/bnRNiE_OVWA?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i3.ytimg.com/vi/bnRNiE_OVWA/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "Infinite data structures sound impossible. Professor Graham Hutton shows how laziness can win them over. \n\nEXTRA BITS: https://youtu.be/yCyBdeJmHM0 \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '2967',
                  average: '4.89',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '58483'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: ['yt:video:mwTaISbA87A'],
    'yt:videoId': ['mwTaISbA87A'],
    'yt:channelId': ['UC9-y-6csu5WGm29I7JiwpnA'],
    title: ['How Face ID Works... Probably - Computerphile'],
    link: [
      {
        $: {
          rel: 'alternate',
          href: 'https://www.youtube.com/watch?v=mwTaISbA87A'
        }
      }
    ],
    author: [
      {
        name: ['Computerphile'],
        uri: ['https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA']
      }
    ],
    published: ['2018-11-01T17:08:07+00:00'],
    updated: ['2019-01-09T21:43:39+00:00'],
    'media:group': [
      {
        'media:title': ['How Face ID Works... Probably - Computerphile'],
        'media:content': [
          {
            $: {
              url: 'https://www.youtube.com/v/mwTaISbA87A?version=3',
              type: 'application/x-shockwave-flash',
              width: '640',
              height: '390'
            }
          }
        ],
        'media:thumbnail': [
          {
            $: {
              url: 'https://i2.ytimg.com/vi/mwTaISbA87A/hqdefault.jpg',
              width: '480',
              height: '360'
            }
          }
        ],
        'media:description': [
          "Unlocking a phone with a face? Why doesn't the phone need thousands of example pictures before it works? Dr Mike Pound explains how it might work... \n\nFace Detection: https://youtu.be/uEJ71VlUmMQ \n\nhttps://www.facebook.com/computerphile\nhttps://twitter.com/computer_phile\n\nThis video was filmed and edited by Sean Riley.\n\nComputer Science at the University of Nottingham: https://bit.ly/nottscomputer\n\nComputerphile is a sister project to Brady Haran's Numberphile. More at http://www.bradyharan.com"
        ],
        'media:community': [
          {
            'media:starRating': [
              {
                $: {
                  count: '3900',
                  average: '4.96',
                  min: '1',
                  max: '5'
                }
              }
            ],
            'media:statistics': [
              {
                $: {
                  views: '116745'
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

fetchFeedString(
  'https://www.youtube.com/feeds/videos.xml?channel_id=UC9-y-6csu5WGm29I7JiwpnA'
).then(text => console.log(text));
// .then(parseXml)
// .then(text => console.log(JSON.stringify(text, null, 2)));
// scrapeFeeds
//   .where('feedType', '==', 'youtube')
//   .get()
//   .then(getSnapshotArray)
//   .then(snapshot => {
//     Promise.resolve(snapshot)
//       .then(snapshot => snapshot.map(({ feedUrl }) => feedUrl))
//       .then(mapPromise(fetchFeedString))
//       .then(mapPromise(parseXml))
//       .then(parsedFeeds =>
//         parsedFeeds.forEach((parsedFeed: any, index) =>
//           snapshot[index].ref.update({ feedId: parsedFeed.feed.id[0] })
//         )
//       );
//   });
