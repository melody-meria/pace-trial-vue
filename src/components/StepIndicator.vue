<script setup>
import { computed } from "vue";


const props = defineProps({
  currentStep: {
    type: Number,
    default: 1
  }
});

const steps = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Contact Info' },
  { id: 3, name: 'ID Documents' }
];

const totalSteps = steps.length;
const progressWidth = computed(() => ((props.currentStep - 1) / (totalSteps - 1)) * 100);
</script>

<template>
  <div class="w-full max-w-4xl mx-auto mb-10 px-4">
    <div class="relative flex justify-between mb-4">
      
      <div class="absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2 z-0 rounded-full"></div>
      
      <div 
        class="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 z-0 transition-all duration-500 rounded-full"
        :style="{ width: progressWidth + '%' }"
      ></div>

      <div v-for="step in steps" :key="step.id" class="relative z-10 flex flex-col items-center">
        <div 
          class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-4 transition-all duration-300 font-bold"
          :class="[
            step.id <= props.currentStep 
              ? 'bg-blue-600 border-white text-white shadow-md' 
              : 'bg-blue-100 border-blue-50 text-blue-400'
          ]"
        >
          {{ step.id }}
        </div>
        
        <div 
          class="absolute top-14 whitespace-nowrap text-xs md:text-sm font-medium transition-colors duration-300"
          :class="step.id <= props.currentStep ? 'text-blue-900' : 'text-blue-400'"
        >
          {{ step.name }}
        </div>
      </div>
    </div>
  </div>
</template>