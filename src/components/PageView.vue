<template>
	<article class="art-container" id="content">
		<div class="art-heading">
			<span class="art-heading__category">{{ categoryTitle }}</span>
			<h2 class="art-heading__title">{{ pageTitle }}</h2>
		</div>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</article>
</template>
<script setup>
import { defineProps } from "vue";
defineProps(["pageTitle", "categoryTitle"]);
</script>
