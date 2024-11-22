<template>
<div>
    <div>This is Main Component</div>
    <p>ルーレットお試し</p>
    <div>{{ targetPrefectureList[resultIndex].name }}</div>
    <button class="btn btn-primary" @click="startRoulette" v-if="isRouletteRunning === false">すた～と</button>
    <button class="btn btn-primary" @click="stopRoulette" v-else>すとっぷ</button>
    <div>ルーレットの結果から除外する都道府県を選択</div>
    <div v-for="p in prefectureList" :key="p.id">
        <div class="form-check">
            <div class="check-custom">
                <input v-bind:value="p.isExclude" v-on:change="onChangeCheckBox(p)" class="form-check-input" type="checkbox"  id="flexCheckDefault">
            </div>
            <label class="form-check-label" for="flexCheckDefault">
                {{ p.name }}
            </label>
        </div>
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
        console.log("aaaa", this.$store.getters.targetPrefectures);
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
.check-custom {
    display: inline-block;
    margin-right: 0.2em;
}
</style>
  