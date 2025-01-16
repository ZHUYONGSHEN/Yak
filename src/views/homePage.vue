<template>
  <div class="home-page"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { Scheduler } from "@/packages/scheduler/index";
onMounted(() => {
  const scheduler = new Scheduler(document.querySelector(".home-page"), {});
  console.log(scheduler);
});
</script>
<style scoped lang="less">
</style>
