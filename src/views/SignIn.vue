<template>
  <main class="mt-24 w-full flex flex-col items-center">
    <h1 class="font-semibold text-4xl">Sign In</h1>
    <div class="w-5/12 min-w-[30rem]">
      <form @submit.prevent="FbSignIn" class="flex flex-col items-center mt-10 w-full">
        <label v-if="FbError" class="text-red-400 select-none">AN ERROR HAS OCCURED</label>

        <input type="text" placeholder="Email*" class="input">
        <input type="text" placeholder="Password*" class="input">
        <button class="bg-blue-400 w-[5rem] px-2 py-1 rounded-sm text-white flex items-center justify-center">Sign
          In</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


const email = ref('')
const password = ref('')
const FbError = ref(false)

function FbSignIn() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => { })
    .catch((error) => {
      FbError.value = true;

      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    })

}

</script>

<style></style>