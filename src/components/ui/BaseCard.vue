<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px !important;
  /* box-shadow: 0 2px 8px rgba(128, 123, 123, 0.26); */
  box-shadow: 0px 0px 56px rgba(200, 200, 201, 0.2), 0px 0px 56px rgba(195, 196, 197, 0.2);
  padding: 20px 30px;
  min-width: 250px !important;
}
</style>