<template>
  <main class="main-container">
    <UserMsg />
    <ContactList v-if="contacts" :contacts="contacts" />
  </main>
</template>

<script>
import { contactService } from "@/services/contactService.js";
import ContactList from "@/cmps/contact-list.vue";

export default {
  data() {
    return {
      contacts: null,
    };
  },
  async created() {
    this.contacts = await contactService.getContacts();
    console.log(this.contacts);
  },
  components: {
    ContactList,
  },
};
</script>

<style>
</style>