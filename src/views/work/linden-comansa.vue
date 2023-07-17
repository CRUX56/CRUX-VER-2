<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
    components: {
        Navbar, Footer
    },
    data() {
        return {
            navbarcolor: true
        };
    }
};
</script>

<template>
    <div>
        <Navbar :navbarcolor="this.navbarcolor" />
        <div v-scroll-spy>
            <Footer />
        </div>
    </div>
</template>