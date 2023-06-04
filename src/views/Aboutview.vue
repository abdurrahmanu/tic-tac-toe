<template>
    <div class="min-h-screen bg-teal-100">
        <div @click="goBack" class="p-3 text-2xl w-fit bg-green-400 text-white">BACK</div>
        <p class="text-4xl font-thin text-center p-7">ABOUT PAGE</p>
        <div class="text-2xl w-[90%] m-auto text-center rounded-md bg-teal-400 font-bold font-mono p-4">
            This is a tic-tac-toe game created by Ahmed Abdulrahman Dorayi
            <p class="font-medium text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit veritatis mollitia, cupiditate debitis fuga dolorum vero impedit incidunt modi amet dicta voluptas natus similique, culpa consectetur assumenda dolores? Minus error voluptatibus culpa consequatur saepe soluta rem accusamus enim ipsam! Autem dicta dolorum illum iusto nam nobis pariatur esse similique doloremque qui perferendis culpa repellendus </p>
        </div>
    </div>
</template>

<script setup>
const goBack = () => window.history.back()

</script>

<style lang="scss" scoped>

</style>