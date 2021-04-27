<template>
  <div
    class="intro-banner dark-overlay"
    data-background-image="/assets/images/home-background-02.jpg"
  >
    <div class="transparent-header-spacer"></div>

    <div class="container">
      <!-- Intro Headline -->
      <div class="row">
        <div class="col-md-12">
          <div class="banner-headline">
            <h3>
              <strong>Hire experts freelancers for any job, any time.</strong>
              <br />
              <span
                >Huge community of designers, developers and creatives ready for
                your project.</span
              >
            </h3>
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="row">
        <div class="col-md-12">
          <div class="intro-banner-search-form margin-top-95">
            <!-- Search Field -->
            <div class="intro-search-field with-autocomplete">
              <label for="autocomplete-input" class="field-title ripple-effect"
                >Where?</label
              >
              <div class="input-with-icon">
                <input
                  id="autocomplete-input"
                  type="text"
                  placeholder="Online Job"
                />
                <i class="icon-material-outline-location-on"></i>
              </div>
            </div>

            <!-- Search Field -->
            <div class="intro-search-field">
              <label for="intro-keywords" class="field-title ripple-effect"
                >What you need done?</label
              >
              <input
                id="intro-keywords"
                type="text"
                placeholder="e.g. build me a website"
              />
            </div>

            <!-- Search Field -->
            <div class="intro-search-field">
              <select
                class="selectpicker default"
                multiple
                data-selected-text-format="count"
                data-size="7"
                title="All Categories"
              >
                <option>Admin Support</option>
                <option>Customer Service</option>
                <option>Data Analytics</option>
                <option>Design & Creative</option>
                <option>Legal</option>
                <option>Software Developing</option>
                <option>IT & Networking</option>
                <option>Writing</option>
                <option>Translation</option>
                <option>Sales & Marketing</option>
              </select>
            </div>

            <!-- Button -->
            <div class="intro-search-button">
              <button
                class="button ripple-effect"
                onclick="window.location.href='freelancers-grid-layout-full-page.html'"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="row">
        <div class="col-md-12">
          <ul class="intro-stats margin-top-45 hide-under-992px">
            <li>
              <strong class="counter">1,586</strong>
              <span>Jobs Posted</span>
            </li>
            <li>
              <strong class="counter">3,543</strong>
              <span>Tasks Posted</span>
            </li>
            <li>
              <strong class="counter">1,232</strong>
              <span>Freelancers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header_Freelancer",
};
</script>
