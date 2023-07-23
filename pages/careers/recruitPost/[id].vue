<script setup lang="ts">

import { useRoute } from 'nuxt/app'

const route = useRoute() // 라우트 감지용

</script>

<template>
    <div class="container h-screen ">

        {{ route.params.id  }}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, optio adipisci error assumenda corporis, vel enim accusantium aperiam a officia, mollitia nesciunt voluptatum eos inventore id? Vitae architecto doloremque dicta.

    </div>
   
</template>