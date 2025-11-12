<!-- 
    The settings of our component
-->
<script setup>
    // import ref 
    // Why use ref? If the value in ref is going to change, automatically the template will rerender
    import { ref } from 'vue'

    // Props - come from your parent component READ ONLY INFORMATION
    defineProps({
        counterName: String,
        initialValue: Number
    })

    // Data  - is internal data that is been used
    let counterValue = ref(0);
    let disableDecrementButton = ref(true);
    let showDescription = ref(true);

    // Methods 
    const disableDecrementLogic = () => {
        if (counterValue.value <= 0) {
            disableDecrementButton.value = true;
        } else {
            disableDecrementButton.value = false;
        }
    }
    const increment = () => {
        counterValue.value += 1;
        disableDecrementLogic();
    }

    const decrement = () => {
        counterValue.value -= 1
        disableDecrementLogic();
    }

    const toggleDescription = () => {
        showDescription.value = !showDescription.value;
    }
</script>

<!-- 
    What the user will see
-->
<template>
    <div>
        <h2>
            {{  counterName }}
        </h2>

        <p v-if="showDescription">
            Has a value of {{ counterValue }} {{ initialValue }}
        </p>

        <button @click="increment">
            Add 1
        </button>

        <button @click="decrement" :disabled="disableDecrementButton">
            Minus 1
        </button>

        <button @click="toggleDescription">
            Toggle description
        </button>
    </div>
</template>
