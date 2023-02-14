<template>
  <header>
    <div
      class="logo-container"
      @click="
        () => {
          this.$router.push('/');
        }
      "
    >
      <img src="../assets/imgs/logo.png" alt="" />
      <h1>METABIT</h1>
    </div>
    <div class="link-container" ref="nav">
      <div class="user-container">
        <span class="user-info">{{ user.name }}</span>
        <p>{{ user.balance }} BTC</p>
        <p>1$={{ bitcoinRate }}</p>
      </div>
      <nav>
        <RouterLink to="/" @click="removeNavBar">Home</RouterLink>
        <RouterLink to="/contacts" @click="removeNavBar">Contacts</RouterLink>
        <RouterLink to="/stats" @click="removeNavBar">stats</RouterLink>
        <button className="nav-btn nav-close-btn" @click="showNavBar">-</button>
      </nav>
    </div>
    <button className="nav-btn nav-close-btn" @click="showNavBar">-</button>
  </header>
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
    showNavBar() {
      this.$refs.nav.classList.toggle("responsive_nav");
    },
    removeNavBar() {
      this.$refs.nav.classList.remove("responsive_nav");
    },
  },
  async created() {
    this.bitcoinRate = await bitcoinService.getBitcoinExchange();
  },
};
</script>
