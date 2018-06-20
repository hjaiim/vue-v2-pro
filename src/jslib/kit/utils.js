/**
 * Created by haojun on 2018/6/1.
 */

export default {
  setSessionData: (k, v)=>
  {
    sessionStorage.setItem(k, JSON.stringify(v));
  },
  getSessionData: (k)=>
  {
    let v = sessionStorage.getItem(k);
    if (v == null || v == undefined || v == "null" || v == "undefined")
    {
      v = "";
      return v;
    }
    return JSON.parse(v);
  }
}
