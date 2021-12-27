<template>
  <div @click="fire" :class="`filter-item ${filter}`" :style="`background-image:url(${url})`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    url: String,
    filter: String,
  },
  methods: {
    fire(){
      this.emitter.emit('setFilter',this.filter) // 다른 컴포넌트로 데이터 보내주는 법 
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>