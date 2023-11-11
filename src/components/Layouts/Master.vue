<template>
  <div class="wrapper">
    <NavBar />
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- <a href="index3.html" class="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </a> -->

      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <!-- <div class="image">
            <img
              src="dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div> -->
        </div>

        <SideBar />
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- <Header>
    <slot name="header"></slot>
  </Header>
  <Body>
    <slot name="body"></slot>
  </Body> -->
      <slot></slot>
    </div>
    <SideBarControl />
   
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "./SideBar.vue";
import {auth} from '@/stores/auth.js'
import NavBar from "./NavBar.vue";
import SideBarControl from "./SideBarControl.vue";



const isDarkmode = ref(false);
const defineAuth = auth();

function handleDarkmode() {
  if (isDarkmode.value == false) {
    $("body").addClass("dark-mode");
    isDarkmode.value = true;
  } else {
    $("body").removeClass("dark-mode");
    isDarkmode.value = false;
  }
}

function handleLogout(){
  defineAuth.logout();
}
</script>