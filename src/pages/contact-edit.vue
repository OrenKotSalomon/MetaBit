
<template>
  <button
    @click="
      () => {
        this.$router.back();
      }
    "
  >
    back
  </button>
  <form v-if="contact" action="" @submit.prevent="save">
    <div class="input-container">
      <div>Fullname:</div>
      <input type="text" v-model="contact.name" />
    </div>
    <div class="input-container">
      <div>Phone:</div>
      <input type="text" v-model.number="contact.phone" />
    </div>
    <div class="input-container">
      <div>Email:</div>
      <input type="email" v-model="contact.email" />
    </div>
    <div class="contact-edit-btn-container">
      <button type="submit">Sumbit</button>
      <button v-if="contact._id" @click="removeContact(contact._id)">
        Delete
      </button>
    </div>
  </form>
</template>



<script >
import { contactService } from "@/services/contactService.js";
export default {
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    async save() {
      await this.$store.dispatch({
        type: "saveContact",
        contact: this.contact,
      });
      this.$router.push("/contacts");
    },
    async removeContact(contactId) {
      await this.$store.dispatch({ type: "removeContact", contactId });
      this.$router.push("/contacts");
    },
  },
  async created() {
    const contactId = this.$route.params._id;
    if (contactId) {
      this.contact = await contactService.getContactById(contactId);
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
};
</script>