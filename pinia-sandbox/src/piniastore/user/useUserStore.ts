import { defineStore } from "pinia";

const useUserStore = defineStore({
  id: "user",
  state: () => ({
    firstName: "",
    familyName: "",
  }),
  getters: {
    fullName() {
      return `${this.firstName} ${this.familyName}`;
    },
  },
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName;
    },
    setFamilyName(familyName: string) {
      this.familyName = familyName;
    },
    setFullName(firstName: string, familyName: string) {
      //$subscribeの挙動を確かめるために$patchを使ってみる
      this.$patch({
        firstName,
        familyName,
      });
    },
  },
});

export { useUserStore };
