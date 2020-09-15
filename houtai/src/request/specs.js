import $axios from "@/utils/http"  // 导入封装好的axios!

/**
 * 获取角色列表
 */
export async function getSpecs() {
    let res = await $axios.get("/specslist")
    if (res.code == 200 && res.list) {
        return res.list
    } else {
        return [];
    }
}
/**
 * 添加角色
 * @param {*} data  添加的数据
 */
export function addSpecs(data) {
    return $axios.post("/specsadd", data)
}
/**
 * 修改角色
 * @param {*} data  修改的数据
 */
export function editSpecs(data) {
    return $axios.post("/specsedit", data)
}
/**
 * 删除角色
 * @param {*} id  删除的ID
 */
export function delSpecs(id) {
    return $axios.post("/specsdelete", { id })
}