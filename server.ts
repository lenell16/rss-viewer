import * as server from 'server';
import { karin } from 'karin';

const FEEDLY_URL = 'https://cloud.feedly.com/v3';
const feedly = karin.create({
  origin: FEEDLY_URL,
  headers: {
    Authorization:
      'OAuth Azr0UtEwtVgECjRzD6yoFEHKNsdCPXYbOyZKDTOD-ksyr_ES1bw1lkDFmnspWVOF8UUo0IQ284b8aaQuCmKcNiMuzMs4pHegS87d6RcpdovMnJu4IlNOHyc_7borJLbylsJ7D4Z58DKM5FnJqnSsqQm0Z9ZDrXTNS43dzf7njlHoqL9PFyyM2ej2Miw1CzibtYaaNsLhp3IQMfA-n3I6baaTdp1ceCd_xBqZqf8wCpnPIjjpraIpJi8BPfI0WA:feedlydev'
  }
});

server({ port: 3000 }, async ctx => await feedly.get`${ctx.url}`).then(ctx => {
  console.log(`Server launched on http://localhost:${ctx.options.port}/`);
});

const test = {
  origin: {
    streamId:
      'feed/https://www.youtube.com/feeds/videos.xml?channel_id=UCrqsNpKuDQZreGaxBL_a5Jg',
    title: 'Deji',
    htmlUrl: 'https://www.youtube.com/channel/UCrqsNpKuDQZreGaxBL_a5Jg'
  }
};
