<script>
export default {
  props: {
    projectHead: {
      projectInfo: Array,
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
          <h3 class="text-muted">About</h3>
          <p>
            CRUX offers web design, web development, illustration, and graphic
            design services managed by our senior designer / developer Dathan
            Cruz
          </p>
        </div>
        <div class="col-lg-3">
          <h3 class="text-muted">Client</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            modi dignissimos vitae sapiente voluptates, itaque adipisci
            voluptate quia maiores nemo expedita et rem asperiores fuga ipsa
            recusandae saepe delectus quibusdam!
          </p>
        </div>
        <div class="col-lg-3">
          <h3 class="text-muted">Contact</h3>
          <p>
            If you have a scheduling inquiry for our creative services or would
            wish to chat for an upcoming project need, please contact us at
            <a href="mailto:">changethisemailaddress@email.com</a>
          </p>
        </div>
        <div class="col-lg-3">
          <h3 class="text-muted">Test</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium quidem at earum eligendi a dolores atque expedita
            debitis commodi rem consequatur, porro rerum architecto quaerat
            facere libero? Quisquam, similique repudiandae!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
