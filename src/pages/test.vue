<template>
  <div>
    <my-table :data="tableData" :per-page="perPage"></my-table>
  </div>
</template>

<script>
import MyTable from '../components/ui/table.vue';

export default {
  components: {
    MyTable,
  },
  data() {
    return {
      perPage: 5,
      tableData: [
        { id:1, realtor:{name: "John", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213699/Henry/henry/image-bg_jso1aw.png'}, phone: +2348159174839, createdAt: '',assiged: "yes", plans: 'pro max', status: "active"},
        { id:2, realtor:{name: "Jane", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-31', assiged: "yes", plans: 'Pro max', status: ""},
        { id:3, realtor:{name: "Susan", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-30', assiged: "yes", plans: 'Max', status: "nil"},
        { id:4, realtor:{name: "Chris", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213699/Henry/henry/image-bg_jso1aw.png'}, phone: +2348159174839, createdAt: '2011-10-11', assiged: "yes", plans: 'Max', status: "active"},
        { id:5, realtor:{name: "Dan", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-21', assiged: "yes", plans: 'pro max', status: "inactive"},
        { id:6, realtor:{name: "John", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-31', assiged: "yes", plans: 'Max', status: "active"},
        { id:1, realtor:{name: "John", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213699/Henry/henry/image-bg_jso1aw.png'}, phone: +2348159174839, createdAt: '',assiged: "yes", plans: 'pro max', status: "active"},
        { id:2, realtor:{name: "Jane", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-31', assiged: "yes", plans: 'Pro max', status: ""},
        { id:3, realtor:{name: "Susan", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-30', assiged: "yes", plans: 'Max', status: "nil"},
        { id:4, realtor:{name: "Chris", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213699/Henry/henry/image-bg_jso1aw.png'}, phone: +2348159174839, createdAt: '2011-10-11', assiged: "yes", plans: 'Max', status: "active"},
        { id:5, realtor:{name: "Dan", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-21', assiged: "yes", plans: 'pro max', status: "inactive"},
        { id:6, realtor:{name: "John", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-31', assiged: "yes", plans: 'Max', status: "active"},
        { id:1, realtor:{name: "John", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213699/Henry/henry/image-bg_jso1aw.png'}, phone: +2348159174839, createdAt: '',assiged: "yes", plans: 'pro max', status: "active"},
        { id:2, realtor:{name: "Jane", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-31', assiged: "yes", plans: 'Pro max', status: ""},
        { id:3, realtor:{name: "Susan", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-30', assiged: "yes", plans: 'Max', status: "nil"},
        { id:4, realtor:{name: "Chris", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213699/Henry/henry/image-bg_jso1aw.png'}, phone: +2348159174839, createdAt: '2011-10-11', assiged: "yes", plans: 'Max', status: "active"},
        { id:5, realtor:{name: "Dan", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-21', assiged: "yes", plans: 'pro max', status: "inactive"},
        { id:6, realtor:{name: "John", email: "me@you.com", img: 'https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg'}, phone: +2348159174839, createdAt: '2011-10-31', assiged: "yes", plans: 'Max', status: "active"},
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
