import {reqBannerListData, reqFloorListData, reqGetCategoryListData} from '@/api'

export default {
    namespaced:true,
    state: {
        categoryListData: [],
        bannerListData:[],
        floorListData:[],
    },
    actions: {
        async getCategoryListData(context) {
            const result = await reqGetCategoryListData()
            if(result.code === 200) {
                context.commit('SAVE_CATEGORY_LIST_DATA',result.data)
            }else{
                console.log(result.message)
            }
        },
        async getBannerListData({commit}) {
            const result = await reqBannerListData()
            if(result.code === 200) {
                commit('SAVE_BANNER_LIST_DATA',result.data)
            }else{
                console.log(result.message)
            }
        },
        async getFloorListData({commit}) {
            const result = await reqFloorListData()
            if(result.code === 200) {
                commit('SAVE_FLOOR_LIST_DATA',result.data)
            }else{
                console.log(result.message)
            }
        }
    },
    mutations: {
        SAVE_CATEGORY_LIST_DATA(state,value) {
            state.categoryListData = value
        },
        SAVE_BANNER_LIST_DATA(state,value ){
            state.bannerListData = value
        },
        SAVE_FLOOR_LIST_DATA(state,value) {
            state.floorListData = value
        }

    },
    getters: {

    },
}
