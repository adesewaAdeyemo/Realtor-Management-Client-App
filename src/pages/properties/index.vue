<template>
  <hero-page>
    <div class="wrapper py-5">
      <div class="d-flex justify-content-between">
        <h4>Property overview</h4>
        <p class="view-all">View All</p>
      </div>
      <div v-for="(propertyGroup, rowIndex) in propertyGroups" :key="rowIndex" class="row py-3 my-3" >
        <div class="col" v-for="(property, index) in propertyGroup" :key="index">
          <div class="card p-3" style="margin-bottom: 20px;">
            <div class= "p-absolute">
                <span class="for-sale">For sale</span>
            </div>
            <img :src="property.img" class="card-img-top border" alt="Property Image" height="250" style="border-radius: 8px !important;">
            <div class="card-body d-flex justify-content-between">
                <div class="">
                    <h5 class="card-title">{{ property.realtor }}</h5>
                    <p class="card-text">{{ property.address }}</p>
                    <h4 class="">{{ property.amount }}</h4>
                </div>
                <div class="card-body-2">
                    <p class="card-text">{{ property.size }}sqm</p>
                    <p class="view-all">View All</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </hero-page>
</template>

<script>
export default {
  data() {
    return {
      properties: [
        { id: 1, realtor: 'Serendipity Estate', address: 'Ibeju Lekki, Lagos State', amount: '₦15,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674699/Henry/henry/Rectangle_94_1_jzfduq.png", size: "150"},
        { id: 2, realtor: 'Another Estate', address: 'Some Address, Lagos State', amount: '₦10,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674666/Henry/henry/Rectangle_93_jyuph9.png", size: "120"},
        { id: 3, realtor: 'Luxury Villa', address: 'Another Address, Lagos State', amount: '₦25,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674597/Henry/henry/Rectangle_94_s7mzsj.png", size: "200"},
        { id: 4, realtor: 'Serendipity Estate', address: 'Ibeju Lekki, Lagos State', amount: '₦15,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674699/Henry/henry/Rectangle_94_1_jzfduq.png", size: "150"},
        { id: 5, realtor: 'Another Estate', address: 'Some Address, Lagos State', amount: '₦10,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674666/Henry/henry/Rectangle_93_jyuph9.png", size: "150"},
        { id: 6, realtor: 'Luxury Villa', address: 'Another Address, Lagos State', amount: '₦25,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674597/Henry/henry/Rectangle_94_s7mzsj.png", size: "150"},
        { id: 7, realtor: 'Serendipity Estate', address: 'Ibeju Lekki, Lagos State', amount: '₦15,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674699/Henry/henry/Rectangle_94_1_jzfduq.png", size: "150"},
        { id: 8, realtor: 'Another Estate', address: 'Some Address, Lagos State', amount: '₦10,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674666/Henry/henry/Rectangle_93_jyuph9.png", size: "150"},
        { id: 9, realtor: 'Luxury Villa', address: 'Another Address, Lagos State', amount: '₦25,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674597/Henry/henry/Rectangle_94_s7mzsj.png", size: "150"},
        { id: 10, realtor: 'Serendipity Estate', address: 'Ibeju Lekki, Lagos State', amount: '₦15,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674699/Henry/henry/Rectangle_94_1_jzfduq.png", size: "150"},
        { id: 11, realtor: 'Another Estate', address: 'Some Address, Lagos State', amount: '₦10,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674666/Henry/henry/Rectangle_93_jyuph9.png", size: "150"},
        { id: 12, realtor: 'Luxury Villa', address: 'Another Address, Lagos State', amount: '₦25,000,000', img: "https://res.cloudinary.com/dorjfo4ca/image/upload/v1693674597/Henry/henry/Rectangle_94_s7mzsj.png", size: "150"},
      ],
    };
  },
  computed: {
    propertyGroups() {
      const groupSize = 4;
      const groups = [];
      for (let i = 0; i < this.properties.length; i += groupSize) {
        groups.push(this.properties.slice(i, i + groupSize));
      }
      return groups;
    },
  },
};
</script>


<style scoped>
.row{
    /* height: 400px !important; */
    background-color: #fff;
  box-shadow: 0 2px 8px rgba(128, 123, 123, 0.26);
}
.card{
    background-color: #f2f2f2;
    outline: 1px solid #dad2d2;
    border-radius: 8px !important;
}
.view-all{
  color: rgb(255, 94, 0) !important;
}
.card-text{
    font-size: 12px !important;
    line-height: 13px;
    font-weight: 500;
}
.p-absolute{
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;
    color: #f2f2f2;
    background-color: rgba(255, 94, 0, 0.8) !important;
    border-radius: 0 4px 0 0;
}
h5{
    font-size: 16px !important;
    line-height: 15.6px;
    font-weight: 600;
}
h4{
    font-size: 22px !important;
    line-height: 23.4px;
    font-weight: 500;
}
.card-body-2{
    margin-top: 30px;
    /* text-align: end; */
}
.card-body{
    margin: 0;
    padding: 10px 0 0 0;

}
</style>
