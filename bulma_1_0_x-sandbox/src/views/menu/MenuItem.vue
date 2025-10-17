<script setup lang="ts">
import { computed } from 'vue'
import type { MenuItemType } from './menuTypes'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  /** 現在選択中のメニュー */
  activeMenuId: string
  /** メニュー */
  item: MenuItemType
  /** 展開したメニュー一覧 */
  expandedMenuIds: Set<string>
}

const props = defineProps<Props>()

const emit = defineEmits<{
  /** メニューが選択された */
  selected: [menuItem: MenuItemType]
  /** サブメニューの開閉 */
  toggle: [menuId: string]
}>()

const anchorClasses = computed(() => {
  const classes: string[] = []
  if (props.activeMenuId === props.item.menuId) {
    classes.push('is-active')
  }
  return classes
})

/** サブメニューあるか？ */
const hasSubItems = computed(() => props.item.subMenuItems?.length ?? 0 > 0)

/** サブメニューが開いているか？ */
const expanedMenu = computed(() => props.expandedMenuIds.has(props.item.menuId))

const selected = () => {
  if (hasSubItems.value) {
    emit('toggle', props.item.menuId)
  } else {
    emit('selected', props.item)
  }
}

/**
 * サブメニューのselectedを親にバケツリレー
 *
 * @param menuItem
 */
const selectedSubMenu = (menuItem: MenuItemType) => {
  emit('selected', menuItem)
}

/**
 * サブメニューのtoggleを親にバケツリレー
 *
 * @param menuId
 */
const toggleSubMenu = (menuId: string) => {
  emit('toggle', menuId)
}
</script>

<template>
  <li class="MenuItem">
    <a class="MenuItem-anchor" :class="anchorClasses" @click="selected">
      {{ item.menuLabel }}
      <span class="is-pulled-right">
        <template v-if="hasSubItems">
          <span class="MenuItem-toggle" :class="{ 'is-expanded': expanedMenu }">
            <font-awesome-icon :icon="faChevronRight" />
          </span>
        </template>
      </span>
    </a>
    <Transition>
      <template v-if="hasSubItems && expanedMenu">
        <ul class="MenuItem-list menu-list">
          <template v-for="subItem of item.subMenuItems" :key="subItem.menuId">
            <MenuItem
              :activeMenuId
              :item="subItem"
              :expandedMenuIds
              @selected="selectedSubMenu"
              @toggle="toggleSubMenu"
            ></MenuItem>
          </template>
        </ul>
      </template>
    </Transition>
  </li>
</template>

<style lang="css" scoped>
.MenuItem-list {
  margin-right: 0;
}
.MenuItem-toggle {
  display: inline-block;
  font-size: 0.75em;

  transform: rotate(0);
  transition: 0.2s transform;
}
.MenuItem-toggle.is-expanded {
  transform: rotate(90deg);
}

/**
 * ・rootにinterpolate-size: allow-keywords;をつけることでheightに対してもアニメーションを可能にする。
 * ・marginにもアニメーションをつけておかないと ul.menu-list が突然消えることで不自然なアニメーションになる。
 */
.v-enter-active,
.v-leave-active {
  transition:
    height 0.2s,
    margin-top 0.2s,
    margin-bottom 0.2s;

  /** overflowをつけておくとアニメーション時に文字が重ならない */
  overflow: hidden;
}

.v-enter-from,
.v-leave-to {
  height: 0;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
