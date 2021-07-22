<template>
	<div>
		<Calendar>

		</Calendar>
		<Tabs>
			<Tab title="热门">
				<List>

				</List>
			</Tab>
			<Tab title="最新">
				<List>

				</List>
			</Tab>
		</Tabs>

	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {Calendar, List} from 'vant'

export default defineComponent({
	name: "OwnerPlaceItem",
	components: {Calendar, List},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">

</style>
