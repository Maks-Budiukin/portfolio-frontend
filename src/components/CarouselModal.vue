<template>
    <DialogModal :open="open" @close="$emit('update:open', false)">
        <template #modal-content>
            <div class="flex flex-col lg:flex-row lg:justify-between gap-3 min-h-[35vh] md:min-h-[25vh] relative">
                <img :src="currentImage" alt="screenshot">


            </div>
        </template>
    </DialogModal>
</template>

<script setup>
import DialogModal from './DialogModal.vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    currentImage: {
        type: String,
        required: true,
    },
    index: {
        type: Number,
        required: true
    }
})

// eslint-disable-next-line no-unused-vars
const emit = defineEmits([
    'update:open', 'update:index'
])

// const changeIndex = (idx) => {
//     if (idx > props.images.length - 1) {
//         emit('update:index', 0)
//     }
//     else if (idx < 0) {
//         emit('update:index', props.images.length - 1)
//     }
//     else {
//         emit('update:index', idx)
//     }
// }

</script>

<style lang="scss" scoped></style>