<template>
	<Tabbar>
		<TabbarItem icon="home-o">首页</TabbarItem>
		<TabbarItem icon="search">通知</TabbarItem>
		<TabbarItem icon="setting-o">我的</TabbarItem>
	</Tabbar>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {Tabbar, TabbarItem} from 'vant'
export default defineComponent({
	name: 'Footer',
	components: {
		Tabbar, TabbarItem
	},
	setup() {

		return {
			active: ref<string>('')
		}
	}
})
</script>

<style scoped lang="scss">

</style>
