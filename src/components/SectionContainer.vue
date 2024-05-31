<template>
    <section ref="id" class="scroll-mt-12 ">
        <div class="w-full px-5 md:px-6 lg:w-[1000px] xl:w-[1240px] 2xl:w-[1520px]">

            <slot />

        </div>
    </section>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    id: {
        type: Object || null,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>