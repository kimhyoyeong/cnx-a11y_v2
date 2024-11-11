<template>
	<section>
		<div class="art-content art-content--overview">
			<!-- <p class="text-head">
				4-3. 텍스트 콘텐츠의 명도 대비
			</p> -->
			<div class="text-body">
				<p>
					텍스트 콘텐츠와 배경 간의 명도대비는 4.5 대 1 이상이어야
					한다.
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

			<ol class="list-type">
				<li>
					단색 배경의 경우 텍스트간의 명도 대비를 만족하도록 배경색과
					텍스트 색을 선정한다.
				</li>
				<li>
					배경과 텍스트에 무늬를 주는 경우 상대적인 명도 대비가 4.5:1
					이상이 되도록 한다. <br />
					예를 들어, 문자의 아랫부분을 어둡게, 윗부분을 밝게 표시하는
					경우, 문자의 배경을 위쪽은 어둡게, 아래쪽은 밝게디자인한다.
				</li>
				<li>
					배경색과 텍스트를 같은 계열의 색을 사용하여 명도 대비를
					만족할 수 없다면 문자에 테두리(halo)를 표시하여 테두리와
					문자간의 명도 대비를 이용하여 텍스트의 구분이 가능하도록
					구현한다.
				</li>
			</ol>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">단색 배경의 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							텍스트간의 명도 대비를 만족하도록 배경색과 텍스트
							색을 선정한다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4-3_07.jpg"
									fit="contain"
									:ratio="16 / 6"
								>
									<div
										class="q-img__label"
									>
										준수 사례
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
					<h4 class="title-type">배경과 텍스트에 무늬를 주는 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							배경색과 텍스트를 같은 계열의 색을 사용하여 명도
							대비를 만족할 수 없다면 문자에 테두리(halo)를
							표시하여 테두리와 문자간의 명도 대비를 이용하여
							텍스트의 구분이 가능하도록 구현한다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4-3_08.jpg"
									fit="contain"
									:ratio="16 / 6"
								>
									<div
										class="q-img__label"
									>
										준수 사례
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
					<h4 class="title-type">1. 텍스트</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							텍스트 콘텐츠와 배경 간의 명도 대비가
							4.5 대 1 이상이 되도록 제공한다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide1_sub4-3_03.jpg"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label q-img__label--bad">
										오류 사례
									</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										이미지 내부 텍스트와 배경색의 명도대비가
										낮아 일부 사용자는 텍스트를 읽는데
										어려움을 겪게 된다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4-3_04.jpg"
									:ratio="1"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										이미지 내부 텍스트와 배경 사이의 명도
										대비가 충분히 제공되어 다수의 사용자가
										텍스트를 읽는데 어려움이 없다.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">2. 의미 있는 이미지</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							이미지와 배경 간의 명도 대비가 4.5 대 1 이상이
							되도록 제공한다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide1_sub4-3_05.jpg"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label q-img__label--bad">
										오류 사례
									</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										무료배송 아이콘이 1.5:1의 낮은 대비를
										제공하고 있어, 일부 시각 장애를 가진
										사용자는 다른 도구의 도움 없이는 정보를
										인식하는데 어려움을 겪을 수 있다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4-3_06.jpg"
									:ratio="1"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										명도 높은 색으로 아이콘을 변경하면
										4.6:1의 충분한 색상 대비를 제공하여 보조
										기술의 도움 없이 화면을 인식 할 수 있는
										사용자가 어려움 없이 인식할 수 있다.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						3. 고대비로 전환하는 스타일 전환기 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<q-img
							src="../images/img_guide1_sub4-3_10.jpg"
							fit="contain"
						>
						</q-img>
						<p>
							충분한 명도 대비를 제공하기 어려운 기본
							스타일에 대한 대안으로써 고대비로 충분한
							명도 대비를 제공하는 별도의 대안
							스타일(예: 다크 테마)로 전환할 수 있는
							설정을 제공할 수 있다. 기본 스타일에서의
							충분하지 못한 대비로 콘텐츠 사용이
							어려운 사용자의 경우, 고대비가 제공된
							대안 스타일을 사용하여 충분한 명도
							대비를 제공 받을 수 있다.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--insight">
			<h3 class="title-type">활용 도구</h3>
			<div class="text-body">
				<q-btn
					outline
					color="primary"
					icon="link"
					no-caps
					href="https://www.tpgi.com/color-contrast-checker/"
					target="_blank"
					label="Colour Contrast Analyzer (CCA)"
					class="q-my-sm"
				/>
			</div>
		</div>

		<div class="art-content art-content--insight">
			<h3 class="title-type">기대 효과</h3>
			<div class="text-body">
				<ul class="list-type">
					<li>
						배경과 텍스트(혹은 의미 있는 이미지)간의 대비를 주어
						시각적으로 명확하게 구분되도록 하여 웹사이트를 이용하는
						일부 저시력 사용자도 컨텐츠 내용을 파악하는데 어려움이
						없도록 한다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
