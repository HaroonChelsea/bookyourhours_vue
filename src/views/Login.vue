<template>
  <fragment>
    <!-- Titlebar
================================================== -->
    <div id="titlebar" class="gradient">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Log In</h2>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>Log In</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Page Content
================================================== -->
    <div class="container">
      <div class="row">
        <div class="col-xl-5 offset-xl-3">
          <SigninForm />
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div class="margin-top-70"></div>
    <!-- Spacer / End-->
  </fragment>
</template>
<script>
import SigninForm from "@/components/SigninForm";
import { Fragment } from "vue-fragment";
export default {
  name: "Login",
  components: {
    Fragment,
    SigninForm,
  },
};
</script>
