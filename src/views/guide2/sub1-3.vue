<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<ul class="list-type">
					<li>
						웹 페이지에서 제공하는 모든 이웃한 콘트롤은 개별적으로
						선택하고 사용할 수 있도록 충분한 크기로 제공해야 한다.
					</li>
					<li>
						마우스와 터치 스크린 모두에서 접근이 가능하도록
						<mark
							>컨트롤 타겟 크기는 최소 24px &times; 24px
							이상</mark
						>이어야 한다.
					</li>
				</ul>
			</div>
		</div>

		<div class="art-content art-content--role">
			<div class="role-box">
				<q-icon name="groups" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 직군</h3>
					<q-chip class="art-chip-role art-chip-role--designer"
						>디자인</q-chip
					>
				</div>
			</div>
			<div class="role-box">
				<q-icon name="accessible_forward" color="dark"></q-icon>
				<div class="text-body">
					<h3 class="title-type">관련 장애</h3>
					<p>
						손 떨림 등 운동장애가 있는 사용자, 손가락이 크거나
						손가락 관절의 일부만 사용하는 사용자, 저시력 장애 사용자
					</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">콘트롤의 크기</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								콘텐츠에 포함된 모든 조작 가능한 요소(콘트롤)는
								사용자가 쉽게 접근할 수 있도록 충분한 크기를
								가져야 한다.
							</li>
							<li>
								<mark>대각선 길이가 6.0mm 이상</mark>이어야 하며
								포인터 입력을 위한 타겟(예: 버튼, 링크 등)은
								<mark>최소 크기 24px &times; 24px 이상</mark
								>이어야 한다.
							</li>
							<li>
								특히
								<mark
									>모바일 기기에서 터치 타겟 크기는 최소 9mm
									&times; 9mm 이상</mark
								>이어야 한다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<div class="ex q-gutter-y-md">
										<p>
											<strong class="q-pr-md text-body2"
												><mark
													>24px &times; 24px</mark
												></strong
											>
											<q-icon
												name="cancel"
												color="yellow"
												size="24px"
												class="bg-black"
											/>
										</p>
										<p>
											<strong class="q-pr-md text-body2"
												>87px &times;
												<mark>36px</mark></strong
											><q-btn color="indigo-7" size="xs"
												><span class="text-caption"
													>버튼</span
												></q-btn
											>
										</p>
										<p class="q-mb-none">
											<strong class="q-pr-md text-body2"
												>38.02px &times;
												<mark>25px</mark></strong
											>
											<a href="" class="bg-pink q-pa-xs"
												>링크</a
											>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="art-content__heading">
					<h5 class="title-type">예외사항</h5>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ol class="list-type">
							<li>
								컨트롤이 문장에 포함된 경우
								<q-card
									bordered
									flat
									class="ex q-pa-md q-my-md"
								>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Distinctio atque
									voluptatum iusto impedit veniam sapiente
									dicta adipisci cum, consectetur optio
									expedita dolorum consequuntur neque, earum
									eveniet aliquam nihil. Ipsum, possimus. 이
									문장에는
									<a
										href="#"
										class="text-red-13 text-weight-bold"
										><u>인라인 링크</u></a
									>가 포함되어 있습니다. Lorem ipsum dolor sit
									amet consectetur adipisicing elit.
									Perspiciatis cum aut architecto, id iure
									assumenda officia non obcaecati dolorum
									consectetur expedita, error, voluptates
									nulla eos sapiente natus saepe odio cumque!
								</q-card>

								<div class="example-wrap">
									<div class="example-box">
										<div class="example-box__text">
											<p>
												<mark
													>텍스트나 단락 사이의
													간격보다 클 수 없기
													때문</mark
												>에 최소 크기 요구 사항에서
												제외된다.
											</p>
										</div>
									</div>
								</div>
							</li>
							<li>
								유저 에이전트 기본 스타일을 사용하는 경우

								<q-card flat class="q-pa-md q-my-md"
									><form>
										<label for="username"
											>사용자 이름 :
										</label>
										<input
											type="text"
											id="username"
											name="username"
										/>
										<input
											type="submit"
											value="제출"
											style=""
										/></form
								></q-card>

								<div class="example-wrap">
									<div class="example-box">
										<div class="example-box__text">
											<p>
												<mark
													>브라우저에서 기본 제공하는
													컨트롤러, input 요소일
													경우에는 특정 크기 요건을
													충족하지 않아도 된다.</mark
												>
												<br />다만, 별도의 CSS로 크기가
												조정되어 제작되는 경우, 최소
												크기 요건에 맞춰야 한다.
											</p>
										</div>
									</div>
								</div>
							</li>
						</ol>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						링크, 사용자 입력, 기타 콘트롤 등의 안쪽 여백
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<ul class="list-type">
							<li>
								<mark>1px 이상의 여백</mark>을 두어 사용자가
								링크, 입력 필드, 기타 콘트롤을 쉽게 조작할 수
								있도록 한다.
							</li>
							<li>
								클릭 가능 영역과 실제 클릭 가능한 부분 사이에
								간격을 두어,
								<mark
									>위치 지정 도구의 조작에 반응하지 않도록
									구현</mark
								>한다.
							</li>
						</ul>
						<div class="example-wrap">
							<div class="example-box">
								<div class="example-box__text">
									<div class="bg-amber-1 inline-block">
										<a
											href=""
											class="bg-pink-1 q-pa-sm q-ma-sm inline-block"
											style="border: 1px solid red"
											><span
												class="bg-white block text-black text-body2"
												>링크 텍스트</span
											></a
										>
									</div>
									<br />
									<div class="inline-block bg-amber-1">
										<label
											for="ex-03"
											class="relative-position inline-block q-ma-sm"
											style="border: 1px solid red"
										>
											<span
												v-show="!isInputFocused"
												class="text-grey-8 text-body2 text-center absolute-center bg-white"
												style="
													width: calc(100% - 16px);
													height: calc(100% - 16px);
													line-height: 26px;
													cursor: text;
												"
												>place holder 영역</span
											>
											<input
												id="ex-03"
												type="text"
												style="border: 0"
												class="bg-pink-1 q-pa-sm"
												@focus="isInputFocused = true"
												@blur="isInputFocused = false"
											/>
										</label>
									</div>
									<br />
									<div class="inline-block bg-amber-1">
										<q-btn
											square
											outline
											color="red"
											class="bg-pink-1 q-pa-sm q-ma-sm inline-block"
											><span
												class="bg-white block text-grey-8"
												>제출 버튼</span
											></q-btn
										>
									</div>
								</div>
							</div>
							<div class="example-box">
								<div class="example-box__text">
									<p>
										<span class="bg-pink-1"
											>안쪽 여백<small>
												(분홍색 배경)</small
											></span
										>
										추가 <br />
										클릭(입력)할 수 있는 영역을 넓혀
										사용성을 높임
									</p>
									<br />
									<p>
										<span class="bg-amber-1"
											>바깥 여백<small>
												(노랑색 배경)</small
											></span
										>과
										<span class="text-red">테두리</span>
										추가
										<br />
										시각적으로 클릭(입력) 가능한 영역을
										명확히 표시하여 사용자 경험을 향상시킴
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
						1. 컨트롤의 크기가 너무 작고, 인접해 있는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide2_sub1-3_01.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										아이콘의 크기가 13px &times; 13px으로
										최소 크기보다 작아 작은 영역을 선택하기
										어려운 일부 사용자가 이용하기 어렵다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide2_sub1-3_02.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										아이콘의 크기를
										<mark>대각선 방향으로 6.0mm 이상</mark
										>으로 조정하여 사용성을 개선하고 있다.
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
						2. 짧은 텍스트로 구성된 링크 목록의 타겟 영역
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide2_sub1-3_03.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										링크의 높이가 13px로 최소 크기보다 작아
										일부 사용자가 이용하기 어렵다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide2_sub1-3_04.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										링크의 높이가 29.59px로 조정하여 최소
										크기를 충족하고 있다.
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
						콘트롤을 크게 구현하면 터치스크린을 사용하는 손 떨림이
						있는 사용자와 시각장애인도 콘트롤을 쉽게 찾아서 조작할
						수 있습니다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";

const isInputFocused = ref(false);
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
	}
	button:focus,
	a:focus {
		outline: 1px solid #000 !important;
	}
}
</style>
