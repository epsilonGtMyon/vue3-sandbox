<script setup lang="ts">
import { onErrorCaptured, onMounted, ref } from "vue";
import { ApplicationError } from "@/errors/ApplicationError";
import Sandbox01Child from "./Sandbox01Child.vue";

const errorText = ref("");
const dom = ref(null);

onMounted(() => {
  (dom.value! as HTMLDivElement).addEventListener("mouseenter", () => {
    throwError(true);
  });
});

// このハンドラはこのコンポーネントで発生したコンポーネントの例外は何もキャッチしない
onErrorCaptured((err, instance, info) => {
  console.log("==onErrorCaptured==");
  console.log("err", err);
  console.log("instance", instance);
  console.log("info", info);

  if (err instanceof Error) {
    if (err instanceof ApplicationError) {
      console.log("ApplicationError です。");
      if (err.handleLocal) {
        console.log("handled");
        // 何も返さなければハンドル完了
        errorText.value = `エラーハンドリング| ${new Date().toLocaleString()} | ${
          err.message
        }`;
        return false;
      }
    }
  }
});

function throwError(handleGlobal: boolean) {
  const err = new ApplicationError("sandbox01");
  err.handleGlobal = handleGlobal;
  throw err;
}

function sleepAsync(mills: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), mills);
  });
}

async function handlePromise() {
  await sleepAsync(1000);

  throwError(true);
}

function handleSetTimeout() {
  setTimeout(() => {
    throwError(true);
  }, 1000);
}
</script>

<template>
  <main>
    <h1>sandbox01</h1>

    <section>
      <h2>直下</h2>
      <p>
        グローバルな例外は<code>app.config.errorHandler</code>でハンドリングできる。
      </p>
      <p>
        コンポーネントレベルではonErrorCapturedでハンドリングできる。
        ただし、これは自分よりも子供のコンポーネントをハンドリングするので注意
      </p>
      <div>
        <button @click="throwError(true)">
          アプリケーション例外発生(handleGlobal=true)
        </button>
        <button @click="throwError(false)">
          アプリケーション例外発生(handleGlobal=false)
        </button>
      </div>
    </section>
    <hr />
    <section>
      <h2>子コンポーネント</h2>
      <p>
        子コンポーネントで起きた例外はonErrorCapturedでハンドリングできるようになる。
      </p>
      <div>
        {{ errorText }}
      </div>
      <Sandbox01Child />
    </section>
    <hr />
    <section>
      <h2>非同期の例外</h2>
      <p>
        emitとかwatchとかのvue起因だとハンドラは動く、Promiseでも動く、ただsetTimeoutしてると当たり前だが動かない
      </p>
      <div>
        <button @click="handlePromise">Promise(1秒後)</button>
        <button @click="handleSetTimeout">setTimeout(1秒後)</button>
      </div>
    </section>

    <section>
      <h2>DOMイベント</h2>
      <p>
        例えばmouseenterでも@mouseenterでハンドリングした場合はvueの対象となるが、addEventListenerとした場合はハンドリング対象とならない
      </p>

      <div
        style="width: 100px; height: 100px; background-color: red"
        @mouseenter="throwError(true)"
      >
        @mouseenter
      </div>
      <div
        ref="dom"
        style="width: 100px; height: 100px; background-color: blue"
      >
        addEventListener
      </div>
    </section>
    <hr />

    <section>
      <p>
        まとめると有用だけど、ハンドリングしてもらうにはVueのライフサイクルに則って実装しないといけないということ。
      </p>
    </section>
  </main>
</template>
