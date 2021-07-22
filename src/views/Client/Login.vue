<template>
	<div class="container">
		<Form>
			<CellGroup inset>
				<Field v-model="loginData.username" name="用户名" label="用户名" placeholder="用户名"
				       :rules="[{ required: true, message: '请填写用户名' }]"/>
				<Field v-model="loginData.password" type="password" name="密码" label="密码" placeholder="密码"
				       :rules="[{ required: true, message: '请填写密码' }]"/>
			</CellGroup>
			<div style="margin: 16px;">
				<Button round block type="primary" native-type="submit">
					提交
				</Button>
			</div>
		</Form>
	</div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {Form, Button, Field, CellGroup} from 'vant'

export default defineComponent({
	components: {
		Form, Button, Field, CellGroup
	},
	setup() {
		const loginData = ref<{ username: string, password: string }>({
			username: '',
			password: '',
		})

		return {
			loginData
		}
	}
})

</script>

<style scoped lang="scss">
.container {
	padding-top: 200px;
}
</style>
