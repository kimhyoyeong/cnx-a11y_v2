<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<ul class="list-type">
					<li>
						<mark
							>시간제한이 있는 콘텐츠는 시간적인 제약이 있음을
							사용자에게 반드시 알려주어야 한다.</mark
						>
					</li>
					<li>
						시간제한이 있는 콘텐츠는 그 변화를 사용자가 제어할 수
						없는 콘텐츠로 아래와 같다.

						<ol  class="list-type">
							<li>
								<mark>일정한 시간마다</mark> 그 내용의 일부 또는
								전체가 <mark>자동적으로 갱신</mark>되는 콘텐츠
							</li>
							<li>
								<mark
									>일정한 시간이 경과하면 다른 웹 페이지로
									이동</mark
								>하도록 구성된 콘텐츠
							</li>
							<li>
								사용자가 제어하지 않아도
								<mark>자동적으로 스크롤</mark>되는 콘텐츠
							</li>
							<li>
								일정시간 후 사라지거나 접근이 차단되는 콘텐츠 등
								<mark>시간제한이 있는 콘텐츠</mark>
							</li>
						</ol>
					</li>
					<li>
						예외 경우에 해당하는 콘텐츠를 제외한 모든 콘텐츠는
						<mark
							>시간제약을 회피하거나 우회할 수 있는 수단을 함께
							제공해야 한다.</mark
						><br />
						(예외 : 경매나 실시간 게임, 듣기평가용 콘텐츠 등과 같이
						원천적으로 콘텐츠의 이용에 따르는 시간 조절을 허용할 수
						없는 콘텐츠)
					</li>
					<li>
						시간제한이 있는 콘텐츠는
						<mark>가급적 포함하지 않는 것이 바람직</mark>하며, 보안
						등의 사유로 시간제한이
						<mark
							>반드시 필요할 경우 이를 회피할 수 있는 수단을
							제공한다.</mark
						>
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
					<p>인지 장애, 시각 장애, 저시력 사용자, 운동 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						콘텐츠에
						<mark
							>시간적인 제약이 있음을 사용자에게 반드시 알려주어야
							한다.</mark
						>
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="/images/img_guide2_sub2-1_01.png"
									:ratio="817 / 311"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<ol class="list-type">
										<li>
											반응시간 조절은 충분한 시간(<mark
												>기본 설정의 최소 10배의
												범위</mark
											>)을 두어야 한다.
										</li>
										<li>
											<mark
												>사전에 공지를 하거나 세션이
												만료되기 전에 경고 메시지</mark
											>를 함께 제공해 해주어야 한다.
										</li>
										<li>
											<mark
												>최소 20초 이상, 10회 이상
												시간을 연장</mark
											>할 수 있어야 한다.
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						자동으로 변경되는 배너, 텍스트 스크롤 등과 같은 콘텐츠는
						<mark>정지 기능을 제공</mark>하여 움직임을 제어할 수
						있어야 한다.
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide2_sub2-1_02.png"
									:ratio="817 / 311"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<ol class="list-type">
										<li>
											변화하는 콘텐츠를 일시 정시 시키고,
											다시 재생할 수 있도록
											<mark>컨트롤 제공</mark>
										</li>
										<li>
											전체 배너의 갯수를 인지할 수 있도록
											<mark>리스트 제공</mark>
										</li>
										<li>
											마우스 뿐만 아니라 키보드로도
											<mark
												>모든 컨트롤 요소에 초점이 갈 수
												있도록 제공</mark
											>
										</li>
									</ol>
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
						비장애인보다 문서를 읽고 이해하는 데 더 많은 시간이
						필요한 지적장애 또는 학습장애가 있는 사용자도 시간제한이
						있는 콘텐츠를 시간에 관계없이 이용할 수 있게 된다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<!-- <script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script> -->
