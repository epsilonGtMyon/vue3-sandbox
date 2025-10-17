<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'
import type { MenuItemType } from './menuTypes'

const activeMenuId = ref('')

const menuItems = ref<MenuItemType[]>([
  {
    menuId: 'layer-1',
    menuLabel: 'レイヤー１',
    subMenuItems: [
      {
        menuId: 'layer1-1',
        menuLabel: 'レイヤー１－１',
      },
      {
        menuId: 'layer1-2',
        menuLabel: 'レイヤー１－２',
      },
    ],
  },
  {
    menuId: 'layer-2',
    menuLabel: 'レイヤー２',
    subMenuItems: [
      {
        menuId: 'layer2-1',
        menuLabel: 'レイヤー２－１',
        subMenuItems: [
          {
            menuId: 'layer2-1-1',
            menuLabel: 'レイヤー２－１ー１',
          },
          {
            menuId: 'layer2-1-2',
            menuLabel: 'レイヤー２－１ー２',
          },
        ],
      },
      {
        menuId: 'layer2-2',
        menuLabel: 'レイヤー２－２',
      },
    ],
  },
  {
    menuId: 'layer-3',
    menuLabel: 'レイヤー３',
  },
  {
    menuId: 'layer-4',
    menuLabel: 'レイヤー４',
    subMenuItems: [
      {
        menuId: 'layer4-1',
        menuLabel: 'レイヤー４－１',
      },
      {
        menuId: 'layer4-2',
        menuLabel: 'レイヤー４－２',
      },
    ],
  },
])
const selectedMenu = (menu: MenuItemType) => {
  activeMenuId.value = menu.menuId
}
</script>

<template>
  <div>
    <h1>menu</h1>

    <div class="is-flex">
      <div style="width: 300px">
        <Menu :activeMenuId :items="menuItems" @selected="selectedMenu" />
      </div>
      <div>
        <div>アクティブメニュー：{{ activeMenuId }}</div>
      </div>
    </div>
  </div>
</template>
