<template>
	<section>
		<div class="art-content art-content--overview">
			<p class="text-head">
				링크 텍스트는 용도나 목적을 이해할 수 있도록 제공해야 한다
			</p>
			<div class="text-body">
				<p>
					링크는 주변 맥락을 통하여 용도나 목적지를 명확하게 이해할 수
					있는 링크 텍스트를 제공해야 한다.
				</p>
				<ul class="list-type">
					<li>
						<strong
							>맥락을 통해 이해할 수 있도록 링크 텍스트
							제공</strong
						><br />
						링크의 용도나 목적지를 링크 텍스트만으로 또는 주변의
						맥락으로부터 충분히 이해할 수 있도록 링크 텍스트를
						제공해야 한다.
						<ol class="list-type">
							<li>
								문장의 일부분에 링크를 연결하는 경우:
								URL(Uniform Resource Locator) 목적지, 용도 등을
								표현한 텍스트에 링크를 연결해야 한다.
							</li>
							<li>
								‘바로가기’, ‘GO’ 등의 링크 텍스트를 제공하는
								경우: URL에 관한 정보를 제공하는 텍스트에 이어서
								링크 텍스트를 삽입해야 한다.
							</li>
							<li>
								이미지 링크를 제공하는 경우: URL에 관한 정보를
								제공하는 텍스트와 URL로 이동하는 이미지 링크는
								하나의 링크로 구성하는 것이 바람직하다. 이 경우,
								이미지 링크의 대체 텍스트는 공백 문자로 제공해야
								한다.
							</li>
							<li>
								동일한 제품을 서로 다른 관점에서 각각 설명한
								페이지로 이동하는 링크들: 각 링크 텍스트를 서로
								다르게 구성하는 것이 바람직하다.
							</li>
							<li>
								탭(tab) 콘트롤을 이용하여 공지사항 목록을
								나열하고, 주변에 ‘더보기’ 링크를 제공하는
								콘텐츠: ‘더보기’ 링크는 그 맥락으로부터
								‘공지사항 더보기’임을 알 수 있어야 한다.
							</li>
						</ol>
					</li>
					<li>
						<strong>이미지 링크 구성</strong><br />
						아이콘(icon)으로 링크 텍스트를 대신하여 표현한 경우(예:
						홈 페이지로 이동하기 위한 링크를 집 모양의 아이콘
						이미지로 대신하고 해당 아이콘에 홈 페이지로 이동하는
						링크를 걸어놓은 경우), 해당 아이콘 이미지만으로도 링크의
						용도나 목적지, 내용 등을 충분히 이해할 수 있도록
						직관적이고 명료하게 제공해야 한다. 아이콘에 대체
						텍스트를 제공하는 방법은 검사항목 5.1.1의 ‘적절한 대체
						텍스트 제공’을 참고해야 한다.
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
						맥락을 통해 이해할 수 있도록 링크 텍스트 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							링크의 용도나 목적지를 링크 텍스트만으로 또는 주변의
							맥락으로부터 충분히 이해할 수 있도록 링크 텍스트를
							제공해야 한다.
						</p>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						문장의 일부분에 링크를 연결하는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							URL(Uniform Resource Locator)
							<mark>목적지, 용도 등을 표현한 텍스트</mark>에
							링크를 연결해야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										아시안 뷰티의 정수를 오롯이 담은
										시그니쳐 공간인
										<a href="#" class="text-blue-9"
											>설화수 도산 플래그십 스토어</a
										>는 등불이 어둠을 밝혀 길을 안내하듯,
										아름다움을 비추는 설화수 도산에서 시간이
										흘러도 아름답게 빛나는 Ageless 뷰티를
										경험해 보실 수 있습니다.
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
						‘바로가기’, ‘GO’ 등의 링크 텍스트를 제공하는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							URL에 관한
							<mark>정보를 제공하는 텍스트에 이어서</mark> 링크
							텍스트를 삽입해야 한다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										북촌 설화수의 집<br />
										예술과 헤리티지 정신으로 아름다움을
										창조하는 설화수의 대표 공간인 북촌
										설화수의 집입니다.<br />
										1930년대 한옥에서 1960년대 양옥까지
										전통과 현대를 넘나들며 진화해온
										아름다움을 경험해보는 가이드
										투어입니다.<br />

										소요시간 : 20분<br />
										매월 중순 익월 사용에 대한 예약신청이
										개시됩니다.<br />
										한 타임에 한 팀만 진행되며, 한 팀은 최대
										5인까지 예약 가능합니다.<br />
										<a href="#" class="text-blue-9"
											>예약 바로가기</a
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
					<h4 class="title-type">이미지 링크를 제공하는 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							URL에 관한 정보를 제공하는 텍스트와 URL로 이동하는
							이미지 링크는 하나의 링크로 구성하는 것이
							바람직하다. 이 경우, 이미지 링크의 대체 텍스트는
							공백 문자로 제공해야 한다.
						</p>
						<div class="example-wrap">
							<q-img
								src="../images/img_guide4_sub4-3_02.png"
								fit="contain"
								:ratio="16 / 6"
								><div class="q-img__label">
									예시 이미지
								</div></q-img
							>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>준수 사례</p>
								</div>
								<VCodeBlock
									code='<a href="/kr/ko/products/comfy-revitalizing-serum-mist.html">
	<img src="img.jpg" alt="" />
	<h2>
		<strong>NEW &amp; ISSUE</strong>
		<p>‘보습-탄력-광채’ 3-IN-1 케어로 피부 컨디션을 부스팅 하는 세럼 미스트</p>
	</h2>
	<span>자세히 보기</span>
</a>'
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
					<h4 class="title-type">이미지 링크 구성</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							<mark
								>아이콘(icon)으로 링크 텍스트를 대신하여 표현한
								경우</mark
							>(예: 홈 페이지로 이동하기 위한 링크를 집 모양의
							아이콘 이미지로 대신하고 해당 아이콘에 홈 페이지로
							이동하는 링크를 걸어놓은 경우), 해당 아이콘
							이미지만으로도 링크의 용도나 목적지, 내용 등을
							충분히 이해할 수 있도록 직관적이고 명료하게 제공해야
							한다. 아이콘에 대체 텍스트를 제공하는 방법은
							검사항목 5.1.1의
							<a href="/guide1/sub1" target="_blank"
								>‘적절한 대체 텍스트 제공’</a
							>을 참고해야 한다
						</p>
						<div class="example-wrap">
							<q-img
								src="../images/img_guide2_sub4-3_01.png"
								fit="contain"
								:ratio="4 / 2"
							>
								<div class="q-img__label">예시이미지</div>
							</q-img>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">aria-label 활용</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							링크만으로 빠르게 탐색하는 사용자에게 명확한 링크
							목적을 전달하기 위해 ARIA 기술 aria-label를 적용해서
							보완해 줄 수 있다.
						</p>
						<div class="example-wrap">
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										🔈 듀얼 리페어 리프트 크림 구매 하기<br />
										🔈 듀얼 리페어 리프트 크림 자세히 보기
									</p>
								</div>
								<VCodeBlock
									code='<div>
	<img src="img.jpg" alt="" />
	<strong>듀얼 리페어 리프트 크림</strong>
	<a href="product.html" aria-label="듀얼 리페어 리프트 크림 구매 하기">구매 하기</a>
	<a href="product.html" aria-label="듀얼 리페어 리프트 크림 자세히 보기">자세히 보기</a>
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

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						pagination 명확한 링크 정보를 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							Pagination의 경우 단순히 숫자만으로 제공되면 용도와
							목적을 명확하게 인지하기 어려울 수 있다. 따라서
							aria-label="페이지 1", aria-label="다음 페이지"과
							같은 방식으로 보조적인 설명을 제공하는 것이
							바람직하다.
						</p>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide4_sub4-3_03.png"
								fit="contain"
								:ratio="4 / 2"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--good">
								<VCodeBlock
									code='<a href="#" aria-label="처음 페이지" title="처음 페이지"></a>
<a href="#" aria-label="이전 페이지" title="이전 페이지"></a>
<a href="#" aria-label="페이지 1" title="현재 페이지">1</a>
<a href="#" aria-label="페이지 2">2</a>
<a href="#" aria-label="페이지 3">3</a>
<a href="#" aria-label="페이지 4">4</a>
<a href="#" aria-label="페이지 5">5</a>
<a href="#" aria-label="다음 페이지" title="다음 페이지"></a>
<a href="#" aria-label="마지막 페이지" title="마지막 페이지"></a>
'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
									class="bg-indigo-1 q-mb-none"
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
					<h4 class="title-type">1. 애매한 링크 텍스트</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							"여기", "자세히보기"와 같은 애매한 텍스트 링크는
							사용자가 용도와 목적에 대해 바로 파악하기가 힘들다.
							<br />
							주변 컨텐츠와 분리해도 단독으로 이해할 수 있도록
							명확한 정보를 제공해야한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										더 많은 정보를 얻고 싶으시면
										<a href="#" class="text-blue-9"
											>여기를 클릭해주세요.</a
										>
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										더 많은 정보를 얻고 싶으시면
										<a href="#" class="text-blue-9"
											>설화수 최신 뉴스</a
										>에서 확인해주세요.
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
						텍스트에 링크를 연결할 때, ‘여기를 클릭하세요.’와 같이
						애매모호한 표현을 사용하여 링크를 연결한 경우,
						시각장애인이나 지적장애인뿐만 아니라 비장애인도 클릭했을
						때 어떤 일이 일어날 것이며 무슨 내용이 제시될 것인지를
						알 수 없다. 그러나 링크 텍스트를 직관적으로 구성하면,
						장애인은 해당 링크를 클릭했을 때 무슨 일이 벌어질
						것인지를 분명하게 알 수 있으므로, 시각장애인이나
						지적장애인은 맥락을 이해하기 위한 쓸데없는 콘텐츠 간의
						이동 과정을 피할 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
//import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
