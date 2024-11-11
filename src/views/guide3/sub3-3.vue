<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					인증 과정은 인지 기능 테스트에만 의존해서는 안 된다.<br />
					사용자의 인지 및 학습 능력에 의존한 인증방식을 제공할 경우,
					기억/읽기/계산/풀이/해독 등에 어려움이 있는 사용자는 인증이
					불가능할 수 있다. 인지 및 학습이 어려운 사용자도 스스로
					인증할 수 있도록 도움을 주기 위해, 해당 능력에 의존하지 않는
					인증방식을 선택하여 인증 과정을 수행할 수 있도록 구현한다.
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
					<p>학습 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>
			<p>
				사용자가 인증을 하기 위해 사용자의 인지 및 학습 능력에 의존한
				인증방식<small
					>(예: 로그인을 위한 비밀번호 입력, 터치스크린 화면의 패턴
					인식, 임의의 문자열 기억, 계산 수행, 특정 객체를 포함하고
					있는 이미지 찾기 등)</small
				>을 제공할 경우, 다음과 같이
				<mark
					>사용자의 인지 및 학습 능력에 의존하지 않는 인증방식을
					병행해서 제공</mark
				>해야 한다.
			</p>
			<ul class="list-type">
				<li>
					브라우저가 아이디/비밀번호를 저장할 수 있도록 마크업된 서식
				</li>
				<li>
					공개인증<small>(OAuth: Open Authorization)</small>을 통한
					제3자 인증방식
				</li>
				<li>
					신체<small>(얼굴, 지문 등)</small>나 물건<small
						>(휴대폰, USB 등)</small
					>을 이용한 인증
				</li>
				<li>
					사용자 자신에게 익숙하여 별도의 인지적인 노력을 필요로 하지
					않는 개인정보(이름, 이메일 주소, 전화번호 등) 확인을 통한
					인증
				</li>
			</ul>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">아이디/비밀번호 저장 기능 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-3_01.jpg"
									:ratio="16 / 5"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
							</div>
						</div>
						<p>
							사용자가 아이디/비밀번호를 입력하여 인증할 경우,
							아이디 및 비밀번호를 사용자가 선택적으로 저장할 수
							있는 옵션을 체크박스로 구현한다.
						</p>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						공개인증을 통한 제3자 인증방식 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-3_03.jpg"
									:ratio="16 / 9"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
							</div>
						</div>
						<p>
							사용자 인증이 필요한 경우, 인터넷 애플리케이션에서
							사용자 인증에 사용되는 공개 API(OpenAPI)로 구현된
							표준 인증 방법인 공개인증(OAuth: Open
							Authorization)을 통한 제3자 인증방식을 제공한다.
						</p>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">다양한 생체인증 기능 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							사용자 인증이 필요한 경우, 사용자의 인지 능력과
							상관없이 신체를 이용하여 바로 인증할 수 있는
							지문인식이나 안면인식 등의 기능을 제공한다. 이 때,
							사용자의 신체적 특징을 고려하여 2가지 이상의 상이한
							방법을 제공하는 것이 바람직하다.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						1. 제시된 문제를 해결하는 인증방식 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub3-3_04.jpg"
									fit="contain"
									:ratio="4 / 3"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										제시된 퀴즈를 확인한 후 정답을 찾아서
										직접 입력하여 인증할 수 있도록 제공된
										경우, 사용자의 학습 능력이나 지적 능력에
										의존해야 하기 때문에 부적절하다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-3_05.jpg"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										사용자 인증 과정에서 성명, 전화번호,
										이메일주소 등 사용자 자신에게 익숙한
										개인정보를 입력하여 인증할 수 있는
										인증방식을 제공한다.
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
						기억, 읽기, 숫자계산 등에 어려움이 있는 사용자도 인지
						능력에 상관없이 인증 과정을 수행할 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
