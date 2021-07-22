<template>
	<div>
		<NavBar title="业主天地"/>

		<Tabs>
			<Tab title="业主求">

			</Tab>
			<Tab title="业主供">

			</Tab>
		</Tabs>

	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {NavBar, Image, Tabs, Tab} from 'vant'

export default defineComponent({
	name: "OwnerPlace",
	components: {NavBar, Image, Tabs, Tab},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">

</style>
