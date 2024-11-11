<template>
	<section>
		<div class="art-content art-content--overview">
			<!-- <p class="text-head">
				4-1. 색에 무관한 콘텐츠 인식
			</p> -->
			<div class="text-body">
				<p>
					콘텐츠에서 제공하는 모든 정보는 특정한 색을 구별할 수 없는
					사용자, 흑백 디스플레이 사용자, 흑백 인쇄물을 보는 사용자 및
					<GlossaryTooltip term="고대비 모드" />
					사용자가 인식할 수 있도록 제공해야 한다.
				</p>
			</div>
		</div>

		<div class="art-content art-content--role">
			<div class="role-box">
				<q-icon name="groups" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 직군</h3>
					<q-chip class="art-chip-role art-chip-role--designer"
						>디자인</q-chip
					>
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>
						저시력 사용자, 노안이 있는 사용자, 색상 대비에 대한 색각
						이상이 있는 경우
					</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>
			<p>
				차트, 슬라이드 버튼, 페이지네이션, 탭 버튼은 색이 아닌 패턴,
				굵기, 모양, 테두리 등의 다양한 방법으로 구분할 수 있도록
				제공한다.
			</p>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">슬라이드 버튼의 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							활성상태와 비활성상태를 아이콘 모양, 굵기, 테두리
							등을 통해 구분이 가능하도록 구현한다. 예제에서는
							활성상태 <mark>버튼 모양에 변화</mark>를 주어
							비활성화 상태와 구별하고 있다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4_05.png"
									:ratio="16 / 9"
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
					<q-icon name="check"></q-icon>
					<h4 class="title-type">페이지네이션의 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							활성상태와 비활성상태를 아이콘 모양, 굵기, 테두리
							등을 통해 구분이 가능하도록 구현한다. 예제에서는
							활성상태 <mark>아이콘 모양에 변화</mark>를 주어
							비활성화 상태와 구별하고 있다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4_06.png"
									:ratio="16 / 9"
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
					<q-icon name="check"></q-icon>
					<h4 class="title-type">탭 버튼의 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							활성상태와 비활성상태를 아이콘 모양, 굵기, 테두리
							등을 통해 구분이 가능하도록 구현한다. 예제에서는
							활성상태 아래 <mark>테두리에 굵기 변화</mark>를 주어
							비활성화 상태와 구별하고 있다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4_07.png"
									:ratio="16 / 9"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">1. 색에 의한 정보 표현 방지</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							차트나 그래프 등을 고대비 모드로 화면에 표시하면
							모든 색이 단색(회색조)으로 표시되어 사용자가 색을
							구분하지 못하는 경우가 발생한다. 따라서 사용자가
							경조 모드에서도 콘텐츠를 인식할 수 있도록 색만을
							이용하여 정보를 제공하지 않아야 한다. 즉, 색은
							시각적인 강조를 위해서만 사용해야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide1_sub4_01.png"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label q-img__label--bad">
										오류 사례
									</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>체크박스의 선택여부를 색상으로 표현</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4_02.png"
									:ratio="1"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										체크박스의 선택여부를 아이콘 형태로 구분
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">2. 무늬를 이용한 정보 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							서로 다른 정보를 무늬로 구분하여 표시하면 경조 모드
							사용자, 단색 디스플레이 사용자, 흑백 인쇄물의
							사용자도 정보를 충분히 구분할 수 있다. 무늬와 색을
							동시에 이용한 콘텐츠는 색각장애가 있는 사용자도
							접근이 가능하다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide1_sub4_03.png"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label q-img__label--bad">
										오류 사례
									</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>데이터를 색상으로 구분</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4_04.png"
									:ratio="1"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>데이터를 색상 및 패턴으로 구분</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">3. 구분을 위한 텍스트 정보 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							색을 이용하여 서식의 용도를 나타내는 경우와 같이 정보를 제공하는 수단으로 색을 사용한다면 보완 방법을 함께 제공하여 색의 의미를 전달할 수 있어야 한다. 가장 쉬운 방법은 색의 의미를 텍스트로 제공하는 것이다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide1_sub4_08.png"
									fit="contain"
									:ratio="16 / 9"
								>
									<div class="q-img__label q-img__label--bad">
										오류 사례
									</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>정보를 색상으로 구분</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4_09.png"
									:ratio="16 / 9"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>정보를 색상으로 구분하여 텍스트와 함께 전달</p>
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
						색의 차이가 정보의 다름을 나타내지 않으므로, 색을
						인지하는 데 장애가 있는 사용자도 혼동을 일으킬 염려가
						없게 된다.
					</li>
					<li>
						흑백 스크린(구형 PDA 등) 또는 고대비 모드 사용자도
						콘텐츠의 내용이나 구조를 손쉽게 이해할 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
