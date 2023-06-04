<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    records: {
      type: Array,
      required: true,
    },
  },

  setup(props, context) {
    return () => {
      const vNodes = props.records.map((r) => context.slots.default(r));
      console.log(vNodes);
      return vNodes;
    };
  },
});
</script>
