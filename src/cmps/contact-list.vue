<template>
  <TransitionGroup name="list" tag="ul" class="car-list">
    <li class="car-preview" v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" />
      <section class="actions">
        <RouterLink :to="`/contact/${contact._id}`">
          <button>Details</button>
        </RouterLink>
        <!-- <RouterLink :to="`/car/edit/${car._id}`"> -->
        <!-- <button>Edit</button> -->
        <!-- </RouterLink> -->
        <!-- <button @click="onRemoveCar(car._id)">x</button> -->
      </section>
    </li>
  </TransitionGroup>
</template>

<script>
import ContactPreview from "@/cmps/contact-preview.vue";

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style>
</style>