<template>
  <nav class="bg-gray-100 h-16 flex items-center justify-between px-5 shadow-lg fixed top-0 left-0 right-0">
    <div class="text-2xl font-semibold select-none">Simple Posting App</div>
    <div class="flex">
      <div class="nav-link-container">
        <router-link :to="{ name: 'feed' }" class="py-1 h-full w-full flex items-center justify-center">HOME</router-link>
      </div>

      <div v-if="FbcurrentUser" class="nav-link-container">
        <router-link :to="{ name: 'profile', params: { uid: auth.currentUser.uid } }"
          class="py-1 h-full w-full flex items-center justify-center">PROFILE</router-link>
      </div>
      <div v-else class="nav-link-container">
        <div class="py-1 h-full w-full flex items-center justify-center opacity-60 cursor-not-allowed select-none">PROFILE
        </div>
      </div>

      <div v-if="FbcurrentUser" class="nav-link-container no-hover">
        <button @click="FbSignOut"
          class="px-2 py-1 rounded-sm text-white h-1/2 w-11/12 flex items-center justify-center bg-red-500 hover:opacity-70">
          SIGN OUT</button>
      </div>
      <div v-else class="nav-link-container no-hover">
        <router-link :to="{ name: 'sign-up' }"
          class="px-2 py-1 rounded-sm text-white h-1/2 w-10/12 flex items-center justify-center bg-blue-400 hover:opacity-70">SIGN
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
import { ref } from 'vue'
import { auth } from './firebase'
import { useRouter } from 'vue-router';
import { onAuthStateChanged, signOut } from 'firebase/auth'


const FbcurrentUser = ref(null)
const router = useRouter();

onAuthStateChanged(auth, user => {
  FbcurrentUser.value = user
})

function FbSignOut() {
  signOut(auth)
    .then(() => {
      router.push({ name: 'feed' })
    })

}

</script>

<style></style>