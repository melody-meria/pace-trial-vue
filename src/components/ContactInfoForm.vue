<script setup>
import { reactive } from 'vue';

const contactData = reactive({
  contactNumber: '',
  email: '',
  address: ''
});
</script>

<template>
  <div>
    <h2 class="text-blue-900 mb-6 pb-3 border-b-2 border-blue-200 text-2xl font-bold">
      Contact Information
    </h2>
    
    <div class="grid grid-cols-1 gap-6">
      <div>
        <label for="contactNumber" class="block text-blue-900 mb-2 font-medium">
          Contact Number <span class="text-red-500">*</span>
        </label>
        <input
          v-model="contactData.contactNumber"
          type="tel"
          id="contactNumber"
          placeholder="e.g., +63 912 345 6789"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
        <p class="text-blue-600 text-sm mt-1 font-medium">Include country code for mobile numbers</p>
      </div>

      <div>
        <label for="email" class="block text-blue-900 mb-2 font-medium">
          Email Address <span class="text-gray-500">(Optional)</span>
        </label>
        <input
          v-model="contactData.email"
          type="email"
          id="email"
          placeholder="e.g., maria.santos@email.com"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
        <p class="text-blue-600 text-sm mt-1 font-medium">We'll use this for important updates</p>
      </div>

      <div>
        <label for="address" class="block text-blue-900 mb-2 font-medium">
          Complete Address <span class="text-red-500">*</span>
        </label>
        <textarea
          v-model="contactData.address"
          id="address"
          rows="4"
          placeholder="e.g., 123 Rizal Street, Barangay San Juan, Makati City, Metro Manila 1200"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
        ></textarea>
        <p class="text-blue-600 text-sm mt-1 font-medium">
          Include house/building number, street, barangay, city, and postal code
        </p>
      </div>
    </div>

    <div class="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 rounded">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-blue-900 text-sm">
          <strong>Tip:</strong> Double-check your contact details. This is how we'll reach you! All fields marked with <span class="text-red-500">*</span> are required.
        </p>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
        <div class="flex items-start gap-3 mb-2">
          <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <h3 class="text-blue-900 font-bold">Phone Number Format</h3>
        </div>
        <p class="text-blue-800 text-sm ml-9">For Philippines: +63 followed by your 10-digit mobile number</p>
        <p class="text-blue-600 text-sm mt-1 ml-9">Example: +63 912 345 6789</p>
      </div>
      
      <div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
        <div class="flex items-start gap-3 mb-2">
          <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 class="text-blue-900 font-bold">Email Format</h3>
        </div>
        <p class="text-blue-800 text-sm ml-9">yourname@domain.com</p>
        <p class="text-blue-600 text-sm mt-1 ml-9">Make sure it's an active email you check regularly</p>
      </div>
    </div>
  </div>
</template>

