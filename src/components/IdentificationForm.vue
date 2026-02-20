<script setup>
import { reactive } from 'vue';

const idData = reactive({
  idType: '',
  idNumber: '',
  issuedDate: '',
  expiryDate: ''
});
</script>

<template>
  <div>
    <h2 class="text-blue-900 mb-6 pb-3 border-b-2 border-blue-200 text-2xl font-bold">
      Identification Documents
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="md:col-span-2">
        <label for="idType" class="block text-blue-900 mb-2 font-medium">
          ID Type <span class="text-red-500">*</span>
        </label>
        <select
          v-model="idData.idType"
          id="idType"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        >
          <option value="">Select an ID type</option>
          <option value="passport">Passport</option>
          <option value="drivers-license">Driver's License</option>
          <option value="national-id">National ID</option>
          <option value="sss">SSS ID</option>
          <option value="umid">UMID</option>
          <option value="philhealth">PhilHealth ID</option>
          <option value="tin">TIN ID</option>
          <option value="postal">Postal ID</option>
          <option value="voters">Voter's ID</option>
        </select>
      </div>

      <div class="md:col-span-2">
        <label for="idNumber" class="block text-blue-900 mb-2 font-medium">
          ID Number <span class="text-red-500">*</span>
        </label>
        <input
          v-model="idData.idNumber"
          type="text"
          id="idNumber"
          placeholder="e.g., 0901-5678-321"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="issuedDate" class="block text-blue-900 mb-2 font-medium">
          Issued Date <span class="text-red-500">*</span>
        </label>
        <input
          v-model="idData.issuedDate"
          type="date"
          id="issuedDate"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="expiryDate" class="block text-blue-900 mb-2 font-medium">
          Expiry Date <span class="text-red-500">*</span>
        </label>
        <input
          v-model="idData.expiryDate"
          type="date"
          id="expiryDate"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>
    </div>

    <div class="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 rounded">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-blue-900 text-sm">
          <strong>Tip:</strong> Make sure your ID is valid and not expired. Check the dates on your physical ID card. Fields marked with <span class="text-red-500">*</span> are required.
        </p>
      </div>
    </div>

    <div class="mt-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
      <div class="flex items-start gap-3 mb-3">
        <svg class="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 class="text-blue-900 font-bold">Where to find this information:</h3>
      </div>
      <ul class="space-y-2 text-blue-800 text-sm ml-9">
        <li>• <strong>ID Number:</strong> Usually on the front of your ID card</li>
        <li>• <strong>Issued Date:</strong> The date when the ID was given to you</li>
        <li>• <strong>Expiry Date:</strong> The date when the ID expires</li>
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