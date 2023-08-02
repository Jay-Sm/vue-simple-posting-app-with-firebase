<template>
  <main class="mt-24 ml-6 w-8/12 min-w-[650px] shadow-2xl flex flex-row">
    <div>
      <div class="border-gray-600 border-2 rounded-full overflow-hidden w-44 ml-3 mt-3">
        <img src="../assets/images/default-profile.jpg" alt="profile pic">
      </div>

      <div class="w-[20rem]">
        <h3 class="text-2xl font-semibold mt-6 ml-3">Mini Bio</h3>
        <p class="ml-3">{{ bio }}</p>
      </div>
    </div>
    <div class="ml-8">
      <div>
        <h2 class="text-4xl font-semibold mb-2">User Info</h2>
        <p>Username: {{ displayName }}</p>
        <p>Email: {{ email }}</p>

        <div class="flex flex-row">
          <div>
            <h2 class="text-2xl font-semibold mt-3">Intrests</h2>
            <ul v-if="intrests.length" class="list-disc ml-6">
              <li v-for="intrest in intrests" :key="index">
                {{ intrest }}
              </li>
            </ul>
            <form @submit.prevent="addInterest">
              <input type="text" placeholder="Add your interests " v-model="newInterest"
                class="border-b border-gray-300 hover:border-gray-400 focus:border-gray-400 outline-none w-9/12 placeholder:text-sm">
            </form>
          </div>
        </div>

        <!-- <div class="flex flex-row">
          <div>
            <h2 class="text-2xl font-semibold mt-3">Links</h2>
            <ul v-if="links.length">
              <li>
                <a href="https://www.youtube.com" target="_blank" class="outside-link">Youtube Chanel</a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" class="outside-link">Twitter Profile</a>
              </li>
              <li>
                <a href="https://www.github.com" target="_blank" class="outside-link">Github Profile</a>
              </li>
            </ul>
            <form action="">
              <input type="text" placeholder="Add your interests"
                class="border-b border-gray-300 hover:border-gray-400 focus:border-gray-400 outline-none w-9/12 placeholder:text-sm">
            </form>
          </div>
        </div> -->
      </div>
    </div>
  </main>
  <section class="mt-24 mx-16 w-6/12">
    <h2 class="text-4xl  font-semibold">Posts</h2>
    <div class="flex flex-col items-center gap-y-20 overflow-scroll overflow-x-hidden h-[25rem]">
      <div class="shadow-2xl rounded-md px-3">
        <div class="flex flex-row border-b border-gray-300 py-2">
          <div class="border rounded-full overflow-hidden w-14 h-14 mr-3 mt-2">
            <img src="../assets/images/default-profile.jpg" alt="profile pic">
          </div>
          <div class="min-w-[270px] w-[28rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat earum officia! Quo repudiandae molestias
            illo cum possimus tempore debitis temporibus deserunt quod mollitia? Laborum error eos omnis quis molestias.
          </div>
        </div>
        <div class="my-2 pr-2 flex justify-end">
          <button class="flex items-center justify-center">
            <img src="../assets/images/heart-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
          <button class="flex items-center justify-center mx-5">
            <img src="../assets/images/comment-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
        </div>

      </div>
      <div class="shadow-2xl rounded-md px-3">
        <div class="flex flex-row border-b border-gray-300 py-2">
          <div class="border rounded-full overflow-hidden w-14 h-14 mr-3 mt-2">
            <img src="../assets/images/default-profile.jpg" alt="profile pic">
          </div>
          <div class="min-w-[270px] w-[28rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat earum officia! Quo repudiandae molestias
            illo cum possimus tempore debitis temporibus deserunt quod mollitia? Laborum error eos omnis quis molestias.
          </div>
        </div>
        <div class="my-2 pr-2 flex justify-end">
          <button class="flex items-center justify-center">
            <img src="../assets/images/heart-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
          <button class="flex items-center justify-center mx-5">
            <img src="../assets/images/comment-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
        </div>

      </div>
      <div class="shadow-2xl rounded-md px-3">
        <div class="flex flex-row border-b border-gray-300 py-2">
          <div class="border rounded-full overflow-hidden w-14 h-14 mr-3 mt-2">
            <img src="../assets/images/default-profile.jpg" alt="profile pic">
          </div>
          <div class="min-w-[270px] w-[28rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat earum officia! Quo repudiandae molestias
            illo cum possimus tempore debitis temporibus deserunt quod mollitia? Laborum error eos omnis quis molestias.
          </div>
        </div>
        <div class="my-2 pr-2 flex justify-end">
          <button class="flex items-center justify-center">
            <img src="../assets/images/heart-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
          <button class="flex items-center justify-center mx-5">
            <img src="../assets/images/comment-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
        </div>

      </div>
      <div class="shadow-2xl rounded-md px-3">
        <div class="flex flex-row border-b border-gray-300 py-2">
          <div class="border rounded-full overflow-hidden w-14 h-14 mr-3 mt-2">
            <img src="../assets/images/default-profile.jpg" alt="profile pic">
          </div>
          <div class="min-w-[270px] w-[28rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat earum officia! Quo repudiandae molestias
            illo cum possimus tempore debitis temporibus deserunt quod mollitia? Laborum error eos omnis quis molestias.
          </div>
        </div>
        <div class="my-2 pr-2 flex justify-end">
          <button class="flex items-center justify-center">
            <img src="../assets/images/heart-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
          <button class="flex items-center justify-center mx-5">
            <img src="../assets/images/comment-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
        </div>

      </div>
      <div class="shadow-2xl rounded-md px-3">
        <div class="flex flex-row border-b border-gray-300 py-2">
          <div class="border rounded-full overflow-hidden w-14 h-14 mr-3 mt-2">
            <img src="../assets/images/default-profile.jpg" alt="profile pic">
          </div>
          <div class="min-w-[270px] w-[28rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat earum officia! Quo repudiandae molestias
            illo cum possimus tempore debitis temporibus deserunt quod mollitia? Laborum error eos omnis quis molestias.
          </div>
        </div>
        <div class="my-2 pr-2 flex justify-end">
          <button class="flex items-center justify-center">
            <img src="../assets/images/heart-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
          <button class="flex items-center justify-center mx-5">
            <img src="../assets/images/comment-icon.svg" alt="like button" class="w-7 transition-colors">
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { doc, updateDoc, arrayUnion, onSnapshot } from "firebase/firestore";
import { useRoute } from 'vue-router'
import { db } from "../firebase";

const route = useRoute()
const docRef = doc(db, "users", route.params.uid);

const displayName = ref('')
const email = ref('')
const bio = ref('')
const intrests = ref([])
const links = ref({})

onSnapshot(docRef, (docSnap) => {

  displayName.value = docSnap.data().displayName
  email.value = docSnap.data().email
  bio.value = docSnap.data().bio
  intrests.value = docSnap.data().intrests
});


const newInterest = ref('')
function addInterest() {
  updateDoc(docRef, {
    intrests: arrayUnion(newInterest.value)
  })

  newInterest.value = ''
}

function addLink() {

}

</script>

<style></style>