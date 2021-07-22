<template>
	<div>
		<NavBar title="无人巡检"/>

		<Image style="width: 100%"/>

		<Tabs>
			<Tab title="推荐">
				<List></List>
			</Tab>
			<Tab title="好评">
				<List></List>
			</Tab>
			<Tab title="最新">
				<List></List>
			</Tab>
		</Tabs>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {NavBar, Image, Tabs, Tab, List} from 'vant'

export default defineComponent({
	name: "Inspection",
	components: {NavBar, Image, Tabs, Tab, List},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">

</style>
