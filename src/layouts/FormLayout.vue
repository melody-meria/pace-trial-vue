<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import DataPrivacy from '../components/DataPrivacy.vue'
import PersonalInfoForm from '../components/PersonalInfoForm.vue'
import ContactInfoForm from '../components/ContactInfoForm.vue'
import IdentificationForm from '../components/IdentificationForm.vue'
import StepIndicator from '../components/StepIndicator.vue'

const router = useRouter()

const privacyAccepted = ref(false)
const currentStep = ref(0)
const totalSteps = 3

const handleAcceptPrivacy = () => {
  privacyAccepted.value = true
  currentStep.value = 1
}

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  } else {
    router.push('/kiosk-selection') // Redirect to kiosk selection after submission
  }
}
const prevStep = () => {
  if (currentStep.value === 1) {
    privacyAccepted.value = false
  } else if (currentStep.value > 1) {
    currentStep.value--
  }
}

</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white py-12 px-4">
    <div class="max-w-4xl mx-auto">
      
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-black text-blue-900 mb-3 tracking-tight font-sans serif">
          Welcome to the PACe Application!
        </h1>
        <p class="text-blue-500 italic">Please fill out all sections</p>
      </div>

      <StepIndicator v-if="privacyAccepted" :currentStep="currentStep" />

      <div class="mt-12 bg-white p-8 rounded-2xl shadow-xl border border-blue-50">
        <DataPrivacy v-if="!privacyAccepted" @accept="handleAcceptPrivacy" />
        
        <PersonalInfoForm v-else-if="currentStep === 1" />
        
        <ContactInfoForm v-else-if="currentStep === 2" />

        <IdentificationForm v-else-if="currentStep === 3" />
      </div>

      <div class="mt-8 flex items-center justify-between px-2">
        <button 
          v-if="privacyAccepted"
          @click="prevStep"
          :class="[
            'font-medium transition-colors',
            'hover:scale-105 active:scale-95 text-blue-600'
          ]"
        >
          Previous
        </button>

        <button 
          v-if="privacyAccepted"
          @click="nextStep()"
          class="px-10 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200/50 text-white rounded-lg py-3 transition-transform active:scale-95"
        >
          {{ currentStep === totalSteps ? 'Submit' : 'Next Step' }}
        </button>
      </div>
    </div>
  </div>
</template>