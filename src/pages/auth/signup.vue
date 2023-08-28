<template>
    <div class="auth-body">
    <div class="wrapper">
        <nav style="background: #fff;" class="d-flex justify-content-between align-items-center py-4 header-nav" id="">
            <ul style="margin-bottom:0px" class="d-flex justify-content-between p-0 align-items-center">
                <li class="item button allitemmargin"><span class="btn custom-btn-blank btn-sm px-5 py-0"><pre>        </pre></span></li>
                <li class="item allitemmargin px-5"><a href="/index#about">About Us</a></li>
                <li class="item button allitemmargin"><a href="/index#contact">Contact</a></li>
            </ul>
            <ul style="margin-bottom:0px" class="d-flex justify-content-between align-items-center">
                <li class="item button allitemmargin px-5"><a class="btn custom-btn-outline btn-sm px-5 py-2" href="/signin">Sign In</a></li>
                <li class="item button allitemmargin"><a class="btn custom-btn-bg btn-sm px-5 py-2" href="signup">Join Our Realtor Team</a></li>
            </ul>
        </nav>
        <nav style="background: #fff;" class="d-flex justify-content-between align-items-center pt-3 mobile-nav mb-3" id="">
            <span class="btn custom-btn-blank btn-sm px-3 py-0"><pre>        </pre></span>
            <div class="dropdown">
                <span type="button" data-bs-toggle="dropdown" aria-expanded="true">
                    <i class="fa fa-bars"></i>
                </span>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/index#about">About Us</a></li>
                    <li><a class="dropdown-item" href="/index#contact">Contact</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item custom-btn-bg" href="signup">Join Our Realtor Team</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="border-bottom"></div>
    <section class="center-body">
        <div class="card col-md-5 col-sm-11 p-5">
            <div class="text-center px-2">
                <h2>Create an account with Homeowner</h2>
                <h4 class="card-text mb-3 pt-3">Fill in the details below to access your dashboard</h4>
            </div>

            <form id='form' class="px-5">
                <div class="input-field my-3">
                    <label for="name">Enter First Name</label>
                    <input id='name' class="form-control form-control-md" type="text" placeholder="Enter first name" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                    <span role="alert" id="nameError" class='error' aria-hidden="true">
                        Name cannot be empty
                    </span>
                </div>

                <div class="input-field my-3">
                    <label for="name">Enter Last Name</label>
                    <input id='name' class="form-control form-control-md" type="text" placeholder="Enter Last name" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                    <span role="alert" id="nameError" class='error' aria-hidden="true">
                        Name cannot be empty
                    </span>
                </div>

                <div class="input-field my-3">
                    <label for="gender">Enter Phone Number</label>
                    <input id='name' class="form-control form-control-md" type="text" placeholder="Enter Phone Number" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                    <span role="alert" id="nameError" class='error' aria-hidden="true">
                        Name cannot be empty
                    </span>
                </div>

                <div class="input-field my-3">
                    <label for="gender">Enter Email Address</label>
                    <input id='name' class="form-control form-control-md" type="text" placeholder="Enter Email Address" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                    <span role="alert" id="nameError" class='error' aria-hidden="true">
                        Name cannot be empty
                    </span>
                </div>

                <div class="input-field my-3">
                    <label for="gender">Enter Password</label>
                    <input id='name' class="form-control form-control-md" type="text" placeholder="Enter Password" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                    <span role="alert" id="nameError" class='error' aria-hidden="true">
                        Name cannot be empty
                    </span>
                </div>

                <div class="text-center">
                    <a class="btn custom-btn-bg btn-sm px-5 py-2 my-3 col-12" href="/signin">Join Our Realtor Team</a>
                    <p>Already have an account? <a href="/signin" class="a">Login</a></p>
                </div>
            </form>

        </div>
    </section>
  
    </div>
</template>