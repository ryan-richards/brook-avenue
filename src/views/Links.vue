<template>
  <div class="section">
    <div class="container">
      <h1 class="title is-2">Useful Links</h1>
      <!-- Center the buttons and set min-width -->
      <div class="is-flex is-justify-content-center">
        <div
          class="buttons is-flex is-flex-direction-column"
          style="min-width: 300px"
        >
          <a
            v-for="(link, index) in links"
            :key="index"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="button is-fullwidth mb-2"
          >
            <span>{{ link.title }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinksList",
  data() {
    return {
      links: [
        {
          title: "Enquire Here",
          url: "https://brookavenue.co.uk/pricing",
        },
        {
          title: "Vote Here",
          url: "https://www.surveymonkey.com/r/The9thNorthernIrelandWeddingAwards2025?fbclid=IwZXh0bgNhZW0CMTEAAR2pNVjD8UG1WgVFOqVMjc46p2j2supcdoyk0fktPTf6MhCVcEvRUyIxJ4o_aem_7GVESFncsa8r4-gTFk8_ww",
        },
        {
          title: "Mini Pancake Cart",
          url: "https://thepancakecart.com",
        },
        {
          title: "Candy & Crisp Wall",
          url: "https://thepancakecart.com/pricing",
        },
        {
          title: "Leave us a 5⭐️ Review",
          url: "https://g.page/r/CWBQn1aRT_UOEBM/review",
        },
        {
          title: "Website",
          url: "https://brookavenue.co.uk",
        },
      ],
    };
  },
};
</script>

<style scoped>
.button {
  color: whitesmoke;
  background-color: rgb(119, 139, 121);
}
</style>
