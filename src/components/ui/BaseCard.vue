<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px !important;
  box-shadow: 0 2px 8px rgba(128, 123, 123, 0.26);
  padding: 20px 30px;
  min-width: 200px !important;
}
</style>