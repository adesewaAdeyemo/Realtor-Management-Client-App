<template>
  <auth-page>
    <section class="center-body">
        <div class="card col-md-5 col-sm-11 p-5">
            <div class="text-center px-2">
                <h2>Forgot Password</h2>
                <h4 class="card-text mb-3 pt-3">Enter email address to get a code</h4>
            </div>

            <form id='form' @submit.prevent="submitForm" class="px-5">
                <div :class="{invalid: validity.emailValidity === 'invalid'}">
                    <label for="email">Enter Email Address</label>
                    <input id='email' class="form-control form-control-md" type="email" placeholder="" v-model.lazy="email" @blur="validateInput('email')">
                    <p v-if="validity.emailValidity === 'invalid'">Please enter a Email!</p>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn custom-btn-bg btn-sm px-5 py-2 my-3 col-12" href="/forgot-code">Continue</button>
                </div>
            </form>

        </div>
    </section>
</auth-page>
</template>

<script>
    export default {
        data() {
            return {
                code: '',
                validity: [coedeValidity=>'pending']
            };
        },
        methods: {
            submitForm(){
                const data = {
                    'code': this.code,
                };
                this.$router.push('/forgot-code');
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