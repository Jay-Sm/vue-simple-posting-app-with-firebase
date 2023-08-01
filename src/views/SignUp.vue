<template>
  <main class="mt-24 w-full flex flex-col items-center">
    <h1 class="font-semibold text-4xl">Sign Up</h1>
    <div class="w-5/12 min-w-[30rem]">
      <form action="" class="flex flex-col items-center mt-10 w-full">
        <input type="text" placeholder="Username*" class="input">
        <input type="text" placeholder="Email*" class="input">
        <input type="text" placeholder="Password*" class="input">
        <input type="password" placeholder="Confirm Password*" class="input">
        <button class="bg-blue-400 w-[5rem] px-2 py-1 rounded-sm text-white flex items-center justify-center">Sign Up</button>
      </form>
    </div>
  </main>
</template>

<script setup>

</script>

<style scoped>
.input {
  @apply border-b border-gray-300 hover:border-gray-400 focus:border-gray-400 outline-none w-full m-7
}
</style>