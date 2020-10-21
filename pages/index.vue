<template>
  <div>
    <xubanner />
    <xunav />
    <div class="text-center text-gray-300 py-12 font-thin text-lg">
      <p>This page will constantly update as we improve our design</p>
      <p>We expect to release our website by the end of the year</p>
    </div>
  <!-- <div class="bg-yellow-600 hover:bg-white text-black font-bold py-2 px-4 rounded" @click="isHidden = !isHidden">
          Donate
        </div> -->
  <!-- <div v-if="isHidden">
          <p class="mt-4 text-white">
            Direct Address: ETH 0xF74c5B6956F0B7674659323665Db90313f73557E
          </p>
          <a class="text-red-600" href="https://commerce.coinbase.com/checkout/fd080deb-7ead-4bba-a979-0292e7109e70">Coinbase donation</a>
          <p />
        </div> -->
  <!-- <p v-else class="mt-4 text-xs">
          ETH 0xF74c5B6956F0B7674659323665Db90313f73557E
        </p> -->
  </div>
</template>
<script>
import xubanner from '@/components/banner'
import xunav from '@/components/navbar'

export default {
  components: {
    xunav,
    xubanner
  }
  // data () {
  //   return {
  //     isHidden: false
  //   }
  // }
}
</script>
