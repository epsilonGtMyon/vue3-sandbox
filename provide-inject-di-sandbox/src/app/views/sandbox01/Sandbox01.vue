<script setup lang="ts">
import { useCounter } from "@/lib/composition/counter/counterDi";
import { useService1 } from "@/lib/service/service1/service1Di";

const service1 = useService1();
const counter = useCounter();
const count = counter.count;

function doService1() {
  service1.doService();
}

function countUp() {
  counter.increment();
}
</script>

<template>
  <div>
    <div>sandbox01</div>
    <div>
      <p>コンソールを確認しlogicが上書きされていることがわかる</p>
      <div>
        <button @click="doService1">service1</button>
      </div>
    </div>
    <hr />
    <div>
      <p>
        カウントアップの数が上書きされていることがわかる
      </p>
      <div>
        {{ count }}
        <button @click="countUp">countUp</button>
      </div>
    </div>
  </div>
</template>
