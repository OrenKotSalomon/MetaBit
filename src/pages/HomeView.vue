<template>
  <section class="home-container">
    <div class="img-container">
      <div class="user-container">
        <span class="user-info">{{ user.name }}</span>
        <p>{{ user.balance }}</p>
        <p>{{ bitcoinRate }}</p>
      </div>
      <img src="../assets/imgs/img02.jpg" alt="" />
      <p>A crypto wallet gateway to blockchain apps</p>
      <img src="../assets/imgs/img01.jpg" alt="" />
      <p>Buy store and transfer your tokens</p>
    </div>
  </section>
</template>

<script>
import { userService } from "@/services/user-service.js";
import { bitcoinService } from "@/services/bitcoin-service.js";
export default {
  data() {
    return {
      user: userService.getUser(),
      bitcoinRate: null,
    };
  },
  methods: {
    temp() {
      console.log(this.user);
    },
  },
  async created() {
    this.bitcoinRate = await bitcoinService.getBitcoinExchange();
  },
};
</script>

<style>
</style>
