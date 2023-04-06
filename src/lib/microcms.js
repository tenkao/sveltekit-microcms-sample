// MicroCMS の API を呼び出すためのライブラリ
import { createClient } from 'microcms-js-sdk';
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private';
const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY
});

// API の呼び出し
// 一覧を取得する
export const getList = async (queries) => {
  return await client.get({ endpoint: 'blogs', queries });
};

// 詳細を取得する
export const getDetail = async (contentId, queries) => {
  return await client.getListDetail({
    endpoint: 'blogs',
    contentId,
    queries
  });
};
