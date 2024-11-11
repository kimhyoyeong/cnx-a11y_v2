<template>
	<section>
		<div class="art-content art-content--overview">
			<p class="text-head">
				콘텐츠의 반복되는 영역은 건너뛸 수 있어야 한다
			</p>
			<div class="text-body">
				<p>
					키보드 사용자는 페이지가 로딩된 이후 모든 웹 페이지에
					공통적으로 들어있는 메뉴 및 링크 목록 등을 탭 키를 이용하여
					순차적으로 내비게이션한 후에
					<GlossaryTooltip term="핵심 영역" />에 도달하게 된다.<br />
					화면낭독프로그램을 이용하는 사람은 메뉴 등을 페이지가
					로딩되거나 갱신될 때마다 모든 웹 페이지에 공통적으로
					들어있는 메뉴 등을 다시 듣게 된다. <br />키보드 사용자와
					화면낭독프로그램 사용자가 겪게 되는 이러한 불편을 방지하기
					위해, 사용자가 메뉴 등과 같은 반복 영역을 바로 건너뛰어 핵심
					영역으로 직접 이 동할 수 있는 수단을 제공해야 한다.
				</p>
				<ul class="list-type">
					<li>
						<strong>반복 영역을 건너뛸 수 있는 수단 제공</strong
						><br />웹 페이지가 제공하는 핵심 영역이 위치한 곳으로
						직접 이동하는 <GlossaryTooltip term="건너뛰기 링크" />를
						제공한다. 건너뛰기 링크는 웹 페이지의 가장 앞에
						제공한다.
					</li>
					<li>
						<strong>여러 개의 건너뛰기 링크 제공</strong><br />여러
						개의 건너뛰기 링크를 제공하는 경우, 핵심 영역으로
						이동하기 위한 건너뛰기 링크를 가장 먼저 나타내도록 한다.
					</li>
					<li>
						<strong>시각적인 구현</strong><br />건너뛰기 링크는
						시각장애인뿐만 아니라 지체장애인도 키보드 조작 횟수를
						줄일 수 있게 하는 효과적인 수단이므로, 메뉴 건너뛰기
						링크는 화면에 보이도록 구현해야 한다
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
					<q-chip class="art-chip-role art-chip-role--fe"
						>퍼블/개발</q-chip
					>
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>시각 장애, 지체 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">본문 바로가기 링크 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							보통 화면에 숨겨져 있으며 키보드(tab)로 탐색
							시도하면 화면 최상단에 보여진다.
						</p>
						<ul class="list-type">
							<li>
								건너뛰기 링크는 사용자가 반복되는 영역을
								건너뛰어 핵심 영역에 빠르게 도달할 수 있도록
								해야 한다. 따라서 최상단에 없으면 키보드로
								탐색하는 사용자는 인지할 수 없기때문에
								<mark>페이지의 가장 초입에 선언</mark>되어
								있어야 한다.
							</li>
							<li>
								각 페이지 상단에 동일한 위치와 모양으로
								제공되어야 하며, 반복 영역이 있는 모든 페이지에
								있어야 한다.
							</li>
							<li>
								여러 콘텐츠 영역이 있을 경우 최대 3개의 건너뛰기
								링크를 제공할 수 있지만, 스크린리더 사용자에게
								불편함을 줄 수 있으므로 주의가 필요하다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-1_01.png"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<VCodeBlock
									code='<body>
	<style>
		#skipnav{display:flex;align-items:center;justify-content:center;position:absolute;top:-100%;left:0;z-index:9999;width:100%;height:60px;background-color:#000;color:#fff;text-align:center;font-size:16px;text-decoration:none;}
		#skipnav:active,
		#skipnav:focus{top:0;}
	</style>
	<!--스킵 네비게이션-->
	<a id="skipnav" href="#content">본문 바로가기</a>
	<!--//스킵 네비게이션-->
	<nav>...</nav>
	<aside>...</aside>
	<main id="content">...</main>
	...
</body>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
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
						1. 키보드(tab) 운용 시에도 화면에 보이지 않게 제공 된
						경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							사용자는 건너뛰기 링크의 존재를 알 수 없기 때문에
							이를 사용할 수 없다. 아래와 같이 확실히 인지할 수
							있도록 제공되어야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-1_03.png"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						2. 건너뛰는 위치가 부적절하게 지정된 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							건너뛰기 링크는 핵심 영역으로 이동해야 한다.
							<mark
								>메뉴, 광고와 같이 반복되는 영역이 포함되어
								있으면 안 된다.</mark
							><br />
							또한, 숨겨진 영역이나 빈 영역처럼 무의미한 곳에
							연결되면 안 된다.
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
						웹 페이지의 상단이나 좌측 프레임에 동일한 링크 목록이
						반복되는 영역이 포함되어 있으면, 화면낭독프로그램은 이
						링크 목록을 순서대로 읽어준 후에야 필요한 부분을
						읽어주므로 매우 불편하다. 마찬가지로, 키보드 사용자는
						모든 링크 목록을 순차적으로 이동해야 핵심 영역으로
						이동할 수 있어 매우 불편하다. 그러나 웹 페이지의 첫
						부분에 핵심 영역으로 이동할 수 있는 건너뛰기 링크를
						제공하면, 키보드 사용자는 몇 번의 키보드 조작을 통해서
						핵심 영역으로 빠르게 이동할 수 있다.
					</li>
					<li>
						색인이 없는 긴 문장으로 구성된 콘텐츠의 경우, 콘텐츠의
						특정 위치로 이동하는 것이 매우 불편하다. 그러나 웹
						페이지의 시작 부분에 색인을 제공하면, 필요한 부분으로
						직접 이동할 수 있어 보다 쉽고 빠르게 내비게이션할 수
						있다. 콘텐츠를 장, 절, 소절 등으로 구분하면, 웹브라우저
						또는 보조기술이 제공하는 장, 절, 소절 간의 빠른 이동
						수단을 이용할 수 있게 된다.
					</li>
					<li>
						여러 페이지로 구성된 웹사이트에서 사이트 맵을 제공하면,
						사용자는 이를 이용하여 필요한 정보가 위치한 페이지로
						보다 쉽고 빠르게 이동할 수 있다
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
