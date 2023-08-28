<template>
  <auth-page>
    <section class="center-body">
        <div class="card col-md-5 col-sm-11 p-5">
            <div class="text-center px-2">
                <h2>Log in to your account</h2>
                <h4 class="card-text mb-3 pt-3">Fill in the details below to access your dashboard</h4>
            </div>

            <form id='form' class="px-5">
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
                    <a class="btn custom-btn-bg btn-sm px-5 py-2 my-3 col-12" href="/">Sign In</a>
                    <p>Don't have an account? <a href="/signup" class="a">Create an account</a></p>
                    <p>Yet to be verified? <a href="/verify" class="a">Verified Your Account</a></p>
                </div>
            </form>

        </div>
    </section>
  </auth-page>
</template>

