<template>
  <div>
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="float-card"
      @mouseenter="handleCardMouseEnter(index)"
      @mouseleave="handleCardMouseLeave"
      :style="{ filter: card.blurred ? 'blur(10px)' : 'none' }"
    >
      <div v-html="card.html"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {html: `
        <div class='col-lg-4 col-md-12 align-items-center line'>
            <div class='float-card border-radius custom-section-bg'>
                <div class='pricing p-5 note'>
                    <h4>Basic Plan</h4>
                    <p>The Basic Plan is the simplest of all plans.</p>
                    <p>₦<strong  class='amount'>999.99</strong>/mo</p>
                    <a class='btn custom-btn-bg btn-sm px-2 py-2 subscribe' href='/subscribe'>Subscribe Now</a>
                    <ul class='p-0 mb-5'>
                        <li>
                            <span class='icon'>&#10004</span>
                            Lorem ipsum dolor, sit amet 
                        </li>
                        <li>
                            <span class='icon'>&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                        <li>
                            <span class='icon'>&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                        <li>
                            <span class='icon'>&#10004</span>
                            Lorem ipsum dolor, sit amet 
                        </li>
                        <li>
                            <span class='icon'>&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                        <li>
                            <span class='icon'>&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                        <li>
                            <span class='icon'>&#10004</span>
                            Lorem ipsum dolor, sit amet 
                        </li>
                        <li>
                            <span class='icon'>&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                    </ul>
                    <p>See all feature</p>
                </div>
            </div>
        </div>
        ` },
        {html: `
        <div class="col-lg-4 col-md-12 line">
            <div class="float-card border-radius custom-section-bg">
                <div class="pricing p-5 note">
                    <h4>Pro Plan</h4>
                    <p>The Pro Plan than the basic plan. Much better.</p>
                    <p>₦<strong  class="amount">999.99</strong>/mo</p>
                    <a class="btn custom-btn-bg btn-sm px-2 py-2" href="/subscribe">Subscribe Now</a>
                    <ul class="p-0 mb-5">
                        <li>Includes Basic Plan plus:</li>
                        <li>
                            <span class="icon">&#10004</span>
                            Lorem ipsum dolor, sit amet 
                        </li>
                        <li>
                            <span class="icon">&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                        <li>
                            <span class="icon">&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                        <li>
                            <span class="icon">&#10004</span>
                            Lorem ipsum dolor, sit amet 
                        </li>
                        <li>
                            <span class="icon">&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                        <li>
                            <span class="icon">&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                        <li>
                            <span class="icon">&#10004</span>
                            Lorem ipsum dolor, sit amet 
                        </li>
                        <li>
                            <span class="icon">&#10004</span>
                            Lorem ipsum dolor, sit amet
                        </li>
                    </ul>
                    <p>See all feature</p>
                </div>
            </div>
        </div>
        `},
        {html:`
          <div class="col-lg-4 col-md-12 line">
              <div class="note">
                  <div class="float-card custom-section-bg border-radius pricing p-5 ">
                      <h4>Pro Max Plan</h4>
                      <p>The Pro Plan than the basic plan. Much better.</p>
                      <p>₦<strong  class="amount">999.99</strong>/mo</p>
                      <a class="btn custom-btn-bg btn-sm px-2 py-2" href="/subscribe">Subscribe Now</a>
                      <ul class="p-0 mb-5">
                          <li>Includes Basic Plan plus:</li>
                          <li>
                              <span class="icon">&#10004</span>
                              Lorem ipsum dolor, sit amet 
                          </li>
                          <li>
                              <span class="icon">&#10004</span>
                              Lorem ipsum dolor, sit amet
                          </li>
                          <li>
                              <span class="icon">&#10004</span>
                              Lorem ipsum dolor, sit amet
                          </li>
                          <li>
                              <span class="icon">&#10004</span>
                              Lorem ipsum dolor, sit amet 
                          </li>
                          <li>
                              <span class="icon">&#10004</span>
                              Lorem ipsum dolor, sit amet
                          </li>
                          <li>
                              <span class="icon">&#10004</span>
                              Lorem ipsum dolor, sit amet
                          </li>
                          <li>
                              <span class="icon">&#10004</span>
                              Lorem ipsum dolor, sit amet 
                          </li>
                          <li>
                              <span class="icon">&#10004</span>
                              Lorem ipsum dolor, sit amet
                          </li>
                      </ul>
                      <p>See all feature</p>
                  </div>
              </div>
          </div>
        `},
        
      ]
    };
  },
  methods: {
    handleCardMouseEnter(index) {
      this.cards.forEach((card, i) => {
        // if (i !== index){
        //   card.blurred = true;
        //   card.style.background='#000';
        // }
        card.blurred = i !== index;
      });
    },
    handleCardMouseLeave() {
      this.cards.forEach(card => {
        card.blurred = false;
      });
    }
  }
};
</script>
