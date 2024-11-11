<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<ul class="list-type">
					<li>
						웹 페이지에서 제공하는 모든 기능에 대해
						<mark
							><GlossaryTooltip term="키보드" />만으로도 모든
							기능을 이용할 수 있도록 구현</mark
						>해야 한다.
					</li>
					<li>
						키보드 운용 시에는
						<mark>시각적으로 인식이 가능</mark>해지게 해야 하며
						<mark>논리적으로 이동</mark>이 되어야 한다.
					</li>
					<li>
						콘텐츠의 모든 기능은 키보드로 사용할 수 있어야 하며
						키보드의 조작 횟수의 많고 적음은 고려 대상이 아니다.
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
						전맹 사용자, 저시력 일부 사용자, 손 떨림이 있는 일부
						사용자, 마우스 고장 등의 어떠한 이유로 지시 기기를
						사용할 수 없는 사용자
					</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						마우스와 키보드 이벤트 핸들러를 동시에 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							onmouserover, onmouseout, onfocus, onblur 등을
							사용하여 마우스 호버 시 나타나는 추가 콘텐츠가
							키보드 초점을 얻을 때에도 동일하게 작동해야 한다.
						</p>

						<div class="text-center">
							<a href="#"
								>마우스 또는 키보드(tab)로 초점을 이동해
								보세요.</a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						마우스 드래그와 드롭 기능에서의 키보드 이용 보장
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								특정 버튼(예: 메뉴 버튼)에 키보드 접근을
								제공해야 하며 키보드 접근 시 레이어가 노출되도록
								한다.
								<div class="example-wrap">
									<div class="example-box example-box--good">
										<q-img
											src="/images/img_guide2_sub1-1_02.png"
											fit="contain"
											:ratio="16 / 5"
										>
											<div class="q-img__label">
												준수 사례
											</div>
										</q-img>
									</div>
								</div>
								<div class="example-wrap">
									<div class="example-box example-box--good">
										<q-img
											src="/images/img_guide2_sub1-1_01.png"
											fit="contain"
										>
											<div class="q-img__label">
												준수 사례
											</div>
										</q-img>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						웹 에디터 제공 시 키보드 이용보장
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								기본적으로 모든 기능이 키보드로 이동, 실행, 기능
								영역과 작성 영역 간의 이동 가능해야 한다.
							</li>
							<li>
								복잡한 애플리케이션은
								<mark
									>단축키를 제공하고, 사용자에게 단축키에 대한
									정보를 제공</mark
								>한다. <br />이는 사용자가 웹 콘텐츠나 웹
								애플리케이션을 더 효과적으로 사용할 수 있도록
								하며, 키보드와 마우스를 사용하는 모든 사용자에게
								편리함을 제공한다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="/images/img_guide2_sub1-1_03.png"
									:ratio="16 / 9"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
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
						1. 마우스로만 접근 가능한 이미지 버튼
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<ul class="ex ex-hover q-pa-md">
									<li class="ex-hover--error">
										<strong>예약하기</strong>
										<p class="q-mb-none q-py-sm">
											링크를 눌러주세요.
										</p>
										<a href="#" class="bg-pink-3 q-py-sm"
											>예약하러가기</a
										>
									</li>
								</ul>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										"예약하러가기 버튼"이 오로지 마우스로만
										접근 가능하여, 키보드로 접근해야 하는
										사용자는 이 버튼을 인지할 수 없다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="ex ex-hover q-pa-md">
									<a href="#" class="ex-hover--solve block">
										<strong>예약하기</strong>
										<p class="q-mb-none q-py-sm">
											링크를 눌러주세요.
										</p>
										<span class="bg-pink-3 q-py-sm"
											>예약하러가기</span
										>
									</a>
								</div>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										예약하기 카드를 링크로 만들어, 사용자가
										"예약하러가기 버튼"에 직접 접근하지
										않아도 링크를 통해 접근이 가능하도록
										한다. 이 버튼은 마우스와 키보드 모두
										접근이 가능하며, 시각적으로도 버튼을
										인지할 수 있도록 한다.
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
						2. 스크롤링이 가능한 메뉴나 탭 내부에서 포커스
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="ex ex-scroll q-pa-md">
									<div
										class="ex-scroll--error scrollable-menu"
									>
										<a href="#" class="menu-item"
											>Menu Item 1</a
										>
										<a href="#" class="menu-item"
											>Menu Item 2</a
										>
										<a href="#" class="menu-item"
											>Menu Item 3</a
										>
										<a href="#" class="menu-item"
											>Menu Item 4</a
										>
										<a href="#" class="menu-item"
											>Menu Item 5</a
										>
										<a href="#" class="menu-item"
											>Menu Item 6</a
										>
										<a href="#" class="menu-item"
											>Menu Item 7</a
										>
										<a href="#" class="menu-item"
											>Menu Item 8</a
										>
										<a href="#" class="menu-item"
											>Menu Item 9</a
										>
										<a href="#" class="menu-item"
											>Menu Item 10</a
										>
									</div>
								</div>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<ol>
										<li>
											키보드 탐색 중 시각적 도움을 전혀
											받을 수 없어 현재의 위치를 확인 할
											수 없다.
										</li>
										<li>
											메뉴의 중간이나 끝으로 포커스가
											옮겨질 때, 사용자는 포커스된 항목이
											화면에 보이지 않아 메뉴를 제대로
											탐색할 수 없다.
										</li>
										<li>
											키보드 사용자들은 메뉴 내에서 항목을
											스크롤하려면 마우스를 사용해야 하며,
											키보드만으로는 스크롤을 할 수 없다.
										</li>
										<li>
											메뉴 항목을 탐색할 때, 마지막 항목에
											도달하면 포커스가 스크롤 영역을
											벗어나 다른 UI 요소로 이동하여 메뉴
											탐색을 중단하고 다른 UI로 이동하게
											된다.
										</li>
									</ol>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="ex ex-scroll q-pa-md">
									<div
										ref="scrollableMenu"
										class="ex-scroll--solve scrollable-menu"
										tabindex="0"
									>
										<a href="#" class="menu-item"
											>Menu Item 1</a
										>
										<a href="#" class="menu-item"
											>Menu Item 2</a
										>
										<a href="#" class="menu-item"
											>Menu Item 3</a
										>
										<a href="#" class="menu-item"
											>Menu Item 4</a
										>
										<a href="#" class="menu-item"
											>Menu Item 5</a
										>
										<a href="#" class="menu-item"
											>Menu Item 6</a
										>
										<a href="#" class="menu-item"
											>Menu Item 7</a
										>
										<a href="#" class="menu-item"
											>Menu Item 8</a
										>
										<a href="#" class="menu-item"
											>Menu Item 9</a
										>
										<a href="#" class="menu-item"
											>Menu Item 10</a
										>
									</div>
								</div>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<ol>
										<li>
											키보드 탐색 중 시각적으로 현재
											위치를 알 수 있다.
										</li>
										<li>
											포커스를 옮길 때, 스크롤 위치가
											자동으로 조정되어 해당 항목이 스크롤
											영역 밖에 있을 때도 찾을 수 있다.
										</li>
										<li>
											키보드의 방향키, tab키로 스크롤을 할
											수 있다.
										</li>
										<li>
											키보드 탐색시 사용자가 스크롤 영역
											내에서만 포커스를 유지할 수 있다.
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						2. 이미지 또는 초점을 받을 수 없는 요소에 마우스 이벤트
						적용
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<VCodeBlock
									code="<span onclick=”btn_next();”>다음 콘텐츠 보기</span>"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										마우스로만 조작 가능한 컨트롤을 초점을
										받을 수 없는 요소로 구현한 경우, 키보드
										사용자에게 불편을 초래한다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<VCodeBlock
									code="<button>다음 콘텐츠 보기</button>"
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										마우스로 조작 가능한 컨트롤은 a 링크나
										버튼과 같이 초점을 받을 수 있는 요소로
										구현한다.
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
						위치 지정 도구를 사용할 수 없는 시각장애인의 경우,
						키보드만으로도 웹 콘텐츠나 웹사이트가 제공하는 모든
						기능을 사용할 수 있다.
					</li>
					<li>
						전통적인 키보드를 사용할 수 없는 지체장애인의 경우,
						키보드 대신 음성 입력장치를 이용하더라도 웹 콘텐츠가
						제공하는 모든 기능을 사용할 수 있다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";

export default {
	components: { GlossaryTooltip },
	mounted() {
		const scrollableMenu = this.$refs.scrollableMenu;
		const menuItems = scrollableMenu.querySelectorAll(".menu-item");

		menuItems.forEach((item) => {
			item.addEventListener("keydown", function (event) {
				item.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			});
		});

		scrollableMenu.addEventListener("keydown", function (event) {
			if (event.key === "ArrowDown") {
				scrollableMenu.scrollTop += 50;
			} else if (event.key === "ArrowUp") {
				scrollableMenu.scrollTop -= 50;
			}
		});

		const focusableElements = scrollableMenu.querySelectorAll(
			'a, button, input, [tabindex]:not([tabindex="-1"])'
		);
		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		scrollableMenu.addEventListener("keydown", function (event) {
			if (event.key === "Tab") {
				if (event.shiftKey) {
					if (document.activeElement === firstElement) {
						lastElement.focus();
						event.preventDefault();
					}
				} else {
					if (document.activeElement === lastElement) {
						firstElement.focus();
						event.preventDefault();
					}
				}
			}
		});
	},
};
</script>

<style lang="scss" scoped>
.ex {
	flex-grow: 1;
	background: #fff;
	ul,
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
}
.ex-link {
	display: block;
	background-color: aqua;
	text-align: center;
	padding: 1rem 0.5em;
	border: 2px dashed black;
	&:hover,
	&:focus {
		border-color: transparent;
		background-color: black;
		color: white;
	}
}
.ex-hover {
	border: 1px solid #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px #ddd;
	padding: 0;
	margin: 20px auto 0;
	max-width: 200px;
	text-align: center;

	&--error {
		padding: 20px;
		a {
			display: none;
		}
		&:hover {
			p {
				display: none;
			}
			a {
				display: block;
			}
		}
	}
	&--solve {
		padding: 20px;
		span {
			display: none;
		}
		&:hover,
		&:focus {
			p {
				display: none;
			}
			span {
				display: block;
			}
		}
	}
}

.ex-scroll {
	.scrollable-menu {
		max-height: 200px;
		overflow-y: scroll;
		border: 1px solid #ccc;
		padding: 10px;
	}

	.menu-item {
		display: block;
		padding: 10px;
		margin: 5px 0;
		text-decoration: none;
		color: black;
	}

	&--error {
		a {
			&:focus {
				outline: 0 !important;
			}
		}
	}

	&--solve {
		&.scrollable-menu {
			overflow-y: scroll;

			.menu-item:focus {
				outline: 2px solid #000;
				background-color: #f0f0f0;
			}
		}
	}
}
</style>
