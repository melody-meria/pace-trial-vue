<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['accept']);

const agreedToTerms = ref(false);
const agreedToCollection = ref(false);
const language = ref('tl'); // Default to Tagalog

const canProceed = computed(() => agreedToTerms.value && agreedToCollection.value);

const toggleLanguage = (lang) => {
  language.value = lang;
};
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Language Toggle -->
    <div class="flex justify-center mb-6">
      <div class="bg-white rounded-full p-1 shadow-lg flex gap-1 border border-blue-100">
        <button
          @click="toggleLanguage('tl')"
          :class="['px-6 py-2 rounded-full transition-all font-bold', language === 'tl' ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-50']"
        >
           Tagalog
        </button>
        <button
          @click="toggleLanguage('en')"
          :class="['px-6 py-2 rounded-full transition-all font-bold', language === 'en' ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-50']"
        >
         English
        </button>
      </div>
    </div>

    <!-- Header -->
    <div class="text-center mb-8">
      <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      </div>
      <h1 class="text-3xl font-black text-blue-900 mb-2">
        {{ language === 'tl' ? 'Paunawa sa Pagkapribado' : 'Data Privacy Notice' }}
      </h1>
      <p class="text-blue-700 font-medium">
        {{ language === 'tl' ? 'Mangyaring basahin at sumang-ayon bago magpatuloy' : 'Please read and agree before proceeding' }}
      </p>
    </div>

    <!-- Information Box -->
    <div class="bg-white rounded-2xl shadow-xl p-8 mb-6 border-2 border-blue-100">
      <div class="mb-6">
        <h2 class="text-xl font-bold text-blue-900 mb-4">
          {{ language === 'tl' ? 'Mahalaga sa Amin ang Inyong Privacy' : 'Your Privacy Matters to Us' }}
        </h2>
        <p class="text-blue-800 leading-relaxed">
          {{ language === 'tl'
            ? 'Nakatuon kami sa pagprotekta ng inyong personal na impormasyon. Ipinapaliwanag nito kung paano namin kinokolekta at pinoprotektahan ang inyong datos.'
            : 'We are committed to protecting your personal information. This notice explains how we collect and safeguard your data.' }}
        </p>
      </div>

      <div class="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        <div class="mb-6 p-5 bg-blue-50 rounded-xl border-2 border-blue-200">
          <h3 class="font-bold text-blue-900 mb-3">
            {{ language === 'tl' ? 'Anong Impormasyon ang Kinokolekta' : 'Information We Collect' }}
          </h3>
          <ul class="text-blue-800 mb-3">
            <li>• <strong>Personal:</strong> Name, DOB, Gender, Civil Status, Religion, Nationality, Blood Type</li>
            <li>• <strong>Documents:</strong> ID Type, ID Number, Issue/Expiry Dates</li>
            <li>• <strong>Contact:</strong> Phone, Email, Address</li>
          </ul>
        </div>
      </div>

    <!-- Your Rights Section -->
    <div class="mb-6 p-5 bg-blue-50 rounded-lg border-2 border-blue-200">
    <h3 class="font-bold text-blue-900 mb-3">
        {{ language === 'tl' ? 'Ang Inyong mga Karapatan' : 'Your Rights' }}
    </h3>
    <p class="text-blue-800 mb-3">
        {{ language === 'tl' ? 'Mayroon kayong karapatang:' : 'You have the right to:' }}
    </p>
    <ul class="space-y-2 text-blue-800">
        <li class="flex items-start">
        <span class="text-blue-800 mr-2">•</span>
        <span>
            {{ language === 'tl'
            ? 'Tingnan at suriin ang impormasyon na mayroon kami tungkol sa inyo'
            : 'Access and review the information we have about you' }}
        </span>
        </li>
        <li class="flex items-start">
        <span class="text-blue-800 mr-2">•</span>
        <span>
            {{ language === 'tl'
            ? 'Humiling ng pagwawasto sa anumang maling impormasyon'
            : 'Request corrections to any inaccurate information' }}
        </span>
        </li>
        <li class="flex items-start">
        <span class="text-blue-800 mr-2">•</span>
        <span>
            {{ language === 'tl'
            ? 'Humiling ng pagtanggal ng inyong data (alinsunod sa legal na kinakailangan)'
            : 'Request deletion of your data (subject to legal requirements)' }}
        </span>
        </li>
        <li class="flex items-start">
        <span class="text-blue-800 mr-2">•</span>
        <span>
            {{ language === 'tl' ? 'Bawiin ang pahintulot anumang oras' : 'Withdraw consent at any time' }}
        </span>
        </li>
    </ul>
    </div>



      <!-- Consent Checkboxes -->
      <div class="max-w-2xl mx-auto mt-10 space-y-4 px-4">
        <!-- Terms -->
        <label
          class="flex items-center p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 group"
          :class="agreedToTerms ? 'bg-blue-600 border-blue-600 shadow-lg scale-[1.02]' : 'bg-white border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md'"
        >
          <input type="checkbox" v-model="agreedToTerms" class="peer sr-only" />
          <div
            class="w-7 h-7 border-2 rounded-full flex items-center justify-center transition-all duration-300"
            :class="agreedToTerms ? 'bg-white border-white' : 'bg-transparent border-blue-200 group-hover:border-blue-400'"
          >
            <svg v-if="agreedToTerms" class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <span class="ml-5 text-base font-semibold transition-colors duration-300" :class="agreedToTerms ? 'text-white' : 'text-blue-900'">
            {{ language === 'tl' ? 'Nabasa at sumasang-ayon ako sa Paunawa.' : 'I have read and agree to the Notice.' }}
          </span>
        </label>

        <!-- Collection -->
        <label
          class="flex items-center p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 group"
          :class="agreedToCollection ? 'bg-blue-600 border-blue-600 shadow-lg scale-[1.02]' : 'bg-white border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-md'"
        >
          <input type="checkbox" v-model="agreedToCollection" class="peer sr-only" />
          <div
            class="w-7 h-7 border-2 rounded-full flex items-center justify-center transition-all duration-300"
            :class="agreedToCollection ? 'bg-white border-white' : 'bg-transparent border-blue-200 group-hover:border-blue-400'"
          >
            <svg v-if="agreedToCollection" class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <span class="ml-5 text-base font-semibold transition-colors duration-300" :class="agreedToCollection ? 'text-white' : 'text-blue-900'">
            {{ language === 'tl' ? 'Pumapayag ako sa pagkolekta at pagproseso ng aking impormasyon.' : 'I consent to the collection and processing of my personal information.' }}
          </span>
        </label>

        <!-- Proceed Button -->
        <button
          @click="$emit('accept')"
          :disabled="!canProceed"
          class="w-full mt-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
          :class="canProceed ? 'bg-blue-600 text-white hover:bg-blue-700 transform active:scale-95' : 'bg-blue-200 text-blue-400 cursor-not-allowed'"
        >
          {{ canProceed
            ? (language === 'tl' ? 'Magpatuloy sa Form' : 'Proceed to Form')
            : (language === 'tl' ? 'Mangyaring Sumang-ayon' : 'Please Agree to Continue') }}
        </button>
      </div>
    </div>
  </div>
</template>
