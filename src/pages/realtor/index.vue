<template>
    <hero-page>
        
      <div class="wrapper py-5">
        <div class="d-flex justify-content-between">
          <h4>Recently  joined Realtors</h4>
          <p class="view-all">View All</p>
        </div>
        <my-table :data="tableData" :per-page="perPage"></my-table>
      </div>
    </hero-page>
</template>
<script>

export default {
  data() {
    return {
      perPage: 4,
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
.view-all{
    color: rgb(255, 94, 0) !important;
}
</style>