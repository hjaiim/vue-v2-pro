
<script>
export default {
  name: "buttonGroup",
  render(createElement) {
    //http://www.php.cn/js-tutorial-404382.html
    console.log("render----------------");
    let arr = this.$slots.default.map(VNode => {
      // console.log(VNode);
      return createElement(
        "p",
        {
          class: "control"
        },
        [VNode]
      );
    });
    console.log(arr);

    // 创建element
    // render函数中的createElement方法有三个参数。
    // 第一个参数为外层标签名，第二个为外层标签的属性对象，第三个为外层标签中的内容
    return createElement(
      "p",
      {
        class: this.groupClass,
        on: {
          click: () => {
            console.log("onClick点击事件");
          }
        },
        attrs: {
          // 正常的 HTML 特性
          id: "foo"
        },
        style: {
          // 和`v-bind:style`一样的 API
          color: "red",
          fontSize: "14px"
        }
      },
      //   "我是render内容"
      //   this.$slots.default
      arr
    );
  },
  created() {
    console.log("created------------");
    console.log(this.$slots.default);
  },
  mounted() {},
  data() {
    return {};
  },
  components: {},
  props: {
    compact: {
      // 自定义属性.
      type: Boolean,
      default: true
    }
  },
  watch: {},
  computed: {
    groupClass() {
      const className = ["filed"];
      className.push(this.compact ? "has-add" : "is-add");
      return className;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>