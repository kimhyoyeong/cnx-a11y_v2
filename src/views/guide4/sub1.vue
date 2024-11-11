<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					<GlossaryTooltip term="마크업 언어" />로 작성된 콘텐츠는 해당 마크업 언어의 문법을 최대한 준수하여 제공하는 것이 바람직하다. 특히 요소의 열고 닫음, 중첩 관계의 오류가 없도록 제공해야 한다. 또한 요소의 속성도 마크업 문법을 최대한 준수하여 제공하는 것이 바람직하다.
				</p>
				<ul class="list-type">
					<li>
						<strong>요소의 열고 닫음 일치</strong><br>
						마크업 언어로 작성된 콘텐츠는 표준에서 특별히 정한 경우를 제외하고 시작 요소와 끝나는 요소가 정의되어야 한다.
					</li>
					<li>
						<strong>요소의 중첩 방지</strong><br>
						시작 요소와 끝나는 요소의 나열 순서는 포함 관계가 어긋나지 않아야 한다.
					</li>
					<li>
						<strong>중복된 속성 사용 금지</strong><br>
						하나의 요소 안에서 속성을 중복하여 선언하지 않아야 한다.
					</li>
					<li>
						<strong>id 속성값 중복 선언 금지</strong><br>
						하나의 마크업 문서에서는 같은 id값을 중복하여 선언하지 않아야 한다.
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
					<p>청각 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						표준에 부합하는 태그와 속성 이름, 값 사용
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							브라우저에 따라서는 표준에 명시되지 않는 태그나
							속성을 허용하는 경우가 있다. <br />
							그러나 마크업 문서를 작성할 경우
							<mark
								>반드시 표준에 명시된 태그와 속성을
								사용해야</mark
							> 이 문서를 어떠한 브라우저와
							<GlossaryTooltip term="보조기술" />을 이용하여
							접근할 때에도 정상적인 접근이 가능하게 된다.<br /><br />
							일부 마크업 언어는 사용자가 속성을 정의하여 사용할
							수 있다. <br />
							예를 들어, HTML5 언어는 'data-' 접두어를 사용하여
							속성 이름을 정의하면 문서 작성시에 사용자가 정의한
							속성을 사용할 수 있다. <br />
							마크업 문서의 오류 여부를 수동으로 검사하는 것은
							매우 어려운 일이다. <br />
							따라서 이들 마크업 문서의 문법 오류를 자동으로
							검사할 수 있는 다양한 도구가 개발되어 사용되고 있다.
						</p><br>
						<q-btn
							outline
							color="primary"
							icon="link"
							no-caps
							href="https://validator.w3.org/"
							target="_blank"
							label="W3C Markup Validation Service"
						/>
						<div class="example-wrap">
							<div class="example-box">
								<q-img
									src="../images/img_guide4_sub1-1_01.png"
									fit="contain"
								>
									<div class="q-img__label">
										예시 이미지
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
					<h4 class="title-type">
						1. 여는 태그와 닫는 태그를 정확하게 사용하지 않았을 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							마크업 언어를 이용하여 마크업 문서를 구현할 때
							반드시 태그의 열림과 닫힘이 일치해야 한다.<br />
							닫는 태그 대신 여는 태그를 중복 사용한 경우는
							논리적인 오류에 해당하며, 브라우저가 태그를 두 번 선언한 것으로 간주한다.
						</p>

						<div class="example-wrap example-wrap--col">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
									code="<p 여는 태그를 제대로 사용하지 않아, 텍스트가 태그의 속성으로 사용된 문단입니다.</p>
<p>요소를 닫는 태그에 슬래시(slash)가 빠진 문단입니다.<p>"
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
									code="<p>요소를 여는 태그의 닫음 표시가 명확한 문단입니다.</p>"
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
						2. 속성 선언을 올바르게 하지 않았을 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							따옴표로 속성 값을 구분하여 제공할 경우 따옴표를
							누락하게 되면 일부 정보가 무시될 수 있다. <br />
							또한 속성 사이의 공백을 누락하면 안되며, 속성을
							중복으로 선언하면 하나만 적용되므로 중복 선언하지
							않아야 한다.<br />
							속성 값에 따옴표를 사용해야 할 경우, 따옴표를 그냥
							사용하면 속성 값의 종결 문자로 인식하기 때문에
							값으로 사용할 때에는 Entity Code(개체 문자)로
							사용해야 한다. <br />
							<q-btn
								outline
								color="primary"
								icon="link"
								no-caps
								href="https://entitycode.com/"
								target="_blank"
								label="Entity Code 리스트"
								class="q-my-sm"
							/>
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>따옴표 및 공백 누락 사례</p>
								</div>
								<VCodeBlock
									code='<input title="name type="text">
<input title="name"type="text">'
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
									code='<input title="name" type="text">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>속성 값이 빈칸을 포함하지만 따옴표로
										구분하지 않은 사례</p>
								</div>
								<VCodeBlock
									code="<input title=이름을 입력하세요. type=text>"
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
									code='<input title="이름을 입력하세요." type="text">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>동일한 속성을 중복 선언한 사례</p>
								</div>
								<VCodeBlock
									code='<p style="color: #000" class="notice" style="width: 50em">'
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
									code='<p class="notice" style="color: #000; width: 50em">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>속성 값 내 따옴표를 Entity Code로
										사용하지 않은 사례</p>
								</div>
								<VCodeBlock
									code='<input type="text" value=""가나다"">'
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
									code='<input type="text" value="&amp;quot;가나다&amp;quot;">'
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
						3. 태그의 중첩관계를 올바르게 하지 않았을 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							태그를 사용할 경우 중첩관계가 엇갈리지 않도록 해야
							한다. <br />
							특히 이를 파싱하는 브라우저에 따라서 오류를 처리하는
							방법이 서로 달라 파싱 결과가 다른 경우도 종종
							발생한다. <br />
							무엇보다도 태그를 사용하는 과정에서 중첩관계에
							오류가 없도록 다음 예와 같이 태그의 열고 닫는 순서를
							잘 지켜야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
									code="<p>중첩관계가 <strong>명확하지 않습니다.</p></strong>"
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
									code="<p>중첩관계가 <strong>명확합니다.</strong></p>"
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
						4. 아이디를 중복하여 선언한 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							한 페이지를 구성하는 문서 내에서는 동일한 아이디를
							중복하여 사용할 수 없다. <br />
							특히 여러 개발자가 협업하여 웹 콘텐츠를 제작할 경우
							아이디의 중복 선언과 같은 일이 종종 발생한다. <br />
							따라서 아이디나 속성 값들이 충돌하지 않도록 사전
							협의와 문서화가 필수적이다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
								code='<main id="content">
  ...
  <section id="content"></section>
</main>'
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
								code='<main id="main">
  ...
  <section id="content"></section>
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
						시작 요소와 끝나는 요소가 잘 대응되고 요소 간의 포함 관계가 어긋나지 않도록 웹 페이지의 마크업 문서를 구성하면, 웹 브라우저나 보조기술이 작동을 멈추지 않고 콘텐츠를 명확히 전달할 수 있다.
					</li>
					<li>
						콘텐츠에 필요한 속성의 누락이나 중복된 경우를 없애 콘텐츠의 일부 기능이 누락되는 것을 방지할 수 있다.
					</li>
				</ul>
			</div>
		</div>

	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
