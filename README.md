## 🔧 Usage

First install vue-hbui with npm, yarn or pnpm.

Install with npm

```sh
npm install vue-hbui --save
```

Install with yarn

```sh
yarn add vue-hbui
```

Install with pnpm

```sh
pnpm add vue-hbui
```

Then import `HBUI` in the `main.ts` file:

```ts
import { createApp } from 'vue'
import App from './App.vue'

// Import Vue HBUI component and style
import HBUI from 'vue-hbui'
import 'vue-hbui/style.css'

createApp(App).use(HBUI).mount('#app')
```
