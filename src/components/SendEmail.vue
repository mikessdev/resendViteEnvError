<script setup lang="ts">
import { sendEmail } from '@/resend/sendEmail'

const sendEmailWithResend = () => {
  return sendEmail()
}
</script>

<template>
  <button @click="sendEmailWithResend">Enviar Emal</button>
</template>
