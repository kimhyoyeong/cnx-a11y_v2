<template>
	<section>
		<div class="row items-start q-gutter-md">
			<q-card class="my-card" flat bordered>
				<q-card-section>
					<div class="text-h6 q-mb-xs">크롬 확장프로그램</div>
					<div class="text-subtitle2 text-grey-8 q-mt-md">
						웹 접근성 문제를 진단하고 수정하는 데 도움을 주는 크롬
						확장 프로그램
					</div>
				</q-card-section>
				<div class="q-pa-md q-gutter-sm">
					<q-btn
						outline
						color="primary"
						icon="link"
						no-caps
						href="https://chromewebstore.google.com/detail/openwax/bfahpbmaknaeohgdklfbobogpdngngoe?hl=ko"
						target="_blank"
						label="OpenWAX"
						title="웹 접근성 평가 도구"
					/>
					<q-btn
						outline
						color="primary"
						icon="link"
						no-caps
						href="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=ko"
						target="_blank"
						label="WAVE Evaluation Tool"
						title="웹 접근성 평가 도구"
					/>
					<q-btn
						outline
						color="primary"
						icon="link"
						no-caps
						href="https://chromewebstore.google.com/detail/kwcag-a11y-inspector/ngcmkfaolkgkjbddhjnhgoekgaamjibo?hl=ko"
						target="_blank"
						label="kwcag a11y inspector"
						title="한국 웹 접근성 가이드라인(KWCAG)에 맞춘 웹 접근성 평가 도구"
					/>
				</div>
			</q-card>

			<q-card class="my-card" flat bordered>
				<q-card-section>
					<div class="text-h6 q-mb-xs">명도 대비 검사</div>
					<div class="text-subtitle2 text-grey-8 q-mt-md">
						명도 차이 비교할 수 있도록 도와주는 고대비 전환 확장
						프로그램
					</div>
				</q-card-section>
				<div class="q-pa-md q-gutter-sm">
					<q-btn
						outline
						color="primary"
						icon="link"
						no-caps
						href="https://www.tpgi.com/color-contrast-checker/"
						target="_blank"
						label="Colour Contrast Analyzer"
					/>
					<q-btn
						outline
						color="primary"
						icon="link"
						no-caps
						href="https://chromewebstore.google.com/detail/%EA%B3%A0%EB%8C%80%EB%B9%84/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=ko"
						target="_blank"
						label="고대비"
					/>
				</div>
			</q-card>

			<q-card class="my-card" flat bordered>
				<q-card-section>
					<div class="text-h6 q-mb-xs">마크업 오류 검사</div>
					<div class="text-subtitle2 text-grey-8 q-mt-md">
						마크업 및 웹 접근성 오류를 확인하고 웹 표준을 검사할 수
						있는 사이트
					</div>
				</q-card-section>
				<div class="q-pa-md q-gutter-sm">
					<q-btn
						outline
						color="primary"
						icon="link"
						no-caps
						href="https://validator.w3.org/"
						target="_blank"
						label="W3C Validation"
					/>
				</div>
			</q-card>

			<q-card class="my-card" flat bordered>
				<q-card-section>
					<div class="text-h6 q-mb-xs">
						내레이터(윈도우 스크린리더)
					</div>
					<div class="text-subtitle2 text-grey-8 q-mt-md">
						시각 장애인이나 시력이 약한 사용자가 컴퓨터를 쉽게
						사용할 수 있도록 화면의 텍스트와 그래픽 정보를 음성으로
						읽어주거나 점자 디스플레이에 출력해 주는 소프트웨어
						<p class="text-caption q-pt-md">
							* 시작/종료 단축키 : [Win]+[Ctrl]+[Enter]
						</p>
					</div>
				</q-card-section>
				<div class="q-pa-md q-gutter-sm">
					<q-btn
						outline
						color="primary"
						icon="link"
						no-caps
						href="https://support.microsoft.com/ko-kr/windows/%EB%82%B4%EB%A0%88%EC%9D%B4%ED%84%B0-%EC%A0%84%EC%B2%B4-%EA%B0%80%EC%9D%B4%EB%93%9C-e4397a0d-ef4f-b386-d8ae-c172f109bdb1"
						target="_blank"
						label="내레이터 전체 가이드"
					/>
				</div>
			</q-card>
		</div>
	</section>
</template>

<script>
import { ref } from "vue";

export default {
	setup() {
		return {
			stars: ref(4),
		};
	},
};
</script>

<style lang="scss" scoped>
.my-card {
	width: 100%;
	max-width: 300px;
}
</style>
