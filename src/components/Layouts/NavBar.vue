<template>
     <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <li class="nav-item">
          <a class="nav-link">
          <router-link :to="{name : ''}">Create Audit</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
          <router-link :to="{name : ''}">Notification</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
          <router-link :to="{name : ''}">Mode</router-link>
          </a>
        </li>
        
        <!-- <li class="nav-item">
          <a
            class="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            role="button"
          >
            <i class="fas fa-th-large"></i>
          </a>
        </li> -->
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-user"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <!-- <router-link :to="{name : 'profile'}">Profile</router-link> -->
              <button class="dropdown-item text-primary"><i class="fa fa-user"></i> <router-link :to="{name : 'profile'}">Profile</router-link></button>
              <button class="dropdown-item text-danger"><i class="fa fa-unlock"></i> Reset Password</button>
              <button class="dropdown-item text-danger" @click="handleLogout()"><i class="fa fa-reply"></i> Logout</button>
              
            </div>
            
          </div>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>