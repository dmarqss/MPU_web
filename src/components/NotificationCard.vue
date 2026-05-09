<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'NotificationCard',
  props: {
    variant: String
  },
  setup(props) {
    const getClass = computed(() => {
      return ['card', props.variant ? `card-${props.variant}` : '']
    })
    return { getClass }
  }
}
</script>

<style scoped>
.card {
  color: white;
  padding: 12px 20px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.01em;

  /* Liquid Glass base */
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.35),
    inset 0 -1px 1px rgba(0, 0, 0, 0.1);
}

.card-success {
  background: rgba(52, 211, 100, 0.18);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border: 1px solid rgba(52, 211, 100, 0.4);
  box-shadow:
    0 8px 32px rgba(52, 211, 100, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.4),
    inset 0 -1px 1px rgba(0, 0, 0, 0.08);
  text-shadow: 0 0 12px rgba(52, 211, 100, 0.5);
}

.card-fail {
  background: rgba(239, 68, 68, 0.18);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border: 1px solid rgba(239, 68, 68, 0.4);
  box-shadow:
    0 8px 32px rgba(239, 68, 68, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.4),
    inset 0 -1px 1px rgba(0, 0, 0, 0.08);
  text-shadow: 0 0 12px rgba(239, 68, 68, 0.5);
}

/* Animações de entrada/saída */
.card-enter-active,
.card-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.card-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  filter: blur(4px);
}
.card-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}
.card-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}
.card-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  filter: blur(4px);
}
</style>