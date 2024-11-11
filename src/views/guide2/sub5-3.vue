<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					<GlossaryTooltip term="사용자 인터페이스 구성요소" />에서
					시각적으로 표시되는 텍스트를
					<GlossaryTooltip term="네임" />에 제공하지 않은 경우
					<GlossaryTooltip term="보조기술" />이 해당 사용자 인터페이스
					구성요소를 인식할 수 없기 때문에, 네임에는 시각적으로
					표시되는 텍스트를 제공해야 한다.
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
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>시각장애, 인지 또는 학습장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>
			<p>
				텍스트 또는 텍스트 이미지가 포함된 레이블이 있는 사용자
				인터페이스 구성요소는 시각적으로 표시되는 해당 텍스트를 네임에
				포함해야 한다.
			</p>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						심볼(symbol)의 접근 가능한 네임 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							텍스트가 심볼(symbol)로 표현된 경우, 시각적 레이블로
							간주되어서는 안된다. 예를 들어, 텍스트 편집기의
							아이콘에서 “B”, “I” 및 “ABC”는 각각 굵게, 기울임,
							맞춤법 검사를 의미한다. 이러한 경우, 접근 가능한
							네임은 보이는 심볼이 아니라 버튼이 제공하는 기능(예:
							굵게, 기울임, 맞춤법 검사)이어야 한다.
						</p>
						<div class="example-wrap example-wrap--col">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<div class="row q-gutter-sm">
										<q-btn
											outline
											round
											color="red"
											icon="format_size"
										/>
										<q-btn
											outline
											round
											color="red"
											icon="print"
										/>
										<q-btn
											outline
											round
											color="red"
											icon="today"
										/>
									</div>
								</div>

								<VCodeBlock
									code='<button type="button" class="format_size"></button>
<button type="button" class="print"></button>
<button type="button" class="today"></button>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										심볼로 표현한 버튼에 접근 가능한 네임을
										제공하고 있지 않다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<div class="row q-gutter-sm">
										<q-btn
											outline
											round
											color="primary"
											icon="format_size"
											aria-label="글씨크기"
										/>
										<q-btn
											outline
											round
											color="primary"
											icon="print"
											aria-label="출력"
										/>
										<q-btn
											outline
											round
											color="primary"
											icon="today"
											aria-label="오늘날짜 보기"
										/>
									</div>
								</div>

								<VCodeBlock
									code='<button type="button" class="format_size" aria-label="글씨크기"></button>
<button type="button" class="print" aria-label="출력"></button>
<button type="button" class="today" aria-label="오늘날짜 보기"></button>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										심볼로 표현한 버튼에 각 버튼이 제공하는
										기능을 접근 가능한 네임으로 제공하고
										있다.
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
						구두점 및 대문자가 포함된 접근 가능한 네임 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							이 검사항목은 주로 음성 인식 사용자를 대상으로 하기
							때문에, 사용자가 콘트롤과 상호작용하는 수단으로
							레이블을 발음할 때 대문자와 구두점은 종종 무시된다.
						</p>
						<div class="example-wrap example-wrap--col">
							<div class="example-box example-box--good">
								<VCodeBlock
									code="<label>이메일 :</label>
<label aria-label=”이메일”>이메일 :</label>"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										음성 인식 사용자 대상으로 대소문자
										차이에 따른 의미변화가 없기 때문에 둘다
										적합하다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<VCodeBlock
									code="<label>이메일 :</label>
<label aria-label=”이메일”>이메일 :</label>"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										스크린리더 상 콜론(:)을 무시하기 때문에
										둘다 적합하다.
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
					<h4 class="title-type">수식과 공식</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							수식은 기능을 풀어서 기술해야 하는 ‘심볼의 접근
							가능한 네임 제공’의 예외이며, 수학 기호는 레이블로
							사용될 수 있다. 음성 소프트웨어가 수식을 그대로
							인식할 수 있도록 별도의 접근가능한 네임을 제공하지
							않는 것이 좋다. 작성자가 고려해야 할 사항은 수식에
							적절한 연산자 기호를 사용하는 것이다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<VCodeBlock
									code="2x3    2X3    2*3"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										음성 소프트웨어에서 각각 '2엑스3',
										'2엑스3', '2애스터리스크3'으로 읽어
										수식을 그대로 인식하기 어렵다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<VCodeBlock
									code="2×3"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										음성 소포트웨어에서 '2곱하기3'으로 읽어
										수식을 그대로 이해하기 용이하다.
									</p>
								</div>
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
						1. 시각적으로 보이는 텍스트 레이블이 접근 가능한 네임과
						달라 음성 소프트웨어의 사용 불가능
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							버튼의 시각적으로 보이는 텍스트 레이블이
							aria-label로 제공된 접근 가능한 네임과 다른 경우,
							음성 소프트웨어 사용자가 시각적으로 보이는 텍스트
							레이블을 이용하여 버튼을 실행시키려고해도 버튼이
							동작하지 않을 수 있다.
						</p>
						<div class="example-wrap example-wrap--col">
							<div class="example-box example-box--bad">
								<VCodeBlock
									code='<button id="sitesearch" aria-label="사이트 탐색">검색</button>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										시각적 텍스트레이블과 접근 가능한 네임이
										달라 "검색"이라는 음성 명령어로 동작하지
										않는다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<VCodeBlock
									code="<button id = “sitesearch”>검색</button>"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										접근 가능한 네임을 별도로 제공하지 않고
										시각적으로 보이는 텍스트 레이블을
										유지한다.
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
						2. 심볼의 접근 가능한 네임 미제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							컨트롤 요소의 이름은 정확한 내용으로 제공하여 보조
							기술 사용자가 용도나 목적 정보를 전달받을 수 있도록
							해야 한다.
						</p>
						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide4_sub5-3_02.png"
								:ratio="2 / 1"
								fit="contain"
								class="bg-grey-2 q-mb-md"
							>
								<div class="q-img__label q-img__label--bad">
									오류 사례
								</div>
							</q-img>
							<div class="example-box example-box--bad">
								<VCodeBlock
									code='<button class="btn-prev"><</button> // 왼쪽 화살표
<button class="btn-next">></button> // 오른쪽 화살표'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										스크린리더가 심볼이 보이는 모양을
										그대로 전달하여 버튼이 제공하는 기능을
										알 수 없다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<VCodeBlock
									code='<button class="btn-prev" aria-label="이전 달 보기"><</button> // 이전 달 보기
<button class="btn-next" aria-label="다음 달 보기">></button> // 다음 달 보기'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										버튼이 제공하는 기능을 접근 가능한
										네임으로 전달하여 각 버튼의 기능을 알 수
										있다.
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
						음성 입력(speech-input) 사용자는 시각적으로 표시되는
						텍스트를 사용하여 사용자 인터페이스 구성요소를 제어할 수
						있다.
					</li>
					<li>
						텍스트 음성 변환(TTS: Text-to-Speech) 사용자는
						보조기술을 통해 음성으로 전달되는 텍스트와 시각적으로
						표시되는 텍스트가 일치하기 때문에 해당 사용자 인터페이스
						구성요소를 혼란 없이 보다 쉽게 인지ㆍ활용할 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
