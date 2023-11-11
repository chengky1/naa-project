<template>
  <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <template v-for="sidebar in sidebars" :key="sidebar">
            <template v-if="sidebar.isChild == true">
                <li class="nav-item menu-open">
                    <a href="#" :class="`nav-link ${ sidebar.components.split('|').includes($route.name) ? 'active' : '' }`">
                        <i :class="sidebar.icon" class="nav-icon"></i>
                        <p>
                            {{ sidebar.name  }}
                        </p>
                        <i class="right fas fa-angle-left"></i>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item" v-for="child in sidebar.childs" :key="child">
                            <router-link :to="child.route" :class="`nav-link ${child.route.name == $route.name ? 'active' : ''}`">
                                <i :class="child.icon" class="nav-icon"></i>
                                <p>{{ child.name }}</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </template>
            <template v-else>
                <li class="nav-item">
                    <router-link :to="sidebar.route" :class="`nav-link  ${ sidebar.route.name == $route.name ? 'active' : '' }`">
                        <i :class="sidebar.icon" class="nav-icon"></i>
                        <p>{{ sidebar.name }}</p>
                    </router-link>
                </li>
            </template>
        </template>
      </ul>
    </nav>
</template>

<script setup>
import { ref } from "vue";

    const sidebars = ref([
        {
            name : 'Home',
            route : { name : 'home' },
            icon : 'fa fa-home Naa-red',
            isChild : false,
        },
        {
            name : 'Delegation',
            route : { name : 'delegation' },
            icon : 'fa fa-users Naa-blue',
            isChild : false,
        },
        {
            name : 'Audit',
            route : { name : 'audit' },
            icon : 'fa fa-book-open Naa-blue',
            isChild : false,
        },
        {
            name : 'Documentation',
            route : { name : 'documentation' },
            icon : 'fa fa-book Naa-yellow ',
            isChild : false,
        },
        {
            name : 'Report',
            route : { name : 'report' },
            icon : 'fa fa-print text-success',
            isChild : false,
        },
        {
            name : 'Attendance',
            route : { name : 'attendance' },
            icon : 'fa fa-clipboard',
            isChild : false,
        },
        {
            name : 'Location',
            route : { name : 'location' },
            icon : 'fa fa-map-marker Naa-green',
            isChild : false,
        },
        {
            name : 'Favorite',
            route : { name : 'favorite' },
            icon : 'fa fa-star',
            isChild : false,
        },
        {
            name : 'Archive',
            route : { name : 'archive' },
            icon : 'fa fa-archive',
            isChild : false,
        },
        {
            name : 'Accessibility',
            route : { name : 'accessibility' },
            icon : 'fa fa-universal-access',
            isChild : false,
        },
        {
            name : 'Settings',
            route : { name : 'setting' },
            icon : 'fa fa-cogs Naa-red',
            isChild : true,
            components : 'user|role|config',
            childs : [
                {
                    name : 'User',
                    route : { name : 'user'},
                    icon : 'far fa-user',
                },
                {
                    name : 'Role and Permission',
                    route : { name : 'role'},
                    icon : 'fa fa-check',
                },
                {
                    name : 'Config',
                    route : { name : 'config'},
                    icon : 'far fa-circle Naa-blue',
                },
                {
                    name : 'Backup and Restore',
                    route : { name : 'backup'},
                    icon : 'far fa-circle Naa-blue',
                },
                {
                    name : 'Log File',
                    route : { name : 'log_file'},
                    icon : 'fa fa-eye Naa-blue',
                },
            ]
        }
    ]);
</script>
