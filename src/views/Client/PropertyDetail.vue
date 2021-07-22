<template>
	<div>
		<NavBar title=""/>

		<div>
			<Tag></Tag>

			<Image width="100%"/>
		</div>

		<Button type="primary">
			<Icon name="phone"/>
			立即预约
		</Button>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {NavBar, Tag, Image, Button, Icon} from 'vant'

export default defineComponent({
	name: "PropertyDetail",
	components: {
		NavBar, Tag, Image, Button, Icon
	},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">

</style>
