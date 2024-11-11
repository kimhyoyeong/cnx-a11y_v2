<template>
  <section>
    <div class="art-content art-content--overview">
      <div class="text-body">
        <p>
          단일 포인터 입력으로 실행되는 기능은 해당 입력이 실수로 실행되는 것을 방지하기 위하여, 다음 중 하나 이상을
          준수해야 한다.
        </p>
        <ul class="list-type">
          <li>
            <strong><GlossaryTooltip term="다운 이벤트" />만으로 실행 금지</strong><br />기능은 다운 이벤트만으로
            실행되지 않아야 한다.
          </li>
          <li>
            <strong>중지 또는 실행취소</strong><br />기능은 <GlossaryTooltip term="업 이벤트" />에 완료되어야 하며, 실행
            전에 중지시키거나 실행 후에 취소시킬 수 있어야 한다.
          </li>
          <li><strong>되돌리기</strong><br />다운 이벤트로 실행된 모든 기능은 업 이벤트로 되돌릴 수 있어야 한다.</li>
          <li>
            <strong>필수적인 경우</strong><br />기능을 완료하는 데 다운 이벤트가 반드시 필요하다. (타이핑, 피아노 건반,
            슈팅게임 등)
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
          <p>손떨림, 시각장애, 인지 또는 학습장애</p>
        </div>
      </div>
    </div>

    <div class="art-content art-content--skill">
      <h3 class="title-type">제작 기법</h3>
      <p>
        단일 포인터 입력으로 실행되는 기능은 해당 입력이 실수로 실행되는 것을 방지하기 위하여, 다음 중 하나 이상을
        준수해야 한다.
      </p>
      <div class="art-content__wrap">
        <div class="art-content__heading">
          <q-icon name="check"></q-icon>
          <h4 class="title-type">다운 이벤트만으로 실행 금지</h4>
        </div>
        <div class="art-content__body">
          <div class="text-body">
            <p>
              링크 이동을 취소하기 위해서 누르는 동작인 '마우스다운' 후
              <mark>포인터를 클릭 가능한 영역 밖으로 이동시켜 '마우스업'을 할 경우 링크 이동이 취소</mark>될 수 있도록
              구현되어 있다. 이를 위해 'mousedown' 이벤트 사용을 지양하고 'click' 이벤트를 사용한다.
            </p>
            <div class="example-wrap">
              <div class="example-box example-box--bad">
                <q-img src="../images/img_guide4_sub5-2_01.png">
                  <div class="q-img__label">오류 사례</div>
                </q-img>
                <div class="example-box__text">
                  <q-btn color="red" @mousedown="learnMore('mousedown')" class="q-mb-sm">더 알아보기</q-btn>
                </div>
                <div class="example-box__text">
                  <q-icon name="block" size="2rem" />
                  <p>'mousedown' 이벤트로 구현 시 포인터 입력을 취소할 수 없다.</p>
                </div>
                <VCodeBlock
                  code='<button type="button" onmousedown="learnMore()">더 알아보기</button>
<script>
  // 마우스를 누름과 동시에 실행
  function learnMore() {
    alert(`상세페이지로 이동합니다.`);
  })
</script>'
                  highlightjs
                  lang="html"
                  theme="panda-syntax-light"
                />
              </div>
              <div class="example-box example-box--good">
                <q-img src="../images/img_guide4_sub5-2_02.png">
                  <div class="q-img__label">준수 사례</div>
                </q-img>
                <div class="example-box__text">
                  <q-btn color="primary" @click="learnMore('onclick')" class="q-mb-sm">더 알아보기</q-btn>
                </div>
                <div class="example-box__text">
                  <q-icon name="task_alt" size="2rem" />
                  <p>'onclick' 이벤트로 구현 시 클릭 가능 영역 밖에서 마우스 뗄 경우 포인터 입력을 취소할 수 있다.</p>
                </div>
                <VCodeBlock
                  code='<button type="button" onclick="learnMore()">더 알아보기</button>
<script>
  // 마우스를 눌렀다 뗐을 때 실행
  function learnMore() {
    alert(`상세페이지로 이동합니다.`);
  })
</script>'
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
          <h4 class="title-type">떼는 동작(Up 이벤트)에 중지(취소) 또는 실행취소 제공</h4>
        </div>
        <div class="art-content__body">
          <div class="text-body">
            <div class="example-wrap">
              <div class="example-box">
                <q-img src="../images/img_guide4_sub5-2_03.png" fit="contain">
                  <div class="q-img__label">예시 이미지 1</div>
                </q-img>
              </div>
              <div class="example-box">
                <q-img src="../images/img_guide4_sub5-2_04.png" fit="contain">
                  <div class="q-img__label">예시 이미지 2</div>
                </q-img>
              </div>
            </div>
            <p>
              파일 삭제를 위해 드래그 앤 드롭을 이용하여 파일을 휴지통에 옮길 경우, '마우스다운' 후 포인터를 휴지통 버튼
              영역 밖에서 '마우스업' 하여 파일
              <mark>삭제 과정을 중지</mark>할 수 있다.
            </p>
          </div>
        </div>
      </div>

      <div class="art-content__wrap">
        <div class="art-content__heading">
          <q-icon name="check"></q-icon>
          <h4 class="title-type">떼는 동작(Up 이벤트)에 누르는 동작(Down-Event)의 결과 되돌리기 제공</h4>
        </div>
        <div class="art-content__body">
          <div class="text-body">
            <div class="example-wrap">
              <div class="example-box example-box--good">
                <div class="example-box__text">
                  <q-btn
                    color="primary"
                    @mousedown="showTooltip = true"
                    @mouseup="showTooltip = false"
                    class="q-mr-sm q-mb-sm vertical-middle"
                    >더 알아보기</q-btn
                  >
                </div>
                <div class="example-box__text">
                  <q-icon name="task_alt" size="2rem" />
                  <p>
                    누르는 동작(Down 이벤트)으로 실행된 결과는 떼는 동작(Up 이벤트)에 되돌릴 수 있는 기능을 제공해야
                    한다.
                  </p>
                </div>
                <VCodeBlock
                  code='<button type="button" onmousedown="showTooltip(true)" onmouseup="showTooltip(false)">더 알아보기</button>
<div class="tooltip">
  mousedown상태<br />tooltip을 닫으려면 마우스에서 손을 떼세요.
</div>
<script>
  // 마우스를 눌렀다 뗐을 때 실행
  function showTooltip(state) {
    if (state == true) {
        // mousedown 이벤트에 툴팁 활성화
        document.querySelector(".tooltip").classList.add("active");
    } else {
        // mouseup 이벤트에 툴팁 비활성화
        document.querySelector(".tooltip").classList.remove("active");
    }
  })
</script>'
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
          <h4 class="title-type">1. 떼는 동작(Up 이벤트)에서 팝업 닫기 취소 불가능</h4>
        </div>
        <div class="art-content__body">
          <div class="text-body">
            <p>
              닫기 버튼을 누른 경우, 이를 취소하기 위해 떼는 동작(Up 이벤트) 전에 커서를 옆으로 이동시키고 떼는 동작을
              하면, 닫기 기능이 실행되지 않도록 수정한다.
            </p>

            <div class="example-wrap">
              <div class="example-box example-box--bad">
                <q-video
                  class="full-width q-img"
                  title="오류 사례"
                  :ratio="1 / 1"
                  src="/images/img_guide4_sub5-2_01.mp4"
									autoplay
									loop
									muted
                />
                <div class="example-box__text">
                  <q-icon name="block" size="2rem" />
                  <p>
                    팝업 닫기를 취소하기 위해 버튼 영역 밖에서 떼는 동작을 진행하였으나 동작이 취소되지 않고 팝업 닫힘
                  </p>
                </div>
              </div>
              <div class="example-box example-box--good">
                <q-video
                  class="full-width q-img"
                  title="모범 사례"
                  :ratio="1 / 1"
                  src="/images/img_guide4_sub5-2_02.mp4"
									autoplay
									loop
									muted
                />
                <div class="example-box__text">
                  <q-icon name="task_alt" size="2rem" />
                  <p>버튼 영역 밖에서 떼는 동작 진행 시 팝업 닫기 동작을 취소 할 수 있도록 수정</p>
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
          <li>사용자가 잘못된 입력임을 인식했을 때 동작을 취소하거나 실행결과를 되돌릴 수 있다.</li>
          <li>우발적으로 오동작을 일으킬 확률을 줄여준다.</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
  import {ref} from "vue";
  import GlossaryTooltip from "@/components/GlossaryTooltip.vue";

  const showTooltip = ref(false);
  const learnMore = (val) => {
    if (val === "mousedown") {
      alert(`상세페이지로 이동합니다.\n (mousedown: 마우스를 누름과 동시에 실행)`);
    } else if (val === "onclick") {
      alert(`상세페이지로 이동합니다.\n (onClick: 마우스를 눌렀다 뗐을 때 실행)`);
    } else {
      alert(`상세페이지로 이동합니다.`);
    }
  };
</script>
