<script setup>
import { reactive } from 'vue';

const employmentData = reactive({
  employer: '',
  employmentType: '',
  position: '',
  salaryRange: ''
});
</script>

<template>
  <div>
    <h2 class="text-blue-900 mb-6 pb-3 border-b-2 border-blue-200 text-2xl font-bold">
      Employment Information
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="md:col-span-2">
        <label for="employer" class="block text-blue-900 mb-2 font-medium">
          Employer (Company Name) <span class="text-red-500">*</span>
        </label>
        <input
          v-model="employmentData.employer"
          type="text"
          id="employer"
          placeholder="e.g., ABC Corporation"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="employmentType" class="block text-blue-900 mb-2 font-medium">
          Employment Type <span class="text-red-500">*</span>
        </label>
        <select
          v-model="employmentData.employmentType"
          id="employmentType"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        >
          <option value="">Select employment type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
          <option value="freelance">Freelance</option>
          <option value="intern">Intern</option>
          <option value="self-employed">Self-Employed</option>
          <option value="unemployed">Currently Unemployed</option>
        </select>
      </div>

      <div>
        <label for="position" class="block text-blue-900 mb-2 font-medium">
          Position / Job Title <span class="text-red-500">*</span>
        </label>
        <input
          v-model="employmentData.position"
          type="text"
          id="position"
          placeholder="e.g., Marketing Manager"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div class="md:col-span-2">
        <label for="salaryRange" class="block text-blue-900 mb-2 font-medium">
          Salary Range (Monthly) <span class="text-red-500">*</span>
        </label>
        <select
          v-model="employmentData.salaryRange"
          id="salaryRange"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        >
          <option value="">Select your salary range</option>
          <option value="below-15k">Below ₱15,000</option>
          <option value="15k-25k">₱15,000 - ₱25,000</option>
          <option value="25k-40k">₱25,000 - ₱40,000</option>
          <option value="40k-60k">₱40,000 - ₱60,000</option>
          <option value="60k-80k">₱60,000 - ₱80,000</option>
          <option value="80k-100k">₱80,000 - ₱100,000</option>
          <option value="above-100k">Above ₱100,000</option>
        </select>
      </div>
    </div>

    <div class="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 rounded">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-blue-900 text-sm">
          <strong>Tip:</strong> If you're currently unemployed or self-employed, select the appropriate option. Fields marked with <span class="text-red-500">*</span> are required.
        </p>
      </div>
    </div>

    <div class="mt-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
      <div class="flex items-start gap-3 mb-3">
        <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h3 class="text-blue-900 font-bold">Employment Type Guide:</h3>
      </div>
      <ul class="space-y-2 text-blue-800 text-sm ml-9">
        <li>• <strong>Full-Time:</strong> Regular employee working 40+ hours per week</li>
        <li>• <strong>Part-Time:</strong> Working less than full-time hours</li>
        <li>• <strong>Contract:</strong> Fixed-term employment</li>
        <li>• <strong>Freelance:</strong> Independent contractor</li>
        <li>• <strong>Self-Employed:</strong> Running your own business</li>
      </ul>
    </div>

    <div class="mt-6 p-6 bg-green-50 border-2 border-green-300 rounded-lg text-center">
      <div class="flex items-center justify-center gap-3 mb-2">
        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-green-900 font-bold">Almost Done!</h3>
      </div>
      <p class="text-green-800 text-sm">This is the last section. Click "Submit" when you're ready!</p>
    </div>
  </div>
</template>