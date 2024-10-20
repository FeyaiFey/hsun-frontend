<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import Logo from '@/components/Logo/Logo.vue';
import Menu from '@/components/Menu/src/Menu.vue';
import { ElScrollbar } from 'element-plus';
import ToolHeader from '@/components/ToolHeader/ToolHeader.vue';
import Backtop from '@/components/Backtop/src/Backtop.vue';

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')

</script>



<template>
    <div 
    class = "absolute top-0 left-0 h-full layout-border__right ">
        <Logo
            class="bg-[var(--left-menu-bg-color)] relative"
            style="transition: all var(--transition-time-02);"
        ></Logo>
        <Menu class='!h-[calc(100%-var(--logo-height))]'></Menu>
    </div>
    <div :class="`${prefixCls}-content`" class="absolute top-0 h-[100%]" style="transition: all var(--transition-time-02);">
        <ElScrollbar 
            v-loading="true" 
            :class="`${prefixCls}-content-scrollbar`"
            class="!h-[calc(100%-var(--top-tool-height)-var(--tags-view-height))] mt-[calc(var(--top-tool-height)+var(--tags-view-height))]">
            <div class="fixed top-0 left-0 z-10">
                <ToolHeader class="bg-[var(--top-header-bg-color)]">
                </ToolHeader>
            </div>
        </ElScrollbar>
    </div>
    <Backtop></Backtop>
</template>

<style lang="less" scoped>
@prefix-cls: ~'@{adminNamespace}-layout';

.@{prefix-cls} {
  background-color: var(--app-content-bg-color);
}
</style>