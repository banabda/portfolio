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
            <button
                @click="pluspage"
                class="duration-1000 ease-in-out transition-opacity rounded-lg p-4 self-end"
                :class="
                    nextLine.length >= 2
                        ? 'opacity-50 hover:opacity-100'
                        : 'opacity-0'
                "
            >
                NEXT →
            </button>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    methods: {
        ...mapActions({
            addpage: "me/addPage",
        }),
        pluspage() {
            this.addpage();
        },
    },
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