import { getList } from '$lib/microcms.js';

// microCMS からデータを取得する
export const load = async () => {
  return await getList();
};

export const prerender = true;
