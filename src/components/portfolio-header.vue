<script>
export default {
  props: {
    projectHead: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3">
          <h3 class="text-muted">{{ projectHead[0].projectTitle }}</h3>
        </div>
        <div class="col-lg-3">
          <h3 class="text-muted">{{ projectHead[0].projectClient }}</h3>
        </div>
        <div class="col-lg-3">
          <h3 class="text-muted">Category</h3>
          <p>{{ projectHead[0].projectCategory }}</p>
        </div>
        <div class="col-lg-3">
          <h3 class="text-muted">Synopsis</h3>
          <p>
            {{ projectHead[0].projectSynopsis }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
