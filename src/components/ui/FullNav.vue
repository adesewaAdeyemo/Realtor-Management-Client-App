<template>
    <div class="wrapper">
        <nav style="background: #fff;" class="d-flex justify-content-between align-items-center py-4 header-nav" id="">
            <ul style="margin-bottom:0px" class="d-flex justify-content-between p-0 align-items-center">
                <li class="item button allitemmargin"><a class="btn custom-btn-blank btn-sm px-5 py-0" href="/"><pre>        </pre></a></li>
                <li class="item allitemmargin px-5"><a href="/realtor#about">About Us</a></li>
                <li class="item button allitemmargin"><a href="/realtor#contact">Contact</a></li>
            </ul>
            <ul style="margin-bottom:0px" class="d-flex justify-content-between align-items-center">
                <li class="item button allitemmargin"><base-button mode="transparent" to="signin" link>Sign In</base-button></li>
                <li class="item button allitemmargin"><base-button mode="opaque" to="signup" link>Join Our Realtor Team</base-button></li>
            </ul>
        </nav>
        <nav style="background: #fff;" class="d-flex justify-content-between align-items-center pt-3 mobile-nav mb-3" id="">
            <span class="btn custom-btn-blank btn-sm px-3 py-0"><pre>        </pre></span>
            <div class="dropdown">
                <span type="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <i class="fa fa-bars"></i>
                </span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/realtor#about">About Us</a></li>
                    <li><a class="dropdown-item" href="/realtor#contact">Contact</a></li>
                    <li><a  class="dropdown-item" href="/signin">Sign In</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><base-button mode="opaque" to="signup" link>Join Our Realtor Team</base-button></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="border-bottom"></div>
</template>