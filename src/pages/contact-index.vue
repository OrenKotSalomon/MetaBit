<template>
  <main class="main-container">
    <!-- <UserMsg /> -->
    <ContactFilter @filter="setFilter" />
    <RouterLink to="/contact/edit"><button>Add Contact</button></RouterLink>
    <ContactList v-if="contacts" :contacts="contacts" @remove="removeContact" />
  </main>
</template>

<script>
import ContactList from "@/cmps/contact-list.vue";
import ContactFilter from "@/cmps/contact.fillter.vue";

export default {
  data() {
    return {
      filterBy: {},
    };
  },
  methods: {
    async removeContact(contactId) {
      console.log(contactId);
      await this.$store.dispatch({ type: "removeContact", contactId });
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
      this.$store.dispatch({
        type: "loadContacts",
        filterBy: this.filterBy,
      });
    },
  },

  async created() {
    await this.$store.dispatch({
      type: "loadContacts",
      filterBy: this.filterBy,
    });
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>

<style>
</style>