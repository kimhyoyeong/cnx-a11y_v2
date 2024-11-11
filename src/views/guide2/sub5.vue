<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					두 개 이상의 손가락을 동시에 사용해야 하는 다중 포인터(예:
					핀치 줌, 두 손가락 탭 등) 또는 쓸어 넘기기 등의 경로기반
					동작(예: 스와이프, 끌기와 놓기, 그리기 등)을 통한 입력으로
					작동하는 모든 기능은 단일 포인터 입력으로도 조작할 수 있어야
					한다. 다만, 다음과 같은 경우에는 예외로 간주한다.
				</p>
				<ul class="list-type">
					<li>
						<strong>배경 필수적인 경우</strong><br />피아노 앱의
						건반 동시누르기와 같은 다중 포인터나 서명과 같은
						경로기반 동작을 통한 입력이 반드시 실행되어야 하는 경우
					</li>
					<li>
						운영체제나 사용자 에이전트(예: 브라우저), 보조기기 등이
						지원하는 동작(예: 운영체제가 제공하는 손가락 두 개
						끌어서 스크롤하기)을 통한 입력
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
					<p>손떨림, 시각장애, 인지 또는 학습장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>
			<p>
				다중 포인터 또는 경로 기반 동작은 단일 포인터 입력 방식으로도
				구현해야 한다. <br />단일 포인터 입력 방식의 예로는 탭, 클릭,
				더블 탭, 더블 클릭, 길게 누르기 또는 클릭 & 홀드 등이 있다.
			</p>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						경로기반 동작 단일 포인터 입력 방식 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							캐러셀 UI에서 스와이프 동작을 수행하는 경우,
							<mark
								>단일 포인터 입력이 가능한 버튼을 함께
								제공</mark
							>한다.
						</p>
						<div class="example-wrap">
							<q-img
								src="../images/img_guide4_sub5_05.png"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--good">
								<VCodeBlock
									code='<div class="swiper a11y-swiper-container">
    <ul class="swiper-wrapper">...</ul>
    <div class="swiper-paginations">...</div>
    <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div>
    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"></div>
</div>
<script>
 function a11ySwiper() {
    a11ySwiper = new Swiper(".a11y-swiper-container", {
      ...
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      ...
    });
</script>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						홀드앤드래그(hold & drag) 단일 포인터 조작 버튼 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							한 손가락으로 홀드앤드래그 제스처를 사용해야하는
							기능에 대해
							<mark
								>단일 포인터 제스처인 클릭(탭)만으로도 이용
								가능한 버튼을 함께 제공</mark
							>하도록 구현한다.
						</p>
						<div class="example-wrap">
							<div class="example-box">
								<q-img
									src="../images/img_guide4_sub5_07.png"
									:ratio="16 / 9"
									fit="contain"
								>
									<div class="q-img__label">예시 이미지</div>
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
						운영체제나 사용자 에이전트, 보조기기 등이 지원하는
						동작을 통한 입력 지원
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<q-img
								src="../images/img_guide4_sub5_03.png"
								:ratio="16 / 9"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--good">
								<VCodeBlock
									code='<li class="sort-menulist-menu-item">
  <span class="tit">아침에 물 500ml 마시기</span>
  <button type="button" class="btn-remove"></button>
  <span tabindex="0" aria-label="3개 중 2번째 버튼, 순서변경, 드래그 가능, 이 영역에서 이중탭하고 누른 채로 있다가 위아래로 드래그하 여 순서를 변경하시기 바랍니다." role="button" class="btn-handle"></span>
</li>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
									class="bg-indigo-1"
								/>
							</div>
						</div>
						<p>
							UI 디자인 수정이 어려울 경우, 예외 조항에 따라
							<mark
								>운영체제나 보조기기등이 지원하는 동작을 이용한
								개선</mark
							>이 가능하다. <br />위 예시는 모바일 운영체제 내장
							스크린리더인 iOS VoiceOver, Android TalkBack 기능을
							활용하여 aria-label에 UI 컨트롤 방법을 설명하는
							방식으로 접근성 개선을 진행하였다.
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
						1. 홀드앤드래그 제스처를 사용해야 하는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							한 손가락으로 스와이프 제스처를 사용해야 기능에 대해
							단일 포인터 제스처인 클릭(탭)만으로도 이용 가능한
							버튼을 함께 제공하도록 구현한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide4_sub5_01.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>입력을 스와이프 제스처로만 제공</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub5_02.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										입력을 스와이프 제스처 이외 텍스트입력
										방식으로 제공
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
						한 손가락 또는 스틱 포인팅 장치를 사용하거나 다중 포인터
						동작을 통한 입력이 불가능하거나 어려운 사용자도 해당
						장치나 동작을 통한 입력을 할 수 있다.
					</li>
					<li>
						손떨림, 시각장애 등으로 끌기 동작이나 복잡하거나 정교한
						동작, 또는 그리기 동작을 통한 입력이 어려운 사용자도
						해당 동작을 통한 입력을 적절하게 수행할 수 있다.
					</li>
					<li>
						복잡한 조작 과정이나 수단을 통한 입력을 이해하기 어려운
						인지 또는 학습장애 사용자도 해당 조작 과정이나 수단을
						통한 입력을 보다 쉽게 수행할 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
