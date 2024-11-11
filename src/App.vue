<template>
	<header class="header">
		<div class="header__container">
			<!-- 로고 -->
			<div class="header__logo">
				<router-link to="/">웹접근성 가이드</router-link>
			</div>

			<!-- 네비게이션 -->
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li
						class="header__nav-item"
						v-for="item in topMenuItems"
						:key="item.name"
					>
						<router-link :to="item.path">{{
							item.name
						}}</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<!-- 사이드 메뉴 -->
	<SideMenu />

	<main class="content">
		<router-view :pageTitle="pageTitle" :categoryTitle="categoryTitle" />
	</main>

	<footer class="footer">
		<strong>우리의 도전</strong>
		<p>
			어떻게 하면 모든 사용자에게 동등하고 풍부한 경험을 제공할 수 있을까?
		</p>
		<p>
			이 질문에 대한 답을 찾는 과정이 바로 웹접근성을 향한 우리의
			노력입니다. 웹접근성은 단순히 지침을 따르는 것이 아닙니다. 우리의
			목표는 모든 사람이 정보와 서비스에 평등하게 접근할 수 있는 세상을
			만드는 것입니다. 이는 기술적 과제일 뿐만 아니라, 사회적 책임이자
			모두가 다양한 상황에 편안하게 이용할 수 있는 디지털 공간을 만들기
			위한 배려입니다. 더 나은 디지털 세상을 만들어 나가는 의미있는 작업에
			함께해주세요.
		</p>
	</footer>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

import SideMenu from "@/components/SideMenu.vue";

const topMenuItems = computed(() => store.state.topMenuItems);
const pageTitle = computed(() => store.state.pageTitle);
const categoryTitle = computed(() => store.state.categoryTitle);
</script>

<style lang="scss">
@import "./assets/css/style";
</style>
