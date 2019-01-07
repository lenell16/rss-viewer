const server = require('server');
const got = require('got');

const FEEDLY_URL = 'https://cloud.feedly.com/v3';

server({ port: 3000 }, async ctx => {
  const response = await got(FEEDLY_URL + ctx.url, {
    headers: {
      Authorization:
        'OAuth Azr0UtEwtVgECjRzD6yoFEHKNsdCPXYbOyZKDTOD-ksyr_ES1bw1lkDFmnspWVOF8UUo0IQ284b8aaQuCmKcNiMuzMs4pHegS87d6RcpdovMnJu4IlNOHyc_7borJLbylsJ7D4Z58DKM5FnJqnSsqQm0Z9ZDrXTNS43dzf7njlHoqL9PFyyM2ej2Miw1CzibtYaaNsLhp3IQMfA-n3I6baaTdp1ceCd_xBqZqf8wCpnPIjjpraIpJi8BPfI0WA:feedlydev'
    }
  });
  return response.body;
}).then(ctx => {
  console.log(`Server launched on http://localhost:${ctx.options.port}/`);
});

const test = {
  unread: true,
  typeMetadata: {
    watched: false,
    start: 109,
    completed: false,
    videoId: 'XsVl0bHwa8g'
  },
  type: 'youtube',
  title: 'my real "brother"',
  author: 'Deji',
  updated: 1546697239000,
  crawled: 1546697244593,
  published: 1546695679000,
  thumbnail: [
    {
      url: 'https://i1.ytimg.com/vi/XsVl0bHwa8g/hqdefault.jpg',
      width: 480,
      height: 360
    }
  ],
  id:
    'DjHybj+aVI8Np4OlPHDCJrmVEJotOhw1CDEyyEm0PXI=_1681e56ffb1:a304a8:c2ce2e2e',
  originId: 'yt:video:XsVl0bHwa8g',
  content: {
    content:
      "►GET NEW TANK HATS HERE: https://shop.comedyshortsgamer.com/collections/hats\nIf you see this, tell me how you're doing!\nSHOP!!: http://shop.comedyshortsgamer.com\n►Instagram: http://instagram.com/comedygamer\n►Follow Me On Twitter: https://twitter.com/Deji\n►Facebook: https://www.facebook.com/ComedyShortsGamerPage\nAdd Me On Snapchat: comedygamer\n►Click Here to Subscribe: http://bit.ly/1h6i9oR\nWebsite: http://www.comedyshortsgamer.com\nWhat I use to Record my Gameplay: http://e.lga.to/CSG\nMy App:\nIPhone - https://itunes.apple.com/gb/app/csg-s...\nAndroid - https://play.google.com/store/apps/de..\nfamily friendly pg clean\nYOU GUYS ARE AWESOME!",
    direction: 'ltr'
  },
  url: 'https://www.youtube.com/watch?v=XsVl0bHwa8g',
  origin: {
    streamId:
      'feed/https://www.youtube.com/feeds/videos.xml?channel_id=UCrqsNpKuDQZreGaxBL_a5Jg',
    title: 'Deji',
    htmlUrl: 'https://www.youtube.com/channel/UCrqsNpKuDQZreGaxBL_a5Jg'
  },
  categories: [
    {
      id:
        'user/854533a4-e8f4-47a4-bd6b-15656f0ef801/category/YouTube Subscriptions',
      label: 'YouTube Subscriptions'
    }
  ]
};
