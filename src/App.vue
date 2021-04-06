<template>
  <div id="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("refreshUserToken").catch(() => {
      this.$router.push("/");
    });
  },
};
</script>

<style></style>
