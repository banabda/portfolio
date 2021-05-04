<template>
    <div class="h-full">
        <div v-switch="page" class="h-full">
            <div v-case="0" class="h-full"><MeSectionOne /></div>
            <div v-case="1" class="h-full"><MeSectionTwo /></div>
            <div v-case="2" class="h-full"><MeSectionThree /></div>
            <div v-case="3" class="h-full"><MeSectionThree /></div>
            <div v-case="4" class="h-full"><MeSectionThree /></div>
        </div>
        <!-- <div v-if="page == 0" class="h-full"><MeSectionOne /></div>
        <div v-if="page == 1" class="h-full"><MeSectionTwo /></div>
        <div v-if="page == 2" class="h-full"><MeSectionThree /></div> -->
        <div class="absolute right-0 top-1/2">
            <transition-group
                name="list"
                tag="div"
                class="flex flex-col items-center"
            >
                <div
                    v-for="p in pages"
                    :key="p"
                    class="rounded-full bg-razer-600 mx-2 my-1 list-item"
                    :class="
                        page + 1 == p
                            ? 'h-3 w-3 opacity-90'
                            : page + 1 == p + 1 || page + 1 == p - 1
                            ? 'h-2 w-2 opacity-60'
                            : page + 1 == p + 2 || page + 1 == p - 2
                            ? 'h-1 w-1 opacity-40'
                            : 'hidden'
                    "
                ></div>
            </transition-group>
        </div>
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
            pages: "me/getPageLength",
        }),
    },
};
</script>
<style lang="scss" scoped>
.list-item {
    transition: all 0.5s;
    display: inline-block;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>