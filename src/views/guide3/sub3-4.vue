<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					반복되는 입력 정보는 자동 입력 또는 선택 입력할 수 있어야
					한다. <br />
					사용자가 한 번 입력한 값을 반복적으로 입력하도록 제공할
					경우, 정보 입력에 어려움이 있는 사용자는 매우 불편하고 많은
					시간이 소요될 수 있다. 입력이 어려운 사용자가 입력 과정을
					줄일 수 있도록,
					<mark
						>반복되는 입력 정보에서 자동 입력이나 정보
						불러오기</mark
					>
					등 이미 입력한 정보를 활용하여 직접 입력을 줄일 수 있도록
					구현한다.
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
					<p>상지지체, 뇌병변, 지적 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>
			<ul class="list-type">
				<li>
					주문, 신청, 등록, 가입 등 하나의 과정을 여러 단계로 나누어
					제공한 페이지의 각 단계에서 사용자가 동일한 정보를 반복
					입력하는 경우, 반복 입력을 줄일 수 있는 방법을 제공해야
					한다.
				</li>
				<li>
					예를 들어, 온라인 주문 과정에서 주문자와 수령자 주소가 같은
					경우 체크박스를 선택하여 자동으로 채울 수 있도록 제공한다.
				</li>
				<li>
					다만, 비밀번호와 같이 보안 목적 등으로 재입력이 필수적인
					경우, 예외로 간주한다.
				</li>
			</ul>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">입력한 정보 불러오기 기능 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-4_02.jpg"
									fit="contain"
									:ratio="16 / 9"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
							</div>
						</div>
						<p>
							주문, 신청, 등록, 가입 등 하나의 과정에서 사용자가
							동일 입력값을 반복적으로 입력할 수 있는 콘텐츠에
							대해
							<mark>이전에 입력한 값을 불러올 수 있는 기능</mark
							>을 구현한다.
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
						1. 반복입력 가능 정보에 대한 자동입력 또는 선택입력 기능
						미제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub3-4_01.jpg"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										배송 서비스 이용 과정에서 사용자가
										보내는 분의 정보를 입력한 후 동일한 값을
										입력할 수 있는 받는 분의 이름, 연락처
										정보에 대해 자동입력이나 선택입력 기능을
										제공하지 않은 경우
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-4_02.jpg"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										사용자가 동일한 값을 반복적으로 입력하는
										것을 방지하기 위해 보내는 분 정보에서 한
										번 입력한 값을 불러와서 받는 분의 정보를
										자동 입력해주는 기능을 구현한다.
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
						반복되는 정보를 불필요하게 직접 입력하는 횟수를 줄여,
						직접 입력이 어려운 사용자를 포함한 모든 사용자가
						효율적으로 서식 작성을 끝낼 수 있도록 돕는다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
