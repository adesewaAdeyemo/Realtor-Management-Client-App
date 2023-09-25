<template >
    <div class="heronav herobg">
        
    <div class="wrapper" >
            <nav class="d-flex justify-content-between align-items-center py-4 header-nav" id="header-nav">
                <ul style="margin-bottom: 0px" class="align-items-center">
                <li class="item button"><a class="btn hero-btn-blank btn-sm px-5 py-0" href="/"><pre>        </pre></a></li>
                </ul>

                <ul style="margin-bottom: 0px" class="d-flex justify-content-between align-items-center">
                    <li class="item button navbtn">
                        <a :class="{ 'btn hero-btn-blank': activeNavItem == 'dashboard'}" class="btn-sm px-3 py-2 mx-2" href="" @click.prevent="changeactive('dashboard')">
                        <i class="bi bi-house-door"></i>  Dashboard
                        </a>
                    </li>
                    <li class="item button navbtn">
                        <a :class="{ 'btn hero-btn-blank': activeNavItem == 'realtors'}" class="btn-sm px-3 py-2 mx-2" href="" @click.prevent="changeactive('realtors')">
                        <i class="bi bi-bell"></i>  Realtor
                        </a>
                    </li>
                    <li class="item button navbtn">
                        <a :class="{ 'btn hero-btn-blank': activeNavItem == 'properties'}" class="btn-sm px-3 py-2 mx-2" href="" @click.prevent="changeactive('properties')">
                        <i class="bi bi-bell"></i>  Properties
                        </a>
                    </li>
                </ul>

                <ul style="margin-bottom: 0px" class="d-flex justify-content-between align-items-center">
                    <li class="item button">
                        <a href="realtor">
                        <span class="heroiconlg px-2"><i class="bi bi-bell"></i></span>
                        </a>
                    </li>
                    <li class="item button">
                        <a href="realtor mx-4">
                        <span class="heroiconlg px-4"><i class="bi bi-gear"></i></span>
                        </a>
                    </li>
                    <li class="item button">
                        <a href="realtor">
                        <span class="heroicon px-2">|</span>
                        </a>
                    </li>
                    <li class="item button">
                        <img src="https://res.cloudinary.com/dorjfo4ca/image/upload/v1693213697/Henry/henry/image_21_z0shi2.jpg" alt="profilepics" class="mx-1">
                        <span class="heroiconn">&#x25BC;</span>
                    </li>
                </ul>
            </nav>        
            <nav class="d-flex justify-content-between align-items-center pt-3 mobile-nav mb-3" id="mobile-nav">
            <span class="btn hero-btn-blank btn-sm px-3 py-0"><pre>        </pre></span>
            <div class="dropdown">
                <span type="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <span class="heroicon">&#9776</span>
                </span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="" @click.prevent="changeactive('dashboard')"><i class="bi bi-house-door"></i>Dashboard</a></li>
                    <li><a class="dropdown-item" href="" @click.prevent="changeactive('realtors')"><i class="bi bi-bell"></i>Realtor</a></li>
                    <li><a  class="dropdown-item" href="" @click.prevent="changeactive('properties')"><i class="bi bi-bell"></i>Properties</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="border-bottom"></div>
    </div>
</template>
<script>
// import router from '../../router';

export default {
  data() {
    return {
        img: '',
        activeNavItem: 'dashboard',
    };
  },
  methods:{
    changeactive(nav){
        this.activeNavItem = nav;
        this.$router.push(nav);
    }
  },
};

</script>

<style scoped>
    .dropdown a{
        color: #000 !important;
    }
    .dropdown a:hover{
        color: #dc4D01 !important;
    }
</style>
