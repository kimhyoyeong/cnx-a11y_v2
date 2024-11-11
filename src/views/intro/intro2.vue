<template>
	<section>
		<q-banner bordered class="q-pr-xl q-pt-lg q-pb-xl"
			><template v-slot:avatar>
				<q-icon
					name="visibility"
					color="indigo"
					size="80px"
					class="q-mr-md"
				/>
			</template>
			<h3 class="text-h5 text-weight-bold">시각 장애</h3>
			<q-banner dense class="bg-grey-2 q-pa-lg q-my-lg">
				전맹: 시력이 전혀 없음<br />
				저시력: 확대 기능 등을 사용하여 시력 보강 가능한 정도<br />
				고령자: 노화로 인한 시력 감퇴<br />
				색맹: 적녹색맹과 같이 색에 의한 내용 구분 불가능
			</q-banner>
			<ul class="q-mb-none">
				<li>
					스크린 리더 호환성: 스크린 리더가 웹 사이트의 콘텐츠를
					정확히 해석할 수 있도록 마크업과 코드를 적절하게 작성한다.
				</li>
				<li>
					대체 텍스트 제공: 이미지에 대체 텍스트를 제공하여 스크린
					리더 사용자가 이해할 수 있도록 한다.
				</li>
				<li>
					폰트 사이즈: 충분한 크기의 폰트 제공 및 폰트 크기 조절 기능
					지원해야 한다.
				</li>
				<li>
					색 대비: 텍스트와 배경 간 충분한 명도 대비를 유지하여
					시각적으로 알아보기 쉽게 한다.
				</li>
			</ul>
		</q-banner>
		<q-separator />
		<q-banner bordered class="q-pr-xl q-pt-xl q-pb-xl"
			><template v-slot:avatar>
				<q-icon
					name="hearing"
					color="indigo"
					size="80px"
					class="q-mr-md"
				/>
			</template>
			<h3 class="text-h5 text-weight-bold">청각 장애</h3>
			<q-banner dense class="bg-grey-2 q-pa-lg q-my-lg">
				난청: 청력이 거의 없거나 전혀 없음<br />
				고령자: 노화로 인해 청력 감퇴<br />
				농: 청력을 전혀 사용할 수 없음
			</q-banner>
			<ul class="q-mb-none">
				<li>
					자막 및 텍스트 대체: 오디오 콘텐츠에는 자막을 제공하고,
					중요한 정보는 텍스트로도 제공하여 듣기 어려운 사용자에게
					도움을 준다.
				</li>
			</ul>
		</q-banner>
		<q-separator />
		<q-banner bordered class="q-pr-xl q-pt-xl q-pb-xl"
			><template v-slot:avatar>
				<q-icon
					name="accessible"
					color="indigo"
					size="80px"
					class="q-mr-md"
				/>
			</template>
			<h3 class="text-h5 text-weight-bold">신체적 장애</h3>
			<q-banner dense class="bg-grey-2 q-pa-lg q-my-lg">
				지체장애: 입력 제어 장치 사용에 대한 제한<br />고령자: 노화로
				인한 신체 운동 기능 저하
			</q-banner>
			<ul class="q-mb-none">
				<li>
					키보드 접근성: 모든 기능은 키보드만으로도 사용할 수 있도록
					설계해야 하며, 키보드 포커스가 있는 요소는 시각적으로
					구별되고 논리적인 순서로 이동할 수 있어야 한다. 특히
					드롭다운 메뉴와 같은 대화형 요소는 키보드만으로도 완전히
					제어할 수 있어야 한다.
				</li>
				<li>
					클릭 대체 기능: 작은 링크나 버튼을 클릭하기 어려운 경우,
					크고 쉽게 선택할 수 있는 대체 기능을 제공한다.
				</li>
			</ul>
		</q-banner>
		<q-separator />
		<q-banner bordered class="q-pr-xl q-pt-xl q-pb-xl"
			><template v-slot:avatar>
				<q-icon
					name="psychology"
					color="indigo"
					size="80px"
					class="q-mr-md"
				/>
			</template>
			<h3 class="text-h5 text-weight-bold">인지적 장애</h3>
			<q-banner dense class="bg-grey-2 q-pa-lg q-my-lg">
				정신지체: 지능 저하로 인한 언어 및 사용 능력의 부족<br />언어능력:
				고급 어휘 또는 외국어 능력이 떨어지거나 글을 판독하는 능력 부족
			</q-banner>
			<ul class="q-mb-none">
				<li>
					간단하고 일관된 레이아웃: 복잡하지 않고 일관된 레이아웃을
					사용하여 콘텐츠를 쉽게 읽고 이해할 수 있도록 한다.
				</li>
				<li>
					명확한 지침과 레이블: 사용자에게 명확한 지침과 레이블을
					제공하여 사이트 내에서 쉽게 방향을 잡을 수 있도록 한다.
				</li>
			</ul>
		</q-banner>
	</section>
</template>
