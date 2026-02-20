<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSelection = (service: 'help-desk' | 'assistance-desk') => {
  router.push({ 
    name: 'ServiceForm', 
    params: { type: service } 
  });
};

const handleCancel = () => {
  router.push({ 
    name: 'Home' 
  });
};
</script>

<template>
  <div class="max-w-6xl mx-auto p-4">
    <div class="text-center mb-12">
      <div class="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
        <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h1 class="text-blue-900 mb-3 text-4xl font-bold tracking-tight">Select Service</h1>
      <p class="text-blue-700 text-xl max-w-2xl mx-auto">
        Please tap your choice below to proceed with your application.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      
      <button
        @click="handleSelection('help-desk')"
        class="group bg-white rounded-3xl shadow-2xl p-10 hover:shadow-blue-300 hover:scale-105 transition-all duration-300 border-4 border-transparent hover:border-blue-500 text-center flex flex-col items-center"
      >
        <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
          <svg class="w-12 h-12 text-blue-600 group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 class="text-blue-900 mb-4 text-2xl font-bold">Proceed to Public Help Desk</h2>
        <div class="bg-blue-50 rounded-xl p-5 text-left w-full flex-grow">
          <p class="text-blue-900 text-sm mb-2 font-bold uppercase tracking-wide">Assistance Programs:</p>
          <ul class="text-blue-800 text-sm space-y-2">
            <li>• Medical & Hospital Billing</li>
            <li>• Laboratory & Procedures</li>
            <li>• Maintenance Medication</li>
            <li>• Burial Assistance</li>
          </ul>
        </div>
        <div class="mt-8 text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
          Tap to Select →
        </div>
      </button>

      <button
        @click="handleSelection('assistance-desk')"
        class="group bg-white rounded-3xl shadow-2xl p-10 hover:shadow-blue-300 hover:scale-105 transition-all duration-300 border-4 border-transparent hover:border-blue-500 text-center flex flex-col items-center"
      >
        <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all">
          <svg class="w-12 h-12 text-blue-600 group-hover:text-white transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h2 class="text-blue-900 mb-4 text-2xl font-bold">Proceed to Public Assistance Desk</h2>
        <div class="bg-blue-50 rounded-xl p-5 text-left w-full flex-grow">
          <p class="text-blue-900 text-sm mb-2 font-bold uppercase tracking-wide">Inquiry Services:</p>
          <ul class="text-blue-800 text-sm space-y-2">
            <li>• General Inquiry Support</li>
            <li>• Document Verification</li>
            <li>• Status Tracking</li>
            <li>• Form Distribution</li>
          </ul>
        </div>
        <div class="mt-8 text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
          Tap to Select →
        </div>
      </button>
    </div>

    <div class="flex justify-center">
      <button
        @click="handleCancel"
        class="px-132 py-3 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-500 transition-all"
      >
        Cancel
      </button>
    </div>
  </div>
</template>