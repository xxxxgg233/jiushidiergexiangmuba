import $axios from "@/utils/http"; // 导入封装好的axios!

/**
 * 获取
 */
export async function getCategory() {
  let res = await $axios.get("/catelist?istree=1");
  if (res.code == 200 && res.list) {
    return res.list;
  } else {
    return [];
  }
}
/**
 * 添加
 * @param {*} data  添加的数据
 */
export function addCategory(data) {
  return $axios.post("/cateadd", data);
}
/**
 * 修改
 * @param {*} data  修改的数据
 */
export function editCategory(data) {
  return $axios.post("/cateedit", data);
}
/**
 * 删除
 * @param {*} id  删除的ID
 */
export function delCategory(id) {
  return $axios.post("/catedelete", { id });
}
/**
 * 
 * @param {*} id  删除的ID
 */
export function cateInfo(id) {
  return $axios.get("/cateinfo", { id });
}
