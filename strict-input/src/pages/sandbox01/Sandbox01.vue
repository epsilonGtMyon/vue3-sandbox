<script setup>
import { onMounted, ref } from "vue";
import StrictInput from "@/common/components/strictinput/StrictInput.vue";

const value01 = ref("");
const value02 = ref("");
const value03 = ref("");
const value04 = ref("");

const dynamicInputType = ref("number");
const dynamicValue = ref("");
</script>
<template>
  <div>
    Sandbox01

    <div>
      <h2>直接指定</h2>
      <div>
        <label
          >number:
          <strict-input v-model="value01" filter="number" />
        </label>
        {{ value01 }}
      </div>

      <div>
        <label
          >half-alpha:
          <strict-input v-model="value02" filter="half-alpha" />
        </label>
        {{ value02 }}
      </div>

      <div>
        <label
          >half-alpha-num:
          <strict-input v-model="value03" filter="half-alpha-num" />
        </label>
        {{ value03 }}
      </div>

      <div>
        <label
          >指定なし:
          <strict-input v-model="value04" />
        </label>
        {{ value04 }}
      </div>
    </div>

    <div>
      <h2>動的</h2>

      <div>
        <div>
          <label>
            <input type="radio" v-model="dynamicInputType" value="number" />数値
          </label>

          <label>
            <input
              type="radio"
              v-model="dynamicInputType"
              value="half-alpha"
            />英字
          </label>

          <label>
            <input
              type="radio"
              v-model="dynamicInputType"
              value="half-alpha-num"
            />
            英数
          </label>
        </div>

        <div>
          <label
            >{{ dynamicInputType }}:
            <strict-input v-model="dynamicValue" :filter="dynamicInputType" />
          </label>
          {{ dynamicValue }}
        </div>
      </div>
    </div>
  </div>
</template>
