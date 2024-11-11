<template>
	<section>
		<div class="art-content art-content--overview">
			<p class="text-head">
				텍스트 아닌 콘텐츠는 그 의미나 용도를 인식할 수 있도록 대체
				텍스트를 제공해야 한다.
			</p>
			<div class="text-body">
				<p>
					이미지 등 <GlossaryTooltip term="텍스트 아닌 콘텐츠" />를
					이용할 경우, <mark>그 의미나 용도를 동등하게 인식할 수 있도록</mark>
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
						<strong>의미 있는 배경 이미지</strong><br />
						배경 이미지의 의미가 사용자에게 전달되어야 하는 콘텐츠는
						그 의미가
						<GlossaryTooltip term="보조기술" />로 전달되도록 대체
						텍스트를 제공해야 한다.
					</li>
					<li>
						<strong>충분한 정보가 필요한 경우</strong><br />
						데이터 차트와 같이, 내용이 복잡한 콘텐츠는 사용자가 해당
						콘텐츠의 의미를 충분히 파악할 수 있도록 대체 텍스트를
						제공해야 한다.
					</li>
				</ul>
				<p>
					다음과 같은 경우에는 대체 텍스트를 제공하지 않거나
					제한적으로 제공할 수 있다.
				</p>
				<ul class="list-type">
					<li>
						<strong>대체 콘텐츠의 경우</strong><br />
						대체 콘텐츠에는 대체 텍스트를 반드시 제공할 필요는 없다.
						예를 들어, 텍스트와 함께 동등한 내용의 수어 동영상을
						제공하는 경우, 수어 동영상에는 대체 텍스트를 제공할
						필요가 없다.
					</li>
					<li>
						<strong
							>콘텐츠의 내용을 설명하는 대체 텍스트를 제공할 수
							없는 경우</strong
						><br />
						생방송 콘텐츠와 같이, 그 내용이 지속적으로 변화하여
						설명하기 어려운 경우, 해당 콘텐츠에 대한 간략한 용도를
						알려주는 대체 텍스트를 제공하는 것으로 충분하다. 또한
						색맹검사, 청각검사, 시력검사, 받아쓰기 등과 같은 검사
						또는 시험의 경우에도 콘텐츠의 간략한 용도를 알려주는
						대체 텍스트만으로 충분하다.
					</li>
					<li>
						<strong>특정 감각으로만 제공되는 콘텐츠인 경우</strong
						><br />
						플루트 독주나 시각적 예술 작품 등의 경우, 해당 콘텐츠에
						대한 간략한 용도를 알려주는 대체 텍스트만으로 충분하다.
					</li>
					<li>
						<strong>불필요한 설명을 제공하는 경우</strong><br />
						단순히 장식이나 시각적인 형태를 위해 사용되는 콘텐츠의
						경우, 보조기술을 통해 해당 설명을 제공받을 때 오히려
						혼란을 일으킬 가능성이 있으므로 대체 텍스트로 공백
						문자를 제공해야 한다.
					</li>
					<li>
						<strong>동일한 정보를 중복해서 제공하는 경우</strong
						><br />
						보조기술로 동일한 정보가 반복해서 전달되지 않도록
						구현하는 것이 바람직하다.
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
					<h4 class="title-type">alt 속성</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							가장 기본적으로 사용되는 방법으로 &lt;img&gt; 요소에
							alt 속성값으로 대체텍스트를 제공하며, 스크린리더는
							alt 속성값을 출력해준다.
						</p>
						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub1-1_08.png"
								fit="contain"
								:ratio="16 / 8"
								alt="건강한 피부 바탕 위에 자생력으로 차올린 고밀도 피부 윤조에센스·자음생캡슐세럼·자음생크림"
							></q-img>
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										🔈 건강한 피부 바탕 위에 자생력으로
										차올린 고밀도 피부
										윤조에센스·자음생캡슐세럼·자음생크림
										이미지
									</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="건강한 피부 바탕 위에 자생력으로 차올린 고밀도 피부 윤조에센스·자음생캡슐세럼·자음생크림">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub1-1_09.png"
								fit="contain"
								:ratio="16 / 1"
							></q-img>
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										🔈 링크 구매하러 가기 / 🔈 링크 오프라인 매장 안내
									</p>
								</div>

								<VCodeBlock
									code='<a href="#"><img src="../btn.png" alt="구매하러 가기"></a>
<a href="#"><img src="../btn2.png" alt="오프라인 매장 안내"></a>'
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
					<h4 class="title-type"><GlossaryTooltip term="IR기법" /></h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							IR기법은 화면에 보이지 않지만 보조 기술(예: 스크린 리더)로는 인식할 수 있는 텍스트를 의미한다.
							이미지를 대체하여 내용을 이해할 수 있도록 제공되는 텍스트 설명이며 화면에는 안 보이도록 CSS로 숨김 처리한다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub1-1_05.jpg"
									fit="contain"
									:ratio="16 / 9"
								>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />

									<p>
										테이블, 차트와 같이 복잡한 콘텐츠의 대체
										텍스트 제공
									</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="">
<div class="blind">
  <p>한 번 써보면 구매의사 100%</p>
  <table>
    <caption>어린쑥 클렌징 흡착 팩폼 쑥시카 BHA™ 사용 후기</caption>
    <tbody>
      <tr>
        <th scope="col">만족도</th>
        <th scope="col">사용 후기</th>
      </tr>
      <tr>
        <td>100%</td>
        <td>잔여물이 남지 않아 개운한 느낌</td>
      </tr>
      <tr>
        <td>100%</td>
        <td>모공 노폐물이 제거되어 깨끗한 느낌</td>
      </tr>
      <tr>
        <td>100%</td>
        <td>피지&amp;유분 세정력에 만족</td>
      </tr>
      <tr>
        <td>100%</td>
        <td>세안 후 피부가 개운한 느낌</td>
      </tr>
    </tbody>
  </table>
  <p>
    [기간] 2024.02.16~2024.03.06
    [만족도 조사 대상] 피지,각질 고민이 있는 수부지 피부를 가진 성인 22명
  </p>
</div>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
									height="300px"
								/>
							</div>
						</div>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub1-1_07.jpg"
									fit="contain"
									:ratio="16 / 12"
								>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										배경이미지로 제공된 콘텐츠에 대체텍스트
										제공
									</p>
								</div>
								<VCodeBlock
									code='<span class="stars">
	<span class="star_bar" style="width: 100%;">
		<input type="hidden" value="5">
	</span>
	<span class="blind">별점 총 5점 중 5점</span>
</span>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub1-1_10.png"
									fit="contain"
									:ratio="16 / 10"
								>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										아이콘 배경이미지로만 제공된 콘텐츠에 대한 대체 텍스트 제공
									</p>
								</div>
								<VCodeBlock
									code='<div class="sns-box">
	<a href="#" class="facebook" title="페이스북 공유하기 새 창" aria-label="페이스북 공유하기 (새 창에서 열림)">
		facebook
	</a>
	<a href="#" class="twitter" title="트위터 공유하기 새 창" aria-label="트위터 공유하기 (새 창에서 열림)">
		twitter
	</a>
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
					<h4 class="title-type">QR코드, CCTV, CAPTCHA 등 시각적 콘텐츠에 대한 대체 텍스트 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							QR코드, CCTV(실시간 영상), CAPTCHA와 같은 시각적 콘텐츠에 대해 접근성을 강화하기 위해 대체 텍스트를 제공하는 방법을 규정한다. 각 시각적 요소는 그 용도와 목적을 명확히 설명하는 대체 텍스트를 포함해야 하며, 이를 통해 시각적으로 접근이 어려운 사용자들에게 정보를 전달한다.
						</p>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub1-1_03.png"
									fit="contain"
									:ratio="16 / 6"
								>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										해당 QR코드는 특정 웹 링크 또는 정보에 대한 접근을 안내한다. 예를 들어, 제품 정보, 이벤트 일정, 다운로드 링크 등을 포함할 수 있다.
									</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="QR 코드 한율 공식 유튜브 바로가기 https://www.youtube.com/@hanyulofficial 
한글의 아름다움을 더해 담은 빨간쌀의 보습탄력 비법 , 배우 박은빈님의 영상으로 만나보세요!">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub1-1_12.png"
									fit="contain"
									:ratio="16 / 6"
								>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										CAPTCHA는 사용자 인증을 위한 자동 가입 방지 이미지로, 그 용도와 목적에 대한 대체 텍스트를 제공해야 한다. 그러나 캡차 이미지에 대체 텍스트를 사용하면 스크린 리더기를 사용하는 사람들에게 정답을 알려주는 결과가 될 수 있으므로, alt 속성에는 "캡차" 또는 "보안문자"를 제공해야 한다. 또한, 음성 안내, 캡션, 문자 안내 등의 추가적인 대체 수단을 통해 모든 사용자가 인증 과정을 원활하게 수행할 수 있도록 해야 한다.
									</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="캡차">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
						</div>
						<div class="example-wrap">
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_guide1_sub1-1_11.png"
									fit="contain"
									:ratio="16 / 8"
								>
								</q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>
										CCTV와 같은 실시간 영상은 변화에 따라 대체 텍스트를 동적으로 제공하기 어렵기 때문에, 해당 콘텐츠의 용도나 목적만을 제공하는 것으로 충분하다고 판단한다.
									</p>
								</div>
								<VCodeBlock
									code='<div class="title_box">
	<span class="tit">CCTV</span>
	<strong class="title">[경부선] 서초</strong>
</div>
<video controls src="..."></video>'
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

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">1. alt 속성이 선언되지 않은 경우</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							&lt;img&gt; 요소의 alt 속성은 이미지가 로드되지
							않거나 시각 장애가 있는 사용자를 위해 대체 텍스트를
							제공하는 중요한 역할을 한다. 스크린 리더는
							웹페이지의 모든 요소를 음성으로 읽어주며, alt=""
							속성이 빈 값으로 설정되면, 이미지 해석을 건너뛴다.
							<br />alt 속성 자체가 선언되지 않은 경우, 내레이터(윈도우
							스크린리더)의 경우에는 "라벨이 없는 그래픽",
							VoiceOver는 "img_product.jpg(이미지명)"등 사용자가
							이해할 수 없는 정보를 제공받게 된다.
							<mark
								>따라서 이미지에는 반드시 alt 속성을 제공해야
								한다.</mark
							>
						</p>

						<div class="example-wrap">
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--bad">
								<q-img
									src="../images/img_product.jpg"
									fit="contain"
									:ratio="4 / 3"
								></q-img>
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>🔈 라벨이없는 그래픽</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<q-img
									src="../images/img_product.jpg"
									fit="contain"
									:ratio="4 / 3"
									alt="설화수 크림 리치"
								></q-img>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>🔈 설화수 크림 리치 이미지</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="설화수 크림 리치">'
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
						2. alt 선언되었으나 내용이 불충분하거나 오타가 있는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							대체 텍스트는 콘텐츠를 대신하기 위해 제공되는 등가의
							텍스트이기 때문에
							<mark
								>일반 사용자와 동일한 내용이 전달되도록 해야
								한다.</mark
							><br />
							보조 기술에 의존하는 사용자들의 경우 오타 발생으로
							인해 잘못된 내용이 전달되지 않도록 해야 한다.
						</p>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub1-1_01.jpg"
								:ratio="4 / 1.2"
								fit="contain"
								alt="판매가 : 49,000원. 본품 : 한율 빨간쌀 보습탄력 크림 55ml"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>내용 불충분</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="판매가 : 49,000원">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>가격 오타</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="판매가 : 149,000원. 본품 : 한율 빨간쌀 보습탄력 크림 55ml">'
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
									code='<img src="img.jpg" alt="판매가 : 49,000원. 본품 : 한율 빨간쌀 보습탄력 크림 55ml">'
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
						3. 의미 없는 이미지에 대체 텍스트가 제공된 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							보조기술 사용자에게 혼란을 줄 수 있는 대체 텍스트를
							제공하는 것은 잘못된 경우다. <br />
							단순히 장식이나 시각적인 형태를 위해 사용되는
							콘텐츠의 경우, 보조기술을 통해 해당 설명을 제공받을
							때 오히려 혼란을 일으킬 가능성이 있으므로 보조
							기술이 해석하지 않고 건너뛰도록 대체 텍스트에
							<GlossaryTooltip term="공백 문자" />를 제공해야
							한다.
						</p>

						<div class="example-wrap">
							<q-img
								src="../images/img_guide1_sub1-1_02.png"
								:ratio="4 / 0.6"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										🔈 불릿 이미지 하이포 알러지 테스트 완료
									</p>
								</div>
								<VCodeBlock
									code='<ul class="list-type">
	<li>
		<img src="bullet.png" alt="불릿" />
		<p>하이포 알러지 테스트 완료</p>
	</li>
	<li>
		<img src="bullet.png" alt="불릿" />
		<p>피부과 테스트 완료</p>
	</li>
</ul>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>🔈 하이포 알러지 테스트 완료</p>
								</div>
								<VCodeBlock
									code='<ul class="list-type">
	<li>
		<img src="bullet.png" alt="" />
		<p>하이포 알러지 테스트 완료</p>
	</li>
	<li>
		<img src="bullet.png" alt="" />
		<p>피부과 테스트 완료</p>
	</li>
</ul>'
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
						4. 동일한 정보가 중복 전달된 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							대체 텍스트 중 동일한 정보가 중복으로 전달되는 경우, 사용자는 혼란을 겪거나 불필요한 정보를 반복해서 읽어야 할 수 있다. 이는 접근성을 저해하는 요소로 작용할 수 있다.
						</p>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub1-1_13.png"
								:ratio="16 / 6"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<p class="example-caption">
								🔈 스크린 리더 음성 표시
							</p>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>
										🔈 링크 구매하러 가기 구매하러 가기
									</p>
								</div>
								<VCodeBlock
									code='<a href="#"><img src="img.jpg" alt="구매하러 가기">구매하러 가기</a>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>🔈 링크 구매하러 가기</p>
								</div>
								<VCodeBlock
									code='<a href="#"><img src="img.jpg" alt="구매하러 가기"></a>'
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
					<h4 class="title-type">5. 대체 텍스트 내의 과다한 정보</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							대체 텍스트에는 이미지, 버튼, 로고, 썸네일, BI,
							아이콘 등의 불필요한 단어는 포함되지 않도록 해야
							한다.
						</p>

						<div class="example-wrap">
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="헤라 로고">
<img src="img.jpg" alt="구매하기 버튼">
<img src="img.jpg" alt="어린쑥 크림 썸네일">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
									class="bg-red-1"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>준수 사례</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="헤라">
<img src="img.jpg" alt="구매하기">
<img src="img.jpg" alt="어린쑥 크림">'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
									class="bg-indigo-1"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">6. 부적절한 대체 텍스트 제공</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							대체 텍스트는 텍스트가 아닌 콘텐츠가 제공하는
							기능이나 정보를 동등하게 전달할 수 있도록 제공해야
							한다. <br />
							예를 들어 어떤 이미지에 대한 대체 텍스트로 이미지
							파일명인 "image.jpg" 등과 같이 제공하거나, "이미지
							1", "이미지 2" 등과 같이 이미지에 대한 일련번호를
							제공하거나 그냥 "이미지"라고 하는 것은 부적절하다.
						</p>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub1-1_04.png"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
									code='<img src="img1.jpg" alt="@kitty_kim 이미지1">
<img src="img2.jpg" alt="@kitty_kim 이미지2">
<img src="img3.jpg" alt="@kitty_kim 이미지3">'
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
									code='<img src="img1.jpg" alt="@kitty_kim_립스틱을 바르면서 스케이트보드를 타는 인플루언서 롱보드 지니">
<img src="img2.jpg" alt="@kitty_kim_스케이트보드에 팔을 걸치고 서서 한손으로는 립스틱을 들고 카메라를 향해 미소 짓고 있는 인플루언서 롱보드 지니">
<img src="img3.jpg" alt="@kitty_kim_립스틱을 머리 위로 높이 들고 하늘을 응시하는 인플루언서 롱보드 지니">'
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
					<h4 class="title-type">7. QR코드</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							웹 페이지의 일부 콘텐츠에 편리하게 접속할 수 있도록
							하기 위하여 제공되는 QR 코드, 바코드 등의 이미지에는
							QR코드나 바코드의 용도를 대체 텍스트로 제공해야
							한다. 예를 들어 어떤 웹 사이트로 이동하기 위한
							<mark
								>QR코드의 대체 텍스트는 접속할 수 있는 웹 사이트
								주소를 제공해야 한다.</mark
							>
						</p>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub1-1_03.png"
								fit="contain"
								:ratio="16 / 6"
								alt="QR 코드 한율 공식 유튜브 바로가기 https://www.youtube.com/@hanyulofficial / 한글의 아름다움을 더해 담은 빨간쌀의 보습탄력 비법 , 배우 박은빈님의 영상으로 만나보세요!"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>오류 사례</p>
								</div>
								<VCodeBlock
									code='<img src="img.jpg" alt="QR 코드 한율 공식 유튜브 바로가기 / 한글의 아름다움을 더해 담은 빨간쌀의 보습탄력 비법 , 배우 박은빈님의 영상으로 만나보세요!">'
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
									code='<img src="img.jpg" alt="QR 코드 한율 공식 유튜브 바로가기 https://www.youtube.com/@hanyulofficial / 한글의 아름다움을 더해 담은 빨간쌀의 보습탄력 비법 , 배우 박은빈님의 영상으로 만나보세요!">'
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
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
