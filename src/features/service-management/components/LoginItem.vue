<script setup lang="ts">
import { computed } from 'vue'

import type { LoginData } from '@/entities/services-config'
import { CopyButton } from '@/shared'

import { injectService } from '../providers/service'
import { useLoginItem } from '../hooks/login-item'

const props = defineProps<{ login: LoginData }>()
const service = injectService()

const { innerVersion, getLogin, getPassword } = useLoginItem(
  service,
  computed(() => props.login)
)
</script>

<template>
  <li class="login-item">
    <h4>{{ login.name }}</h4>

    <label>
      <span>version</span>
      <input v-model="innerVersion" type="number" min="1" step="1" />
    </label>

    <CopyButton :get-content="getLogin">Copy login</CopyButton>
    <CopyButton :get-content="getPassword">Copy password</CopyButton>
  </li>
</template>
