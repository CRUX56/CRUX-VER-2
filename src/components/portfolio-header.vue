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
  <section class="section bg-light">
    <div class="container">
      <div class="row align-items-top">
        <div class="col-lg-3">
          <h4 class="text-muted">Project</h4>
          <hr />
          <p>{{ projectHead[0].projectTitle }}</p>
        </div>
        <div class="col-lg-3">
          <h4 class="text-muted">Client</h4>
          <hr />
          <p>{{ projectHead[0].projectClient }}</p>
        </div>
        <div class="col-lg-3">
          <h4 class="text-muted">Category</h4>
          <hr />
          <p>{{ projectHead[0].projectCategory }}</p>
        </div>
        <div class="col-lg-3">
          <h4 class="text-muted">Synopsis</h4>
          <hr />
          <p>
            {{ projectHead[0].projectSynopsis }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
