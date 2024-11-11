<template>
  <section>
    <div class="art-content art-content--overview">
      <div class="text-body">
        <p>
          웹 페이지에서 자동으로 소리(동영상, 오디오, 음성, 배경 음악 등 콘텐츠가 제공하는 모든 소리)가 재생됨으로 인해
          화면낭독프로그램 사용자가 콘텐츠를 인식하고 사용하는 데 방해받지 않아야 한다. 단, 3초 미만의 소리는 허용한다.
          3초 이상 재생되는 소리는 제어할 수 있는 수단(멈춤, 일시정지, 음량 조절 등)을 함께 제공해야 한다. 참고로,
          플랫폼은 콘텐츠가 제공하는 배경음의 음량을 조절하더라도 화면낭독프로그램의 음량에는 영향을 주지 않아야 한다.
        </p>
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
          <h4 class="title-type">1. 자동 재생음을 허용하는 경우</h4>
        </div>
        <div class="art-content__body">
          <div class="text-body">
            <p>자동으로 재생되는 소리는 3초 내에 멈추거나, 지정된 키(예: esc키)를 누르면 재생을 멈추도록 구현한다.</p>
          </div>
        </div>
      </div>

      <div class="art-content__wrap">
        <div class="art-content__heading">
          <h4 class="title-type">2. 사용자 요구에 의한 재생</h4>
        </div>
        <div class="art-content__body">
          <div class="text-body">
            <p>
              콘텐츠에 포함된 멀티미디어 파일은 정지 상태로 제공하며 사용자가 요구할 경우에만 재생할 수 있도록
              제어판(멈춤, 일시 정지, 음량 조절 등)을 제공한다.
            </p>
            <div class="example-wrap example-wrap--col">
              <div class="example-box example-box--good">
                <q-img src="../images/img_guide1_sub4-2_02.png" :ratio="4/ 3">
                  <div class="q-img__label">해결 방안</div>
                </q-img>
              </div>
              <div class="example-box example-box--good">
                <div class="example-box__text">
                  <q-icon name="task_alt" size="2rem" />
                  <p>콘텐츠에 포함된 멀티미디어 컨트롤 기능 제공</p>
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
            멀티미디어 콘텐츠가 자동적으로 실행되어 시각장애인이 사용하고 있는 화면낭독프로그램이 읽어주는 소리를
            방해하면 큰 혼란을 야기할 수 있다. 따라서 3초 이후에는 해당 멀티미디어 콘텐츠가 자동적으로 만들어 내는
            소리가 멈추어야 시각장애인이 이 페이지를 사용할 수 있다.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
