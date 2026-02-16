<script setup>
import { ref, computed } from "vue";

const currentStep = ref(1);
const totalSteps = 4; // change according to your steps

// calculate progress percentage
const progressValue = computed(() => (currentStep.value / totalSteps) * 100);
</script>

<template>
  <div class="mb-6">
    <!-- Progress Bar -->
    <div class="relative w-full h-2 bg-blue-100 rounded-full overflow-hidden">
      <div
        class="bg-blue-600 h-full transition-all"
        :style="{ transform: `translateX(-${100 - progressValue}% )` }"
      ></div>
    </div>

    <!-- Step Labels -->
    <div class="flex justify-between text-sm mt-2 text-blue-600 font-medium">
      <span>Step 1</span>
      <span>Step 2</span>
      <span>Step 3</span>
      <span>Step 4</span>
    </div>
  </div>
</template>
