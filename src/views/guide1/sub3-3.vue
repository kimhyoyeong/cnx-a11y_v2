<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<ul class="list-type">
					<li>
						특정 요소를 가리키거나 지시사항을 전달하는 콘텐츠에
						한정해 적용한다.
					</li>
					<li>
						<mark
							>지시사항은 단일 감각(시각, 청각 등)에만 의존하는
							방법으로 제공하면 안 된다.</mark
						>
					</li>
					<li>
						텍스트 콘텐츠(대체 텍스트 포함)는 보조기술을 통해 다른
						감각으로 변환이 가능하므로, 추가적인 음성 콘텐츠를
						제공할 필요가 없다.
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
					<p>시각 장애, 인지 장애, 청각 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						1. 색, 크기, 모양 또는 위치에 대한 인식
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							콘텐츠에 접근하는 사용자들이 색, 크기, 모양 또는
							위치에 관한 정보를 인식하지 못하더라도 원하는
							콘텐츠에 접근할 수 있도록 해야 한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text q-pa-md">
									<p
										class="row items-center text-caption text-bold"
									>
										<q-icon
											name="warning"
											color="pink-6"
											size="1rem"
											class="q-mr-xs"
										/>
										시각 및 색각 이상을 가진 사용자의 시점
									</p>
									<p class="q-my-md text-center">
										작성한 서식을 제출하려면
										<mark>동그란 빨간색 버튼</mark>을
										누르시오.
									</p>
									<div class="row justify-center q-my-md">
										<q-btn
											dense
											round
											color="grey-8"
											size="lg"
											class="q-mr-md"
											><span class="text-body2"
												>확인</span
											></q-btn
										><q-btn
											dense
											round
											color="grey-6"
											size="lg"
											><span class="text-body2"
												>취소</span
											></q-btn
										>
									</div>
								</div>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										위의 지시사항은 시각적 단서에만 의존하고
										있으며, 시각적 단서의 대체 텍스트를
										포함하고 있지 않다. 이는 시각 및 색각
										이상을 가진 사용자가 버튼을 인식하지
										못하게 한다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text q-pa-md">
									<p class="q-my-md text-center">
										작성한 서식을 제출하려면
										<mark>동그란 빨간색 버튼</mark>을
										누르시오.
									</p>
									<div class="row justify-center q-my-md">
										<q-btn
											dense
											round
											color="red"
											size="lg"
											class="q-mr-md"
											><span class="text-body2"
												>확인</span
											></q-btn
										><q-btn
											dense
											round
											color="green"
											size="lg"
											><span class="text-body2"
												>취소</span
											></q-btn
										>
									</div>
								</div>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										색, 크기, 모양, 위치와 같은 정보 대신
										텍스트를 사용한다. 예를 들어, 불가피하게
										시각적 단서를 사용할 때는 대체 텍스트를
										제공해야 한다.
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
						2. 아이콘이나 기호만으로 정보를 전달하지 않도록 한다.
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							시각 형태에 의존된 지시 사항만으로는 보조기술
							사용자가 콘텐츠를 인지하기 어렵다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_guide1_sub3-3_01.png"
									:ratio="1"
									fit="contain"
								>
								</q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										기호(*)를 설명 없이 백그라운드 이미지로
										제공하는 경우, 보조기술 사용자는 필수
										입력 항목을 인식하지 못한다.
									</p>
								</div>
							</div>
							<div class="example-box example-box--good">
								<VCodeBlock
									code='<div class="form">
  <h2 class="form__title">예약 내역 조회하기</h2>

  <div class="form__wrap">
    <p class="form__desc">
      <span class="req">*</span> 는 필수 입력값입니다.
    </p>

    <ul class="form-list">
      <li>
        <label for="userName">
          <span class="req">*</span> 이름
        </label>
        <input
              id="userName"
              type="text"
              maxlength="30"
              placeholder="이름을 입력해주세요. (필수)"
              required />
      </li>
      <li>
        <label for="userEmail">
          <span class="req">*</span> 이메일
        </label>
        <input
            id="userEmail"
            type="email"
            placeholder="이메일 주소를 입력해주세요. (필수)"
            required />
        <button>인증번호 발송</button>
      </li>
      <li>
        <label for="veriNum"> 인증코드</label>
        <input
            id="veriNum"
            type="text"
            maxlength="6"
            placeholder="인증 코드 6자리를 입력해주세요."
            />
      </li>
    </ul>
  </div>
</div>
<a class="form__btn" href="">예약 조회</a>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
									height="460px"
								/>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										기호(*)를 HTML로 직접 입력하고,
										<mark
											>필수 입력 정보를 텍스트로
											안내</mark
										>한다.
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
						여러 감각을 통해 인식할 수 있는 정보를 추가 제공하여
						지시사항을 명확하게 전달한다. 이는 다양한 사용자가
						지시사항을 이해하고 콘텐츠에 접근하는 데 도움이 된다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.example-box {
	align-content: space-evenly;
}
</style>
