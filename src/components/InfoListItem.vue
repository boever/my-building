<template>
	<div class="item">
		<div class="titleWrap">
			<div class="title">{title}</div>
			<span class="price" v-if="priceText">{priceText}</span>
		</div>
		<div>
			<Tag plain type="primary" v-for="(tag,index) in tags" :key="index">{{ tag }}</Tag>
		</div>

		<div>
			<div>
				<slot/>
			</div>
			<Image fit="cover" width="100px" height="100px"/>
		</div>

		<div class="creatorWrap">
			<Image round fit="cover" width="14px" height="14px"/>

			<div class="creatorInfo">
				<slot name="info"/>
			</div>

			<div class="extends">
				<slot name="extend"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue"
import {Tag, Image} from 'vant'

export default defineComponent({
	name: "InfoListItem",
	components: {Tag, Image},

	props: {
		tags: Array as PropType<string[]>,
		title: String as PropType<string>,
		price: [String, Number] as PropType<string | number>
	},
	setup(props) {

		return {
			priceText: computed(() => {
				const unit = props.price ? typeof props.price === "number" ? '¥' : '' : ''
				return props.price && `${unit}${props.price}`
			})
		}
	}
})
</script>

<style scoped lang="scss">
.item {
	background: #fff;
	padding: 10px 0;
}

.titleWrap {
	display: flex;
	align-items: center;
}

.title {
	flex: 1;
	font-size: 16px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.creatorWrap {
	display: flex;
	align-items: center;
}

.creatorInfo {
	flex: 1;

	font-size: 12px;
	color: #999;
	margin: 0px 10px;

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.extends {

}
</style>
