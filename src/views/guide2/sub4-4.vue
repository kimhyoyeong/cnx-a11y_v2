<template>
	<section>
		<div class="art-content art-content--overview">
			<p class="text-head">
				전자출판문서 형식의 웹 페이지는 각 페이지로 이동할 수 있는
				기능이 있어야 하고, 서식이나 플랫폼에 상관없이 참조 위치 정보를
				일관되게 제공ㆍ유지해야 한다
			</p>
			<div class="text-body">
				<p>
					페이지 구분이 있는 전자출판문서 형식의 웹 페이지는 참조 위치
					정보(예: 페이지 번호와 같은 페이지 구분자(pagebreak
					locators))를 제공해야 하고, 각 페이지로 이동할 수 있는
					기능도 제공해야 한다. 또한 콘텐츠의 확대/축소 등으로 서식이
					변경되거나 플랫폼이 변경되어 참조 위치 정보가 사라지거나
					일관된 위치에 제공ㆍ유지되지 않을 경우, 참조 위치 정보를
					사용하여 콘텐츠의 특정 부분을 지칭해야 하는 상황(강의
					등)에서 어려움이 있을 수 있기 때문에, 해당 참조 위치 정보는
					서식이나 플랫폼이 변경되더라도 일관된 위치에 제공ㆍ유지해야
					한다.
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
					<p>저시력자, 지적 장애인, 고령자</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--skill">
			<h3 class="title-type">제작 기법</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<q-icon name="check"></q-icon>
					<h4 class="title-type">
						페이지 위치를 파악할 수 있는 정보 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							전자출판문서 형식의 웹 콘텐츠 이용 시
							<mark
								>현재 페이지의 위치를 파악할 수 있도록 전체
								페이지 정보를 함께 제공</mark
							>한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-4_01.png"
									fit="contain"
									:ratio="4 / 2"
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
					<h4 class="title-type">
						각 페이지를 이동할 수 있는 기능 제공
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							전자출판문서 형식의 웹 콘텐츠 이용 시 사용자가 각
							페이지를 편리하게 이동할 수 있도록
							<mark
								>처음/이전/다음/끝 페이지로 이동할 수 있는
								기능을 제공</mark
							>한다.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">1. 페이지 구분 정보 미제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							페이지 구분이 있는 전자출판문서 형식의 웹 콘텐츠에
							대해 페이지 구분자를 제공하지 않는 경우 부적절하다.
						</p>

						<div class="example-wrap example-wrap--col">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide4_sub4-4_02.png"
									fit="contain"
									:ratio="4 / 2"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										‘이전/다음’의 페이지 이동 기능은
										제공하고 있으나 현재 페이지의 위치
										정보를 확인할 수 있는 페이지 구분 정보를
										제공하지 않은 경우
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-4_04.png"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										현재 페이지의 위치를 파악할 수 있도록
										전체 페이지 정보와 현재 페이지 정보를
										함께 구현
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
						2. 콘텐츠 확대 시 컨트롤 버튼 사라지는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							페이지 구분이 있는 전자출판문서 형식의 웹 콘텐츠에
							대해 해당 콘텐츠 확대 시 페이지 구분자 및 페이지
							이동 기능이 사라지는 경우 부적절하다.
						</p>

						<div class="example-wrap example-wrap--col">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide4_sub4-4_03.png"
									fit="contain"
									:ratio="4 / 2"
								>
									<div class="q-img__label">오류 사례</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										콘텐츠 확대 시 현재 페이지의 위치 정보
										및 각 페이지를 이동할 수 있는 기능이
										사라져 이용할 수 없는 경우
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide4_sub4-4_05.png"
									fit="contain"
								>
									<div class="q-img__label">해결 방안</div>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										콘텐츠 확대 시 현재 페이지의 위치 정보
										및 각 페이지를 이동할 수 있는 기능이
										사라지지 않고 유지되도록 구현
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
						콘텐츠를 확대해서 사용하는 사용자(저시력, 전맹, 인지장애
						등)와 확대하지 않고 사용하는 사용자가 페이지
						구분자(페이지 번호 등)를 사용하여 동일한 페이지를 참조할
						수 있게 된다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
