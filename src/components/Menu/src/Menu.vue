<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { ElMenu, ElScrollbar } from 'element-plus'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('menu')


</script>

<template>
    <ElMenu>
        
    </ElMenu>

</template>