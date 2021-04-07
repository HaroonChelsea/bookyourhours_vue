<template>
  <!-- Dashboard Content
	================================================== -->
  <div class="dashboard-content-container" data-simplebar>
    <div class="dashboard-content-inner">
      <!-- Dashboard Headline -->
      <div class="dashboard-headline">
        <h3>Post a Job</h3>

        <!-- Breadcrumbs -->
        <nav id="breadcrumbs" class="dark">
          <ul>
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li>
              <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
            </li>
            <li>Post a Job</li>
          </ul>
        </nav>
      </div>

      <!-- Row -->
      <div class="row">
        <!-- Dashboard Box -->
        <div class="col-xl-12">
          <div class="dashboard-box margin-top-0">
            <!-- Headline -->
            <div class="headline">
              <h3>
                <i class="icon-feather-folder-plus"></i> Job Submission Form
              </h3>
            </div>

            <div class="content with-padding padding-bottom-10">
              <div class="row">
                <div class="col-xl-4">
                  <div class="submit-field">
                    <h5>Job Title</h5>
                    <input v-model="title" type="text" class="with-border" />
                    <small v-if="error.title.status" class="error">
                      {{ error.title.message }}
                    </small>
                  </div>
                </div>

                <div class="col-xl-4">
                  <div class="submit-field">
                    <h5>Job Type</h5>
                    <div class="feedback-yes-no margin-top-0">
                      <div class="radio">
                        <input
                          v-model="jobType"
                          id="radio-1"
                          value="fixed"
                          name="radio"
                          type="radio"
                          checked
                        />
                        <label for="radio-1"
                          ><span class="radio-label"></span> Fixed Price
                          Job</label
                        >
                      </div>

                      <div class="radio">
                        <input
                          v-model="jobType"
                          value="hourly"
                          id="radio-2"
                          name="radio"
                          type="radio"
                        />
                        <label for="radio-2"
                          ><span class="radio-label"></span> Hourly Job</label
                        >
                      </div>
                    </div>
                    <small v-if="error.jobType.status" class="error">
                      {{ error.jobType.message }}
                    </small>
                  </div>
                </div>

                <div class="col-xl-4">
                  <div class="submit-field">
                    <h5>Salary</h5>
                    <div class="row">
                      <div class="col">
                        <div class="input-with-icon">
                          <input
                            v-model="price"
                            class="with-border"
                            type="text"
                            placeholder="Price"
                          />
                          <i class="currency">USD</i>
                        </div>
                        <small v-if="error.price.status" class="error">
                          {{ error.price.message }}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4">
                  <div class="submit-field">
                    <h5>
                      Tags
                      <i
                        class="help-icon"
                        data-tippy-placement="right"
                        title="Maximum of 5 tags"
                      ></i>
                    </h5>
                    <div class="keywords-container">
                      <div class="keyword-input-container">
                        <vue-tags-input
                          v-model="tag"
                          v-bind:max-tags="5"
                          placeholder="e.g. job title, responsibilites"
                          :tags="tags"
                          @tags-changed="(newTags) => (tags = newTags)"
                        />
                      </div>
                      <small v-if="error.tags.status" class="error">
                        {{ error.tags.message }}
                      </small>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="submit-field">
                    <h5>
                      Add Questions?
                      <i
                        class="help-icon"
                        data-tippy-placement="right"
                        title="Maximum of 3 Questions"
                      ></i>
                    </h5>

                    <div class="keywords-container">
                      <div class="keyword-input-container">
                        <vue-tags-input
                          v-model="question"
                          :tags="questions"
                          v-bind:max-tags="3"
                          @tags-changed="
                            (newQuestions) => (questions = newQuestions)
                          "
                        />
                      </div>

                      <small v-if="error.questions.status" class="error">
                        {{ error.questions.message }}
                      </small>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="submit-field">
                    <h5>Time Required</h5>
                    <input
                      v-model="time"
                      type="text"
                      class="with-border"
                      placeholder="3 hrs , days , months"
                    />
                    <small v-if="error.time.status" class="error">
                      {{ error.time.message }}
                    </small>
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="submit-field">
                    <h5>Job Description</h5>
                    <textarea
                      v-model="description"
                      cols="30"
                      rows="5"
                      class="with-border"
                    ></textarea>
                    <small v-if="error.description.status" class="error">
                      {{ error.description.message }}
                    </small>
                    <!-- <div class="uploadButton margin-top-30">
                      <input
                        class="uploadButton-input"
                        type="file"
                        accept="image/*, application/pdf"
                        id="upload"
                        multiple
                      />
                      <label
                        class="uploadButton-button ripple-effect"
                        for="upload"
                        >Upload Files</label
                      >
                      <span class="uploadButton-file-name"
                        >Images or documents that might be helpful in describing
                        your job</span
                      >
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="error.response.status" class="notification error closeable">
          <p>{{ error.response.message }}</p>
          <a
            class="close"
            @click="error.response.status = !error.response.status"
          ></a>
        </div>
        <div class="col-xl-12">
          <button
            @click="postJob"
            class="button ripple-effect big margin-top-30"
          >
            <div v-if="isLoading" class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div v-else><i class="icon-feather-plus"></i> Post a Job</div>
          </button>
        </div>
      </div>
      <!-- Row / End -->

      <!-- Footer -->
      <div class="dashboard-footer-spacer"></div>
      <div class="small-footer margin-top-15">
        <div class="small-footer-copyrights">
          © 2019 <strong>Hireo</strong>. All Rights Reserved.
        </div>
        <ul class="footer-social-links">
          <li>
            <a href="#" title="Facebook" data-tippy-placement="top">
              <i class="icon-brand-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Twitter" data-tippy-placement="top">
              <i class="icon-brand-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Google Plus" data-tippy-placement="top">
              <i class="icon-brand-google-plus-g"></i>
            </a>
          </li>
          <li>
            <a href="#" title="LinkedIn" data-tippy-placement="top">
              <i class="icon-brand-linkedin-in"></i>
            </a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <!-- Footer / End -->
    </div>
  </div>
  <!-- Dashboard Content / End -->
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
export default {
  components: {
    VueTagsInput,
  },
  name: "JobPost",
  mounted() {
    if (!document.getElementById("customJs")) {
      let customScript = document.createElement("script");
      customScript.setAttribute("src", "/assets/js/custom.js");
      customScript.setAttribute("type", "text/javascript");
      customScript.setAttribute("id", "customJs");
      document.body.appendChild(customScript);
    } else {
      let customScript = document.getElementById("customJs");
      document.body.removeChild(customScript);
      document.body.removeChild(document.getElementById("backtotop"));
      customScript = document.createElement("script");
      customScript.setAttribute("src", "/assets/js/custom.js");
      customScript.setAttribute("type", "text/javascript");
      customScript.setAttribute("id", "customJs");
      document.body.appendChild(customScript);
    }
  },
  data() {
    return {
      isLoading: false,
      title: null,
      description: null,
      price: null,
      currency: "USD",
      jobType: null,
      tag: "",
      tags: [],
      question: "",
      questions: [],
      time: null,
      error: {
        title: {
          status: false,
          message: "",
        },
        description: {
          status: false,
          message: "",
        },
        price: {
          status: false,
          message: "",
        },
        jobType: {
          status: false,
          message: "",
        },
        tags: {
          status: false,
          message: "",
        },
        questions: {
          status: false,
          message: "",
        },
        time: {
          status: false,
          message: "",
        },
        response: {
          status: false,
          message: "",
        },
      },
    };
  },
  methods: {
    postJob() {
      if (this.validateForm()) {
        this.isLoading = true;
        this.$store
          .dispatch("postJob", {
            title: this.title,
            description: this.description,
            price: Number.parseInt(this.price),
            currency: "USD",
            jobType: this.jobType,
            tags: this.tags.map((tag) => tag.text),
            questions: this.questions.map((quest) => quest.text),
            time: this.time,
          })
          .then(() => {
            this.title = null;
            this.description = null;
            this.price = null;
            this.questions = [];
            this.tags = [];
            this.jobType = null;
            this.time = null;
            this.isLoading = false;
          })
          .catch((err) => {
            this.error.response.status = true;
            this.error.response.message = err.response.data.message
              ? err.response.data.message
              : "Something went wrong!";
            this.isLoading = false;
          });
      }
    },
    validateForm() {
      if (
        this.title &&
        this.description &&
        this.price &&
        this.tags.length !== 0 &&
        this.jobType &&
        this.time
      ) {
        this.error.title.status = false;
        this.error.description.status = false;
        this.error.price.status = false;
        this.error.tags.status = false;
        this.error.jobType.status = false;
        this.error.time.status = false;
        return true;
      }
      if (!this.title) {
        this.error.title.status = true;
        this.error.title.message = "Title is required!";
      }
      if (!this.description) {
        this.error.description.status = true;
        this.error.description.message = "Description is required!";
      }
      if (!this.price) {
        this.error.price.status = true;
        this.error.price.message = "Price is required!";
      }
      if (this.tags.length === 0) {
        this.error.tags.status = true;
        this.error.tags.message = "Tags is required!";
      }
      if (!this.jobType) {
        this.error.jobType.status = true;
        this.error.jobType.message = "Job type is required!";
      }
      if (!this.time) {
        this.error.time.status = true;
        this.error.time.message = "Time period is required!";
      }
      setTimeout(() => {
        this.error.title.status = false;
        this.error.description.status = false;
        this.error.price.status = false;
        this.error.tags.status = false;
        this.error.jobType.status = false;
        this.error.time.status = false;
      }, 5000);
    },
  },
};
</script>

<style>
.error {
  color: red;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
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
.ti-tag {
  background-color: rgba(42, 65, 232, 0.07) !important;
  color: #2a41e8 !important;
}
.ti-new-tag-input {
  padding: 0px 10px !important;
}
</style>
