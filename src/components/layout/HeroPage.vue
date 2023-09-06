<template>
  <div class="app-bg">
  <hero-nav/>
  <div class="herobg">
    <div class="wrapper">
        <div class="d-flex justify-content-between hero-section">
            <div class="">
                <h2>Welcome {{ name }}!</h2>
                <p>This is the latest report for the Lagos Branch.</p>
            </div>
            <div class="align-item-center">
                <a href="dashboard" class="btn bg-light btn-sm px-4 py-2">{{ button_name }}</a>
            </div>
        </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="d-flex gx-5 hero-card max-width">
    <div
        v-for="(idata, index) in data"
        :key="index"
        :class="['col', index !== data.length - 1 ? 'mr' : '']"
    >
        <base-card class="hero-carrd">
            <span class="hero-card-icon" v-html="idata.icon"></span>
            <p>{{ idata.role }}</p>
            <h2 class="hero-card-amout">{{ idata.amount }}</h2>
            <i class="hero-card-txt">{{ idata.text }}</i>
        </base-card>
    </div>
    </div>
  </div>
  <slot></slot> 
  </div>
</template>
<script>
    // import { styleType } from "element-plus/es/components/table-v2/src/common";
import FullNav from "/src/components/ui/FullNav.vue";

    export default {
        props:[],
    components: {
        FullNav
    } ,
    data(){
        return{
            name: 'Test Name',
            button_name: 'Export',
            data: [
                {
                'icon':'<i class="bi bi-people-fill"></i>',
                'role': 'Realtor',
                'amount': '13,587',
                'text': '18.2% increase this month',
            },
                {
                'icon':'<i class="bi bi-house-door"></i>',
                'role': 'Realtor',
                'amount': '13,587',
                'text': '18.2% increase this month',
            },
                {
                'icon':'<i class="bi bi-person-add"></i>',
                'role': 'Realtor',
                'amount': '13,587',
                'text': '18.2% increase this month',
            },
                {
                'icon':'<i class="bi bi-person-add"></i>',
                'role': 'Realtor',
                'amount': '13,587',
                'text': '18.2% increase this month',
            },
        ]
        }
    }
}
</script>
<style>
@media screen and (max-width: 784px) {
    .nav-wrapper{
        width: 100% !important;
        padding: 5px;
    }
}
</style>
