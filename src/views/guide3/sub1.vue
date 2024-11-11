<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					웹 브라우저는 웹 페이지를 구성하는 텍스트 콘텐츠의 언어 정보를 바탕으로 텍스트 콘텐츠를 화면에 표시하거나 <GlossaryTooltip term="보조기술" />로 전달한다. 다국어를 지원하는 화면낭독프로그램을 사용하는 경우, 텍스트 콘텐츠의 언어 정보를 화면낭독프로그램으로 전달하여 정확한 발음으로 읽어주도록 제어하기도 한다. <br>따라서 <mark>웹 페이지의 기본 언어는 정확히 정의해야 한다.</mark>
				</p>
				<ul class="list-type">
					<li>
						<strong>웹 페이지의 언어 명시</strong
						><br />
						웹 페이지에서 제공하는 콘텐츠에 적용되는 기본 언어를 반드시 정의해야 한다.
					</li>
				</ul>
			</div>
		</div>

		<div class="art-content art-content--role">
			<div class="role-box">
				<q-icon name="groups" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 직군</h3>
					<q-chip class="art-chip-role art-chip-role--fe"
						>퍼블/개발</q-chip
					>
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>시각 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">HTML5 표준</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box">
								<VCodeBlock
									code="<html lang='ko'>
...
<meta charset='UTF-8'>"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
						<p>
							주의할 것은, 주로 사용되는 언어를 설정하는 것은 해당
							페이지의 인코딩 방식을 정하는 것과는 다르다는
							것이다.
							<br />
							즉, &lt;head&gt;의 맨 첫 줄에 &lt;title&gt;을
							지정하기 전에 &lt;meta&gt; 태그를 이용해서 문서의
							인코딩 방식을 지정하지 않으면, 브라우저가 콘텐츠를 바르게 표시하지 못하는 경우가
							생긴다. <br />
							인코딩 방식을 지정하는 문제는 화면 낭독 프로그램과
							같은 보조기기에서 뿐만 아니라 시각적으로 내용을 표시하는 브라우저에도 영향을
							주므로, 반드시 제공해야 한다.
						</p>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">ISO 639-1 언어 코드 확인</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							lang의 속성 값에는 ISO 639-1에서 지정한 두 글자로 된 언어 코드를 넣어야 한다. <br>주의할 점은 한국어 코드는 kr이 아니라 ko이다.
						</p>
						<q-btn
							outline
							color="primary"
							icon="link"
							no-caps
							href="http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
							target="_blank"
							label="List_of_ISO_639-1_codes"
							class="q-my-sm"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						1. 웹 페이지의 주 언어가 기본 언어로 설정되지 않은 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							페이지에서 주로 사용하는 언어를 지정해 놓으면, 웹
							페이지에 접근하는 여러 가지 기계에서 언어를
							인식한다.<br />
							화면 낭독 프로그램과 같은 보조기기는
							<mark
								>지정된 언어에 맞는 TTS (Text-to-Speech) 엔진을
								가동</mark
							>시키고, 자동으로 웹의 정보를 수집하여 검색을 도와주는
							<mark
								>검색 엔진 로봇은 해당 언어의 검색 인덱스에
								페이지를 분류</mark
							>해 넣는다. <br />
							즉, 사용자가 검색할 때 특정 언어를 지정한 웹 검색
							결과만 나오도록 할 때에 검색 엔진은 lang 속성 값을
							여러 가지 판단의 근거 중에 하나로 활용할 수 있기
							때문에 사이트 주 언어와 일치하는 언어로 초기에
							선언해야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
								code='<html lang="de">
<head>
...
</head>
<body>
	<p>콘센트릭스 코리아 카탈리스트 웹 접근성 페이지입니다.</p>
</body>
</html>'
								highlightjs
								lang="html"
								theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>준수 사례</p>
								</div>
								<VCodeBlock
								code='<html lang="ko">
<head>
...
</head>
<body>
	<p>콘센트릭스 코리아 카탈리스트 웹 접근성 페이지입니다.</p>
</body>
</html>'
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
					<h4 class="title-type">
						2. 페이지 중간에 언어가 바뀔 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							페이지 안에서 여러 개의 언어가 번갈아가면서 쓰이는 경우, 변경되는 언어가 나올 때마다 언어를 지정해주는 것이 좋다.<br>
							스크린리더의 경우 개별 단어나 구절에 대한 발음 규칙을 사용할 수 있고, 시각적 브라우저는 적절한 방식으로 문자와 스크립트를 표시할 수 있다.<br>
							또한 점자 번역 소프트웨어는 예를 들어 악센트가 있는 문자를 제어 코드로 대체하고 2등급 점자 축약형이 잘못 생성되는 것을 방지하는데 필요한 제어 코드를 삽입하는 등 언어 변경에 대응할 수 있다.
						</p>

						<div class="example-wrap example-wrap--col">
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>🔈 중국어로는 "안녕하세요"라고 인사할 때에 이호라고 말합니다.</p>
								</div>
								<VCodeBlock
								code='<p>중국어로는 "안녕하세요"라고 인사할 때에 你好라고 말합니다. </p>'
								highlightjs
								lang="html"
								theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>🔈 중국어로는 "안녕하세요"라고 인사할 때에 니하오라고 말합니다.</p>
								</div>
								<VCodeBlock
								code='<p>중국어로는 "안녕하세요"라고 인사할 때에 <span lang="zh">你好</span>라고 말합니다. </p>'
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

		<div class="art-content art-content--insight">
			<h3 class="title-type">기대 효과</h3>
			<div class="text-body">
				<ul class="list-type">
					<li>
						화면낭독프로그램과 점역 프로그램과 같은 보조기술은 웹 페이지의 기본 언어를 인식하여 자동적으로 음성 모듈을 선택하거나 해당 언어에 적합한 점역 방법을 선택할 수 있는 편리함이 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
