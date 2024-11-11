<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					웹 콘텐츠를 사용하는 데 필요한 <GlossaryTooltip term="플러그인" /> 또는 웹 페이지의 기능을 실행하는 데 필요한 <GlossaryTooltip term="웹 애플리케이션" />은 사용자가 웹 페이지에 접근하여 사용하는 것을 방해하지 않아야 한다. 웹 애플리케이션은 다음에 설명한 모든 요구사항을 적용하여 제작해야 한다.
				</p>
				<ul class="list-type">
					<li>
						<strong>접근성 프로그래밍 인터페이스 사용 지원</strong><br>
						웹 애플리케이션은 운영체제 또는 플랫폼이 제공하는 접근성 프로그래밍 인터페이스를 사용하여 제작해야 한다. 그렇지 않으면 <GlossaryTooltip term="보조기술" />이 웹 애플리케이션의 접근성 기능을 지원하지 못하는 경우가 발생할 수 있다.
					</li>
					<li>
						<strong>접근성 프로그래밍 인터페이스 대체수단 제공</strong><br>
						웹 애플리케이션을 구현하는 과정에서 운영체제(플랫폼 포함)가 제공하는 접근성 프로그래밍 인터페이스가 정의되지 않은 새로운 기능을 구현할 경우, 그 기능의 명칭, 역할, 상태 및 값에 관한 정보를 운영체제(또는 플랫폼)의 접근성 프로그래밍 인터페이스로 전달하도록 구현함으로써 보조기술이 그 정보를 이용할 수 있게 해야 한다.
					</li>
					<li>
						<strong>보조기술 지원</strong><br>
						국내의 보조기술로 접근이 불가능한 웹 애플리케이션은 가능한 한 사용하지 않는 것이 좋으며, 반드시 사용해야 하는 경우, 해당 웹 애플리케이션에 대한 대체수단을 제공해야 한다.
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
					<p>저시력 사용자, 시각 장애, 청각 장애, 읽기 장애, 인지 장애, 학습 장애, 운동 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						공개된 웹 서비스의 경우, 다수의 사용자가 보편적으로 이용할 수 있는 웹 애플리케이션을 사용한다.
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							사용자의 환경에 따라 웹 애플리케이션 이용 가능 여부가 달라진다.<br>
							최대한 보편적으로 사용하는 웹 애플리케이션을 사용하여, 가능한 한 서비스 이용에 제약이 없도록 한다.
						</p>
						<div class="example-wrap">
							<div class="example-box">
								<q-img
									src="../images/img_guide4_sub2-1_01.png"
									fit="contain"
								>
									<div class="q-img__label">
										예시 이미지
									</div>
								</q-img>
								<div class="example-box__text">
									<p><strong>오픈 API 사이트 예시</strong></p><br>

									<q-btn
										outline
										color="primary"
										icon="link"
										no-caps
										href="https://cloud.google.com/apis?hl=ko"
										target="_blank"
										label="구글 API"
									/>
									&nbsp;
									<q-btn
										outline
										color="primary"
										icon="link"
										no-caps
										href="https://developers.kakao.com/tool"
										target="_blank"
										label="카카오 API"
									/>
									&nbsp;
									<q-btn
										outline
										color="primary"
										icon="link"
										no-caps
										href="https://www.data.go.kr/"
										target="_blank"
										label="공공데이터포털"
									/>
									&nbsp;
									<q-btn
										outline
										color="primary"
										icon="link"
										no-caps
										href="https://www.culture.go.kr/data/main/main.do"
										target="_blank"
										label="문화데이터 광장"
									/>
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
						웹 애플리케이션이 지원되지 않는 환경을 위한 대체 수단을 제공한다.
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							웹 애플리케이션이 지원되지 않는 환경에서 사용자가 서비스 이용에 제약이 없도록 대체 수단을 안내 또는 제공한다.<br>
							예시로 챗봇을 지원하는 서비스의 경우, 챗봇을 이용하지 못하는 사용자를 위해 CONTACT 수단을 추가로 제공해야 한다.
						</p>
						<div class="example-wrap">
							<div class="example-box">
								<q-img
									src="../images/img_guide4_sub2-1_02.png"
									fit="contain"
								>
									<div class="q-img__label">
										예시 이미지
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
						1. 웹 애플리케이션이 웹 접근성을 준수하지 못한 컨텐츠를 가질 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							보조 기술을 이용하는 사용자가 서비스의 일관된 경험을 느낄 수 있도록<br>
							기존 사이트에서 준수한 키보드 접근, 대체 텍스트 등의 접근성 규칙을 가능한 동일하게 적용한다.<br><br>
							이 때 웹 애플리케이션이 웹 접근성을 준수하지 못한 컨텐츠를 포함하고 있을 경우, <br>
							보조 기술을 이용하는 사용자가 탐색에 제약을 느끼지 않도록 사전에 안내를 해주고<br>
							건너뛰기 링크를 제공하여 서비스 이용을 이어서 할 수 있도록 한다.
						</p>

						<div class="example-wrap example-wrap--col">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub2-1_04.png"
									fit="contain"
									:ratio="2 / 1"
								>
									<div class="q-img__label">
										준수 사례
									</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										위치 정보를 위해 구글지도 API를 사용하였으나 접근성을 준수하지 못한 컨텐츠를 담고 있어 건너 뛰기 링크를 제공한 사례
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
						웹 애플리케이션이 접근성을 제공할 경우 보조기술이 웹 애플리케이션과 상호작용 가능하므로, 보조기술 사용자가 웹 애플리케이션을 활용할 수 있다.
					</li>
					<li>
						웹 애플리케이션에 적용하려는 기능이 플랫폼 접근성 프로그래밍 인터페이스를 지원하지 못하더라도 필수적인 접근성 정보를 플랫폼 접근성 프로그래밍 인터페이스를 통하여 보조기술로 제공할 수 있게 되므로 새롭고 접근성이 있는 기술 개발이 가능하다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
