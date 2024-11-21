<template>
<div data-bs-theme="dark">
    <div>This is Main Component</div>
    <p>ルーレットお試し</p>
    <div>{{ prefectureList[resultIndex].name }}</div>
    <button class="btn btn-primary" @click="startRoulette" v-if="isRouletteRunning === false">すた～と</button>
    <button class="btn btn-primary" @click="stopRoulette" v-else>すとっぷ</button>
</div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'MainComponent',
computed: {
    prefectureList() {
        console.log(this.$store.state.prefectures);
        return this.$store.state.prefectures;
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
        this.resultIndex = Math.floor(Math.random() * this.prefectureList.length);
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

</style>
  