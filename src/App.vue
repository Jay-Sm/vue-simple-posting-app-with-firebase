<template>
  <nav class="bg-gray-100 h-16 flex items-center justify-between px-5 shadow-lg fixed top-0 left-0 right-0">
    <div class="text-2xl font-semibold select-none">Simple Posting App</div>
    <div class="flex">
      <div class="nav-link-container">
        <router-link :to="{ name: 'feed' }" class="py-1 h-full w-full flex items-center justify-center">HOME</router-link>
      </div>
      <div class="nav-link-container">
        <router-link :to="{ name: 'profile', params: { uid: auth.currentUser.uid } }"
          class="py-1 h-full w-full flex items-center justify-center">PROFILE</router-link>
      </div>
      <div class="nav-link-container no-hover">
        <router-link :to="{ name: 'sign-up' }"
          class="bg-blue-400 px-2 py-1 rounded-sm text-white h-1/2 w-10/12 flex items-center justify-center">SIGN
          UP</router-link>
      </div>
      <div class="nav-link-container">
        <router-link :to="{ name: 'sign-in' }"
          class="px-2 py-1 rounded-sm h-full w-full flex items-center justify-center">SIGN IN</router-link>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script setup>
import { auth } from './firebase'

</script>

<style></style>