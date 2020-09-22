
import { getCategory } from "@/request/category"
export default {
    namespaced:true,
    state: {
        categorylist:[]  
    },
    getters: {
        categorylist: state => state.categorylist
    },
    mutations: {
        SET_LIST(state,data){
            state.categorylist = data;
        }
    },
    actions: {
        async get_category_list({commit}){
            let res = await getCategory();  
            commit('SET_LIST',res)
        }
    }
};