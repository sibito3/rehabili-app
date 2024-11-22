import { Prefecture } from "@/util/types";
import { createStore } from "vuex";

const prefectures: Prefecture[] = [
    {id: 0 , name: '北海道', isExclude: false},
    {id: 1 , name: '青森県', isExclude: false},
    {id: 2 , name: '岩手県', isExclude: false},
    {id: 3 , name: '宮城県', isExclude: false},
    {id: 4 , name: '秋田県', isExclude: false},
    {id: 5 , name: '山形県', isExclude: false},
    {id: 6 , name: '福島県', isExclude: false},
    {id: 7 , name: '茨城県', isExclude: false},
    {id: 8 , name: '栃木県', isExclude: false},
    {id: 9 , name: '群馬県', isExclude: false},
    {id: 10, name: '埼玉県', isExclude: false},
    {id: 11, name: '千葉県', isExclude: false},
    {id: 12, name: '東京都', isExclude: false},
    {id: 13, name: '神奈川県', isExclude: false},
    {id: 14, name: '新潟県', isExclude: false},
    {id: 15, name: '富山県', isExclude: false},
    {id: 16, name: '石川県', isExclude: false},
    {id: 17, name: '福井県', isExclude: false},
    {id: 18, name: '山梨県', isExclude: false},
    {id: 19, name: '長野県', isExclude: false},
    {id: 20, name: '岐阜県', isExclude: false},
    {id: 21, name: '静岡県', isExclude: false},
    {id: 22, name: '愛知県', isExclude: false},
    {id: 23, name: '三重県', isExclude: false},
    {id: 24, name: '滋賀県', isExclude: false},
    {id: 25, name: '京都府', isExclude: false},
    {id: 26, name: '大阪府', isExclude: false},
    {id: 27, name: '兵庫県', isExclude: false},
    {id: 28, name: '奈良県', isExclude: false},
    {id: 29, name: '和歌山県', isExclude: false},
    {id: 30, name: '鳥取県', isExclude: false},
    {id: 31, name: '島根県', isExclude: false},
    {id: 32, name: '岡山県', isExclude: false},
    {id: 33, name: '広島県', isExclude: false},
    {id: 34, name: '山口県', isExclude: false},
    {id: 35, name: '徳島県', isExclude: false},
    {id: 36, name: '香川県', isExclude: false},
    {id: 37, name: '愛媛県', isExclude: false},
    {id: 38, name: '高知県', isExclude: false},
    {id: 39, name: '福岡県', isExclude: false},
    {id: 40, name: '佐賀県', isExclude: false},
    {id: 41, name: '長崎県', isExclude: false},
    {id: 42, name: '熊本県', isExclude: false},
    {id: 43, name: '大分県', isExclude: false},
    {id: 44, name: '宮崎県', isExclude: false},
    {id: 45, name: '鹿児島県', isExclude: false},
    {id: 46, name: '沖縄県', isExclude: false},
] 

const store = createStore({
    state: {
        prefectures: prefectures,
        targetPrefectures: prefectures
    },
    getters: {
        // 現在の都道府県の全てを取得
        prefectures(state){
            return state.prefectures;
        },
        // 除外されていない都道府県のみを取得
        targetPrefectures(state){
            return state.prefectures.filter((p, i) => p.isExclude === false);
        }
    },
    mutations: {
        /** 渡された都道府県のリストでルーレット対象のリストを更新する */
        updatePrefectures(state, payload: Prefecture[]){
            state.prefectures = payload;
        }
    },
    actions: {
        /** 引数に渡された都道府県の除外フラグの切り替えを行う */
        toggleExcludeFlag({commit, state}, prefecture: Prefecture) {
            const newPrefectures :Prefecture[] = state.prefectures.map((p, i) => {
                if(p.id === prefecture.id) {
                   return {
                    id: p.id,
                    name: p.name,
                    isExclude: !p.isExclude
                   };
                }
                else return p;
            })
            commit('updatePrefectures', newPrefectures)
        }
    }
})

export default store;