<template>
	<article class="art-container" id="content">
		<div class="art-heading">
			<span class="art-heading__category">인식의 용이성</span>
			<h2 class="art-heading__title">대체 텍스트</h2>
		</div>

		<div class="art-content art-content--overview">
			<p class="text-head">
				1-1. (적절한 대체 텍스트 제공) 텍스트 아닌 콘텐츠는 그 의미나
				용도를 인식할 수 있도록 대체 텍스트를 제공해야 한다.
			</p>
			<div class="text-body">
				<p>
					이미지 등 텍스트 아닌 콘텐츠를 이용할 경우,
					<mark>그 의미나 용도를 동등하게 인식할 수 있도록</mark>
					적절한 <GlossaryTooltip term="대체 텍스트" />를 제공해야
					한다. 또한 대체 텍스트는 간단명료하게 제공해야 한다.
				</p>
				<ul class="list-type">
					<li>
						<strong>구체적인 정보를 제공해야 하는 경우</strong
						><br />
						이미지 링크, 이미지 버튼 등은 용도가 매우 명확하므로,
						이미지 링크나 이미지 버튼의 핵심 기능에 대한 설명을
						간단한 대체 텍스트로 제공해야 한다.
					</li>
					<li>
						<strong>의미 있는 배경 이미지</strong><br />배경
						이미지의 의미가 사용자에게 전달되어야 하는 콘텐츠는 그
						의미가 <GlossaryTooltip term="보조기술" />로 전달되도록
						대체 텍스트를 제공해야 한다.
					</li>
					<li>
						<strong>충분한 정보가 필요한 경우</strong><br />데이터
						차트와 같이, 내용이 복잡한 콘텐츠는 사용자가 해당
						콘텐츠의 의미를 충분히 파악할 수 있도록 대체 텍스트를
						제공해야 한다.
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
					<p>시각 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">단색 배경의 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								텍스트간의 명도 대비를 만족하도록 배경색과
								텍스트 색을 선정한다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4-3_07.jpg"
									fit="contain"
									:ratio="16 / 5"
								>
									<div class="q-img__label">준수 사례</div>
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
						<ul class="list-type">
							<li>
								텍스트와 텍스트 뒤의 배경 사이에
								<mark>4.5:1 이상</mark>의 명암비 제공
							</li>
							<li>또는 고대비로 전환하는 스타일 전환기 제공</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">1. alt 속성이 선언되지 않은 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							사용자가 이미지의 올바른 정보를 인식할 수 있도록 alt
							속성을 꼭 선언해 줘야 한다.
							<mark> alt 속성을 누락시키면 안된다.</mark>
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub2-1_02.png"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>1배열형 / 이미지는 q-img 컴포넌트에  :ratio="4 / 2" 지정</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="판매가 : 49,000원">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>

						<div class="example-wrap">
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide1_sub2-1_02.png"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>2배열형 / 추가 설명을 q-img__caption 추가</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="판매가 : 49,000원">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub2-1_02.png"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>2배열형</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="판매가 : 49,000원">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>

						<div class="example-wrap">
							<q-img
								src="../images/img_guide1_sub2-1_02.png"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>예시이미지일 경우 : 이미지를 example-box 밖으로</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="판매가 : 49,000원">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub2-1_02.png"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>예시이미지 1개 / 2배열형 / example-wrap--col 클래스 추가</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="판매가 : 49,000원">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>예시이미지 1개 / 2배열형 / example-wrap--col 클래스 추가</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="판매가 : 49,000원">'
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
					<h4 class="title-type">2. 색에 의한 정보 표현 방지</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							차트나 그래프 등을 고대비 모드로 화면에 표시하면
							모든 색이 단색(회색조)으로 표시되어 사용자가 색을
							구분하지 못하는 경우가 발생한다. 따라서 사용자가
							경조 모드에서도 콘텐츠를 인식할 수 있도록 색만을
							이용하여 정보를 제공하지 않아야 한다. 즉, 색은
							시각적인 강조를 위해서만 사용해야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide1_sub4_01.png"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label q-img__label--bad">
										오류 사례
									</div>
									<div class="q-img__caption">추가 설명</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										체크박스의 선택여부를 색상으로 표현
										체크박스의 선택여부를 색상으로 표현
										체크박스의 선택여부를 색상으로 표현
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub4_02.png"
									:ratio="1"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
									<div class="q-img__caption">추가 설명</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										체크박스의 선택여부를 아이콘 형태로 구분
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">2. 색에 의한 정보 표현 방지</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							차트나 그래프 등을 고대비 모드로 화면에 표시하면
							모든 색이 단색(회색조)으로 표시되어 사용자가 색을
							구분하지 못하는 경우가 발생한다. 따라서 사용자가
							경조 모드에서도 콘텐츠를 인식할 수 있도록 색만을
							이용하여 정보를 제공하지 않아야 한다. 즉, 색은
							시각적인 강조를 위해서만 사용해야 한다.
						</p>

						<div class="example-wrap">
							<q-img
								src="../images/img_guide1_sub4-2_01.png"
								:ratio="19 / 9"
							>
								<div class="q-img__label q-img__label--good">
									해결 방안
								</div>
							</q-img>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										체크박스의 선택여부를 색상으로 표현
										체크박스의 선택여부를 색상으로 표현
										체크박스의 선택여부를 색상으로 표현
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										체크박스의 선택여부를 아이콘 형태로 구분
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
						시각장애 또는 지적장애 등으로 인해 시각적으로 정보를
						습득하는 데 어려움을 겪는 사용자들이 화면낭독프로그램과
						같은 보조기술을 사용하여 해당 콘텐츠를 음성을 통해 들을
						수 있으므로 최소한의 접근권을 보장받을 수 있게 된다.
					</li>
					<li>
						사용자들을 위해 텍스트 아닌 콘텐츠를 텍스트로 표시하거나
						대체 텍스트를 수어로 제공함으로써 해당 콘텐츠에 접근할
						수 있다.<br />
						시청각중복장애인들 역시 텍스트 아닌 콘텐츠에 대응하는
						대체 텍스트를 점자로 변환하는 보조기술을 이용하여 해당
						콘텐츠에 대한 접근권을 보장받을 수 있다.
					</li>
					<li>
						콘텐츠에 적절한 대체 텍스트를 제공한 경우, 시각으로
						제공받는 정보가 불충분하여 사용자가 콘텐츠의 핵심내용을
						인지할 수 없거나 잘못된 정보를 제공받음으로써 겪게 되는
						불필요한 혼동을 줄일 수 있다.
					</li>
					<li>
						대체 텍스트를 제공함으로써 텍스트 아닌 콘텐츠에 대한
						검색이 가능하게 된다.
					</li>
					<li>
						의미가 있는 배경 이미지가 의미하는 대체 텍스트를
						보조기술 사용자가 인지할 수 있어 콘텐츠의 이해와 사용이
						가능하게 된다.
					</li>
				</ul>
			</div>
		</div>

	</article>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
<style scoped>
.example-wrap--col {
	border: 2px solid #f00 !important;
}
</style>
