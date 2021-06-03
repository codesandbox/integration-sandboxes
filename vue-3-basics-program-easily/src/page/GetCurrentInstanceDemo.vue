<template>
    <div @mouseover="onMouseover" @mouseout="onMouseleave">
        <h2>Hover Me to hide the Button </h2>
    </div>
    <div>
        <Button id="btn" :label="header"></Button>
    </div>
</template>

<script>
import { ref } from 'vue'
import Button from '../components/ui/Button'
import store from '../components/ui/store';
    export default {
        components: {
            Button
        },
        setup(){
            let header = ref("Hello");
            const onMouseover = () => {
                // Here we can access Button component instance
                // And invoke it's methods using proxy object
                store.getInstance("btn").hide();
            }
            const onMouseleave = () => {
                store.getInstance("btn").show();
            }
            return {
                header,
                onMouseover,
                onMouseleave
            }
        }
       
    }
</script>

<style scoped>

</style>