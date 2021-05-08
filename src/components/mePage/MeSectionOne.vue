<template>
    <div class="h-full">
        <div class="h-full items-center justify-center flex">
            <div class="text-5xl font-extralight tracking-tight">
                <div class="mb-6">
                    <vue-typed-js
                        :strings="[
                            `My name is <span class='font-bold tracking-normal'>Bagas Nabil Dhiaafif</span>`,
                        ]"
                        @onComplete="nextLine.push(1)"
                        :contentType="'html'"
                    >
                        <h1 class="typing"></h1>
                    </vue-typed-js>
                </div>
                <div class="text-4xl" v-if="nextLine.length >= 1">
                    <vue-typed-js
                        class="justify-end"
                        :strings="[
                            `I was born on <span class='font-bold tracking-normal'>3rd November</span> 1997`,
                        ]"
                        @onComplete="nextLine.push(1)"
                        :contentType="'html'"
                    >
                        <h1 class="typing"></h1>
                    </vue-typed-js>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data: () => ({
        nextLine: [],
    }),
    computed: {
        ...mapGetters({
            pages: "me/getPageLength",
            page: "me/getPage",
        }),
    },
};
</script>