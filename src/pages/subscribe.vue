<template>
<profile-nav/>
<div class="p-5 sub-body">
        <div class="wrapper">
            <section class="row mt-5">
                <div class="">
                    <h3>Make payment in two steps and your subscription will be right on!</h3>
                </div>
                <!-- <div class="row gx-5 gy-4 no-margin mobile-full-width"> -->
                <div class="d-flex change-flex justify-content-between">
                    <div class="align-items-center col-md-2 col-sm-12">
                        <h5>1. Select Plan</h5>
                    </div>
                    <div class=""></div>
                    <div class="col-md-3 col-sm-12 align-items-center d-flex justify-content-between">
                        <!-- <select v-model="planspan">
                        <option class="btn custom-footer-btn-blank py-2 col-5" id="monthlyBtn" value="monthly">Monthly</option>
                        <option class="btn custom-footer-btn-blank py-2 col-5" id ="annualBtn" value="anually">Anually</option>
                        </select> -->
                        <input class="btn custom-footer-btn-blank py-2 col-5 usep" id="monthlyBtn" name="Monthly" placeholder="Mothly" v-model="planspan" readonly>
                        <input class="btn custom-footer-btn-blank py-2 col-5 usep" id ="annualBtn" name="Anually" placeholder="Anually" v-model="planspan" readonly>
                    </div>
                </div>
                
                <div class="d-flex py-4 col-12 change-flex">
                    <div class="col-lg-3 col-md-12 align-items-center">
                        <div class="border border-radius custom-section-bg ">
                            <div class="d-flex align-items-center">
                                <div class="px-3 py-4">
                                    <label for="plan" class="">
                                        <input type="radio" name="plan" value="basic" v-model="selectedPlan" style="color:#DC4D01; background:#DC4D01;">
                                    </label>
                                </div>
                                <div class="px-3 py-4">
                                <h4>Basic Plan</h4>
                                <h5>₦999.99/mo</h5>
                                <p>Plan renew at ₦39,999.99 per month on 08/08/2023 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col"><pre>   </pre></div>
                    <div class="col-lg-3 col-md-12 align-items-center">
                        <div class="border border-radius custom-section-bg">
                            <div class="d-flex align-items-center">
                                <div class="px-3 py-4">
                                    <label for="plan" class="">
                                        <input type="radio" name="plan" value="pro" v-model="selectedPlan" style="color:#DC4D01; background:#DC4D01;">
                                    </label>
                                </div>
                                <div class="px-3 py-4">
                                <h4>Pro Plan</h4>
                                <h5>₦999.99/mo</h5>
                                <p>Plan renew at ₦39,999.99 per month on 08/08/2023 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col"><pre>   </pre></div>
                    <div class="col-lg-3 col-md-12 align-items-center">
                        <div class="border border-radius custom-section-bg">
                            <div class="d-flex align-items-center">
                                <div class="px-3 py-4">
                                    <label for="plan" class="">
                                        <input type="radio" name="plan" value="promax" v-model="selectedPlan" style="color:#DC4D01; background:#DC4D01;">
                                    </label>
                                </div>
                                <div class="px-3 py-4">
                                <h4>Pro Max Plan</h4>
                                <h5>₦999.99/mo</h5>
                                <p>Plan renew at ₦39,999.99 per month on 08/08/2023 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="border-bottom mt-3"></div>
        </div>
        <div class="wrapper">
            <section class="row mt-4" id="signinform">
                <div class="">
                    <h5>2. Login to your account</h5>
                    <p>Don't have an account? <span class="a" onchange="showauth('signupform')"> Sign Up</span></p>
                </div>
                <div class="row sub-form">
                    <div class="col-md-6 col-sm-12 no-sm-padding">
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
                    </div>
                </div>
            </section>
            <section class="row mt-4 d-none" id="signupform">
                <div class="">
                    <h5>2. Create an account</h5>
                    <p>Already have an account? <span class="a" onchange="showauth('signinform')"> Sign In</span></p>
                </div>
                <div class="row sub-form">
                    <div class="col-md-6 col-sm-12 no-sm-padding">
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
                    </div>
                    <div class="col-md-6 col-sm-12 no-sm-padding">
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
                    </div>
                </div>
            </section>
            <div class="border-bottom mt-3"></div>
        </div>
        <div class="wrapper">
            <section class="row mt-4 pb-5 ">
                <div class="">
                    <h5>3. Payment Information</h5>
                    <p>How would you like to Pay?</p>
                </div>
                <div class="d-flex change-flex justify-content-between">
                    <div class="col-lg-5 col-md-12 align-items-center">
                        <div class="border-radius custom-section-bg p-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="">
                                    <p><i class="fa fa-university iconi" aria-hidden="true" style="width: 30px;"></i> Bank transfer</p>
                                </div>
                                <div class=''>
                                    <label for="plan" class="">
                                        <input type="radio" name="mode" class="" style="color:#DC4D01; background:#DC4D01;" @change="showForm('transferform')">
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="">
                                    <p><i class="fa fa-credit-card-alt iconi" aria-hidden="true" style="width: 30px;"></i> Card</p>
                                </div>
                                <div class=''>
                                    <label for="plan" class="">
                                        <input type="radio" name="mode" class="" style="color:#DC4D01; background:#DC4D01;" @change="showForm('cardform')">
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="">
                                    <p><i class="fa fa-qrcode iconi" aria-hidden="true" style="width: 30px;"></i> QR Code</p>
                                </div>
                                <div class=''>
                                    <label for="plan" class="">
                                        <input type="radio" name="mode" class="" style="color:#DC4D01; background:#DC4D01;" @change="showForm('qrform')">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=""><pre>   </pre></div>



                    <div class="col-lg-5 col-md-12 align-items-center change-form" id="transferform">
                        <div class="border-radius custom-section-bg p-4">
                            <div class="payment-header">
                                <p><i class="fa fa-university iconi" aria-hidden="true" style="width: 30px;"></i>  Pay with bank transfer</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="">
                                    <h6>BANK NAME</h6>
                                    <P id="bankName">Guaranty Trust Bank</P>
                                </div>
                                <div class=''>
                                    <label for="plan" class="">
                                        <i class="fa fa-clone iconi" aria-hidden="true" onclick="copyToClipboard('bankName')"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="">
                                    <h6>Account Number</h6>
                                    <p id="accountNumber">0123456789</p>
                                </div>
                                <div class=''>
                                    <label for="plan" class="">
                                        <i class="fa fa-clone iconi" aria-hidden="true" onclick="copyToClipboard('accountNumber')"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="">
                                    <h6>AMOUNT TO BE PAID</h6>
                                    <div class="d-flex">
                                        <p>NGN</p><p id="amount">39,999.99</p>
                                    </div>
                                </div>
                                <div class=''>
                                    <label for="plan" class="">
                                        <i class="fa fa-clone iconi" aria-hidden="true" onclick="copyToClipboard('amount')"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12 align-items-center change-form" id="cardform">
                        <div class="border-radius custom-section-bg p-4">
                            <div class="payment-header">
                                <p><i class="fa fa-credit-card-alt iconi" aria-hidden="true" style="width: 30px;"></i>Pay with Card</p>
                            </div>
                            <div class="align-items-center justify-content-between">
                                <div class="input-field my-3">
                                    <label for="gender">Enter Card Number</label>
                                    <input id='name' class="form-control form-control-md py-2" type="text" placeholder="0000 0000 0000 0000" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                                    <span role="alert" id="nameError" class='error' aria-hidden="true">
                                        Name cannot be empty
                                    </span>
                                </div>
                            </div>
                            <div class="d-flex  change-flex align-items-center justify-content-between">
                                <div class="input-field my-3 col-sm-12 col-md-5">
                                    <label for="gender">Enter Card Expiry Date</label>
                                    <input id='name' class="form-control form-control-md py-2" type="text" placeholder="MM/YY" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                                    <span role="alert" id="nameError" class='error' aria-hidden="true">
                                        Name cannot be empty
                                    </span>
                                </div>
                                <div class="input-field my-3 col-sm-12 col-md-5">
                                    <label for="gender">CVV</label>
                                    <input id='name' class="form-control form-control-md py-2" type="text" placeholder="123" aria-label="Name" name="name" onmouseout="validate(event, 'name')">
                                    <span role="alert" id="nameError" class='error' aria-hidden="true">
                                        Name cannot be empty
                                    </span>
                                </div>
                            </div>
                            <a class="btn custom-btn-bg btn-sm px-5 py-2" href="#">Pay NGN39,999.99</a>
                        </div>
                    </div>

                    <div class="col-lg-5 col-md-12 align-items-center change-form" id="qrform">
                        <div class="border-radius custom-section-bg p-4">
                            <div class="payment-header d-flex justify-content-between">
                                <p><i class="fa fa-credit-card-alt iconi" aria-hidden="true" style="width: 30px;"></i>Pay with Visa QR Code</p>
                                <p><img src="assets/SVG/Vector (14).svg" alt=""></p>
                            </div>
                            <p>Scan the QR code below in your FirstBank, Access, Zenith, Access, Access Diamond, Fidelity, or Polaris Bank mobile application to complete the payment.</p>
                            <div class="align-items-center justify-content-between">
                                <div class="input-field my-3">
                                    <img src="assets/SVG/vaadin_qrcode.svg" width="30%" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
// import PlanCard from "../components/ui/PlanCard.vue";
    export default {
        mounted(){
            this.selectedPlan=this.$route.query.plan;
            
            const monthlyBtn = document.getElementById("monthlyBtn");
            const annualBtn = document.getElementById("annualBtn");

            monthlyBtn.addEventListener("click", () => {
            monthlyBtn.classList.add("activeBtn");
            annualBtn.classList.remove("activeBtn");
            });

            annualBtn.addEventListener("click", () => {
            annualBtn.classList.add("activeBtn");
            monthlyBtn.classList.remove("activeBtn");
            });

        },
        data(){
            return{
                selectedPlan: '',
                planspan: '',
            }
        },
        // components: {
        //     PlanCard
        // },
        methods: {
            showForm(formId) {
                const forms = document.querySelectorAll(".change-form");

                forms.forEach((form) => {
                    form.style.display = "none";
                });

                const selectedForm = document.getElementById(formId);
                if (selectedForm) {
                    selectedForm.style.display = "block";
                }
                }
            },
        }
</script>