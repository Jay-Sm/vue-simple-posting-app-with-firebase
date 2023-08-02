<template>
  <main class="mt-24 w-full flex flex-col items-center">
    <h1 class="font-semibold text-4xl">Sign Up</h1>
    <div class="w-5/12 min-w-[30rem]">
      <form @submit.prevent="FbSignUp" class="flex flex-col items-center mt-10 w-full">
        <label v-if="FbError" class="text-red-400 select-none">AN ERROR HAS OCCURED</label>

        <input type="text" placeholder="Username" v-model="username" class="input">
        <input type="text" placeholder="Email*" v-model="email" class="input">
        <input type="password" placeholder="Password*" v-model="password" class="input">
        <input type="password" placeholder="Confirm Password*" v-model="confirmPassword" class="input">

        <button class="bg-blue-400 w-[5rem] px-2 py-1 rounded-sm text-white flex items-center justify-center">Sign
          Up</button>
      </form>
    </div>
  </main>
  <!-- <p v-if="auth.currentUser" class="mt-24 mr-10">
    {{ auth.currentUser.displayName }}
  </p> -->
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { db, auth } from '../firebase'
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'


const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const FbError = ref(false)
const router = useRouter();

function FbSignUp() {
  if (password.value === confirmPassword.value && password.value !== '' && confirmPassword.value !== '') {
    FbError.value = false;

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: username.value
        })

        setDoc(doc(db, 'users', userCredential.user.uid), {
          displayName: username.value,
          email: email.value,
          bio: 'Add your bio.'
        });

        router.push({ name: 'feed' })
      })

      .catch((error) => {
        FbError.value = true;

        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  } else {
    FbError.value = true;
  }
}
</script>

<style></style>