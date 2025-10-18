<script setup lang="ts">
import { ref } from 'vue'
import Tab from './Tab.vue'
import TabItem from './TabItem.vue'

const tab1 = ref('tab-2')
</script>

<template>
  <div>
    <h1>tab</h1>

    <div>
      <div>
        <Tab>
          <TabItem tab-id="tab-1" order="1">
            <template #tabTitle> タブ1<span style="color: red">★</span> </template>
            <template #default>
              <div>タブ１</div>
            </template>
          </TabItem>
          <TabItem tab-id="tab-3" label="タブ３" order="3">3</TabItem>
          <TabItem tab-id="tab-2" label="タブ２" order="2">2</TabItem>
        </Tab>
      </div>

      <div style="height: 100px"></div>
      <hr />
      classの指定、v-modelとの連動
      <div>
        <Tab header-class="is-centered is-toggle is-toggle-rounded" v-model="tab1">
          <TabItem tab-id="tab-1" label="タブ１" order="1">
            <button class="button" @click="tab1 = 'tab-2'">タブ２へ移動</button>
          </TabItem>
          <TabItem tab-id="tab-2" label="タブ２" order="2">2</TabItem>
        </Tab>
      </div>
    </div>
  </div>
</template>
