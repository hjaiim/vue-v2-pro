<template>
  <main-layout>

    <div>我的name:{{$store.state.name}}</div>
    <div>我的age:{{$store.state.age}}</div>

    <!-- mutations测试---------------- -->
    <button @click="addAge">mutations,年龄+1</button>
    <button @click="$store.commit('reduce')">mutations,年龄+1</button>
    <button @click="$store.commit('add',10)">mutations,年龄+10</button>
    <button @click="$store.commit({type:'addObj',num:15})">mutations,年龄{num:13}+13</button>
    <!-- <button @click="mapAdd">mutations,mapMutations</button> -->
    <button @click="test">mutations,mapMutations</button>

    <!-- getter测试--------------- -->
    <div>getter->age改变->再自增2---结果-->{{addTwo}}</div>
    <div>getter->age改变->再自减2---结果-->{{countDel}}</div>

    <!-- actions测试-------------- -->
    <button @click="action1">actions1,+3</button>
    <button @click="action2">actions2,+1</button>
    <button @click="action3">actions3,延时2s+1</button>
    <button @click="mutations4">mutations4,延时2s+1</button>
  </main-layout>
</template>
<script type="text/ecmascript-6">
import mainLayout from "common/mainLayout";
import { mapGetters, mapMutations } from "vuex";
export default {
  created() {},
  data() {
    return {};
  },
  components: {
    mainLayout
  },
  computed: {
    addTwo() {
      return this.$store.getters.countAdd;
    },
    ...mapGetters(["countDel"])
  },
  watch: {},
  methods: {
    addAge() {
      this.$store.commit("test");
    },
    ...mapMutations(
      ["test"]
      // mapAdd: "test"
    ),
    action1() {
      this.$store.dispatch("addAction", 3);
    },
    action2() {
      this.$store.dispatch("testAction");
    },
    action3() {
      this.$store.dispatch("time");
    },
    mutations4() {
      this.$store.commit("test1");
    }
  }
};
</script>
