
<template>
  <main>

    <FormCoba></FormCoba>
  </main>
</template>
<script>
import { fetchListPoke } from '@/api/poke-api';
import FormCoba from '@/components/FormCoba.vue';

export default {
  components: { FormCoba },
  mounted() {
    this.fetchList()
  },
  methods: {
    // fetch api using axios
     fetchList(){
      return fetchListPoke()
    }
  }
}
</script>
