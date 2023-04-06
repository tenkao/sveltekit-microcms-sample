// microCMS からブログ詳細ページのデータを取得する
import { getDetail } from '$lib/microcms.js';

export const load = async ({ params }) => {
  return await getDetail(params.slug);
};

export const prerender = true;
