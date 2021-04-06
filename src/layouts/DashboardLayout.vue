<template>
  <fragment>
    <Navbar />
    <div class="dashboard-container">
      <SideBar />
      <router-view />
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default {
  name: "dashboard-layout",
  components: {
    Fragment,
    Navbar,
    SideBar,
  },
};
</script>
