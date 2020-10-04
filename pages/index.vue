<template>
  <section class="text-gray-500 body-font h-full">
    <!-- <div class="bg-indigo-900 text-center py-4 lg:px-4">
      <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
        <span class="font-semibold mr-2 text-left flex-auto">Check out our new site</span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
      </div>
    </div> -->
    <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
          XANZHU
        </h1>
        <div class="mb-8 mt-2 mx-5 break-word text-sm leading-5 text-gray-300 sm:text-base">
          <p>This page will constantly update as we improve our design</p>
          <p>We expect to release our website by the end of the year</p>
        </div>
        <button class="bg-yellow-600 hover:bg-white text-black font-bold py-2 px-4 rounded" @click="isHidden = !isHidden">
          Donate
        </button>
        <div v-if="isHidden">
          <p class="mt-4 text-white">
            Direct Address: ETH 0xF74c5B6956F0B7674659323665Db90313f73557E
          </p>
          <a class="text-red-600" href="https://commerce.coinbase.com/checkout/fd080deb-7ead-4bba-a979-0292e7109e70">Coinbase donation</a>
          <p />
        </div>
        <p v-else class="mt-4 text-xs">
          ETH 0xF74c5B6956F0B7674659323665Db90313f73557E
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      isHidden: false
    }
  }
}
</script>
