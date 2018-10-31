<template>
  <div class="keyboard zhifubao light-wheat-bg">
    <slot name="keyBoardContent"></slot>
    <table class="key">
      <tr>
        <td :class="currKey == 1 ?'td-bg':''" @click="onClick_key(1)">1</td>
        <td :class="currKey == 2 ?'td-bg':''" @click="onClick_key(2)">2</td>
        <td :class="currKey == 3 ?'td-bg':''" @click="onClick_key(3)">3</td>
      </tr>
      <tr>
        <td :class="currKey == 4 ?'td-bg':''" @click="onClick_key(4)">4</td>
        <td :class="currKey == 5 ?'td-bg':''" @click="onClick_key(5)">5</td>
        <td :class="currKey == 6 ?'td-bg':''" @click="onClick_key(6)">6</td>
      </tr>
      <tr>
        <td :class="currKey == 7 ?'td-bg':''" @click="onClick_key(7)">7</td>
        <td :class="currKey == 8 ?'td-bg':''" @click="onClick_key(8)">8</td>
        <td :class="currKey == 9 ?'td-bg':''" @click="onClick_key(9)">9</td>

      </tr>
      <tr>
        <td :class="['dot-bg',currKey == 'dot' ?'td-bg':'']" @click="onClick_key('dot')">.</td>
        <td :class="currKey === 0 ?'td-bg':''" @click="onClick_key(0)">0</td>
        <td :class="['del-bg',currKey == 'del' ?'td-bg':'']" @click="onClick_key('del')" rowspan="2" class="back">
          <div class="del-border">
            <div class="left"></div>
            <div class="close">
              <span></span>
              <span></span>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
var _timer = 0;
export default {
  created() {},
  mounted() {},
  data() {
    return {
      currKey: "",
      keyCodeTime: 300
    };
  },
  components: {},
  props: {},
  watch: {},
  computed: {},
  methods: {
    onClick_key($str) {
      this.currKey = $str;
      if (_timer > 0) {
        clearTimeout(_timer);
      }
      _timer = setTimeout(() => {
        this.currKey = "";
      }, this.keyCodeTime);
      this.$emit("click", $str);
    }
  }
};
</script>
<style lang="scss" scoped>
table {
  height: 4.4rem;
  width: 100%;
  empty-cells: show;
  border-collapse: collapse;
  background-color: #f1f1f1;
  border-top: 1px solid #dddddd;
  tr {
    height: 1.1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #bbbbbb;
    td {
      border-right: 1px solid #bbbbbb;
      width: 25%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;
      font-size: 0.56rem;
      &:nth-last-of-type(1) {
        border-right: none;
      }
    }
    .dot-bg,
    .del-bg {
      background-color: #cccccc;
    }
    .td-bg {
      background-color: #d7dadf;
    }

    &:nth-of-type(4) {
      border-bottom: none;
    }
    .kb {
      height: 0.58rem;
      width: 0.58rem;
    }
  }
}

.confirm {
  background-color: #469de4;
  color: #9ccef6;
  font-size: 0.36rem;
}

.back {
  position: relative;
}

.del-border {
  height: 0.293rem;
  width: 0.3rem;
  border: 1px solid #000000;
  position: absolute;
  left: 0px;
  right: 0;
  bottom: 0;
  top: 0;
  -webkit-border-radius: 0 0.05rem 0.05rem 0;
  -moz-border-radius: 0 0.05rem 0.05rem 0;
  border-radius: 0 0.05rem 0.05rem 0;
  margin: auto;
  border-left: none;
  .left {
    width: 0.21rem;
    height: 0.21rem;
    border-top: 1px solid #000000;
    border-left: 1px solid #000000;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute;
    top: 0.032rem;
    left: -0.12rem;
    border-right: none;
  }
  .close {
    position: absolute;
    height: 0.3rem;
    width: 0.3rem;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    margin-top: 0.01rem;
    margin-left: 0.12rem;
    span:nth-of-type(1) {
      display: block;
      background-color: #000000;
      height: 0.2rem;
      width: 0.02rem;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-transform-origin: 50% 50%;
      -moz-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
      -o-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      position: absolute;
    }
    span:nth-of-type(2) {
      display: block;
      background-color: #000000;
      height: 0.2rem;
      width: 0.02rem;
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
    }
  }
}

@media screen and (min-height: 672px) {
  .del-border .close {
    top: 0.04rem;
    right: 0.1rem;
  }
}

.del-border .left {
  left: -0.115rem;
}

@media screen and (max-height: 631px) {
  .del-border {
    height: 0.296rem;
    .left {
      left: -0.119rem;
      top: 0.03rem;
    }
    .close {
      right: 0.05rem;
    }
  }
}

@media screen and (max-height: 603px) {
  .del-border .close {
    top: 0.125rem;
    right: 0.13rem;
  }
}

@media screen and (max-height: 574px) {
  .del-border {
    height: 0.294rem;
  }
  .del-border .left {
    top: 0.03rem;
    left: -0.105rem;
  }
  .del-border .close {
    top: 0.05rem;
    right: 0.1rem;
    font-size: 0.25rem;
  }
}

@media screen and (max-height: 572px) {
  .del-border {
    height: 0.284rem;
  }
  .del-border .close {
    top: 0.05rem;
    right: 0.05rem;
    font-size: 0.25rem;
  }
  .del-border .left {
    top: 0.018rem;
    left: -0.105rem;
  }
}

@media screen and (max-height: 569px) {
  .del-border .close {
    top: 0.125rem;
    right: 0.13rem;
  }
}

@media screen and (max-height: 567px) {
  .del-border .close {
    top: 0.1rem;
    right: 0.13rem;
  }
}

@media screen and (max-width: 532px) {
  .del-border .close {
    top: 0.04rem;
    right: 0.05rem;
  }
}

@media screen and (max-width: 320px) and (max-height: 504px) and (min-height: 300px) {
  .del-border .close {
    top: 0.05rem;
    right: 0.09rem;
  }
  .del-border {
    height: 0.274rem;
    .left {
      left: -0.101rem;
    }
  }
}
</style>