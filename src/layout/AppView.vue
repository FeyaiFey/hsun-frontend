<script setup lang="ts">
import Footer from '@/components/Footer/src/Footer.vue';
</script>

<template>
    <section class="!min-h-[calc(100vh-var(--top-tool-height)-var(--tags-view-height)-var(--app-footer-height))] pb-0">
        <router-view>
            <template #default="{ Component, route }">
                <KeepAlive>
                    <component :is="Component" :key="route.fullPath" />
                </KeepAlive>
            </template>
        </router-view>
    </section>
    <Footer />
</template>

<style>
</style>