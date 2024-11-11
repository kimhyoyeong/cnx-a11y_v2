<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					사용자 입력은 용도를 이해할 수 있도록 레이블을 제공해야
					한다.
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
					<p>화면 낭독 프로그램을 사용하는 시각 장애인</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<ul class="list-type">
				<li>
					사용자 입력 근처에 사용법을 알려주는 레이블을 보조기술이 알
					수 있도록
					<mark>해당 콘트롤과 대응하여 제공</mark>해야 한다.
				</li>
				<li>
					레이블과 사용자 입력 간의 관계를 보조기술이 인식할 수 있도록
					대응시키지 않고 단순히 텍스트로만 제공할 경우, 보조기술은
					해당 사용자 입력에 대한 레이블을 인식할 수 없다.
				</li>
			</ul>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						입력 서식과 &lt;label&gt;의 명시적 관계 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<div class="text-right">
										<div class="row q-mr-xl">
											<span class="col-4 q-mr-sm"
												>아이디</span
											>
											<input type="text" class="col-6" />
										</div>
										<div class="row q-mr-xl q-mt-sm">
											<span class="col-4 q-mr-sm"
												>비밀번호</span
											>
											<input
												type="password"
												class="col-6"
											/>
										</div>
									</div>
								</div>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
									code='<span>아이디</span>
<input type="text" />'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<div class="text-right">
										<div class="row q-mr-xl">
											<label
												for="user_id"
												class="col-4 q-mr-sm"
												>아이디</label
											>
											<input
												type="text"
												id="user_id"
												class="col-6"
											/>
										</div>
										<div class="row q-mr-xl q-mt-sm">
											<label
												for="user_pw"
												class="col-4 q-mr-sm"
												>비밀번호</label
											>
											<input
												type="password"
												id="user_pw"
												class="col-6"
											/>
										</div>
									</div>
								</div>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>준수 사례</p>
								</div>
								<VCodeBlock
									code='<label for="user_id">아이디</label>
<input type="text" id="user_id" />'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>

						<p>
							입력 서식에는 반드시 무엇을 입력해야 하는지 정확히
							안내해주는 레이블, 즉 입력 서식에 대한 제목이 있어야
							한다. <br />
							레이블은 서식 가까이 제공되는 것도 중요하지만 보다
							중요한 것은
							<mark>레이블이 해당 서식과 짝지어지도록 제공</mark
							>하는 것이다. <br />
							HTML에서 &lt;label&gt; 요소를 이용해 서식의 레이블을
							표시하고, 레이블과 서식을 짝짓기 위해 레이블의 for
							속성과 서식의 id 속성값을 일치시킨다.
						</p>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						&lt;label&gt;을 제공할 수 없는 입력 서식에 title 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<div class="text-center">
										<input type="text" id="user_id" placeholder="아이디" />
									</div>
								</div>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
									code='<input type="text" id="user_id" placeholder="아이디" />'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<div class="text-center">
										<input type="text" id="user_id" placeholder="아이디" title="아이디" />
									</div>
								</div>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>준수 사례</p>
								</div>
								<VCodeBlock
									code='<input type="text" id="user_id" placeholder="아이디" title="아이디" />'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>

						<p>
							시각적인 디자인을 고려하여 레이블을 표시하기 어려운
							경우 서식 요소의 title 속성을 이용하여 서식의 제목을
							넣어주면 대부분의 보조 기술에서 이것을 인식할 수
							있고, 시각적인 브라우저에서도 툴 팁으로 표시되어
							사용자에게 도움을 준다.
						</p>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						여러 개의 유사한 입력 서식 묶기
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub3-2_01.png"
							:ratio="16 / 8"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>해결 방안</p>
								</div>
								<VCodeBlock
								code='<form action="http://example.com/" method="post">
	<fieldset>
		<legend>기본정보</legend>

		<label for="user_l_name">이름</label>
		<input type="text" id="user_l_name" name="user_l_name" />
		.
		.
		.
		<label for="user_birth">생년월일</label>
		<input type="date" id="user_birth" name="user_birth" />
	</fieldset>

	<fieldset>
		<legend>주소정보</legend>
		<label for="user_address">주소</label>
		<input type="text" id="user_address" name="user_address" />
		<label for="user_address2">상세주소</label>
		<input type="text" id="user_address2" name="user_address2" />
		<label for="czip">우편번호</label>
		<input type="text" id="czip" name="czip" />
	</fieldset>
</form>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
						<p>
							위 사례는 회원가입 정보를 입력하는 서식에서, 입력
							서식들을 기본정보와 주소정보라는 그룹으로 묶어서
							나타내고 있다. <br />
							이처럼 입력 서식이 많은 경우, 논리적으로 유사한
							서식을 &lt;fieldset&gt;이라는 요소를 이용하여 묶는
							것이 사용자가 서식을 이해하는 데 도움이 된다.
							<br />이 때, &lt;fieldset&gt;요소의 시작 부분에는
							항상 해당 그룹의 제목을 &lt;legend&gt;를 이용해
							표시해주어야 한다. 일반적인 화면 낭독 프로그램에서
							각 서식의 &lt;label&gt;을 읽기 전, &lt;legend&gt;
							값을 앞에 덧붙여주기 때문에 사용자는 어떤 맥락에서
							값을 입력하는지 잊어버리지 않고 응답할 수 있다.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--insight">
			<h3 class="title-type">기대 효과</h3>
			<div class="text-body">
				<ul class="list-type">
					<li>
						레이블과 사용자 입력 간의 관계를 보조기술이 인식할 수
						있도록 대응시키면 화면낭독프로그램을 사용하는
						시각장애인에게 해당 콘트롤이 어떤 용도로 사용되는지를
						알려줄 수 있으므로 잘못된 데이터의 입력을 방지할 수
						있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
