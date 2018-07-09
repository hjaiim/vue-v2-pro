/**
 * Created by haojun on 2018/6/3.
 */

export default {
  addAction(content, n){
    content.commit('add', n);
  },
  testAction({commit}){
    commit('test')
  },
  time({commit}){
    console.log('倒计时开始')
    let timer = setTimeout(()=>
    {
      clearTimeout(timer);
      commit('reduce');
      console.log('倒计时结束')
    }, 2000)
  }
}
