<script setup>
import { reactive } from 'vue';

// form data
const formData = reactive({
  firstName: '',
  lastName: '',
  middleName: '',
  suffix: '',
  dateOfBirth: '',
  gender: '',
  age: null,
  civilStatus: '',
  religion: '',
  nationality: '',
  bloodType: ''
});
</script>

<template>
  <div class="p-8">
    <h2 class="text-blue-900 mb-8 pb-4 border-b-2 border-blue-200 text-3xl font-bold">
      Personal Information
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="firstName" class="block text-blue-900 mb-2 font-medium">
          First Name <span class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.firstName"
          type="text"
          id="firstName"
          placeholder="e.g., Maria"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="lastName" class="block text-blue-900 mb-2 font-medium">
          Last Name <span class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.lastName"
          type="text"
          id="lastName"
          placeholder="e.g., Santos"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="middleName" class="block text-blue-900 mb-2 font-medium">
          Middle Name
        </label>
        <input
          v-model="formData.middleName"
          type="text"
          id="middleName"
          placeholder="e.g., Cruz"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="suffix" class="block text-blue-900 mb-2 font-medium">
          Suffix (if applicable)
        </label>
        <input
          v-model="formData.suffix"
          type="text"
          id="suffix"
          placeholder="e.g., Jr., Sr., III"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="dateOfBirth" class="block text-blue-900 mb-2 font-medium">
          Date of Birth <span class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.dateOfBirth"
          type="date"
          id="dateOfBirth"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="gender" class="block text-blue-900 mb-2 font-medium">
          Gender <span class="text-red-500">*</span>
        </label>
        <select
          v-model="formData.gender"
          id="gender"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <label for="age" class="block text-blue-900 mb-2 font-medium">
          Age <span class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.age"
          type="number"
          id="age"
          placeholder="e.g., 28"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="civilStatus" class="block text-blue-900 mb-2 font-medium">
          Civil Status <span class="text-red-500">*</span>
        </label>
        <select
          v-model="formData.civilStatus"
          id="civilStatus"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        >
          <option value="">Select your civil status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="widowed">Widowed</option>
          <option value="separated">Separated</option>
          <option value="divorced">Divorced</option>
        </select>
      </div>

      <div>
        <label for="religion" class="block text-blue-900 mb-2 font-medium">
          Religion
        </label>
        <input
          v-model="formData.religion"
          type="text"
          id="religion"
          placeholder="e.g., Roman Catholic"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="nationality" class="block text-blue-900 mb-2 font-medium">
          Nationality <span class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.nationality"
          type="text"
          id="nationality"
          placeholder="e.g., Filipino"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        />
      </div>

      <div>
        <label for="bloodType" class="block text-blue-900 mb-2 font-medium">
          Blood Type <span class="text-red-500">*</span>
        </label>
        <select
          v-model="formData.bloodType"
          id="bloodType"
          class="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
        >
          <option value="">Select your blood type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
    </div>

    <div class="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 rounded">
      <div class="flex items-start gap-3">
        <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-blue-900 text-sm">
          <strong>Tip:</strong> All placeholders show example answers. Simply replace them with your own information. Fields marked with <span class="text-red-500">*</span> are required.
        </p>
      </div>
    </div>
  </div>
</template>