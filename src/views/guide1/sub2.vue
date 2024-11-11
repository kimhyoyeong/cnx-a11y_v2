<template>
	<section>
		<div class="art-content art-content--overview">
			<div class="text-body">
				<p>
					멀티미디어 콘텐츠를 장애인도 비장애인과 동등하게 인식할 수 있도록 제작하기 위해서는 <GlossaryTooltip term="자막" />, 대본 또는 수어를 제공해야 한다. 여기에서 가장 중요한 요소는 멀티미디어 콘텐츠와 동등한 내용을 제공하는 것이다. 가장 바람직한 방법은 폐쇄자막을 오디오와 동기화시켜 제공하는 것이다. 대사 없이 영상만 제공하는 경우, 화면해설(텍스트, 오디오, 대본)을 제공해야 한다. 음성만 제공하는 경우에도 자막, 대본 또는 수어를 제공해야 한다. 자막, 대본 또는 수어는 멀티미디어 콘텐츠에 포함된 음성의 문맥과 동등해야 한다.
				</p>
				<p>
					<GlossaryTooltip term="대체수단" /> 제공: 다음 중 한 가지 이상의 대체수단을 제공해야 한다.
				</p>
				<ul class="list-type">
					<li>
						<strong>자막 제공</strong
						><br />
						멀티미디어 콘텐츠를 재생시킬 때마다 자동적으로 자막을 화면에 표시할 수 있는 멀티미디어 콘텐츠는 본 검사항목을 준수한 것으로 간주할 수 있다. 자막은 멀티미디어 콘텐츠에 포함된 음성(대사)과 동등해야 한다. 필요에 따라 자막을 여러 언어로 제공하면, 사용자는 자신이 사용하기를 원하는 자막을 선택할 수 있다.
					</li>
					<li>
						<strong>대본 제공</strong><br />
						자막과는 달리 멀티미디어가 재생되는 과정에서 시나리오를 제공하는 경우도 본 검사항목을 준수한 것으로 간주한다. 대본은 멀티미디어 콘텐츠에 포함된 음성(대사)과 동등해야 한다. 필요에 따라 대본을 여러 언어로 제공하면, 사용자는 자신이 사용하기를 원하는 대본을 선택할 수 있다.
					</li>
					<li>
						<strong>수어 제공</strong><br />
						비디오 콘텐츠에 수어를 중첩하여 녹화한 콘텐츠도 본 검사항목을 준수한 것으로 간주한다. 수어는 멀티미디어 콘텐츠에 포함된 음성(대사)과 동등해야 한다.
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
					<p>시각 장애, 청각 장애</p>
				</div>
			</div>
		</div>

		<div class="art-content art-content--example">
			<h3 class="title-type">오류 사례 및 해결 방안</h3>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						1. 자막, 원고, 수화 중에서 어느 한 가지도 제공하지 않는
						경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							대화나 음향정보를 제공하는 멀티미디어 콘텐츠는
							청각 장애인이 접근할 수 없다. <br />
							이 경우 청각장애인이 인식할 수 있도록 자막,
							원고 또는 수화 중 하나를 제공해야 한다.<br />
							무성 비디오의 경우에도 시각장애인이 접근할 수 있도록
							<mark>영상의 변화를 화면 해설 방식으로 제공</mark>할
							필요가 있다. <br />
							만일 화면에 텍스트를 제공한다면 화면 해설과 함께
							텍스트를 읽어 주어야 한다.
						</p>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub2-1_01.png"
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
									<p>오류 사례</p>
								</div>
								<VCodeBlock
									code='<video src="/kr/ko/resource/images/brandstory/renew/brand_story_con01_visual01_pc_kr_240206.mp4"
autoplay="" muted="" playsinline="" loop="" controls=""></video>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>🔈 마몽드 심볼의 HYPER FLORA를 형상화</p>
								</div>
								<VCodeBlock
									code='<video src="/kr/ko/resource/images/brandstory/renew/brand_story_con01_visual01_pc_kr_240206.mp4"
autoplay="" muted="" playsinline="" loop="" controls=""></video>
<p class="blind">마몽드 심볼의 HYPER FLORA를 형상화</p>'
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
						2. 동영상의 내용을 요약하여 제공하는 자막 또는 원고의
						경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							자막, 대본을 제공하는 동영상 콘텐츠의 경우 자막
							또는 대본이 동영상의
							<mark>모든 내용을 포함</mark>해야 한다.
						</p>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub2-1_02.png"
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
									<p>🔈 허그 캠페인의 영상</p>
								</div>
								<VCodeBlock
									code='<video class="campagin-video pc" autoplay="" loop="" muted="" playsinline="" data-object-fit="cover">
  <source src="/kr/ko/layout/main/campaign/__icsFiles/afieldfile/2023/05/03/HUG_Film_qualitydown.mp4" type="video/mp4">
</video>
<p class="blind">허그 캠페인의 영상</p>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div class="example-box example-box--good">
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>🔈 (아래의 내용 읽어주기)</p>
								</div>
								<VCodeBlock
									code='<video class="campagin-video pc" autoplay="" loop="" muted="" playsinline="" data-object-fit="cover">
  <source src="/kr/ko/layout/main/campaign/__icsFiles/afieldfile/2023/05/03/HUG_Film_qualitydown.mp4" type="video/mp4">
</video>
<p class="blind">
  허그 캠페인의 영상
  지구에 새로 생겨나는 물 0%
  그래서 라네즈는
  13년 동안 물을 지켜왔어
  목표? 딱 하나야
  물발자국 줄이기: 환경보호를 위한 물발자국 제품의 전 과정에서 소모되는 물의 사용량을 측정하고 감축하려는 노력
  그래서 탄생한 라네즈 워터뱅크
  그냥 보통의 제품과는 달라
  물을 모으고 모아: 제품의 제조, 유통과정에서 사용되는 물 절감
  그만큼 아꼈으니까
  얼마나?
  제품 하나를 만드는데 3.05L: 워터뱅크 크림 1개당 물 사용량 3.05리터 절감(워터뱅크 크림 중건성용)
  1년 동안 다 모으면 3,337,630L: 1개당 절감량 x 21년 연간 판매량 (워터뱅크 크림 중건성용)
  그래서 물발자국도 줄였지: Carbon Trust 물발자국 감축 인증 획득
  LANEIGE가 만든 건: 자연에서 빠르게 분해되는 생분해성 성분 89% (워터뱅크 크림 중건성용)
  지속 가능한 제품 뿐만이 아니었어
  지속 가능한 실천
  해변을 입양하고 돌보고 키우는 중: 라네즈와 WWF KOREA가 함께 입양한 태안 청포대 해변 Since 22.03
  WHY?
  바로 물로부터 아름다운 피부
  LANEIGE는 오늘도 전세계 라네즈와 함께 물을 감싸안는 중
  세상 모든 아름다움을 감싸안다
  Hug for Universal Goodness, LANEIGE.
</p>">'
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
						3. 동영상 자체에서 자동 자막을 제공하고 있지만, 오타가 있는 경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							YouTube 동영상으로 콘텐츠를 제공하는 경우, YouTube 자체 자동 자막 생성 기능을 이용할 수 있다.<br>
							이 때 영상의 오디오와 다른 내용의 자막이 작성되거나 오타가 나와 사용자에게 혼란을 줄 수 있다.<br>
							YouTube 동영상 컨텐츠 제공시 올바른 자막이 보여질 수 있도록 YouTube 스튜디오를 통해 의도한 자막을 미리 삽입한다.
						</p>
						<q-btn
							outline
							color="primary"
							icon="link"
							no-caps
							href="http://studio.youtube.com/"
							target="_blank"
							label="YouTube 스튜디오"
							class="q-my-sm"
						/>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub2-1_04.png"
								fit="contain"
							>
								<div class="q-img__label">예시 이미지</div>
							</q-img>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>'아름다움은 이미 우리 안에 있잖아? 아직 틔우지 못했을 뿐.' 이라는 음성이 <br>YouTube 자동 자막 생성 기능을 통해 '아름다움은 이미 우리 안에 있잖아 아직 키우지'라고 나오고 있는 사례</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="art-content__wrap">
				<div class="art-content__heading">
					<h4 class="title-type">
						4. 대체 수단에 대한 또 다른 대체 수단임을 알려주지 않는
						경우
					</h4>
				</div>
				<div class="art-content__body">
					<div class="text-body">
						<p>
							사용자는 항상 멀티미디어 콘텐츠가 대본과 같은 대체 수단을 함께 제공할 것으로 예측한다. <br />
							그러나 해당 멀티미디어 콘텐츠가 텍스트 또는 여타의 콘텐츠의 보조 또는 대체 수단으로 제공되는 경우<br />
							<mark>멀티미디어 콘텐츠의 대본을 중복해서 제공할 필요가 없다.</mark>
							<br />
							단, 이 경우에는 멀티미디어 콘텐츠가 대체 수단임을 명시해야
							한다.
						</p>

						<div class="example-wrap example-wrap--col">
							<q-img
								src="../images/img_guide1_sub2-1_03.png"
								fit="contain"
							>
								<div class="q-img__label">
									예시 이미지
								</div>
							</q-img>
							<div class="example-box example-box--bad">
								<div class="example-box__text">
									<q-icon name="block" size="2rem" />
									<p>자막의 중복 제공</p>
								</div>
								<VCodeBlock
									code='<div class="video-wrap">
  <div class="video-player-wrapper">
      <video id="video-pc" autoplay="" loop="" muted="" playsinline="" controls="">
          <source src="/kr/ko/layout/main/brand_film/__icsFiles/afieldfile/2024/02/26/main_video_kr_240206_low.mp4" type="video/mp4">
          현재 환경에서는 동영상을 지원하지 않습니다.
      </video>
      <p class="blind">
        아름다움은 이미 우리 안에 있잖아?
        아직 틔우지 못했을 뿐.
        틔워, 너만의 아름다움을.
        하이퍼 플로라의 힘으로 나답게 피어나다.
        This is me.
        This is me, 그게 나야.
      </p>
  </div>
  <div class="ap2022-video-script-box is-active"><div class="ap2022-video-script-box__header"><button type="button" class="ap2022-video-script-box__button" title="닫기"><span>자막</span><i></i></button></div>
      <div class="ap2022-video-script-box__toggle">
          <div class="ap2022-video-script-box__toggle"><div class="ap2022-video-script-box__text">
              아름다움은 이미 우리 안에 있잖아?
              아직 틔우지 못했을 뿐.
              틔워, 너만의 아름다움을.
              하이퍼 플로라의 힘으로 나답게 피어나다.
              This is me.
              This is me, 그게 나야.
          </div></div>
      </div>
  </div>
</div>'
									highlightjs
									lang="html"
									theme="panda-syntax-light"
								/>
							</div>
							<div
								class="example-box example-box--good"
							>
								<div class="example-box__text">
									<q-icon name="task_alt" size="2rem" />
									<p>자막 영역이 있음을 명시</p>
								</div>
								<VCodeBlock
									code='<div class="video-wrap">
  <div class="video-player-wrapper">
      <video id="video-pc" autoplay="" loop="" muted="" playsinline="" controls="">
          <source src="/kr/ko/layout/main/brand_film/__icsFiles/afieldfile/2024/02/26/main_video_kr_240206_low.mp4" type="video/mp4">
          현재 환경에서는 동영상을 지원하지 않습니다.
      </video>
  </div>
  <div class="ap2022-video-script-box is-active">
    <div class="ap2022-video-script-box__header">
      <button type="button" class="ap2022-video-script-box__button" title="닫기"><span>자막</span><i></i></button>
    </div>
    <div class="ap2022-video-script-box__toggle">
        <div class="ap2022-video-script-box__toggle">
          <div class="ap2022-video-script-box__text">
            아름다움은 이미 우리 안에 있잖아?
            아직 틔우지 못했을 뿐.
            틔워, 너만의 아름다움을.
            하이퍼 플로라의 힘으로 나답게 피어나다.
            This is me.
            This is me, 그게 나야.
        </div>
      </div>
    </div>
  </div>
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

		</div>

		<div class="art-content art-content--insight">
			<h3 class="title-type">기대 효과</h3>
			<div class="text-body">
				<ul class="list-type">
					<li>
						청각장애인은 자막을 통해 음성이나 음향 정보에 접근할 수 있다. 또한 자막을 활용하면 해당 콘텐츠에 대한 인덱스를 작성하거나 내용 검색도 용이하게 할 수 있다. 수어를 제공하는 콘텐츠도 청각장애인의 접근이 용이하다.
					</li>
					<li>
						장애인이 아닌 경우에도 자막이 포함된 영상 매체를 다양한 방법으로 활용할 수 있다. 예를 들어, 자막은 소란한 환경이나 오디오 재생기능이 갖추어져 있지 않은 환경에서 영상의 자세한 내용을 파악하는 데 유용하다. 사용자가 자막을 언어별로 선택할 수 있게 하면 외국어 습득과 같이 언어능력이나 읽기능력을 향상시키는 데 도움이 된다.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
<script setup>
import GlossaryTooltip from "@/components/GlossaryTooltip.vue";
</script>
