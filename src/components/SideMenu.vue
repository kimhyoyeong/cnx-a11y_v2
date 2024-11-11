<template>
	<!-- 전체 메뉴를 나타내는 네비게이션 영역 -->
	<nav class="menu" aria-label="Main Menu">
		<!-- 최상위 메뉴 목록 -->
		<ul class="menu__list--1depth" v-if="menuChildren.length > 0">
			<li v-for="(child, index) in menuChildren" :key="child.id || index" class="menu__item">
				<template v-if="hasChildren(child)">
					<!-- 메뉴 항목 제목 -->
					<span class="menu__label">{{ child.name }}</span>

					<!-- 2단계 하위 메뉴 목록 -->
					<ul class="menu__list--2depth">
						<li
							v-for="(subChild, subIndex) in child.children"
							:key="subChild.id || `sub-${index}-${subIndex}`"
							class="menu__item"
						>
							<template v-if="hasChildren(subChild)">
								<!-- 하위 메뉴의 확장/축소 버튼 -->
								<button
									class="menu__expansion-item"
									:aria-expanded="expandedItems[index][subIndex]"
									@click="toggleExpand(index, subIndex)"
								>
									{{ subChild.name }}
								</button>
								<ul v-if="expandedItems[index][subIndex]" class="menu__list--3depth">
									<li
										v-for="(subsubChild, subsubIndex) in subChild.children"
										:key="subsubChild.id || `sub-${index}-${subsubIndex}`"
										class="menu__item"
									>
										<a :href="subsubChild.path" class="menu__link">
											{{ subsubChild.name }}
										</a>
									</li>
								</ul>
							</template>
							<template v-else>
								<a :href="subChild.path" class="menu__link">
									{{ subChild.name }}
								</a>
							</template>
						</li>
					</ul>
				</template>
				<template v-else>
					<a :href="child.path" class="menu__link">
						{{ child.name }}
					</a>
				</template>
			</li>
		</ul>
	</nav>
</template>
<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useStore } from "vuex"; 

// Vuex 스토어 인스턴스 가져오기
const store = useStore();

// 선택된 최상위 메뉴 상태를 가져와 computed로 반응형으로 설정
const selectedTopMenu = computed(() => store.state.selectedTopMenu);

// 선택된 최상위 메뉴의 하위 메뉴를 가져와 computed로 반응형으로 설정
const menuChildren = computed(() => selectedTopMenu.value?.children || []);

// 항목이 자식을 가지고 있는지 확인하는 함수
const hasChildren = (child) => child.children && child.children.length > 0;

// 메뉴 확장 상태를 저장하는 객체
const expandedItems = ref({});

// 초기 확장 상태를 설정하는 함수, 현재 경로와 일치하는 하위 메뉴를 기본적으로 확장시킴
const initializeExpandedItems = (path) => {
	const initialExpandState = {}; // 초기 상태 객체

	// 각 메뉴 항목을 순회하며 확장 상태 초기화
	menuChildren.value.forEach((child, index) => {
		if (hasChildren(child)) {
			initialExpandState[index] = {}; // 자식 항목이 있을 경우 확장 상태 객체 초기화
			child.children.forEach((subChild, subIndex) => {
				// 현재 경로와 일치하는 하위 메뉴는 확장
				initialExpandState[index][subIndex] = path.startsWith(subChild.path);
			});
		}
	});

	expandedItems.value = initialExpandState; // 초기화된 확장 상태를 저장
};

// 확장 상태를 토글하는 함수, 특정 항목을 클릭할 때 확장/축소
const toggleExpand = (index, subIndex) => {
	expandedItems.value[index][subIndex] = !expandedItems.value[index][subIndex];
};

// Vuex 상태의 currentPath가 변경될 때 확장 상태 재설정
watch(
	() => store.state.currentPath,
	(newPath) => {
		initializeExpandedItems(newPath); // 새로운 경로에 따라 확장 상태를 초기화
	}
);

// 컴포넌트가 마운트될 때 초기 확장 상태 설정
onMounted(() => {
	initializeExpandedItems(store.state.currentPath); // 초기 경로에 따라 확장 상태를 설정
});
</script>
