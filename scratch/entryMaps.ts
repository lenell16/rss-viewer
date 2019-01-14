import { DateTime } from 'luxon';

export const youtube = entry => ({
  unread: true,
  type: 'youtube',
  typeMetadata: {
    watched: false,
    start: 0,
    completed: false,
    videoId: entry['yt:videoId'][0]
  },
  title: entry.title[0],
  author: entry.author[0].name,
  crawled: DateTime.local().toMillis(), // TODO - Format
  updated: DateTime.fromISO(entry.updated[0]).toMillis(), // TODO - Format
  published: DateTime.fromISO(entry.published[0]).toMillis(), // TODO - Format
  collections: [],
  url: entry.link[0].$.href,
  originId: entry.id[0],
  thumbnail: entry['media:group'][0]['media:thumbnail'][0].$,
  content: {
    content: entry['media:group'][0]['media:description'][0],
    direction: 'ltr'
  },
  origin: {
    streamId:
      'feed/https://www.youtube.com/feeds/videos.xml?channel_id=UCrqsNpKuDQZreGaxBL_a5Jg',
    title: 'Deji',
    htmlUrl: 'https://www.youtube.com/channel/UCrqsNpKuDQZreGaxBL_a5Jg'
  }
});
