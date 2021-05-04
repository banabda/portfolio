<template>
    <div class="h-full">
        <!-- <div v-switch="page" class="h-full">
            <div v-case="0" class="h-full"><MeSectionOne /></div>
            <div v-case="1" class="h-full"><MeSectionTwo /></div>
            <div v-case="2" class="h-full"><MeSectionThree /></div>
        </div> -->
        <div v-if="page == 0" class="h-full"><MeSectionOne /></div>
        <div v-if="page == 1" class="h-full"><MeSectionTwo /></div>
        <div v-if="page == 2" class="h-full"><MeSectionThree /></div>
    </div>
</template>
<script>
import MeSectionOne from "../components/mePage/MeSectionOne";
import MeSectionTwo from "../components/mePage/MeSectionTwo";
import MeSectionThree from "../components/mePage/MeSectionThree";
import { mapGetters } from "vuex";
export default {
    components: { MeSectionOne, MeSectionTwo, MeSectionThree },
    data: () => ({}),
    computed: {
        ...mapGetters({
            page: "me/getPage",
        }),
    },
};
</script>