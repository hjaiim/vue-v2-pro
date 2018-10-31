<template>
    <div class="wrapper">
        键盘
        <keyboard ref="keyboardCon" :style="{bottom:keyboardTop}" @click="onClick_key">
            <div slot="keyBoardContent" class="exchange-money-box">
                <!-- <div class="key-head">{{keyTitle}}（元） <span @click="onClick_offKeyboard"></span></div> -->
                <div class="key-input">
                    <div class="label" ref="numLabel" :class="['exchange-code',isShowInsert?'shink-line':'']">
                        {{money}}
                    </div>
                    <!-- <div class="key-confirm" @click="onClick_sureKeyBoard">确定</div> -->
                </div>
            </div>
        </keyboard>
    </div>
</template>

<script>
export default {
  created() {},
  mounted() {},
  data() {
    return {
      keyboardTop: "-100%",
      money: "",
      isShowInsert: true
    };
  },
  components: {},
  props: {},
  watch: {},
  computed: {},
  methods: {
    onClick_key($str) {
      $str = $str + "";
      if (!isNaN($str - 0)) {
        this.money = this.addNum(this.money, $str - 0);
      } else if ($str == "del") {
        var tempMoney = this.money;
        this.money = this.delNum(this.money);
        if (tempMoney != this.money && this.money == "") {
          this.isShowInsert = false;
          setTimeout(() => {
            this.isShowInsert = true;
          }, 500);
        }
      } else if ($str == "dot") {
        this.money = this.addDot(this.money);
      }
    },
    addNum(currMoney, num) {
      var dotIndex = currMoney.indexOf(".");
      if (dotIndex >= 0 && currMoney.substr(dotIndex).length >= 3) {
        return currMoney;
      }
      currMoney += num + "";
      if (currMoney.length >= 12 && dotIndex < 0) {
        currMoney = currMoney.substr(0, 11);
      }
      return currMoney;
    },
    delNum(currMoney) {
      if (currMoney.length > 0) {
        currMoney = currMoney.substr(0, currMoney.length - 1);
      }
      return currMoney;
    },
    addDot(currMoney) {
      if (currMoney.indexOf(".") < 0) {
        if (currMoney == "") {
          currMoney = "0.";
        } else {
          currMoney += ".";
        }
      }
      return currMoney;
    }
  }
};
</script>
<style lang="scss" scoped>
.exchange-money-box {
  height: 2.26rem;
  width: 100%;
  background-color: #ffffff;
  font-size: 0.3rem;
  .shink-line:after {
    content: "";
    height: 0.5rem;
    display: inline-block;
    top: 0.52rem;
    position: absolute;
    width: 0.03rem;
    background: #5776e6;
    animation: shink 500ms infinite ease-in-out alternate;
    -webkit-animation: shink 500ms infinite ease-in-out alternate;
    -o-animation: shink 500ms infinite ease-in-out alternate;
    -ms-animation: shink 500ms infinite ease-in-out alternate;
    -moz-animation: shink 500ms infinite ease-in-out alternate;
  }
  .key-head {
    width: 100%;
    text-align: center;
    position: relative;
    height: 0.78rem;
    line-height: 0.78rem;
    background-color: #f1f1f1;
    span {
      height: 0.3rem;
      width: 0.3rem;
      position: absolute;
      right: 0.3rem;
      top: 0.24rem;
      border: 1px solid #999999;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      &:after {
        content: "";
        height: 0.16rem;
        width: 1px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #999999;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:before {
        content: "";
        height: 0.16rem;
        width: 1px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #999999;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }
  }
}

.key-input {
  height: 0.78rem;
  width: 6.9rem;
  margin: 0.3rem auto 0.4rem;
  overflow: hidden;

  .label {
    width: 5rem;
    height: 0.78rem;
    line-height: 0.78rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-right: none;
    -webkit-border-radius: 0.08rem 0 0 0.08rem;
    -moz-border-radius: 0.08rem 0 0 0.08rem;
    border-radius: 0.08rem 0 0 0.08rem;
    float: left;
    outline: none;
    font-size: 0.36rem;
    text-indent: 0.3rem;
    position: relative;
  }
  .key-confirm {
    height: 0.78rem;
    width: 1.9rem;
    line-height: 0.78rem;
    text-align: center;
    color: #ffffff;
    font-size: 0.36rem;
    background-color: #339df5;
    float: left;
    -webkit-border-radius: 0 0.08rem 0.08rem 0;
    -moz-border-radius: 0 0.08rem 0.08rem 0;
    border-radius: 0 0.08rem 0.08rem 0;
  }
}
</style>