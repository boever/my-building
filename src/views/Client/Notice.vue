<template>
	<div>
		<NavBar title="园区通知"/>
		<div>
			<Image round width="100px" height="100px" fit="cover"/>

			<div>
				<p class="title">园区通知</p>
				<p class="subTxt">通知发布：条</p>
			</div>
		</div>

		<Tabs>
			<Tab title="全部"></Tab>
			<Tab title="停水停电"></Tab>
			<Tab title="费用缴纳"></Tab>
			<Tab title="临时检修"></Tab>
			<Tab title="活动推荐"></Tab>
		</Tabs>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {NavBar, Image, Tabs, Tab} from 'vant'

export default defineComponent({
	name: "Notice",
	components: {NavBar, Image, Tabs, Tab},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">

</style>
