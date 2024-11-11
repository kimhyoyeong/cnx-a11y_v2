<template>
	<section class="contents4">
		<div class="art-content art-content--overview">
			<div class="text-body">
				<ul class="list-type">
					<li>
						모든 웹 페이지의 콘텐츠는 사용자가 이해할 수 있도록
						<mark>논리적인 순서</mark>로 작성해야 한다.
					</li>
					<li>
						시각적으로 배치를 변경해야 하는 경우에도
						<GlossaryTooltip term="콘텐츠의 선형구조" />는 유지해야
						한다.
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
						>퍼블/개발, 기획, 디자인</q-chip
					>
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>시각 장애, 인지 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						콘텐츠를 의미 있는 순서로 콘텐츠 배열
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box">
								<div class="example-box__text">
									<q-chip
										square
										color="indigo"
										text-color="white"
										class="q-ma-none"
										label="논리적 순서"
									/>
								</div>
								<div class="example-box__text">
									<p>
										논리적 순서로 콘텐츠를 배열하여
										<mark
											>정확히 제작자가 의도한 내용을
											파악할 수 있게 된다</mark
										>.<br />화면 낭독 프로그램이 "한국음식 →
										김치찌개 → 된장찌개 → 중국 음식 → 짜장면
										→ 짬뽕 → 탕수육"과 같이 읽어준다.
									</p>
								</div>
								<VCodeBlock
									code="<ul>
	<li>
		한국 음식
		<ul>
			<li>김치찌개</li>
			<li>된장찌개</li>
		</ul>
	</li>
	<li>
		중국 음식
		<ul>
			<li>짜장면</li>
			<li>짬뽕</li>
			<li>탕수육</li>
		</ul>
	</li>
</ul>"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box">
								<div class="example-box__text">
									<q-chip
										square
										color="indigo"
										text-color="white"
										class="q-ma-none"
										label="css로 콘텐츠 배치 변경"
									/>
								</div>
								<div class="example-box__text">
									<div flat class="ex ex-01">
										<ul class="row text-center">
											<li class="col-6 order-last">
												<span
													class="block q-py-sm q-ma-xs bg-indigo-5 text-white"
													>한국 음식</span
												>
												<ul class="q-pt-lg">
													<li>
														<span
															class="block q-py-sm q-ma-xs bg-indigo-2"
															>김치찌개</span
														>
													</li>
													<li>
														<span
															class="block q-py-sm q-ma-xs bg-indigo-2"
															>된장찌개</span
														>
													</li>
												</ul>
											</li>
											<li class="col-6 order-first">
												<span
													class="block q-py-sm q-ma-xs bg-indigo-5 text-white"
													>중국 음식</span
												>
												<ul class="q-pt-lg">
													<li>
														<span
															class="block q-py-sm q-ma-xs bg-indigo-2"
															>짜장면</span
														>
													</li>
													<li>
														<span
															class="block q-py-sm q-ma-xs bg-indigo-2"
															>짬뽕</span
														>
													</li>
													<li>
														<span
															class="block q-py-sm q-ma-xs bg-indigo-2"
															>탕수육</span
														>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
								<div class="example-box__text">
									<p>
										시각적으로 꾸미는 것이 목적일 때,
										콘텐츠의 선형구조는 유지하며 콘텐츠의
										위치를 변경 할 수 있다.
										<mark
											>다만, 포커스를 받는 요소일 경우,
											시각적 순서와 일치시켜야 한다.</mark
										>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						하위 메뉴 항목은 반드시 직속 상위 메뉴 다음에 나와야
						한다.
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								<GlossaryTooltip term="풀다운 메뉴" />와 같이
								동적인 요소에서도 하위 항목이 상위 항목에
								<mark>논리적</mark>으로 속해야 한다.
							</li>
							<li>
								웹 페이지를 선형화 및 키보드 탐색 시 내용을 의미
								있게 이해할 수 있고, 논리적인 순서를 유지하게
								한다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box">
								<div class="example-box__text">
									<q-chip
										square
										color="indigo"
										text-color="white"
										class="q-ma-none"
										label="키보드 흐름상 논리적인 메뉴 순서
"
									/>
								</div>
								<div class="example-box__text">
									<p>메뉴 열기 → 메뉴 내용 → 메뉴 닫기</p>
								</div>
								<div class="example-box__text">
									<p class="text-caption row items-center">
										<q-icon
											name="info_outline"
											color="grey-6"
											size="1rem"
											class="q-mr-xs"
										/>아래의 메뉴를 키보드(tab)로 열어보세요
									</p>
									<div
										class="ex ex-02 relative-position q-mt-md"
									>
										<q-btn
											color="primary"
											@click="openMenu"
											label="전체메뉴 열기"
										/>
										<nav
											v-show="isMenuOpen"
											class="shadow-2 absolute bg-white text-body2"
											style="
												max-width: 95vw;
												z-index: 6000;
											"
										>
											<q-list>
												<q-item clickable>
													<q-item-section>
														제품</q-item-section
													>
													<q-item-section side>
														<q-icon
															name="keyboard_arrow_right"
														/>
													</q-item-section>

													<q-menu
														anchor="top end"
														self="top start"
													>
														<q-list>
															<q-item
																dense
																clickable
																class="dept02"
																><q-item-section
																	>스킨케어</q-item-section
																></q-item
															>
															<q-item
																dense
																clickable
																class="dept02"
																><q-item-section
																	>메이크업</q-item-section
																></q-item
															>
														</q-list>
													</q-menu>
												</q-item>

												<q-item
													clickable
													v-close-popup
													class="dept01"
													><q-item-section
														>스토어</q-item-section
													></q-item
												>
												<q-item
													clickable
													v-close-popup
													class="dept01"
													><q-item-section
														>브랜드스토리</q-item-section
													></q-item
												>
											</q-list>

											<q-btn
												color="primary"
												@click="closeMenu"
												label="전체메뉴 닫기"
												class="absolute full-width"
												style="top: -36px; padding: 0"
											/>
										</nav>
									</div>
								</div>
							</div>
							<div class="example-box">
								<VCodeBlock
									code='<div class="menu">
	<button class="menu__btn--open">전체메뉴 열기</button>
	<nav class="menu__nav">
		<ul class="depth01">
			<li class="dept01__items">
				제품
				<ul class="depth02">
					<li class="dept02__items">스킨케어</li>
					<li class="dept02__items">메이크업</li>
				</ul>
			</li>
			<li class="dept01__items">스토어</li>
			<li class="dept01__items">브랜드스토리</li>
		</ul>
		<button class="menu__btn--close">전체메뉴 닫기</button>
	</nav>
</div>'
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
						1. 정상 시력자와
						<GlossaryTooltip term="보조기술" /> 사용자가 탐색하는
						순서가 맞지 않으면,
						<mark
							>제작자가 의도한 내용을 서로 다르게 이해할 수
							있다.</mark
						>
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box">
								<div class="example-box__text">
									<q-chip
										square
										color="indigo"
										text-color="white"
										class="q-ma-none q-mb-md"
										label="정상 시력을 가진 사용자의 시점"
									/>
								</div>
								<q-img
									src="/images/img_guide1_sub3-2_02.png"
									fit="contain"
								></q-img>
								<div class="example-box__text">
									<p>
										정상 시력자는 시각적인 단서에 따라 "1 →
										3 → 4 → 2" 순으로 콘텐츠를 이해한다.<br /><br />

										<span class="text-indigo">
											따라서 슬라이더의 콘텐츠와 "더보기"
											버튼의 기능을 올바르게 이해할 수
											있다.
										</span>
									</p>
								</div>
							</div>
							<div class="example-box">
								<div class="example-box__text">
									<q-chip
										square
										color="indigo"
										text-color="white"
										class="q-ma-none q-mb-md"
										label="스크린리더(보조 기술) 사용자의 시점"
									/>
								</div>
								<q-img
									src="/images/img_guide1_sub3-2_03.png"
									fit="contain"
								></q-img>
								<div class="example-box__text">
									<p>
										스크린리더 사용자는 논리적 순서에 따라
										"1 → 2 → 페이지 이동 → 3 → 4"순으로
										탐색한다.<br />
										예시의 경우 제목을 읽은 후 바로 '더보기'
										링크에 도달한다.
										<br />사용자가 더보기 링크를 클릭하게
										만들 가능성이 높게되며, 슬라이더의
										중요한 내용을 놓칠 수 있다.<br /><br />

										<span class="text-red">
											사용자가 'BEST SELLER' 콘텐츠를
											완전히 이해하기 전에 '더보기' 링크로
											인해 혼란을 겪을 수 있다.
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="example-wrap">
						<div class="example-box example-box--good">
							<div class="example-box__text">
								<q-icon name="task_alt" size="2rem" />
								<ol class="list-type">
									<li>
										DOM 순서와 시각적 혹은 논리적 순서를
										일치시켜, 사용자에게 혼동을 주지 않도록
										한다.
									</li>
									<li>
										ARIA 속성을 사용하여 보조 기술 사용자가
										올바른 순서로 콘텐츠를 이해할 수 있도록
										해야 한다.
									</li>
								</ol>
							</div>
							<VCodeBlock
								code='<!--다음은 해결방법 1번의 예시이다.-->
<section class="best-sec">
	<!-- 1️⃣ 제목 -->
	<div class="best-sec__header">
		<h3>BEST SELLER</h3>
	</div>
	<div class="best-sec__cont">
		<!-- 2️⃣ 왼쪽 슬라이더 -->
		<div class="best-sec__visual swiper-container">
			<div class="wrapper">
				<a class="visual--item01" href=""><img src="" alt="" /></a>
				<a class="visual--item02" href=""><img src="" alt="" /></a>
			</div>
		</div>
		<!-- 3️⃣ 오른쪽 슬라이더 -->
		<div class="best-sec__info swiper-container">
		<div class="wrapper">
			<a class="info--item01" href=""><h4>...</h4><p>...</p></a>
			<a class="info--item02" href=""><h4>...</h4><p>...</p></a>
		</div>
		<div class="pagination">...</div>
		</div>
	</div>
	<!-- 4️⃣ 더보기 버튼 -->
	<div class="best-sec__header">
		<a href="" target="_blank">더보기</a>
	</div>
</section>'
								highlightjs
								lang="html"
								theme="panda-syntax-light"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						2. 제목과 내용의 논리적 순서 유지
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							<mark
								>스크린리더는 '제목'을 다 읽어주고 나서야
								'내용'을 읽어주기 때문</mark
							>에 논리적 순서가 중요하다.<br />
							제목과 내용을 따로 마크업 하는 경우, 포커스가 논리적
							순서대로 제공되지 않아 보조기술(스크린리더)
							사용자에게 혼동을 줄 수 있다.
						</p>
						<div class="example-wrap">
							<q-img
								src="/images/img_guide1_sub3-2_04.png"
								fit="contain"
								:ratio="4 / 3"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box">
								<div class="example-box__text">
									<q-chip
										square
										color="indigo"
										text-color="white"
										class="q-ma-none"
										label="정상 시력을 가진 사용자의 시점"
									/>
								</div>
								<div class="example-box__text">
									<p>
										시각적 흐름에 따라 콘텐츠를 탐색하며
										다음과 같이 인지할 수 있다.
									</p>
									<br />
									<ol class="list-type">
										<li>h2 : 현재 콘텐츠의 제목</li>
										<li>
											제목(탭) : 전체, 브랜드뉴스,
											보도자료
										</li>
										<li>
											연도선택 : 탭에 해당되는 연도를 선택
										</li>
										<li>
											내용 : 탭에 해당되는 내용이 표출되고
											있음을 인지
										</li>
									</ol>
									<br />
									<p class="text-indigo">
										따라서 제목(탭)과 내용의 순서를 올바르게
										이해할 수 있다.
									</p>
								</div>
							</div>
							<div class="example-box">
								<div class="example-box__text">
									<q-chip
										square
										color="indigo"
										text-color="white"
										class="q-ma-none"
										label="스크린리더(보조 기술) 사용자의 시점"
									/>
								</div>
								<div class="example-box__text">
									<p>
										논리적 흐름에 따라 콘텐츠를 탐색하며
										다음과 같이 인지할 수 있다.
									</p>
									<br />
									<ol class="list-type">
										<li>h2 : 현재 콘텐츠의 제목</li>
										<li>
											제목(탭) : 전체, 브랜드뉴스,
											보도자료
										</li>
										<li>
											연도선택 : 무엇에 해당되는 연도를
											선택하라는지 인지하지 못함
										</li>
										<li>
											내용 : 전체 탭에 대한 내용이
											표출되고 있음을 인지
										</li>
									</ol>
									<br />
									<p class="text-red">
										제목(탭)과 내용을 연관짓지 못해, 내용을
										이해하는 데 어려움이 있을 수 있다.
									</p>
								</div>
							</div>
						</div>

						<div class="example-wrap">
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<ol class="list-type">
										<li>
											'메뉴', '내용', '메뉴', '내용'
											순으로 마크업.
										</li>
										<li>
											메뉴끼리, 내용끼리 마크업 하되 '해당
											메뉴 제목'을 제공해야한다.
										</li>
										<li>
											ARIA 속성을 사용하여 보조 기술
											사용자가 올바른 순서로 콘텐츠를
											이해할 수 있도록 해야 한다.
										</li>
									</ol>
								</div>
								<VCodeBlock
									code='  <!-- 다음은 해결방법 2번의 예시이다.-->
<main>
  <!-- 1️⃣ 제목-->
  <h2>뉴스</h2>
  <div class="filter">
    <!-- 2️⃣ 메뉴-->
    <div class="filter--left">
      <a href="">전체</a>
      <a href="">브랜드뉴스</a>
      <a href="">보도뉴스</a>
    </div>
    <!-- 3️⃣ 연도선택-->
    <div class="filter--right">
      <h3 class="blind">연도별로 보는 전체 뉴스</h3>
      <button class="selectbox__selector">
        <span>연도선택</span>
      </button>
      <div class="selectbox__popup">
        <ul>
          <li><a href="">2023년</a></li>
          <!-- 생략 -->
        </ul>
      </div>
    </div>
  </div>
  <!-- 4️⃣ 내용-->
  <section class="news-list list--all">
    <h3 class="blind">전체 뉴스</h3>
    <ul>
      <li>
        <a href="">
          <figure class="news-list__img">
            <img src="images/news_thumbnail_1.jpg" alt="" />

            <figcaption class="news-list__caption">
              <span class="badge badge--notice"> 보도자료 </span>
              <h3>아이오페, 레티놀 슈퍼 바운스 세럼 출시</h3>
              <p>2023.04.25</p>
            </figcaption>
          </figure>
        </a>
      </li>
      <!-- 생략 -->
    </ul>
    <!-- 5️⃣ 제어-->
    <p class="pagination">
      <a href="" class="current"><span>1</span></a>
      <a href=""><span>2</span></a>
      <a href=""><span>3</span></a>
      <a href=""><span>4</span></a>
      <a href=""><span>5</span></a>
      <a href="" class="next"><span>다음</span></a>
    </p>
  </section>
</main>'
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
						지적장애, 언어장애 및 학습장애가 있는 사용자도 콘텐츠를
						이해하는 데 도움을 준다.
					</li>
					<li>
						스타일 시트를 변경하거나 기능을 제거하더라도 그 내용을
						순서대로 읽어 문서의 의미를 이해하기가 쉽다
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
import { ref } from "vue";

export default {
	name: "content4",
	components: { GlossaryTooltip },
	setup() {
		return {
			splitterModel: ref(50), // start at 50%
			icon: ref(false),
			confirm: ref(false),
			showing: ref(false),
		};
	},
	data() {
		return {
			isMenuOpen: false,
			isMenuOpen2: false,
		};
	},
	methods: {
		openMenu() {
			this.isMenuOpen = true;
		},
		closeMenu() {
			this.isMenuOpen = false;
		},
		toggleMenu2() {
			this.isMenuOpen2 = !this.isMenuOpen2;
		},
	},
};
</script>

<style lang="scss" scoped>
.contents4 {
	word-break: keep-all;
}
.ex {
	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	button:focus,
	a:focus {
		outline: 1px solid #000 !important;
	}
}
.vcode {
	background-color: #e6e6e6;
}
.scroll-wrap {
	background-color: #e6e6e6;
	padding-right: 1rem;
	&--green {
		background-color: #e8f5e9;
	}
}
</style>
