<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					장치를 움직이거나(예: 흔들기 또는 기울이기) 카메라 같은
					센서로 제스처를 감지하여 작동되도록 하는 기능이 버튼 등의
					익숙한
					<GlossaryTooltip term="사용자 인터페이스 구성요소" />로도
					조작될 수 있도록 보장해야 한다. 또한, 떨림이나 다른 운동
					장애로 인하여 일부 사용자는 의도하지 않게 센서를 활성화시킬
					수 있다. 사용자는 이러한 의도하지 않은 기능이 작동되는 것을
					방지하기 위하여 동작기반 작동을 비활성화할 수 있어야 한다.
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
					<q-chip class="art-chip-role art-chip-role--fe"
						>퍼블/개발</q-chip
					>
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>신체장애, 시각장애, 인지 또는 학습장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>
			<p>
				동작기반으로 작동되는 기능은 사용자 인터페이스 구성요소로 조작할
				수 있고, 동작기반 기능을 비활성화할 수 있어야 한다.
			</p>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">동작기반 작동 비활성화 기능 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							떨림이나 운동장애 등으로 인해 우발적으로 동작기반
							센서가 반응하여 특정 기능이 동작하는 것을 방지하기
							위해
							<mark
								>동작기반 작동을 비활성화할 수 있는 기능을
								제공</mark
							>해야 한다.
						</p>
						<div class="example-wrap">
							<div class="example-box">
								<q-img
									src="../images/img_guide4_sub5-4_01.png"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label">
										예시 이미지 1
									</div>
								</q-img>
							</div>
							<div class="example-box">
								<q-img
									src="../images/img_guide4_sub5-4_02.png"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label">
										예시 이미지 2
									</div>
								</q-img>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						동작기반 작동을 버튼 등 익숙한 사용자 인터페이스
						구성요소로 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							흔들기 기능 이외에
							<mark
								>익숙한 사용자 인터페이스인 "<q-img src="../images/img_guide4_sub5-4_04.png" ratio="1" fit="contain" style="width: 1em; height" alt="qr코드 스캐너"></q-img>" 버튼을 눌러도 해당
								기능을 실행</mark
							>할 수 있다.
						</p>
						<div class="example-wrap">
							<div class="example-box">
								<q-img
									src="../images/img_guide4_sub5-4_03.png"
									fit="contain"

									:ratio="1"
								>
									<div class="q-img__label">
										예시 이미지 1
									</div>
								</q-img>
							</div>
							<div class="example-box">
								<q-img
									src="../images/img_guide4_sub5-4_02.png"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label">
										예시 이미지 2
									</div>
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
					<h4 class="title-type">
						1. 동작기반 작동(흔들기)에 대한 비활성화 기능 미제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							흔들어서 결제 카드를 실행하는 동작기반 작동을
							제공하고 있으나, 작동을 비활성화할 수 있는 기능이
							제공되고 있지 않다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										흔들어서 결제 카드를 실행하는 동작기반
										작동을 제공하고 있으나, 작동을
										비활성화할 수 있는 기능이 제공되고 있지
										않다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										흔들어서 결제 카드를 실행하는 동작기반
										작동을 제공할 경우, 비활성화할 수 있는
										기능을 제공한다.
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
						장치가 고정되어 있거나 특정 동작을 행할 수 없는 사용자도
						기능을 사용할 수 있다.
					</li>
					<li>
						정확한 동작을 할 수 없거나, 의도하지 않은 동작으로
						기능이 실행되는 것을 방지할 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
