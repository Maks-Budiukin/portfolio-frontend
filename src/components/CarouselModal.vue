<template>
    <DialogModal :open="open" @close="$emit('update:open', false)">
        <template #modal-content>

            <div class="relative w-[90vw]">
                <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 flex  h-full absolute top-0 left-0 bottom-0 w-[10vw] z-[22]"
                    @click="changeIndex(index - 1)">
                    <div
                        class="flex justify-start items-center bg-gradient-to-r from-[#00000080] to-transparent h-full p-3">
                        <ArrowRight size="40" class="rotate-180" />
                    </div>
                </div>

                <img :src="currentImage" alt="screenshot" class="w-full">

                <div class="cursor-pointer fill-[#FFFFFF] hover:fill-[#F0BF6C] duration-300 h-full absolute top-0 right-0 bottom-0 w-[10vw] z-[22]"
                    @click="changeIndex(index + 1)">
                    <div
                        class="flex justify-end items-center bg-gradient-to-r from-transparent to-[#00000080] h-full p-3">
                        <ArrowRight size="40" />
                    </div>
                </div>
            </div>
        </template>
    </DialogModal>
</template>

<script setup>
import DialogModal from './DialogModal.vue'
import ArrowRight from './icons/ArrowRight.vue'
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

const changeIndex = (idx) => {
    if (idx > props.images.length - 1) {
        emit('update:index', 0)
    }
    else if (idx < 0) {
        emit('update:index', props.images.length - 1)
    }
    else {
        emit('update:index', idx)
    }
}

</script>

<style lang="scss" scoped></style>