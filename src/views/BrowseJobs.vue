<template>
  <div class="col-xl-9 col-lg-8 content-left-offset">
    <h3 class="page-title">Search Results</h3>

    <div class="notify-box margin-top-15">
      <div class="switch-container">
        <label class="switch"
          ><input type="checkbox" /><span class="switch-button"></span
          ><span class="switch-text"
            >Turn on email alerts for this search</span
          ></label
        >
      </div>

      <div class="sort-by">
        <span>Sort by:</span>
        <select class="selectpicker hide-tick">
          <option>Relevance</option>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Random</option>
        </select>
      </div>
    </div>

    <!-- Tasks Container -->
    <div class="tasks-list-container compact-list margin-top-35">
      <!-- Task -->
      <fragment v-for="job in jobs" :key="job.id"
        ><router-link :to="{ path: '/job/' + job.id }" class="task-listing">
          <!-- Job Listing Details -->
          <div class="task-listing-details">
            <!-- Details -->
            <div class="task-listing-description">
              <h3 class="task-listing-title">{{ job.title }}</h3>
              <ul class="task-icons">
                <li>
                  <i class="icon-material-outline-location-on"></i>
                  {{ job.type }}
                </li>
                <li>
                  <i class="icon-material-outline-access-time"></i>
                  {{ job.time }}
                </li>
              </ul>
              <p
                v-html="$options.filters.truncate(job.description)"
                class="task-listing-text"
              ></p>
              <div class="task-tags">
                <span v-for="tag in job.tags" :key="tag.id">{{
                  tag.title
                }}</span>
              </div>
            </div>
          </div>

          <div class="task-listing-bid">
            <div class="task-listing-bid-inner">
              <div class="task-offers">
                <strong>${{ job.price }}</strong>
                <span>Fixed Price</span>
              </div>
              <span class="button button-sliding-icon ripple-effect"
                >Bid Now <i class="icon-material-outline-arrow-right-alt"></i
              ></span>
            </div>
          </div>
        </router-link>
      </fragment>
    </div>
    <!-- Tasks Container / End -->

    <!-- Pagination -->
    <div class="clearfix"></div>
    <div class="row">
      <div class="col-md-12">
        <!-- Pagination -->
        <div class="pagination-container margin-top-60 margin-bottom-60">
          <nav class="pagination">
            <ul>
              <li class="pagination-arrow">
                <a href="#" class="ripple-effect"
                  ><i class="icon-material-outline-keyboard-arrow-left"></i
                ></a>
              </li>
              <li><a href="#" class="ripple-effect">1</a></li>
              <li><a href="#" class="current-page ripple-effect">2</a></li>
              <li><a href="#" class="ripple-effect">3</a></li>
              <li><a href="#" class="ripple-effect">4</a></li>
              <li class="pagination-arrow">
                <a href="#" class="ripple-effect"
                  ><i class="icon-material-outline-keyboard-arrow-right"></i
                ></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <!-- Pagination / End -->
  </div>
</template>

<script>
import { Fragment } from "vue-fragment";
export default {
  components: {
    Fragment,
  },
  data() {
    return {
      jobs: null,
    };
  },
  filters: {
    truncate: function (text) {
      if (text.length > 30) {
        return text.substring(0, 30) + "...";
      } else {
        return text;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getAllJobs").then((res) => {
      this.jobs = res.data.results;
    });
  },
};
</script>
