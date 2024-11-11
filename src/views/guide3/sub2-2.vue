<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					단일 페이지 웹 애플리케이션 또는 웹 페이지 세트에서 다음 도움 정보 중 하나 이상의 도움 정보가 제공되면, 최소한 하나의 도움 정보는 해당 페이지에서 동일한 상대적인 순서대로 제공되어야 한다.
				</p>
				<ul class="list-type">
					<li>
						<strong>담당자 상세 연락처</strong
						><br />
						전화번호, 이메일, 운영시간 등
					</li>
					<li>
						<strong>담당자 연락 방법</strong><br>
						메신저, 채팅창, 게시판, SNS 등
					</li>
					<li>
						<strong>도움말 옵션</strong><br>
						FAQ, 사용법 등
					</li>
					<li>
						<strong>자동화된 연결방법</strong><br>
						챗봇 등
					</li>
				</ul>
				<p>
					도움 정보가 특정 페이지에서만 접근할 수 있는 등 각 페이지에서 상대적으로 동일한 위치에 제공되지 않으면, 도움 정보의 위치를 찾기 어려운 사용자는 해당 도움 정보에 접근하기 어렵다.
				</p>
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
					<p>저시력 사용자, 시각 장애, 읽기 장애, 인지 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">반복되는 도움 정보는 모든 페이지 동일한 위치에 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							전화번호, 이메일, 주소 등 페이지마다 반복되는 도움 정보는 페이지 하단에 동일한 위치에 구현한다. <br />챗봇 링크 등 보조적인 도움 정보 역시 가급적 퀵메뉴 내 또는 건너뛰기 링크로 접근할 수 있는 영역 내에 위치하며, 페이지마다 동일한 순서와 루트로 접근할 수 있어야 한다.
						</p>
						<div class="example-wrap">
							<q-img
								src="../images/img_guide3_sub2-2_01.png"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						1. 페이지마다 일관된 내비게이션을 제공하지 않는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							스크린리더를 사용하는 사용자는 동일한 위치에서 반복되는 요소를 찾아 전체 페이지를 탐색하지 않고도 반복되는 콘텐츠를 빠르게 건너 뛸 수 있다. <br />
							사용자는 빠른 탐색을 위해 공통 구성 요소에 크게 의존하기 때문에 <mark>공통 구성 요소의 존재를 예측할 수 있어야 한다.</mark><br />
							동일한 위치 (시각 및 DOM 순서 상)에 탐색 메뉴를 유지해야 하며, 동일한 순서로 구성된 내비게이션이어야 한다. <br />
							또한 로고, 검색 기능, <GlossaryTooltip term="건너뛰기 링크" /> 등의 표준 요소 모두 동일한 위치에 배치해야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub2-2_03.png"
									fit="contain"
									:ratio="16 / 2.5"
								>
									<div class="q-img__label">오류 사례</div>
									<div class="q-img__caption">일반 페이지 GNB</div>
								</q-img>
								<q-img
									src="../images/img_guide3_sub2-2_04.png"
									fit="contain"
									:ratio="16 / 4"
								>
									<div class="q-img__caption">장바구니 페이지 진입 시 GNB</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										일반 페이지의 GNB와 장바구니 페이지의 GNB 구성이 달라 사용자의 동일한 내비게이션 탐색이 불가하다
									</p>
								</div>
							</div>
						</div>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub2-2_05.png"
									fit="contain"
									:ratio="16 / 3"
								>
									<div class="q-img__label">준수 사례</div>
									<div class="q-img__caption">일반 페이지 GNB</div>
								</q-img>
								<q-img
									src="../images/img_guide3_sub2-2_06.png"
									fit="contain"
								>
									<div class="q-img__caption">장바구니 페이지 진입 시 GNB</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										일반 페이지의 GNB(위)와 장바구니 페이지의 GNB(아래) 구성이 동일하여 사용자가 동일하게 내비게이션을 탐색할 수 있다
									</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--insight">
			<h3 class="title-type">기대 효과</h3>
			<div class="text-body">
				<ul class="list-type">
					<li>
						도움 정보가 상대적으로 동일한 위치에 제공되지 않으면, 사용자는 원하는 도움 정보를 찾는 데 어려움을 겪을 수 있다. 그러나 도움 정보가 동일한 상대적인 순서대로 제공되면, 사용자는 해당 도움 정보에 보다 쉽게 접근할 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>

