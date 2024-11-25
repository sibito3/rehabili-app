<template>
<div>
    <div class="main-container container">
        <!-- <div>This is Main Component</div> -->
        <div class="row title-area mt-3">
            <div><h1>都道府県ルーレット</h1></div>
        </div>
        <div class="row area-margin"></div>
        <div class="row result-area">
            <div class="d-flex justify-content-center">
                <div class="result border border-dark-subtle border-3 rounded d-flex justify-content-center align-items-center">
                    <div>{{ targetPrefectureList.length > 0 ? targetPrefectureList[resultIndex].name : "抽選対象がありません" }}</div>
                </div>
            </div>
        </div>
        <div class="row button-area mt-3">
            <div>
                <button class="btn btn-primary" @click="startRoulette" v-if="isRouletteRunning === false">すた～と</button>
                <button class="btn btn-primary" @click="stopRoulette" v-else>すとっぷ</button>
            </div>
        </div>
        <div class="row area-margin"></div>
        <div class="row exclude-area">
            <div class="card px-0 h-100">
                <div  class="card-header">
                    ルーレットの結果から除外する都道府県を選択
                </div>
                <div class="card-body overflow-auto">
                    <div class="item-center">
                        <ul class="list-item-left">
                            <li v-for="p in prefectureList" :key="p.id">
                                <div class="form-check">
                                    <span class="check-custom">
                                        <input v-bind:checked="p.isExclude" v-on:change="onChangeCheckBox(p)" class="form-check-inline" type="checkbox" :id="`flexCheckPrefecture${p.id}`">
                                    </span>
                                    <label class="form-check-label" :for="`flexCheckPrefecture${p.id}`">
                                        {{ p.name }}
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row area-margin"></div>
    </div>
</div>
</template>
  
<script lang="ts">
import { Prefecture } from '@/util/types';
import { defineComponent } from 'vue';

export default defineComponent({
name: 'MainComponent',
computed: {
    prefectureList(): Prefecture[] {
        return this.$store.getters.prefectures;
    },
    targetPrefectureList(): Prefecture[] {
        return this.$store.getters.targetPrefectures;
    }
},
methods: {
    // ルーレット開始
    startRoulette() {
        this.timer = setInterval(this.drawRoulette, 100);
        this.isRouletteRunning = true;
    },
    // ルーレット停止
    stopRoulette() {
        clearInterval(this.timer);
        this.isRouletteRunning = false;
    },
    // ルーレット処理
    drawRoulette() {
        console.log("回す都道府県リスト", this.targetPrefectureList);
        this.resultIndex = Math.floor(Math.random() * this.targetPrefectureList.length);
    },
    // チェックボックスの切り替え時
    onChangeCheckBox(checkedPrefecture: Prefecture) {
        // if(this.targetPrefectureList.length === 1 && checkedPrefecture.isExclude === false) {
        //     // 対象の都道府県リストが1でさらに減らそうとしたとき
        //     alert("抽選対象をこれ以上減らすことができません！！");
        //     return;
        // }
        this.$store.dispatch('toggleExcludeFlag', checkedPrefecture);
    }
},
data() {
    return {
        /** ルーレット開始・停止に使用するタイマー */
        timer: 0,
        /** ルーレット結果のインデックス */
        resultIndex: 0,
        /** ルーレットが処理中か否か */
        isRouletteRunning: false
    }
},
});
</script>

<style>
.area-margin{
    margin-bottom: 10rem;
}
/* .main-container {
    background-color: rgb(13, 70, 70);
}
.title-area{
    background-color: rgb(83, 74, 163);
}
.result-area{
    background-color: rgb(69, 15, 77);
} */
.result{
    height: 10rem;
    width: 10rem;
    background-color: rgb(107, 4, 18);
}
.button-area{
    /* background-color: rgb(39, 66, 8); */
}
.exclude-area{
    /* background-color: rgb(66, 24, 8); */
    height: 30rem;
}
.check-custom{
 margin-right: -0.5em;
}
.list-item-left{
    display: inline-block;
    text-align: left;
    list-style: none;
}
.item-center{
    text-align: center;
}
/* .item-left{
    display: flex;
    justify-content: left;
    
} */
</style>
  