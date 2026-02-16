<script setup>
import PersonalInfoForm from '../components/PersonalInfoForm.vue'
import StepIndicator from '../components/StepIndicator.vue'
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-4xl mx-auto">
      
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-black text-blue-900 mb-3 tracking-tight font-serif">
          Information Form
        </h1>
        <p class="text-blue-500 italic mb-6">
          Please fill out all sections with your information
        </p>
      </div>

      <!-- Step Indicator -->
      <StepIndicator />

      <!-- Form -->
      <div class="mt-8">
        <PersonalInfoForm />
      </div>

      <!-- Buttons -->
      <div class="mt-8 flex items-center justify-between px-2">
        <button class="text-blue-400 hover:text-blue-600 font-medium">Previous</button>
        <button class="px-10 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200/50 text-white rounded-lg py-3">
          Next Step
        </button>
      </div>
    </div>
  </div>
</template>
