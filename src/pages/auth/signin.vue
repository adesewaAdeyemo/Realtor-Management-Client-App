<template>
  <auth-page>
    <section class="center-body">
        <div class="card col-md-5 col-sm-11 p-5">
            <div class="text-center px-2">
                <h2>Log in to your account</h2>
                <h4 class="card-text mb-3 pt-3">Fill in the details below to access your dashboard</h4>
            </div>

            <form id='form' @submit.prevent="submitForm" class="px-5">
                <div :class="{invalid: validity.emailValidity === 'invalid'}">
                    <label for="email">Enter Email Address</label>
                    <input id='email' class="form-control form-control-md" type="email" placeholder="" v-model.lazy="email" @blur="validateInput('email')">
                    <p v-if="validity.emailValidity === 'invalid'">Please enter a Email!</p>
                </div>

                <div>
                    <label for="password">Enter Password</label>
                    <input id='password' class="form-control form-control-md" type="password" placeholder="" v-model="password">
                </div>

                <div class="text-center">
                    <button type="submit" class="btn custom-btn-bg btn-sm px-5 py-2 my-3 col-12">Sign In</button>
                    <p>Don't have an account? <a href="/signup" class="a">Create an account</a></p>
                    <p>Yet to be verified? <a href="/forgot" class="a">Forgot Password</a></p>
                </div>
            </form>

        </div>
    </section>
  </auth-page>
</template>array()

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                validity: [emailValidity=>'pending']
            };
        },
        methods: {
            submitForm(){
                this.formIsValid = true;
                if (
                    this.email === '' ||
                    !this.email.includes('@') ||
                    this.password.length < 6
                ) {
                    this.formIsValid = false;
                    return;
                }

                this.isLoading = true;

                const data = {
                    email: this.email,
                    password: this.password,
                };
                this.$router.push('/dashboard');
            },

            validateInput(item) {
                let check= item + 'Validity';
                if (this[item] == '') {
                    this.validity[check] = 'invalid';
                } else {
                    this.validity[check] = 'valid';
                }
            }
        }
    }
</script>