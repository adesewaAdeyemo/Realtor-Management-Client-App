<template>
  <auth-page>
    <section class="center-body">
        <div class="card col-md-5 col-sm-11 p-5">
            <div class="text-center px-2">
                <h2>Reset Password</h2>
            </div>

            <form id='form' @submit.prevent="submitForm" class="px-5">
                <div :class="{invalid: validity.PasswordValidity === 'invalid'}">
                    <label for="fpassword">Enter Password</label>
                    <input id='fpassword' class="form-control form-control-md" type="password" placeholder="" v-model.lazy="fpassword" @blur="validateInput('password')">
                    <p v-if="validity.fpasswordValidity === 'invalid'"></p>
                </div>
                <div :class="{invalid: validity.PasswordValidity === 'invalid'}">
                    <label for="password">Enter Password</label>
                    <input id='password' class="form-control form-control-md" type="password" placeholder="" v-model.lazy="password" @blur="validateInput('password')">
                    <p v-if="validity.passwordValidity === 'invalid'">Password must be the same</p>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn custom-btn-bg btn-sm px-5 py-2 my-3 col-12" href="">Submit</button>
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
                validity: [fpasswordValidity=>'pending', passwordValidity=>'pending']
            };
        },
        methods: {
            submitForm(){
                const data = {
                    'password': this.password,
                };
                this.$router.push('');
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