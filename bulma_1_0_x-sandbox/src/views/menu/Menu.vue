<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MenuItem from './MenuItem.vue'
import type { MenuItemType } from './menuTypes'
import { useMenuPersist } from './useMenuPersist'

const menuPersist = useMenuPersist()

type Props = {
  activeMenuId: string
  items: MenuItemType[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  /** メニューが選択された */
  selected: [menuItem: MenuItemType]
}>()

/** 開いているメニュー */
const expandedMenuIds = ref(new Set<string>())

const selected = (menuItem: MenuItemType) => {
  emit('selected', menuItem)
}

const toggle = (menuId: string) => {
  if (expandedMenuIds.value.has(menuId)) {
    // サブメニューが開いてても、再帰的には消さない
    // 必要であればメニュー一覧をループする必要あり。
    expandedMenuIds.value.delete(menuId)
  } else {
    expandedMenuIds.value.add(menuId)
  }

  // メニュー開閉状態の永続化
  menuPersist.persistExpandedMenuIds(expandedMenuIds.value)
}

onMounted(() => {
  // メニュー開閉状態の復元
  const menuIds = menuPersist.loadExpandedMenuIds()
  menuIds.forEach((id) => expandedMenuIds.value.add(id))
})
</script>

<template>
  <aside class="Menu menu">
    <ul class="menu-list">
      <template v-for="item of items" :key="item.menuId">
        <MenuItem
          :activeMenuId
          :item
          :expandedMenuIds
          @selected="selected"
          @toggle="toggle"
        ></MenuItem>
      </template>
    </ul>
  </aside>
</template>

<style lang="css" scoped>
.Menu {
  user-select: none;
}
</style>
