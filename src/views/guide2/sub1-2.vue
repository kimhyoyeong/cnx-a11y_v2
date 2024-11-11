<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<ul class="list-type">
					<li>
						웹 페이지에서 마우스나 키보드 조작을 통해 특정 영역으로
						콘트롤을 이동하였을 경우,
						<mark
							>해당 영역이 <GlossaryTooltip term="초점" />을
							받았음이 시각적으로 구별</mark
						>되어야 한다.
					</li>
					<li>
						키보드 초점을 받은 링크, 컨트롤 및 입력 서식은
						<mark>초점을 받지 않은 객체들로부터 구분</mark>될 수
						있어야 한다.
					</li>
					<li>
						키보드 조작에 의한
						<mark>이동 순서는 관례를 따라야 한다</mark>.
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
					<p>
						화면낭독프로그램을 이용하는 사용자, 저시력 사용자,
						고령자, 인지 장애
					</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">초점 이동 순서 유지</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								UI는 사용자의 시선 흐름과 논리적 흐름을 따라
								포커스가 이동하도록 구성한다.
							</li>
							<li>
								<mark
									>사용자가 예측할 수 있는 이동 순서를
									유지하며,</mark
								>
								특별한 경우에는 논리적인 순서로 구현해야 한다.
							</li>
							<li>
								키보드(Tab 키와 Shift + Tab 키)에 의한
								<mark>초점 이동 순서는 논리적이고 일관성</mark
								>이 있어야 한다.
							</li>
							<li>
								일반적으로
								<mark
									>웹 페이지의 좌측 상단에서 우측 하단으로
									이동</mark
								>하는 순서를 원칙으로 한다.
							</li>
							<li>
								콘텐츠의 화면 순서와 동일한 키보드 내비게이션
								순서를 제공하기 위해
								<mark
									>초점이 논리적 순서로 이동하는 선에서
									tabindex 속성을 적절히 사용한다</mark
								>.
							</li>
						</ul>
						<q-card flat class="q-pa-md q-my-md">
							<form class="row justify-center">
								<q-input
									color="positive"
									v-model="text"
									label="사용자 아이디(1)"
									:dense="dense"
								/>
								<q-input
									color="positive"
									v-model="text"
									label="비밀번호(2)"
									:dense="dense"
									class="q-mx-md"
								/>

								<q-btn color="positive">로그인(3)</q-btn>
							</form>
						</q-card>
						<p>
							웹 접근성을 고려한 콘텐츠 배치와 초점 이동 순서를
							설계하는 것은 중요하다. <br />예를 들어, 사용자
							아이디 입력 필드 → 비밀번호 입력 필드 → 로그인
							버튼의 순서로 초점이 이동하면 논리적이며 시각적
							순서와 일치하게 된다. <br />이러한 논리적이며 일관성
							있는 초점 이동은 사용자 경험을 향상시킬 수 있다.
						</p>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">함정 또는 오류 방지</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								<mark
									>웹 콘텐츠는 키보드 조작이 불가능한 상태가
									되지 않도록 해야 한다.</mark
								>
							</li>
							<li>
								<mark
									>사용자가 예측할 수 있는 표준 퇴장
									방법</mark
								>(예: 대화 상자가 열렸을 때 Esc 키로 닫기)를
								제공하거나, 그렇지 않은 경우
								<mark>명확한 지침을 제공</mark>해야 한다.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">초점의 시각화</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								키보드 또는 마우스 조작으로 초점을 받았을 때
								<mark
									>해당 콘트롤이 초점을 받았음을 시각적으로
									구별</mark
								>되어야 한다.
							</li>
							<li>
								<mark>초점 표시를 제거하면 안 되며</mark>
								브라우저 기본 초점 표시를 제거한 경우 반드시
								사용자 정의 표시를 제작해야 한다.
							</li>
							<li>
								사용자 정의로 만들어진 초점은 테두리(outline)
								속성을 사용하며, 충분한 <mark>명도 대비</mark>를
								제공해야 한다.<br />
								가는 점선 테두리는 약시자들이 인식하기에
								불충분하다.
							</li>
							<li>초점이 화면에서 사라지지 않도록 해야 한다.</li>
							<li>
								<mark>초점 표시는 시간제한이 없어야 한다.</mark>
							</li>
						</ul>

						<div class="ex q-my-md">
							<div class="example-wrap">
								<div class="example-box">
									<div class="example-box__text">
										<p>
											일반 버튼 :
											<q-btn
												color="positive"
												label="버튼"
											/>
										</p>
										<p>
											초점 표시된 일반 버튼 :
											<q-btn
												class="glossy"
												color="positive"
												label="버튼"
												style="
													border: 4px solid
														rgb(83, 123, 123);
												"
											/>
										</p>
									</div>
								</div>
								<div class="example-box">
									<div class="example-box__text">
										<p>
											텍스트 링크 :
											<a
												href="#"
												style="
													text-decoration: underline;
												"
												><strong
													>일반 텍스트
													<q-icon
														size="xs"
														name="link"
														style="
															vertical-align: baseline;
														"
													></q-icon></strong
											></a>
										</p>
										<br />
										<p>
											초점 표시된 텍스트 링크 :
											<a
												href="#"
												style="
													text-decoration: underline;
													color: darkred;
													outline: 2px solid red;
													outline-offset: 2px;
												"
												><strong
													>일반 텍스트
													<q-icon
														size="xs"
														name="link"
														style="
															vertical-align: baseline;
														"
													></q-icon></strong
											></a>
										</p>
									</div>
								</div>
							</div>
						</div>

						<p>
							outline 속성을 이용해 초점 위치를 명확히 표시해준다.
							<br />
							:focus와 같은 CSS 선택자를 사용하여 키보드 초점을
							시각적으로 표시하고, :hover를 함께 사용하여 마우스
							지원을 보완한다.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">1. 잘못된 초점 이동 순서</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							사용자가 이미지의 올바른 정보를 인식할 수 있도록 alt
							속성을 꼭 선언해 줘야 한다.
							<mark> alt 속성을 누락시키면 안된다.</mark>
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-card flat class="q-pa-md">
										<form class="">
											<q-input
												color="negative"
												v-model="text"
												label="사용자 아이디(2)"
												:dense="dense"
												tabindex="2"
											/>
											<q-input
												color="negative"
												v-model="text"
												label="비밀번호(1)"
												:dense="dense"
												class="q-my-md"
												tabindex="1"
											/>
											<q-btn color="negative" tabindex="3"
												>로그인(3)</q-btn
											>
										</form>
									</q-card>
								</div>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										tabindex 속성을 잘못 사용하여 비밀번호
										입력 필드가 사용자 아이디 필드보다 먼저
										위치하여 초점 이동이 비논리적이다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-card flat class="q-pa-md">
										<form class="">
											<q-input
												color="positive"
												v-model="text"
												label="사용자 아이디(1)"
												:dense="dense"
												tabindex="4"
											/>
											<q-input
												color="positive"
												v-model="text"
												label="비밀번호(2)"
												:dense="dense"
												class="q-my-md"
												tabindex="5"
											/>
											<q-btn color="positive" tabindex="6"
												>로그인(3)</q-btn
											>
										</form>
									</q-card>
								</div>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										tabindex 속성을 사용하여 사용자
										아이디(1) → 비밀번호(2) → 로그인
										버튼(3)의
										<mark>논리적 순서로 초점 이동</mark>을
										구현한다.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">2. 키보드 조작 불가 상태</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-card flat class="q-pa-md">
										<q-btn
											label="모달 열기"
											@click="openModalError"
											color="primary"
										/>

										<q-dialog
											v-model="isModalOpenError"
											persistent
										>
											<q-card>
												<q-card-section>
													<div class="text-h6">
														모달 제목
													</div>
												</q-card-section>

												<q-card-section
													class="q-pt-none"
												>
													<q-input
														color="positive"
														v-model="text"
														label="사용자 이름"
														:dense="dense"
														autofocus
													/>
													<q-input
														color="positive"
														v-model="text"
														label="비밀번호"
														:dense="dense"
														@blur="setFocus"
														ref="passwordInput"
													/>
												</q-card-section>
												<q-card-actions align="right">
													<q-btn
														flat
														label="닫기"
														color="primary"
														v-close-popup
													/>
												</q-card-actions>
											</q-card>
										</q-dialog>
									</q-card>
								</div>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										모달이 열렸을 때 Esc 키로 모달을 닫을 수
										없고, 포커스가 모달 내부에 갇혀 있다.
										이는 키보드 사용자에게 불편을 초래하게
										된다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-card flat class="q-pa-md">
										<q-btn
											label="모달 열기"
											@click="openModalFixed"
											color="primary"
										/>

										<q-dialog v-model="isModalOpenFixed">
											<q-card>
												<q-card-section>
													<div class="text-h6">
														모달 제목
													</div>
													<p>
														※ESC 키로 창을 닫을 수
														있습니다.
													</p>
												</q-card-section>

												<q-card-section
													class="q-pt-none"
												>
													<q-input
														color="positive"
														v-model="text"
														label="사용자 이름"
														:dense="dense"
														autofocus
													/>
													<q-input
														color="positive"
														v-model="text"
														label="비밀번호"
														:dense="dense"
													/>
												</q-card-section>

												<q-card-actions align="right">
													<q-btn
														flat
														label="닫기"
														color="primary"
														v-close-popup
													/>
												</q-card-actions>
											</q-card>
										</q-dialog>
									</q-card>
								</div>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										모달을 닫으면 모달 열기 버튼에 초점을
										다시 맞추고, Esc 키로 모달을 닫을 수
										있음을 사용자에게 명확하게 안내한다.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">3. 시각적으로 구별되지 않는 초점</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>1. 슬라이드</p>
						<div class="example-wrap example-wrap--col">
							<q-video
								title="오류 사례"
								:ratio="16 / 9"
								src="/images/img_guide2_sub1-2_01.mp4"
							/>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										초점의 순서가 논리적이지 않고,
										시각적으로 구분이 되지 않아 사용자가
										혼란을 겪을 수 있다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										<mark>초점을 시각적으로 구별</mark>하고,
										논리적 순서로 이동하도록 한다.

										<br />
										제목 → 슬라이드(이미지 + 텍스트) 1번 →
										자세히보기 링크 → 슬라이드 2번 →
										자세히보기 링크 → (...) → 이전 버튼 →
										다음 버튼 → 인디케이터 버튼 순으로 해야
										한다.
									</p>
								</div>
							</div>
						</div>

						<p>2. 체크박스, 라디오 버튼</p>
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-card flat class="q-pa-md ex ex-input">
										<form>
											<label>
												<input
													type="checkbox"
													name="option1"
													value="1"
												/>
												Option 1
											</label>
											<label>
												<input
													type="checkbox"
													name="option2"
													value="2"
												/>
												Option 2
											</label>

											<label
												style="
													border-left: 1px solid;
													padding-left: 0.5rem;
												"
											>
												<input
													type="radio"
													name="group"
													value="A"
												/>
												Group A
											</label>
											<label>
												<input
													type="radio"
													name="group"
													value="B"
												/>
												Group B
											</label>
										</form>
									</q-card>
								</div>

								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										체크박스나 라디오 버튼이 포커스 되었을
										때 사용자에게 시각적으로 알릴 방법이
										없다. 특히 키보드 사용자는 어떤 요소에
										포커스가 있는지 알 수 없다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-card
										flat
										class="q-pa-md ex ex-input ex-input--solve"
									>
										<form>
											<label>
												<input
													type="checkbox"
													name="option1"
													value="1"
												/>
												Option 1
											</label>
											<label>
												<input
													type="checkbox"
													name="option2"
													value="2"
												/>
												Option 2
											</label>

											<label
												style="
													border-left: 1px solid;
													padding-left: 0.5rem;
												"
											>
												<input
													type="radio"
													name="group"
													value="A"
												/>
												Group A
											</label>
											<label>
												<input
													type="radio"
													name="group"
													value="B"
												/>
												Group B
											</label>
										</form>
									</q-card>
								</div>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										이렇게 초점이 있는 요소를 명확히
										구별하는 시각적 피드백을 제공하면,
										키보드 사용자와 보조 기술을 사용하는
										사용자 모두가 쉽게 폼 요소의 상태를
										인식할 수 있다. 이를 통해
										<mark
											>폼 요소의 접근성을 크게 개선할 수
											있다.</mark
										>
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
						저시력장애인, 고령자, 지체장애인뿐만 아니라 비장애인들도
						현재 초점이 어느 콘트롤에 위치하고 있는지 확인하고, 해당
						콘트롤의 기능을 활성화시킬 수 있는지 쉽게 인지할 수
						있다.
					</li>
					<li>
						웹 페이지 사용 시 논리적이고 일관된 초점 이동으로 사용자
						경험이 향상된다.
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
	components: { GlossaryTooltip },
	setup() {
		return {
			text: ref(""),
			dense: ref(false),
			isModalOpenError: ref(false),
			isModalOpenFixed: ref(false),
			passwordInput: ref(null),
		};
	},
	data() {
		return {
			showHoverText: false,
			showFocusText: false,
		};
	},
	methods: {
		openModalError() {
			this.isModalOpenError = true;
		},
		openModalFixed() {
			this.isModalOpenFixed = true;
		},
		setFocus() {
			this.passwordInput.focus();
		},
	},
};
</script>

<style lang="scss" scoped>
.ex {
	ul,
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
		display: inline-block;
	}

	&-input {
		form {
			border: 1px solid;
			padding: 1rem;
		}
		label {
			margin-right: 0.5rem;
		}
		input:focus {
			outline: none;
		}

		&--solve {
			input:focus {
				outline: 2px solid #4d90fe;
				outline-offset: 2px;
			}

			input[type="checkbox"]:focus,
			input[type="radio"]:focus {
				box-shadow: 0 0 3px 3px rgba(77, 144, 254, 0.5);
			}
		}
	}
}
</style>
