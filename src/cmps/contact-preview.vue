<template>
  <article class="contact-preview">
    <img :src="`https://robohash.org/${contact._id}.png`" alt="" />
    <h2>{{ contact.name }}</h2>
    <p>{{ contact.email }}</p>
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>