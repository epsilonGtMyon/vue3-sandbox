<script setup lang="ts">
import { ApplicationError } from "@/errors/ApplicationError";

function throwError(handleLocal: boolean) {
  const err = new ApplicationError("sandbox01child");
  err.handleLocal = handleLocal;
  throw err;
}
</script>

<template>
  <div>
    <div>
      <button @click="throwError(true)">
        アプリケーション例外発生(handleLocal=true)
      </button>
      <button @click="throwError(false)">
        アプリケーション例外発生(handleLocal=false)
      </button>
    </div>
  </div>
</template>
