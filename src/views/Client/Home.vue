<template>
	<div>
		<Swipe>
			<SwipeItem class="swiperItem">1</SwipeItem>
			<SwipeItem class="swiperItem">2</SwipeItem>
		</Swipe>
		<Divider/>
		<Grid>
			<GridItem v-for="(menu,key) in menus" :key="key" :icon="menu.icon" :text="menu.text" :to="{name : menu.url}">
			</GridItem>
		</Grid>

		<Divider/>

		<Tabs>
			<Tab title="园区通知">
				<List></List>
			</Tab>
			<Tab title="最新">
				<List></List>
			</Tab>
			<Tab title="热门">
				<List></List>
			</Tab>
		</Tabs>
		<Footer/>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Swipe, SwipeItem, Grid, GridItem, Image, Divider, Tabs, Tab,List} from 'vant';
import useMenus from '@/function/useMenus'
import Footer from "@/components/Footer.vue";
import {requestGet} from '@/utils/request'

export default defineComponent({
	components: {
		Footer,
		Swipe, SwipeItem, Divider,Grid, GridItem, Tabs,Tab,List
	},
  props: {

  },
  setup(){
	  const { menus } = useMenus()
    const code = {code: 'message'}
    const dicts = requestGet('/dict/getDictsByCode',code)
	  return {
      menus,
      dicts
    }
  },
  data() {
	  return {
    }
  }
})
</script>

<style scoped lang="scss">
.swiperItem {
	height: 200px;
}
</style>
