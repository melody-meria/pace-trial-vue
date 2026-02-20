<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPortal = ref('user')

function goToPortal(type) {
  currentPortal.value = type

  if (type === 'user') {
    router.push('/user')
  } else {
    router.push('/staff-review')
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-6">

    <h1 class="text-3xl font-bold text-blue-900">
      PACe Digital Kiosk System
    </h1>

    <div class="flex gap-4">
      <button
        @click="goToPortal('user')"
        class="px-8 py-4 bg-blue-600 text-white rounded-lg"
      >
        User Portal
      </button>

      <button
        @click="goToPortal('staff')"
        class="px-8 py-4 bg-purple-600 text-white rounded-lg"
      >
        Staff Portal
      </button>
    </div>

  </div>
</template>