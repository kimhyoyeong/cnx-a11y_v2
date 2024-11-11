<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					콘트롤이나 사용자 입력은 초점을 받았을 때 <mark>의도하지 않는 기능이 자동적으로 실행되지 않도록</mark> 콘텐츠를 개발해야 한다. 즉, 콘트롤이나 사용자 입력 기능은 사용자의 마우스 클릭이나 키보드 조작에 의하여 실행되어야 한다. 특히 새 창, 팝업창 등은 사용자가 인지하지 못한 상황에서 열리지 않아야 한다.
				</p>
				<ul class="list-type">
					<li>
						<strong>초점에 의한 맥락 변화</strong
						><br />
						웹 콘텐츠를 구성하는 콘트롤이 초점을 받았을 경우, 사용자가 의도하지 않은 기능이 실행되지 않아야 한다. 단, 기능의 실행이 아니라 초점을 받은 요소의 색깔이 반전되거나 테두리가 생기는 것과 같은 시각적인 변화, 또는 사용자 제어가 이동하지 않은 상태에서 나타나는 추가 정보 등은 초점에 의한 맥락 변화를 일으키는 기능의 실행으로 간주하지 않는다. 다음은 종종 발생하는 대표적인 오류들이다.
						<br>
						<ul class="list-type">
							<li>온라인 서식이 자동적으로 제출됨</li>
							<li>새 창이 열림</li>
							<li><GlossaryTooltip term="드롭다운 메뉴" />가 열림만으로 특정 메뉴 항목이 실행됨</li>
							<li><GlossaryTooltip term="풀다운 메뉴" />를 사용하는 콘텐츠에서 초점을 받는 것만으로 특정 메뉴의 기능이 실행됨</li>
							<li>사용자 제어(<GlossaryTooltip term="초점" />)가 다른 콘트롤로 이동하거나 사라지거나 또는 그 위치를 예측할 수 없음</li>
						</ul>
					</li>
					<li>
						<strong>입력에 따른 변화</strong><br>
						사용자가 선택할 수 있는 콘트롤(예: 콤보 박스, 라디오 버튼, 체크 박스 등)에서 어떤 항목을 선택하는 경우, 해당 항목이 의미하는 기능이 실행되거나 서식 제출이 일어나지 않아야 한다. 실제로 해당 기능이 실행되거나 서식 제출이 일어나는 것은 사용자가 선택할 수 있는 콘트롤과 함께 제공되는 실행 버튼을 활성화(클릭)하였을 때 비로소 실행되어야 한다. 단, 기능의 실행이 아니라 초점을 받은 사용자 입력 또는 콘트롤의 색깔이 반전되거나 테두리가 생기는 것과 같은 시각적인 변화, 또는 사용자 제어(초점)가 이동하지 않은 상태에서 나타나는 추가 정보 등은 입력 변화에 따른 기능의 실행으로 간주하지 않는다.
					</li>
					<li>
						<strong>새 창/팝업창</strong><br>
						사용자가 예측할 수 없는 상황에서 새 창을 열어 정보를 전달해서는 안 된다.
					</li>
					<li>
						<strong>레이어 팝업</strong><br>
						레이어 팝업은 콘텐츠의 논리적 초점 이동 및 콘텐츠의 선형구조를 위반할 가능성이 많으므로 사용하지 않는 것이 바람직하다.
					</li>
					<li>
						<strong>새 창/팝업창/레이어 팝업의 닫음</strong><br>
						새 창/팝업창/레이어 팝업에 초점이 있을 경우, 새 창/팝업창/레이어 팝업을 닫거나 종료 버튼을 클릭하였을 때, 해당 창 또는 팝업 등이 종료되어야 한다. 사용자가 화면에 나타난 새 창/팝업창/레이어 팝업을 닫거나 종료하도록 요구하였음에도 불구하고 해당 창 또는 팝업 등이 종료되지 않으면 사용자는 매우 당황하게 된다. 특히 레이어 팝업의 경우 이러한 혼란이 가중될 수 있다.
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
					<p>저시력 사용자, 시각 장애, 인지 장애, 운동 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						1. 초점을 받을 때 자동적으로 이벤트가 발생하는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							웹 콘텐츠를 구성하는 컨트롤이 <GlossaryTooltip term="초점" />을 받았을 경우, 사용자가 의도하지 않은 기능이 실행되지 않아야 한다. <br />
							특히 <GlossaryTooltip term="드롭다운 메뉴" />나 <GlossaryTooltip term="풀다운 메뉴" />가 열림만으로 특정 메뉴 항목 실행되거나 새 창이 열리지 않아야 한다.<br />
							단, 기능의 실행이 아니라 초점을 받은 요소의 색깔이 반전되거나 테두리가 생기는 것과 같은 시각적인 변화, 또는 사용자 제어가 이동하지 않은 상태에서 나타나는 추가 정보 등은 초점에 의한 맥락 변화를 일으키는 기능의 실행으로 간주하지 않는다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub2-1_07.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										셀렉트 옵션을 선택하는 것만으로도 새 창
										이동이 이뤄진다
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub2-1_08.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										셀렉트 옵션을 선택 후 이동 버튼을 누르는
										단계가 있어 오류 정정을 할 수 있다
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
						2. 사용자 제어(초점)가 다른 컨트롤로 이동하거나
						사라지거나 또는 그 위치를 예측할 수 없는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							<mark>사용자가 예측 가능한 순서대로 초점이 이동</mark>해야 한다. <br />
							일반적인 경우에선 왼쪽 상단에서 오른쪽 하단의 순서로 초점이 진행된다. <br />
							그 외엔 페이지의 논리적인 구조에 따라 초점이 이동해야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub2-1_01.png"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										레이어 팝업이 열렸으나 초점이 팝업 내로
										이동하지 않고, 백그라운드 컨텐츠에
										머물러 있어 사용자가 새로운 정보를 얻을
										수 없다
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub2-1_02.jpg"
									fit="contain"
									:ratio="1"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										레이어 팝업이 열린 후, 초점이 팝업 내로
										이동하여 사용자가 순차적으로 탐색이
										가능하다
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
						3. 사용자가 사전에 예측하지 못한 이벤트가 발생하는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							사용자가 버튼을 누르지 않았는데
							<GlossaryTooltip term="온라인 서식" />이 자동적으로
							제출되거나, 예상하지 못한 레이어 팝업이 뜨지 않아야
							한다. <br />
							특히 페이지 진입 시 화면을 가리는 레이어 팝업이 뜨는
							경우는 지양하는 것이 좋다.
						</p>

						<div class="example-wrap example-wrap--col">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub2-1_03.png"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										페이지 최초 진입 시 갑작스럽게 뜨는,
										화면을 가리는 레이어 팝업은 지양하는
										것이 좋다
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub2-1_04.png"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										화면을 가리지 않도록, 탑 배너 형식으로
										상단에 제공하며 마크업도 최상단에
										위치한다
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
						4. 값 입력 또는 변경 중 화면이 변화하는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							라디오 버튼 또는 체크 박스 등의 변화가 일어날 때 <mark>오류를 쉽게 정정할 수 있어야 하며, <br>서식 제출 시에도 변경사항이 반영되어야 한다.</mark>
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub2-1_09.png"
									:ratio="3 / 4"
									fit="contain"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										항목 선택 후 바로 화면이 바뀌어 오류를
										정정할 수 없다
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub2-1_10.png"
									:ratio="3 / 4"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										항목 선택 후 다음 단계로 넘어갈지
										확인하는 버튼이 있고, 이전 단계로 돌아갈
										수 있다
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
						5. 새 창, 팝업창으로 열림 정보를 제공하지 않는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							<GlossaryTooltip term="새 창, 팝업창" />으로 연결하거나 화면을 전환하는 링크 컨트롤의 경우, <br />새 창, 팝업창으로 열림 또는 화면 전환을 알 수 있는 텍스트 또는 속성을 제공해야 한다.
						</p>

						<div class="example-wrap example-wrap--col">
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										🔈 개인정보처리방침 링크
									</p>
								</div>
								<VCodeBlock
							code='<a href="#" onclick="open();">개인정보처리방침</a>'
							highlightjs
							lang="html"
							theme="panda-syntax-light"
						/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										🔈 개인정보처리방침 새 창으로 열림 링크
									</p>
								</div>
								<VCodeBlock
							code='<a href="…"> 개인정보처리방침<span class="blind">새 창으로 열림</span></a>
<a href="…" title="새 창으로 열림">개인정보처리방침</a>
<a href="…" target="_blank">개인정보처리방침</a>
<a href="…" target="_blank"><img src="…" alt="개인정보처리방침 (새 창으로 열림)"></a>'
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
						6. 새 창/팝업창/레이어 팝업 콘텐츠를 닫았음에도 초점이 이전 또는 관련 내용으로 이동하지 않는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							새 창/팝업창/<GlossaryTooltip term="레이어 팝업 콘텐츠" /> 닫기에 해당하는 사용자 제어가 쉬워야 하며 <br />창이나 팝업이 닫힌 후에도 초점 이동이 순차적으로 이루어질 수 있어야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide3_sub2-1_05.png"
									fit="contain"
									:ratio="4 / 3"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										레이어 팝업을 닫은 후 초점이 이전 또는
										관련 내용으로 이동하지 않는다
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide3_sub2-1_06.png"
									:ratio="4 / 3"
									fit="contain"
								>
									<div class="q-img__label">준수 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										레이어 팝업을 닫은 후 초점이 이전 또는 관련 내용으로 이동한다
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
						시각장애, 지적장애 또는 지체장애가 있는 사람도 초점 및 문맥의 변화를 이해할 수 있게 된다.
					</li>
					<li>
						사용자에게 미리 새 창 열림을 경고하면 뒤로 가기 버튼이 더 이상 예상처럼 동작하지 않는다는 사실을 알 수 있으므로 이용하는 데 따른 혼란이 줄어든다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>

