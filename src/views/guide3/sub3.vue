<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					입력서식 작성 시, 사용자의 실수로 오류가 발생할 경우, 이를
					정정할 수 있는 방법을 제공해야 한다.
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
						시각 장애 사용자, 인지/언어 및 학습 장애를 가진 사용자
					</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>
			<ul class="list-type">
				<li>
					온라인 서식에서 오류가 발생하는 경우, 사용자에게
					<mark>오류가 발생한 위치와 원인</mark> 등에 관한 정보를 알려
					주어야 한다. 여기서 오류정보는 단순히 사용자에게 문제가
					발생했음을 알려주는 데 그치지 않고 본래 수행하고자 했던
					행동을 완수할 수 있게 유도해야 한다.
				</li>
				<li>
					예를 들어, 이름, 주소, 전화번호, 이메일 주소를 입력하도록
					구성한 입력 서식에서 일부 항목을 기입하지 않고 제출하였을
					경우,
					<mark>어떤 항목의 입력이 누락되었는지</mark>를 알려 주어야
					한다.
				</li>
				<li>
					오류 원인에 관한 정보를 제공하는 동시에
					<mark>오류 발생한 지점으로 초점을 이동</mark>시켜, 사용자가
					오류의 내용을 즉시 확인하고 수정할 수 있도록 할 수 있다.
				</li>
			</ul>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						입력 오류 시에도 사용자가 기 입력했던 내용은 초기화되지 않도록 유지
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							입력 완료 후 또는 제출 시 오류가 발생하면
							<mark
								>사용자가 입력한 내용이 사라지지 않고
								유지되도록</mark
							>
							제공하여, 사용자가 동일한 내용을 처음부터 다시
							입력해야 하는 번거로움을 줄일 수 있다.
						</p>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						입력 형식에 대한 예시 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
								<div class="example-box__text q-mb-xl">
									<div class="text-right">
										<div class="row q-mr-xl">
											<span class="col-4 q-mr-sm q-pa-sm"
												>아이디</span
											>
											<input 
												type="text" 
												placeholder="4~20자리 / 영문, 숫자, 특수문자'_'사용가능" 
												class="col-6 q-pa-xs"
											/>
										</div>
										<div class="row q-mr-xl q-mt-sm">
											<span class="col-4 q-mr-sm q-pa-sm"
												>비밀번호</span
											>
											<input
												type="password"
												placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
												class="col-6 q-pa-xs"
											/>
										</div>
										<div class="row q-mr-xl q-mt-sm">
											<span class="col-4 q-mr-sm q-pa-sm"
												>이름</span
											>
											<input
												type="text"
												placeholder="이름 입력"
												class="col-6 q-pa-xs"
											/>
										</div>
										<div class="row q-mr-xl q-mt-sm">
											<span class="col-4 q-mr-sm q-pa-sm"
												>생년월일</span
											>
											<input
												type="text"
												placeholder="YYYYMMDD"
												class="col-6 q-pa-xs"
											/>
										</div>
									</div>
								</div>
						<p>
							<mark
								>입력 서식에 어떤 순서로 무슨 값을 넣어야 하는지 정확한 설명</mark
							>을 미리 해줌으로써 사용자들마다 다르게 해석할 수 있는 여지를 줄여주어야 한다.
						</p>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">오류 내용 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-1_01.png"
									:ratio="16 / 6"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
							</div>
						</div>
						<p>
							사용자가 오류의 내용을 알 수 있도록 안내 텍스트를
							제공한다. 이 때 안내 텍스트는 사용자의 눈에 잘
							띄도록 제공한다.
						</p>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">오류 발생 지점으로 초점 이동</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-1_02.png"
									:ratio="16 / 6"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
							</div>
						</div>
						<p>
							입력 오류가 발생한 지점으로 초점을 이동시켜 사용자가
							즉시 확인하고 수정할 수 있도록 제공한다.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">1. 명확하지 않은 오류 내용 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub3-1_03.jpg"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										필수 입력 항목의 누락 오류 발생 시,
										누락된 항목을 자세히 알리지 않고 단순히
										항목을 입력해 달라는 메세지만 노출해
										사용자가 직접 탐색해 보지 않으면 어떤
										항목을 누락했는지 인식하기 어렵다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-1_04.jpg"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>어떤 항목이 누락되었는지 항목의 이름을
										적어 자세히 알리고, 알림창이 꺼지고 나서
										오류가 난 항목의 입력 서식으로 초점이
										이동하도록 구현하면 사용자가 오류를 바로
										탐지하여 수정할 수 있다.</p>
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
						입력 오류를 수정할 수 있는 방법을 명확하게 제공하는 것은
						학습장애가 있는 사용자의 입력 서식 작성을 돕는다.
					</li>
					<li>
						오류 발생 지점에만 오류 표시를 하면 시각장애인이나
						저시력장애인은 오류 지점에 도달하기 전까지 어떤 오류가
						발생했는지 알기 어렵지만, 오류 내용을 먼저 텍스트로
						설명해주거나, 오류 발생 지점으로 초점을 이동시킨 후
						오류의 내용을 설명해주면 더 쉽게 오류를 정정할 수 있다.
					</li>
					<li>
						실수로 인해 빚어지는 심각한 결과 또는 과실을 피하기 위해
						오류 정정에 필요한 정보나 수단을 제공하는 것은
						장애인뿐만 아니라 비장애인에게도 도움을 준다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
