<template>
	<section>
		<div class="art-content art-content--overview">
			
			<div class="text-body">
				<ul class="list-type">
					<li>
						자동으로 변경되는 콘텐츠는 움직임을 제어할 수 있어야 한다.
					</li>
					<li>
						스크롤이나 자동 갱신되는 콘텐츠를 장애인 사용자가 이용할
						수 있도록 일시정지할 수 있는 수단을 제공해야 한다.
					</li>
				</ul>
			</div>
		</div>

		<div class="art-content art-content--role">
			<div class="role-box">
				<q-icon name="groups" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 직군</h3>
					<q-chip class="art-chip-role art-chip-role--planner"
						>기획</q-chip
					>
					<q-chip class="art-chip-role art-chip-role--designer"
						>디자인</q-chip
					>
					<q-chip class="art-chip-role art-chip-role--fe"
						>퍼블/개발</q-chip
					>
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>시각 장애</p>
				</div>
			</div>
		</div>
		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">1. 자동 변경 슬라이드</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>이전, 다음, 정지 기능을 제공해야 한다.</li>
							<li>
								정지 버튼이 없더라도 마우스 오버 시와 키보드
								접근 시에 정지되도록 구현하면 정지 기능을 제공한
								것으로 인정된다.
							</li>
						</ul>

						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide2_sub2-2_01.png"
									:ratio="4 / 2"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">2. 자동 변경 콘텐츠</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								자동으로 변경되는 콘텐츠는 움직임을 제어 할 수
								있어야 한다.
							</li>
						</ul>

						<div class="example-wrap">
							<div
								class="example-box example-box--good"
							>
								<q-img
									src="../images/img_guide2_sub2-2_02.png"
									:ratio="4 / 1"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<VCodeBlock
									code='<video src="" autoplay="" muted="" playsinline="" loop="" controls=""></video>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		

	</section>
</template>
<!-- <script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script> -->
