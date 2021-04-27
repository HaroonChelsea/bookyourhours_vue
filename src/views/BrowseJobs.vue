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
        <button
          class="button button-sliding-icon ripple-effect"
          @click="getAllJobs('asc')"
        >
          Ascending
        </button>
        <button
          class="button button-sliding-icon ripple-effect"
          @click="getAllJobs('desc')"
        >
          Desending
        </button>
      </div>
    </div>

    <!-- Tasks Container -->
    <div v-if="jobs" class="tasks-list-container compact-list margin-top-35">
      <!-- Task -->
      <router-link
        v-for="job in jobs"
        :key="job.id"
        :to="{ path: '/job/' + job.id }"
        class="task-listing"
      >
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
              <span v-for="tag in job.tags" :key="tag.id">{{ tag.title }}</span>
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
    </div>
    <div v-else class="main">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
// import VueTagsInput from "@johmun/vue-tags-input";

export default {
  props: ["tags"],
  data() {
    return {
      filterTags: [],
      jobs: null,
    };
  },
  watch: {
    tags: function (newTags) {
      this.filterTags = [];
      newTags.map((tag) => {
        this.filterTags.push(tag.key);
      });
      this.getAllJobs("asc");
    },
  },
  methods: {
    getAllJobs(sortBy) {
      this.jobs = null;
      this.$store
        .dispatch("getAllJobs", {
          [sortBy]: true,
          tags: this.filterTags,
        })
        .then((res) => {
          this.jobs = res.data.results;
        });
    },
  },
  filters: {
    truncate: function (text) {
      if (text.length > 100) {
        return text.substring(0, 100) + "...";
      } else {
        return text;
      }
    },
  },
  mounted() {
    this.getAllJobs("asc");
  },
};
</script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #2a41e8;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #2a41e8 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.main {
  width: 100%;
  display: grid;
  place-items: center;
}
</style>
