<template>
  <div class="detail-container">
    <div v-if="contact" class="contact-container">
      <img :src="`https://robohash.org/${contact._id}.png`" alt="" />
      <div class="contact-details">
        <div>{{ contact.name }}</div>
        <div>{{ contact.email }}</div>
        <div>{{ contact.phone }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { contactService } from "@/services/contactService.js";

export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.getContactById(contactId);
  },
};
</script>

<style>
</style>