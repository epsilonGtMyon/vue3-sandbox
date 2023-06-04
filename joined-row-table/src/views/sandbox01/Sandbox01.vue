<script setup>
import { ref, computed } from "vue";
import { getRecords } from "@/business/record/getRecords";
import { setupRowspan } from "@/business/record/setupRowspan";

const rawRecords = getRecords();
setupRowspan(rawRecords);

const records = ref(rawRecords);

const recordsJson = computed(() => {
  return JSON.stringify(records.value, null, 2);
});
</script>

<template>
  <div>
    <h1>ハードコーディングで出力</h1>
    <div>
      <p>
        親レコードの出力は、それよりも子のインデックスが0の時に出力する。
        例えば部なら課とメンバーのインデックスが0のとき
      </p>
      <p>
          rowspanは末端のレコードの明細数であり
          それはつまり直下の子のrowspanの合計でもある

          例えば部のrowspanはメンバー数の合計であるが、課のrowspanの合計でもある
      </p>
    </div>
    <div>
      <table class="grid">
        <thead>
          <tr>
            <th>部</th>
            <th>部長</th>
            <th>課</th>
            <th>課長</th>
            <th>メンバー</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="record1 in records">
            <template v-for="(record2, i2) in record1.children">
              <template v-for="(record3, i3) in record2.children">
                <tr>
                  <!-- 子のインデックス(課、メンバー)が全て0の時に出力 -->
                  <template v-if="i2 === 0 && i3 === 0">
                    <td :rowspan="record1.rowspan">
                      {{ record1.bu }}
                    </td>

                    <td :rowspan="record1.rowspan">
                      <input v-model="record1.buLeader" />
                    </td>
                  </template>

                  <!-- 子のインデックス(メンバー)が全て0の時に出力 -->
                  <template v-if="i3 === 0">
                    <td :rowspan="record2.rowspan">
                      {{ record2.ka }}
                    </td>

                    <td :rowspan="record2.rowspan">
                      <input v-model="record2.kaLeader" />
                    </td>
                  </template>

                  <td :rowspan="record3.rowspan">
                    {{ record3.name }}
                  </td>
                </tr>
              </template>
            </template>
          </template>
        </tbody>
      </table>
    </div>

    <div>
      <pre>{{ recordsJson }}</pre>
    </div>
  </div>
</template>
