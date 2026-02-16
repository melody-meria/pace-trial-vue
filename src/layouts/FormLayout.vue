<script setup>
import { ref } from 'vue'
import PersonalInfoForm from '../components/PersonalInfoForm.vue'
import ContactInfoForm from '../components/ContactInfoForm.vue'
import StepIndicator from '../components/StepIndicator.vue'

const currentStep = ref(1)
const totalSteps = 3 // Changed to 3

const nextStep = () => {
  if (currentStep.value < totalSteps) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-4xl mx-auto">
      
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-black text-blue-900 mb-3 tracking-tight font-serif">
          Information Form
        </h1>
        <p class="text-blue-500 italic mb-6">
          Please fill out all sections with your information
        </p>
      </div>

      <StepIndicator :currentStep="currentStep" />

      <div class="mt-8 bg-white p-8 rounded-2xl shadow-xl border border-blue-50">
        <PersonalInfoForm v-if="currentStep === 1" />
        
        <ContactInfoForm v-else-if="currentStep === 2" />

        <div v-else-if="currentStep === 3" class="py-20 text-center">
          <h2 class="text-2xl text-blue-900 font-bold">Step 3: Final Review</h2>
          <p class="text-gray-500 mt-2">Ready to submit your information.</p>
        </div>
      </div>

      <div class="mt-8 flex items-center justify-between px-2">
        <button 
          @click="prevStep"
          :class="[
            'font-medium transition-colors',
            currentStep === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-400 hover:text-blue-600'
          ]"
          :disabled="currentStep === 1"
        >
          Previous
        </button>

        <button 
          @click="nextStep"
          class="px-10 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200/50 text-white rounded-lg py-3 transition-transform active:scale-95"
        >
          {{ currentStep === totalSteps ? 'Submit' : 'Next Step' }}
        </button>
      </div>
    </div>
  </div>
</template>