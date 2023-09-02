<template>
  <div class="custom-pagination">
    <button @click="goToPage(1)">First</button>
    <button @click="previousPage">Previous</button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage">Next</button>
    <button @click="goToPage(totalPages)">Last</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit('page-change', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('page-change', this.currentPage + 1);
      }
    },
    goToPage(page) {
      this.$emit('page-change', page);
    },
  },
};
</script>

<style scoped>
/* Add your pagination styles here */
</style>
