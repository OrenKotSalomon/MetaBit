<template>
  <article class="contact-preview">
    <img
      :src="'https://api.dicebear.com/5.x/open-peeps/svg?seed=' + contact.name"
      alt=""
    />
    <h2>{{ contact.name }}</h2>
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