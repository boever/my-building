<template>
	<div>
		<NavBar title="物业服务"/>

		<Image style="width: 100%"/>

		<Tabs>
			<Tab title="推荐"></Tab>
			<Tab title="好评"></Tab>
			<Tab title="最新"></Tab>
		</Tabs>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {NavBar, Image, Tabs, Tab} from 'vant'

export default defineComponent({
	name: "Property",
	components: {NavBar, Image, Tabs, Tab},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">

</style>
