/**
 * Created by haojun on 2018/6/3.
 */
export default {
  test(state) {
    state.age++;
  },
  reduce(state) {
    state.age++;
  },
  add(state, n) {
    state.age += n;
  },
  addObj(state, obj) {
    state.age += obj.num;
  },
  test1(state) {
    let timer = setTimeout(() => {
      console.log(state.age++);
      state.age++;
    }, 2000)
  }
}
