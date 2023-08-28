<template>
    <div class="row gx-5 g-4 price-row col-lg-12">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col-lg-4 line"
        @mouseenter="handleCardMouseEnter(index)"
        @mouseleave="handleCardMouseLeave"
        :style="{ filter: card.blurred ? 'blur(5px)' : 'none' }"
      >
        <div v-html="card.html" class="float-card border-radius custom-section-bg"></div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {html: `
                <div class='pricing p-5 note'>
                    <h4>Basic Plan</h4>
                    <p>The Basic Plan is the simplest of all plans.</p>
                    <p>₦<strong  class='amount'>999.99</strong>/mo</p>
                    <a class='btn custom-btn-bg btn-sm px-2 py-2 subscribe' href="/subscribe?plan=basic">Subscribe Now</a>
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
        ` },
        {html: `
                <div class="pricing p-5 note">
                    <h4>Pro Plan</h4>
                    <p>The Pro Plan than the basic plan. Much better.</p>
                    <p>₦<strong  class="amount">999.99</strong>/mo</p>
                    <a class='btn custom-btn-bg btn-sm px-2 py-2 subscribe' href="/subscribe?plan=pro">Subscribe Now</a>
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
        `},
        {html:`
                <div class="pricing p-5 note">
                      <h4>Pro Max Plan</h4>
                      <p>The Pro Plan than the basic plan. Much better.</p>
                      <p>₦<strong  class="amount">999.99</strong>/mo</p>
                      <a class='btn custom-btn-bg btn-sm px-2 py-2 subscribe' href="/subscribe?plan=promax">Subscribe Now</a>
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
        `},
        
      ]
    };
  },
  methods: {
    handleCardMouseEnter(index) {
      this.cards.forEach((card, i) => {
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
