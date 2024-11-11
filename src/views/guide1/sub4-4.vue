<template>
	<section>
		<div class="art-content art-content--overview">
			
			<div class="text-body">
				<p>이웃한 콘텐츠는 구별될 수 있어야 한다.</p>
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
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>
						모든 사용자
					</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<ol class="list-type">
				<li>
					콘텐츠 사이에 <strong>테두리</strong>나 시각적인 <strong>구분선</strong>을 삽입하여
					구분
				</li>
				<li>
					<strong>서로 다른 배경이나 무늬</strong>를 사용하고 배경색 명도대비를 조절하여 구분
				</li>
				<li><strong>줄 간격 및 글자 간격</strong>을 조절하여 구분</li>
				<li>
					기타 콘텐츠를 시각적으로 구분할 수 있는 방법을 통해 구분
				</li>
			</ol>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">단색 배경의 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="example-wrap">
						<div class="example-box example-box--good">
							<q-img
								src="../images/img_guide1_sub4-4_01.jpg"
								:ratio="4 / 3"
							>
								<div class="q-img__label">준수 사례</div>
							</q-img>
						</div>
						<div class="example-box example-box--good">
							<q-img
								src="../images/img_guide1_sub4-4_02.jpg"
								:ratio="4 / 3"
							>
								<div class="q-img__label">준수 사례</div>
							</q-img>
						</div>
					</div>
					<div class="example-wrap">
						<div class="example-box example-box--good">
							<q-img
								src="../images/img_guide1_sub4-4_03.jpg"
								:ratio="16 / 9"
							>
								<div class="q-img__label">준수 사례</div>
							</q-img>
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
						웹 페이지에서 제공하는 콘텐츠를 소형 디스플레이에
						표현하다보면 이웃한 콘텐츠간의 구분이 어려운 경우가 종종
						발생한다. 스마트폰 등의 소형 디스플레이와 터치 기반
						환경을 고려하여 웹 페이지를 구성하는 이웃한 콘텐츠는
						시각적으로 구분되도록 제공하여 웹페이지를 이용하는 데
						어려움이 없도록 해야 한다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
