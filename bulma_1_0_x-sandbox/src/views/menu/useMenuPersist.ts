function useMenuPersist() {
  const SESSION_STORAGE_KEY = 'expandedMenuIds'

  function persistExpandedMenuIds(expandedMenuIds: Set<string>) {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify([...expandedMenuIds.keys()]))
  }

  function loadExpandedMenuIds(): string[] {
    const rawValue = sessionStorage.getItem(SESSION_STORAGE_KEY)
    if (rawValue == null) {
      return []
    }

    try {
      const menuIds = JSON.parse(rawValue)
      if (Array.isArray(menuIds)) {
        return menuIds
      }
      console.warn(`not array`, menuIds)
      return []
    } catch (e) {
      console.warn(e)
      return []
    }
  }

  return {
    persistExpandedMenuIds,
    loadExpandedMenuIds,
  }
}

export { useMenuPersist }
