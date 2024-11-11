<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					문자 단축키가 의도하지 않게 작동하는 것을 방지하기 위해
					다음의 기능과 검사 항목이 필요하다.
				</p>
				<ul class="list-type">
					<li>단일 문자 단축키 <mark>비활성화 기능</mark> 제공</li>
					<li>단일 문자 단축키 <mark>재설정 기능</mark> 제공</li>
					<li>
						<mark>초점을 받은 상태에서만</mark> 단일 문자 단축키
						활성화
					</li>
					<li>가급적 단일 문자로 단축키를 사용하지 않는다.</li>
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
					<q-chip class="art-chip-role art-chip-role--fe"
						>퍼블/개발</q-chip
					>
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>
						손떨림이 있는 사용자, 음성 명령 사용자, 학습 또는 기억
						장애 사용자
					</p>
				</div>
			</div>
		</div>
		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						1. 단일 문자 단축키 재설정 기능 미제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide2_sub1-4_01.png"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label">오류 사례</div>
									<div class="q-img__caption">
										구글 메일의 단축키 예시
									</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										많은 기능에 단일 문자 단축키를
										제공하지만 사용자가 이를 재설정할 수
										있는 기능을 제공하고 있지 않다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide2_sub1-4_02.png"
									:ratio="1"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
									<div class="q-img__caption">
										네이버 메일의 단축키 예시
									</div>
								</q-img>

								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										사용자 설정 메뉴에서
										<mark>단축키를 비활성</mark>할 수 있는
										옵션을 추가하고,
										<mark
											>단축키를 한 개 이상의 조합키(Ctrl,
											Alt, Shift 등)와 함께 사용</mark
										>하도록
										<mark>재설정할 수 있는 기능</mark>을
										구현한다.
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
						음성명령 사용자가 음성 입력 중 의도하지 않게 단일 문자
						단축키가 실행되는 오작동을 방지할 수 있다.
					</li>
					<li>
						손 사용이 원활하지 않은 사용자의 단일 문자 단축키 사용
						오류를 방지할 수 있다.
					</li>
					<li>
						모든 사용자는 단일 문자 단축키 재설정 기능을 통해 익숙한
						단축키로 변경하여 사용성을 향상시킬 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.ex {
	ul,
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	button:focus,
	a:focus {
		outline: 1px solid #000 !important;
	}
}
</style>
