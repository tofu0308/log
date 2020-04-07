<template>
    <div>
        <slot>default title</slot>
        <hr>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['headerText']
}
</script>>

<style scoped>
    h1 {
        color :red;
    }
</style>