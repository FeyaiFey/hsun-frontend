<script setup lang="ts">
import Logo from '@/components/Logo/Logo.vue';
import Menu from '@/components/Menu/src/Menu.vue';
import { useDesign } from '@/hooks/web/useDesign';

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')
</script>


<template>
    <section :class="prefixCls" class="w-[100%] h-[100%] relative">
        <div class="absolute top-0 left-0 h-full layout-border__right">
            <Logo class="bg-[var(--left-menu-bg-color)] relative w-[var(--left-menu-max-width)]"></Logo>
            <Menu class="h-[calc(100%-var(--logo-height))]"></Menu>
        </div>

    </section>
</template>

<style lang="less" scoped>
@prefix-cls: ~'@{adminNamespace}-layout';

</style>