<template>
  <section>
    <div class="art-content art-content--overview">
      <p class="text-head">표를 제공할 경우, 표의 이해를 돕기 위한 내용 및 구조에 대한 정보를 제공해야 한다.</p>
      <div class="text-body">
        <ul class="list-type">
          <li>
            <strong>표 정보 제공</strong><br />
            데이터를 표로 구성할 경우, 표의 내용, 구조 등을 이해할 수 있는 정보를 제공하여 표의 이용 방법을 예측할 수
            있도록 해야 한다.
          </li>
          <li>
            <strong>표의 구성</strong><br />표의 내비게이션을 위하여, 표의 셀은 제목 셀과 데이터 셀이 구분되도록
            구성해야 한다.
          </li>
        </ul>
      </div>
    </div>

    <div class="art-content art-content--role">
      <div class="role-box">
        <q-icon name="groups" color="dark"></q-icon>
        <div class="text-body">
          <h3 class="title-type">관련 직군</h3>
          <q-chip class="art-chip-role art-chip-role--planner">기획</q-chip>
          <q-chip class="art-chip-role art-chip-role--fe">퍼블/개발</q-chip>
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

    <div class="art-content art-content--example">
      <h3 class="title-type">오류 사례 및 해결 방안</h3>

      <div class="art-content__wrap">
        <div class="art-content__heading">
          <h4 class="title-type">1. 표에 적절한 제목과 요약 정보를 제공한다.</h4>
        </div>
        <div class="art-content__body">
          <div class="text-body">
            <p>
              표 위쪽에 텍스트로 제목을 넣어주면, 그것이 표의 제목인지 아닌지 기계나 보조 기술이 판단할 수 없으므로,
              반드시 &lt;table&gt; 요소 안쪽에 &lt;caption&gt; 요소를 이용해 제목을 넣어준다.
            </p>

            <div class="example-wrap example-wrap--col">
              <q-img src="../images/img_guide1_sub3_01.png" :ratio="16 / 4" fit="contain">
                <div class="q-img__label">예시 이미지</div>
              </q-img>
              <div class="example-box example-box--bad">
                <div class="example-box__text">
                  <q-icon name="block" size="2rem" />
                  <p>오류 사례</p>
                </div>

                <VCodeBlock
                  code="        <p>1. 회사가 이용자에게 제공하는 위치기반서비스(무상) 및 개인위치정보의 보유목적과 기간은 아래와 같습니다.</p>
	<table class=”loc_tb”>
		<tbody>
			...
		</tbody>
	</table>"
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
                  code="        <p>1. 회사가 이용자에게 제공하는 위치기반서비스(무상) 및 개인위치정보의 보유목적과 기간은 아래와 같습니다.</p>
	<table class=”loc_tb”>
		<caption>위치기반서비스 관련 서비스명과 서비스 내용 및 개인정보 보유 목적, 보유기간에 대한 표</caption>
		<tbody>
			...
		</tbody>
	</table>"
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
          <h4 class="title-type">2. summary로 표의 구조 또는 내용에 대한 요약을 제공한다.</h4>
        </div>
        <div class="art-content__body">
          <div class="text-body">
            <p>
              데이터를 나열하기 전에 표에 어떤 데이터를 담고 있고, 전체적으로 표의 구조가 어떻게 되어있는지 요약해서
              설명을 해주면 표의 내용을 파악하기가 훨씬 쉬워진다.
            </p>

            <div class="example-wrap example-wrap--col">
              <q-img src="../images/img_guide1_sub3_01.png" :ratio="16 / 4" fit="contain">
                <div class="q-img__label">예시 이미지</div>
              </q-img>
              <div class="example-box example-box--bad">
                <div class="example-box__text">
                  <q-icon name="block" size="2rem" />
                  <p>오류 사례</p>
                </div>

                <VCodeBlock
                  code="        <p>1. 회사가 이용자에게 제공하는 위치기반서비스(무상) 및 개인위치정보의 보유목적과 기간은 아래와 같습니다.</p>
	<table class=”loc_tb”>
		<caption>...</caption>
		<tbody>
			...
		</tbody>
	</table>"
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
                  code="        <p>1. 회사가 이용자에게 제공하는 위치기반서비스(무상) 및 개인위치정보의 보유목적과 기간은 아래와 같습니다.</p>
	<table class=”loc_tb”
			summary=”내 주변 근처 매장찾기 서비스 제공을 위한 서비스 내용과 목적, 개인위치정보 보유기간에 대한 정보를 제공”>
		<caption>...</caption>
		<tbody>
			...
		</tbody>
	</table>"
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
          <h4 class="title-type">3. 표의 헤더 셀과 데이터 셀의 관계를 정의한다.</h4>
        </div>

        <div class="art-content__body">
          <div class="text-body">
            <p>
              표가 복잡해지면 단순히 &lt;th&gt;를 지정하는 것으로 표의 헤더 셀과 데이터 셀을 짝지을 수 없는 경우가
              생긴다. 이 경우 다음과 같은 두 가지 방법 중 하나로 헤더 셀과 데이터 셀을 짝지어준다.
            </p>
            <p class="example-caption">🔈 스크린 리더 음성 표시</p>

            <div class="example-wrap example-wrap--col">
              <q-img src="../images/img_guide1_sub3_01.png" :ratio="16 / 4" fit="contain">
                <div class="q-img__label">예시 이미지</div>
              </q-img>
              <div class="example-box example-box--bad">
                <div class="example-box__text">
                  <q-icon name="block" size="2rem" />
                  <p>오류 사례</p>
									<p>🔈 이용자의 현재 위치를 기반으로 회사가 컨텐츠를 제공하고 쿠폰 등을 안내</p>
                </div>

                <VCodeBlock
                  code="        <p>1. 회사가 이용자에게 제공하는 위치기반서비스(무상) 및 개인위치정보의 보유목적과 기간은 아래와 같습니다.</p>
	<table class=”loc_tb” summary=”...”>
		<caption>...</caption>
		<tbody>
			<tr>
				<th>서비스 명</th>
				<th>서비스 내용 및 (보유)목적</th>
				<th>개인위치정보 보유기간</th>
			</tr>
			<tr>
				<td>내 주변 근처 매장 찾기</td>
				<td>이용자의 현재 위치를 기반으로 회사가 컨텐츠를 제공하고 쿠폰 등을 안내</td>
				<td>서비스 제공 목적 달성 후 지체없이 파기<br>
						(단, 위치정보법 및 다른 법령이 달리 정하는 경우에는 <br>
						그에 따름)
				</td>
			</tr>
		</tbody>
	</table>"
                  highlightjs
                  lang="html"
                  theme="panda-syntax-light"
                  class="bg-red-1"
                />
              </div>
              <div class="example-box example-box--good">
                <div class="example-box__text">
                  <q-icon name="task_alt" size="2rem" />
                  <p>준수 사례 1</p>
									<p>🔈 서비스 내용 및 (보유)목적 내 주변 근처 매장 찾기 이용자의 현재 위치를 기반으로 회사가 컨텐츠를 제공하고 쿠폰 등을 안내</p>
                </div>
                <VCodeBlock
                  code="        <p>1. 회사가 이용자에게 제공하는 위치기반서비스(무상) 및 개인위치정보의 보유목적과 기간은 아래와 같습니다.</p>
	<table class=”loc_tb”
			summary=”내 주변 근처 매장찾기 서비스 제공을 위한 서비스 내용과 목적, 개인위치정보 보유기간에 대한 정보를 제공”>
		<caption>...</caption>
		<tbody>
			<tr>
				<th>서비스 명</th>
				<th id=”objectives”>서비스 내용 및 (보유)목적</th>
				<th id=”Period”>개인위치정보 보유기간</th>
			</tr>
			<tr>
				<th id=”nearby”>내 주변 근처 매장 찾기</th>
				<td headers=”objectives nearby”>이용자의 현재 위치를 기반으로 회사가 컨텐츠를 제공하고 쿠폰 등을 안내</td>
				<td headers=”Period nearby”>서비스 제공 목적 달성 후 지체없이 파기<br>
						(단, 위치정보법 및 다른 법령이 달리 정하는 경우에는 <br>
						그에 따름)
				</td>
			</tr>
		</tbody>
	</table>"
                  highlightjs
                  lang="html"
                  theme="panda-syntax-light"
                  class="bg-indigo-1"
                />
              </div>
              <div class="example-box example-box--good">
                <div class="example-box__text">
                  <q-icon name="task_alt" size="2rem" />
                  <p>준수 사례 2 </p>
									<p>🔈 서비스 내용 및 (보유)목적 내 주변 근처 매장 찾기 이용자의 현재 위치를 기반으로 회사가 컨텐츠를 제공하고 쿠폰 등을 안내</p>
                </div>
                <VCodeBlock
                  code="        <p>1. 회사가 이용자에게 제공하는 위치기반서비스(무상) 및 개인위치정보의 보유목적과 기간은 아래와 같습니다.</p>
	<table class=”loc_tb”
			summary=”내 주변 근처 매장찾기 서비스 제공을 위한 서비스 내용과 목적, 개인위치정보 보유기간에 대한 정보를 제공”>
		<caption>...</caption>
		<tbody>
			<tr>
				<th >서비스 명</th>
				<th scope=”col”>서비스 내용 및 (보유)목적</th>
				<th scope=”col”>개인위치정보 보유기간</th>
			</tr>
			<tr>
				<th scope=”row”>내 주변 근처 매장 찾기</th>
				<td>이용자의 현재 위치를 기반으로 회사가 컨텐츠를 제공하고 쿠폰 등을 안내</td>
				<td>서비스 제공 목적 달성 후 지체없이 파기<br>
						(단, 위치정보법 및 다른 법령이 달리 정하는 경우에는 <br>
						그에 따름)
				</td>
			</tr>
		</tbody>
	</table>"
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
          <h4 class="title-type">4. 디자인을 위한 표는 표로 인식하지 않도록 제목과 내용을 제공하지 않는다.</h4>
        </div>

        <div class="art-content__body">
          <div class="text-body">
            <p>
              데이터가 아닌 콘텐츠는 table로 마크업 하지 않도록 하며, 
							레이아웃 표를 table로 제공한 경우에는 caption과 summary를 제공하지 않아야 한다.
            </p>
            <div class="example-wrap example-wrap--col">
              <q-img src="../images/img_guide1_sub3_02.png" :ratio="4 / 3" fit="contain">
                <div class="q-img__label">예시 이미지</div>
              </q-img>
              <div class="example-box example-box--bad">
                <div class="example-box__text">
                  <q-icon name="block" size="2rem" />
                  <p>오류 사례</p>
                </div>
                <VCodeBlock
                  code="	<table summary=”쇼핑 카테고리 테이블”>
		<caption>쇼핑 카테고리 구분을 위한 테이블입니다.</caption>
		<tbody>
			...
		</tbody>
	</table>"
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
                  code="	<div>
		<ul>
			...
		</ul>
	</div>"
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
    </div>

    <div class="art-content art-content--insight">
      <h3 class="title-type">기대 효과</h3>
      <div class="text-body">
        <ul class="list-type">
          <li>
            제목 셀과 데이터 셀이 구분되도록 구현한 데이터 테이블은 시각장애인에게 데이터 셀에 대한 제목 셀의 내용 또는
            제목 셀과의 관계를 알려주므로 내용을 파악하기 쉽다.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
