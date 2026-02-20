<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  queueNumber: String,
  caseNumber: String,
  assistanceType: String,
  beneficiaryName: String
})

const emit = defineEmits(['complete', 'cancel'])

// General Requirements
const generalRequirements = ref([
  { id: 'letter', name: 'Letter Request', nameTagalog: 'Sulat ng Kahilingan', checked: false },
  { id: 'valid-id', name: 'Valid ID', nameTagalog: 'Wastong ID', checked: false },
  { id: 'authorization', name: 'Authorization Letter (if applicable)', nameTagalog: 'Liham ng Awtorisasyon (kung kinakailangan)', checked: false },
  { id: 'case-study', name: 'Social Case Study Report', nameTagalog: 'Ulat ng Social Case Study', checked: false },
])

// Specific Requirements based on assistance type
const getSpecificRequirements = (type) => {
  const specificReqs = {
    burial: [
      { id: 'death-cert', name: 'Death Certificate', nameTagalog: 'Katibayan ng Kamatayan', checked: false },
      { id: 'statement-account', name: 'Statement of Account', nameTagalog: 'Pahayag ng Account', checked: false },
      { id: 'promissory-note', name: 'Promissory Note', nameTagalog: 'Promissory Note', checked: false },
    ],
    chemotherapy: [
      { id: 'medical-cert', name: 'Medical Certificate', nameTagalog: 'Sertipikong Medikal', checked: false },
      { id: 'prescription', name: 'Prescription', nameTagalog: 'Reseta', checked: false },
      { id: 'laboratory-results', name: 'Laboratory Results', nameTagalog: 'Resulta ng Laboratory', checked: false },
    ],
    'hospital-billing': [
      { id: 'hospital-bill', name: 'Hospital Bill/Statement of Account', nameTagalog: 'Hospital Bill/Pahayag ng Account', checked: false },
      { id: 'medical-abstract', name: 'Medical Abstract', nameTagalog: 'Medical Abstract', checked: false },
      { id: 'philhealth', name: 'PhilHealth Certificate of Confinement', nameTagalog: 'PhilHealth Certificate ng Pagkakakulong', checked: false },
    ],
    'medical-laboratory': [
      { id: 'medical-cert-lab', name: 'Medical Certificate', nameTagalog: 'Sertipikong Medikal', checked: false },
      { id: 'prescription-lab', name: 'Prescription/Laboratory Request', nameTagalog: 'Reseta/Kahilingan sa Laboratory', checked: false },
      { id: 'quotation', name: 'Quotation from Laboratory', nameTagalog: 'Quotation mula sa Laboratory', checked: false },
    ],
    'maintenance-medication': [
      { id: 'medical-cert-med', name: 'Medical Certificate', nameTagalog: 'Sertipikong Medikal', checked: false },
      { id: 'prescription-med', name: 'Prescription', nameTagalog: 'Reseta', checked: false },
      { id: 'drug-quotation', name: 'Drug Quotation', nameTagalog: 'Presyo ng Gamot', checked: false },
    ],
    'medical-implant': [
      { id: 'medical-cert-implant', name: 'Medical Certificate', nameTagalog: 'Sertipikong Medikal', checked: false },
      { id: 'device-quotation', name: 'Quotation for Medical Implant/Device', nameTagalog: 'Presyo ng Medical Implant/Device', checked: false },
      { id: 'medical-recommendation', name: 'Medical Recommendation', nameTagalog: 'Rekomendasyon ng Doktor', checked: false },
    ],
  }
  return specificReqs[type] || []
}

const specificRequirements = ref(getSpecificRequirements(props.assistanceType))

// Toggle functions
const toggleGeneral = (id) => {
  generalRequirements.value = generalRequirements.value.map(r =>
    r.id === id ? { ...r, checked: !r.checked } : r
  )
}

const toggleSpecific = (id) => {
  specificRequirements.value = specificRequirements.value.map(r =>
    r.id === id ? { ...r, checked: !r.checked } : r
  )
}

// Computed
const generalComplete = computed(() => generalRequirements.value.filter(r => r.checked).length)
const generalTotal = computed(() => generalRequirements.value.length)
const specificComplete = computed(() => specificRequirements.value.filter(r => r.checked).length)
const specificTotal = computed(() => specificRequirements.value.length)
const allComplete = computed(() => generalComplete.value === generalTotal.value && specificComplete.value === specificTotal.value)

// Methods
const handleSubmit = () => {
  emit('complete', allComplete.value ? 'complete' : 'lacking')
}

const handleCancel = () => emit('cancel')

// Assistance name mapping
const getAssistanceName = (type) => {
  const names = {
    chemotherapy: 'Chemotherapy Treatment Assistance',
    'hospital-billing': 'Hospital Billing Assistance',
    'medical-laboratory': 'Medical Laboratory Fee & Procedure',
    'maintenance-medication': 'Maintenance Medication Assistance',
    'medical-implant': 'Medical Implant and Assistive Devices',
    burial: 'Burial Assistance'
  }
  return names[type] || 'Assistance'
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
    <div class="max-w-5xl mx-auto">
      <!-- Header & Beneficiary Info -->
      <div class="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h1 class="text-2xl font-bold text-blue-900">Staff Document Verification</h1>
            <p class="text-blue-600 text-sm">Pagsusuri ng Dokumento ng Kawani</p>
          </div>
          <button @click="handleCancel" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">✕ Close</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pt-4 border-t-2 border-blue-100">
          <div>
            <p class="text-blue-600 text-sm mb-1">Queue Number</p>
            <p class="text-blue-900 font-bold text-xl">{{ props.queueNumber }}</p>
          </div>
          <div>
            <p class="text-blue-600 text-sm mb-1">Case Number</p>
            <p class="text-blue-900 font-bold">{{ props.caseNumber }}</p>
          </div>
          <div>
            <p class="text-blue-600 text-sm mb-1">Beneficiary Name</p>
            <p class="text-blue-900 font-bold">{{ props.beneficiaryName }}</p>
          </div>
          <div>
            <p class="text-blue-600 text-sm mb-1">Assistance Type</p>
            <p class="text-blue-900 font-bold text-sm">{{ getAssistanceName(props.assistanceType) }}</p>
          </div>
        </div>
      </div>

      <!-- Requirements -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- General -->
        <div class="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <h2 class="text-xl font-bold text-blue-900 flex-1">General Requirements</h2>
            <div class="text-right">
              <p class="text-2xl font-bold text-blue-900">{{ generalComplete }}/{{ generalTotal }}</p>
              <p class="text-blue-600 text-xs">Completed</p>
            </div>
          </div>
          <div class="space-y-3">
            <label
              v-for="req in generalRequirements"
              :key="req.id"
              class="flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all"
              :class="req.checked ? 'bg-green-50 border-green-300 hover:bg-green-100' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'"
            >
              <input type="checkbox" class="mt-1 w-5 h-5 text-green-600 rounded" :checked="req.checked" @change="toggleGeneral(req.id)" />
              <div class="flex-1">
                <p class="font-medium" :class="req.checked ? 'text-green-900' : 'text-gray-900'">{{ req.name }}</p>
                <p class="text-sm" :class="req.checked ? 'text-green-700' : 'text-gray-600'">{{ req.nameTagalog }}</p>
              </div>
            </label>
          </div>
        </div>

        <!-- Specific -->
        <div class="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <h2 class="text-xl font-bold text-blue-900 flex-1">Specific Requirements</h2>
            <div class="text-right">
              <p class="text-2xl font-bold text-blue-900">{{ specificComplete }}/{{ specificTotal }}</p>
              <p class="text-blue-600 text-xs">Completed</p>
            </div>
          </div>

          <div v-if="specificRequirements.length > 0" class="space-y-3">
            <label
              v-for="req in specificRequirements"
              :key="req.id"
              class="flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all"
              :class="req.checked ? 'bg-green-50 border-green-300 hover:bg-green-100' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'"
            >
              <input type="checkbox" class="mt-1 w-5 h-5 text-green-600 rounded" :checked="req.checked" @change="toggleSpecific(req.id)" />
              <div class="flex-1">
                <p class="font-medium" :class="req.checked ? 'text-green-900' : 'text-gray-900'">{{ req.name }}</p>
                <p class="text-sm" :class="req.checked ? 'text-green-700' : 'text-gray-600'">{{ req.nameTagalog }}</p>
              </div>
            </label>
          </div>
          <div v-else class="bg-gray-50 rounded-xl p-8 text-center border-2 border-dashed border-gray-300">
            <p class="text-gray-600">No specific requirements for this assistance type</p>
            <p class="text-gray-500 text-sm mt-1">Walang partikular na kinakailangan</p>
          </div>
        </div>
      </div>

      <!-- Summary & Actions -->
      <div class="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-blue-900">Document Summary • Buod ng Dokumento</h3>
        </div>

        <div :class="['rounded-xl p-6 mb-6 border-2 flex items-center gap-4', allComplete ? 'bg-green-50 border-green-300' : 'bg-yellow-50 border-yellow-300']">
          <div :class="['w-16 h-16 rounded-full flex items-center justify-center', allComplete ? 'bg-green-500' : 'bg-yellow-500']">
            <svg v-if="allComplete" class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
            <svg v-else class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="flex-1">
            <p :class="['text-2xl font-bold', allComplete ? 'text-green-900' : 'text-yellow-900']">{{ allComplete ? 'All Documents Complete' : 'Incomplete Documents' }}</p>
            <p :class="['text-lg', allComplete ? 'text-green-700' : 'text-yellow-700']">{{ allComplete ? 'Kumpleto ang lahat ng Dokumento' : 'Kulang ang mga Dokumento' }}</p>
            <div class="flex gap-4 mt-2 text-sm" :class="allComplete ? 'text-green-800' : 'text-yellow-800'">
              <p>General: {{ generalComplete }}/{{ generalTotal }}</p>
              <p>Specific: {{ specificComplete }}/{{ specificTotal }}</p>
              <p>Total: {{ generalComplete + specificComplete }}/{{ generalTotal + specificTotal }}</p>
            </div>
          </div>
        </div>

        <div class="flex gap-4">
          <button @click="handleCancel" class="flex-1 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all text-lg font-medium">Cancel • Kanselahin</button>
          <button @click="handleSubmit" class="flex-1 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg text-lg font-medium">Submit Verification • Ipasa ang Pagsusuri</button>
        </div>
      </div>
    </div>
  </div>
</template>