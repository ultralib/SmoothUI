# Installation

You can install SmoothUI package via npm/pnpm:

```bash
# NPM
npm i @proxymal/smoothui

# PNPM
pnpm add @proxymal/smoothui
```

# Usage

Add global styles to your Vue's `main.ts` file.

```ts
// src/main.ts
import '@proxymal/smoothui/style.css';
```

Now you can use Vue components in your app easily:

```vue
<script setup lang="ts">
import { KitButton } from '@proxymal/smoothui';
</script>

<template>
	<KitButton size="md" color="primary">Hello world!</KitButton>
</template>
```
