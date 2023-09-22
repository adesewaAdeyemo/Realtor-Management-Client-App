<template>
  <auth-page>
    <section class="center-body">
        <div class="card col-md-9 col-sm-11 p-5">
            <div class="check row">
            <div class="col checkout">
                <div class="">
                    <h4>Secure Checkout</h4>
                </div>

                <form id='form' @submit.prevent="submitForm" class="checkcard">
                    <div :class="{invalid: validity.emailValidity === 'invalid'}">
                        <label for="email">Email Address</label>
                        <input id='email' class="form-control form-control-md" type="email" placeholder="" v-model.lazy="email" @blur="validateInput('email')">
                        <p v-if="validity.emailValidity === 'invalid'"></p>
                    </div>

                    <div>
                        <label for="password">Card Name</label>
                        <input id='password' class="form-control form-control-md" type="password" placeholder="" v-model="password">
                    </div>

                    <div>
                        <label for="password">Card Number</label>
                        <input id='password' class="form-control form-control-md" type="password" placeholder="" v-model="password">
                    </div>

                    <div class="row align-items-center justify-content-between">
                        <div class="col-lg-6 col-sm-12 input-field my-3">
                            <label for="gender">Expiration Date</label>
                            <input id='name' class="form-control form-control-md py-2" type="text" placeholder="MM/YY" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                            <span role="alert" id="nameError" class='error' aria-hidden="true">
                                Name cannot be empty
                            </span>
                        </div>
                        <div class="col-lg-6 col-sm-12 input-field my-3">
                            <label for="gender">CVV</label>
                            <input id='name' class="form-control form-control-md py-2" type="text" placeholder="123" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                            <span role="alert" id="nameError" class='error' aria-hidden="true">
                                Name cannot be empty
                            </span>
                        </div>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn custom-btn-bg btn-sm px-5 py-2 my-3 col-12">Checkout</button>
                    </div>
                </form>
            </div>

            <div class="col checkoutreverse">
                <h4>Your Order</h4>
                <form id='form' @submit.prevent="submitForm" class="">
                    <div :class="{invalid: validity.emailValidity === 'invalid'}">
                        <input id='email' class="form-control form-control-md my-4" type="email" placeholder="Have a discount coupon? Enter here" v-model.lazy="email" @blur="validateInput('email')">
                    </div>
                    <div class="d-flex justify-content-between">
                        <h6>Product</h6>
                        <h6>Price</h6>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <p>Pro Plan</p>
                        <p>N39,999.00</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Sub Total</p>
                        <p>-N39,999.00</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Estimated Task</p>
                        <p>N399.00</p>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between">
                        <h6>Total</h6>
                        <h6>N399</h6>
                    </div>

                </form>
            </div>
            </div>
        </div>
    </section>
  </auth-page>
</template>

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
<style style>
@media screen and (max-width: 784) {
h4{
    font-size: 30px;
    padding: 10px 0 !important;
}
.row{
    padding: 0 !important;
}


}
</style>