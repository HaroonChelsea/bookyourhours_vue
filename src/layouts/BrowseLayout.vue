<template>
  <fragment>
    <Navbar />
    <div class="margin-top-90"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4">
          <div class="sidebar-container">
            <!-- Location -->
            <div class="sidebar-widget">
              <h3>Location</h3>
              <div class="input-with-icon">
                <div id="autocomplete-container">
                  <input
                    id="autocomplete-input"
                    type="text"
                    placeholder="Location"
                  />
                </div>
                <i class="icon-material-outline-location-on"></i>
              </div>
            </div>

            <!-- Category -->
            <div class="sidebar-widget">
              <h3>Category</h3>
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

            <!-- Keywords -->
            <!-- <div class="sidebar-widget">
              <h3>Keywords</h3>
              <div class="keywords-container">
                <div class="keyword-input-container">
                  <input
                    type="text"
                    class="keyword-input"
                    placeholder="e.g. task title"
                  />
                  <button class="keyword-input-button ripple-effect">
                    <i class="icon-material-outline-add"></i>
                  </button>
                </div>
                <div class="keywords-list"> -->
            <!-- keywords go here -->
            <!-- </div> -->
            <!-- <div class="clearfix"></div>
              </div>
            </div> -->

            <!-- Budget -->
            <!-- <div class="sidebar-widget">
              <h3>Fixed Price</h3>
              <div class="margin-top-55"></div> -->

            <!-- Range Slider -->
            <!-- <input
                class="range-slider"
                type="text"
                value=""
                data-slider-currency="$"
                data-slider-min="10"
                data-slider-max="2500"
                data-slider-step="25"
                data-slider-value="[10,2500]"
              /> -->
            <!-- </div> -->

            <!-- Hourly Rate -->
            <!-- <div class="sidebar-widget">
              <h3>Hourly Rate</h3>
              <div class="margin-top-55"></div> -->

            <!-- Range Slider -->
            <!-- <input
                class="range-slider"
                type="text"
                value=""
                data-slider-currency="$"
                data-slider-min="10"
                data-slider-max="150"
                data-slider-step="5"
                data-slider-value="[10,200]"
              />
            </div> -->

            <!-- Tags -->
            <div class="sidebar-widget">
              <h3>Search By Tags</h3>
              <tags-input
                element-id="tags"
                :allow-duplicates="false"
                :only-existing-tags="true"
                v-model="selectedTags"
                :existing-tags="tags"
                :typeahead="true"
              ></tags-input>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <router-view :tags.sync="selectedTags" />
      </div>
    </div>
    <Footer />
  </fragment>
</template>

<script>
import Navbar from "@/components/Navbar";
import VoerroTagsInput from "@voerro/vue-tagsinput";
import Footer from "@/components/Footer";
import { Fragment } from "vue-fragment";
import "@voerro/vue-tagsinput/dist/style.css";

export default {
  components: {
    Navbar,
    "tags-input": VoerroTagsInput,
    Footer,
    Fragment,
  },
  data() {
    return {
      tags: [],
      selectedTags: [],
    };
  },
  mounted() {
    this.$store.dispatch("getAllTags").then((res) => {
      res.data.map((tag) => {
        let refactorTag = {
          key: tag.id,
          value: tag.title,
        };
        this.tags.push(refactorTag);
      });
    });
  },
};
</script>

<style></style>
