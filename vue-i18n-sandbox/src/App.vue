<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

const pages = ref([
  { name: 'Home', path: '/' },
  { name: 'Sandbox01', path: '/sandbox01' },
  { name: 'Sandbox02', path: '/sandbox02' },
  { name: 'Sandbox03', path: '/sandbox03' },
  { name: 'Sandbox04', path: '/sandbox04' },
  { name: 'Sandbox05', path: '/sandbox05' },
])

const locales = [
  {
    code: 'ja',
    name: '日本語',
  },
  {
    code: 'en',
    name: 'English',
  },
]

const locale = computed<string>({
  get() {
    return i18n.locale.value
  },
  set(value) {
    // ロケールの変更はこれでできる。
    i18n.locale.value = value
  },
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <template v-for="p of pages" :key="p.name">
          <RouterLink :to="p.path">
            {{ p.name }}
          </RouterLink>
          |
        </template>

        <select v-model="locale">
          <option v-for="l in locales" :key="l.code" :value="l.code">
            {{ l.name }}
          </option>
        </select>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
