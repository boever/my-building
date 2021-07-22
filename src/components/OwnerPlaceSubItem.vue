<template>
	<div class="container">
		<Image :src="src" class="icon" width="100px" height="100px" fit="cover"/>
		<div class="flexBox">
			<p class="title">
				<slot name="title"/>
			</p>
			<div class="content">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {Image} from 'vant'

export default defineComponent({
	name: "OwnerPlaceSubItem",
	components: {Image},
	props: {
		src: String as PropType<string>
	},
	setup() {

		return {}
	}
})
</script>

<style scoped lang="scss">
@import "../styles/Common";

.container {
	display: flex;
	align-items: center;
	background: #fff;
	padding: 10px;


	& + .container {
		margin-top: 10px;
	}
}

.icon {
	flex: 0 0 100px;
	margin-right: 10px;
}

.title {
	font-size: 16px;
}

.flexBox {
	flex: 1;
}

.content {
	font-size: 12px;
	color: #999;
	height: 60px;
	@include MultiEllipsis(2);
}
</style>
