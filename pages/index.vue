<template>
  <section class="text-gray-500 body-font h-full">
    <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
          XANZHU.COM
        </h1>
        <div class="mb-8 mt-2 mx-5 break-word text-sm leading-5 text-gray-300 sm:text-base">
          <p>This page will constantly update as we improve our design</p>
          <p>We expect to release our website by the end of the year</p>
        </div>
        <div class="bg-yellow-600 hover:bg-white text-black font-bold py-2 px-4 rounded" @click="isHidden = !isHidden">
          Donate
        </div>
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
