<template>
	<section>
		<div class="art-content art-content--overview">
			<p class="text-head">
				페이지, 프레임, <GlossaryTooltip term="콘텐츠 블록" />에는
				<GlossaryTooltip term="적절한 제목" />을 제공해야 한다
			</p>
			<div class="text-body">
				<p>
					페이지, 프레임, 콘텐츠 블록의 제목은 사용자가 웹 콘텐츠를
					운용하기 쉽게 도와준다.<br />
					<mark>제목은 간단명료해야 하며,</mark> 해당 페이지, 프레임,
					콘텐츠 블록을 유추할 수 있도록 제공해야 한다.
				</p>
				<ul class="list-type">
					<li>
						<strong>웹 페이지 제목(title) 제공</strong><br />
						모든 웹 페이지는 간단명료하게 해당 내용을 기술한 제목을
						포함해야 한다. 이를 통해 시각장애인, 지적장애인,
						중증지체장애인 등 사용자는 여러 개의 웹 페이지가 열려
						있어도 제목을 보고 쉽게 웹 페이지를 선택할 수 있다.
						또한, 모든 웹 페이지는 유일하고 서로 다른 제목을
						제공해야 한다.
					</li>
					<li>
						<strong>팝업창 제목(title) 제공</strong><br />
						팝업창에도 간단명료한 제목을 제공해야 한다.
					</li>
					<li>
						<strong>프레임 제목(title) 제공</strong><br />
						웹 페이지의 모든 프레임에는 각 프레임을 설명하는
						간단명료한 제목을 제공해야 한다. 모든 프레임에 제목이
						부여되면 시각장애인, 지적장애인, 중증지체장애인 등
						사용자가 프레임 제목을 통해 선택하거나 이동할 수 있다.
						아무 내용이 없는 프레임에도 '빈 프레임'과 같은 제목을
						제공해야 한다.
					</li>
					<li>
						<strong>콘텐츠 블록 제목 구성</strong><br />
						콘텐츠 블록에는 적절한 제목(heading)을 제공하여 제목과
						본문을 구분할 수 있게 해야 하며, 제목을 이용하여 콘텐츠
						블록 간의 이동이 가능해야 한다. 그러나 본문이 없는
						콘텐츠 블록에는 제목을 붙이지 않아야 한다.
					</li>
					<li>
						<strong>특수 기호 사용 제한</strong><br />
						웹 페이지, 프레임 또는 콘텐츠 블록의 제목은 문장의
						하나로 간주되므로 불필요한 특수 기호를 반복해서 사용하지
						않아야 한다.
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
					<p>시각 장애, 지적 장애, 지체 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						웹 페이지 제목(title) / 팝업창 제목(title) 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							모든 웹 페이지가 해당 내용을 간단명료하게 기술한
							제목을 포함하고 있을 경우, 사용자(예: 시각장애인,
							지적장애인, 중증지체장애인 등)는 여러 개의 웹
							페이지가 열려 있더라도 제목을 통해 웹 페이지를
							선택하므로, 모든 웹 페이지에는 해당 페이지를
							간단명료하게 설명한 제목을 제공해야 한다. 또한, 웹
							페이지는 유일하고 서로 다른(unique and exclusive)
							제목을 제공해야 한다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-2_01.png"
									fit="contain"
									:ratio="4 / 2"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										title 태그를 제공하면 본문을 검색하지
										않아도 문서의 용도를 직관적으로 알 수
										있음
									</p>
								</div>
								<VCodeBlock
									code="<title>자음생세럼 | 설화수 한국</title>"
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
					<h4 class="title-type">콘텐츠 블록 제목(heading) 구성</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								콘텐츠 블록에는 적절한 제목(heading)을 제공하면
								제목과 본문을 구분할 수 있으며, 제목을 이용하여
								콘텐츠 블록 간의 이동이 가능하다.
							</li>
							<li>
								<mark
									>h1 태그는 페이지당 하나만 사용해야 하며,
									보통 페이지의 최상단에 위치한 주요 제목이다. </mark
								>이 태그는 페이지의 가장 중요한 제목을 나타내며,
								모든 다른 헤딩 태그는 이 h1을 중심으로 계층
								구조를 형성한다.
							</li>

							<li>
								헤딩 태그는 논리적인 계층 구조를 유지해야 한다.
								즉, h1 다음에는 h2, 그 다음에는 h3, h4 등이
								차례대로 이어져야 한다. 이를 통해 사용자는
								페이지의 흐름을 쉽게 이해할 수 있다.
							</li>
							<li>
								한 페이지 내에서 여러 개의 h2, h3를 사용하는
								것은 허용되지만,
								<mark>계층을 건너뛰면 안 된다.</mark> 예를 들어
								h2 다음에 바로 h4를 사용하는 것은 좋지 않은
								구조이다.
							</li>
							<li>
								본문이 없는 콘텐츠 블록에는 제목(heading)을
								붙이지 않아야 한다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<VCodeBlock
									code="<!-- 페이지의 주요 주제: H1은 페이지 당 하나만 사용 -->
<h1>탄력크림 Essential Comfort Firming Cream</h1>

<!-- 주요 섹션 1: 제품 정보 -->
<h2>제품 설명</h2>
    <h3>제품 개요</h3>
        <p>피부를 편안하게 감싸주는 리프팅 크림으로, 피부 결을 개선하고 탄력을 강화해줍니다.</p>
    <h3>주요 성분</h3>
        <h4>자음단™ 성분</h4>
        <h4>식물성 콜라겐</h4>
        <h4>황금 추출물</h4>
    <h3>효과 및 기능</h3>
        <h4>탄력 강화</h4>
        <h4>피부 결 개선</h4>
        <h4>영양 공급</h4>
    <h3>사용 방법</h3>
        <h4>아침/저녁 스킨케어 마지막 단계에서 적당량을 덜어 얼굴에 부드럽게 발라줍니다.</h4>

<!-- 주요 섹션 2: 제품 상세 정보 -->
<h2>제품 상세 정보</h2>
    <h3>용량 및 가격</h3>
        <p>50ml / ₩120,000</p>
    <h3>제조사 및 원산지</h3>
        <p>대한민국, 아모레퍼시픽</p>
    <h3>유통기한 및 사용 기한</h3>
        <p>제품 개봉 후 12개월 이내 사용 권장</p>
    <h3>보관 및 주의사항</h3>
        <h4>직사광선을 피해 보관하십시오.</h4>
        <h4>피부 트러블 발생 시 사용을 중지하십시오.</h4>"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- <div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">콘텐츠 블록 제목 구성</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								콘텐츠 블록에는 적절한 제목(heading)을 제공하면
								제목과 본문을 구분할 수 있으며, 제목을 이용하여
								콘텐츠 블록 간의 이동이 가능하다.
							</li>
							<li>
								본문이 없는 콘텐츠 블록에는 제목을 붙이지 않아야
								한다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-2_02.png"
									fit="contain"
									:ratio="4 / 3"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<VCodeBlock
									code='<section>
	<h2 class="renew2022-section-title">설화수 추천</h2>
	...
</section>
<section>
	<h2 class="renew2022-section-title">설화수 시즌추천</h2>
	...
</section>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
					</div>
				</div>
			</div> -->

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">iframe 제목(title) 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								웹 페이지의 모든 프레임에는 각 프레임을 설명하는
								간단명료한 제목을 제공해야 한다.<br />
								모든 프레임에 간단명료한 제목이 부여되면,
								사용자는 프레임 제목을 통해 프레임의 선택, 이동
								등이 가능하다.
							</li>
							<li>
								아무런 내용이 없는 프레임에도 '빈 프레임' 등과
								같이 제목을 제공해야 한다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<VCodeBlock
									code='<iframe title="광고">…<iframe>'
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
						1. 콘텐츠가 다른 페이지에 동일한 제목을 제공한 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							페이지마다 콘텐츠가 다르지만 페이지 제목을 동일하게
							제공하는 경우로, 이 경우 화면 낭독 프로그램을
							이용하는 사용자나 인지능력이 낮은 사용자는 페이지가
							변경되어도 어떤 페이지인지 판단하기 어렵게 된다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide4_sub4-2_03.png"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										모든 페이지에 동일한 제목을 제공한
										경우에 사용자는 페이지 변화 인식이
										어려움
									</p>
								</div>
							</div>
						</div>

						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-2_04.png"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										페이지별 간단명료한 제목을 제공하여 여러
										개의 웹 페이지가 열려 있더라도 파악이
										쉬움
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
						2. 특수문자(▩▩▩▩)기호를 제공한 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							페이지 타이틀에 특수문자(▩▩▩▩)를 사용하여 제공하는
							경우로, 이 경우 화면 낭독 프로그램을 이용하는
							사용자나 인지장애를 가진 사용자는 페이지 제목을
							명확하게 이해하지 못할 수 있다. 때에 따라서는
							반복적인 특수문자로 인하여 화면 낭독 프로그램의
							고장을 유발 할 수도 있으므로 주의해야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide4_sub4-2_05.png"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>페이지 제목을 특수문자 사용</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-2_06.png"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										페이지 제목 제공 시 표현을 위한
										특수문자의 사용은 피하고 간결하고 웹
										페이지가 제공하는 콘텐츠를 유추할 수
										있도록 제공
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
						웹사이트가 제공하는 모든 웹 페이지에 서로 다른 제목을
						제공하면, 사용자(예: 시각장애인, 지적장애인, 지체장애인
						등)는 동시에 여러 개의 웹 페이지가 열려 있더라도 웹
						페이지의 제목을 확인하여 열려있는 웹 페이지 간을
						편리하게 이동할 수 있다. 이를 위해, 각 페이지는 해당
						페이지만의 유일하고 서로 다른 페이지 제목을 가져야 한다.
					</li>
					<li>
						웹 페이지를 구성하는 모든 프레임에 제목을 제공하면,
						사용자(예: 시각장애인, 지적장애인, 중증지체장애인 등)는
						프레임 제목을 통해 프레임 간을 매우 편리하게 이동할 수
						있다. 이를 위해, 페이지의 경우와 마찬가지로, 동일한
						페이지에 포함된 모든 프레임은 해당 프레임만의 유일하고
						서로 다른 프레임 제목을 가져야 한다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
