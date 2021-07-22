<template>
	<div>
		<NavBar/>

		<List>
			<div>
				<div class="titleWrap">
					<div class="title"></div>
					<div class="price"></div>
				</div>
			</div>
		</List>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {NavBar, Image, Tabs, Tab, List} from 'vant'

export default defineComponent({
	name: "InspectionCompany",
	components:{
		NavBar, Image, Tabs, Tab, List
	},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">

</style>
