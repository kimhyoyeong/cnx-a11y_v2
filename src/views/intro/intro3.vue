<template>
	<section>
		<div class="row q-col-gutter-xl">
			<div class="col">
				<h3 class="text-h5 text-weight-bold">갱신시</h3>
				<q-banner dense class="bg-grey-2 q-pa-lg q-my-lg">
					- 1년 주기로 웹접근성 인증 갱신<br />
					- 1차 심사 결과서 받은 후 수정 기간 평균 7일 정도 소요 예정
					(심사 보고서 수정 기준 개발 및 타 채널 수정건 있을 경우 일정
					확인 필요)<br />
					- 1차 심사 결과서 전체 검토 및 담당자 분류 하여 개발팀에
					수정 가이드 전달<br />
					- 최종 합격 하여 인증서 취득 후 푸터의 인증 마크 교체 작업
					진행<br />
				</q-banner>
				<q-timeline loose>
					<q-timeline-entry
						title="웹접근성 인증평가원"
						subtitle="심사신청"
						color="indigo"
						icon="send"
					>
						<div>인증 만료일 안내 및 갱신 심사 신청 요청</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="심사신청"
						color="indigo"
					>
						<div>
							인증 신청서 및 세금계산서 발행 정보 작성하여 송부
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="웹접근성 인증평가원"
						subtitle="심사"
						color="indigo"
					>
						<div>심사 일정 통보</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="웹접근성 인증평가원"
						subtitle="심사"
						color="indigo"
					>
						<div>
							심사 진행 및 심사 결과서 송부 (예상기간 5~7일)
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="심사 담당자와 질의응답"
						color="red"
						icon="checklist"
					>
						<div>
							<ol>
								<li>
									심사 결과서를 토대로 사이트 전반적인 검토
									진행
								</li>
								<li>
									수정 가이드 정리 및 작업 담당 분류 후 전달
									(예상기간 1일)
								</li>
							</ol>
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="오류 사항 수정"
						color="red"
					>
						<div>
							<ol>
								<li>
									기획/디자인/퍼블리싱 파트 진행 (예상기간
									4일)
								</li>
								<li>개발 파트 진행 (일정 확인 필요)</li>
								<li>외부 채널 진행 (일정 확인 필요)</li>
							</ol>
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="QA"
						color="red"
					>
						<div>
							반영 여부 최종 확인<br />
							<p class="text-caption text-bold q-mt-xs">
								*검수 후 추가 수정 필요할 경우 2차 수정요청
								(예상기간 2일)
							</p>
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="재심사"
						color="indigo"
						icon="send"
					>
						<div>재심사 요청</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="웹접근성 인증평가원"
						subtitle="재심사"
						color="indigo"
					>
						<div>
							재심사 진행 및 최종 결과서 송부 (예상기간 5~7일)<br />
							<p class="text-caption text-bold q-mt-xs">
								*2~3차 부적합 결과 시, 이메일 등으로 추가 수정
								요청 받을 수 있음
							</p>
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="인증 갱신"
						color="indigo"
						icon="done"
					>
						<div>최종 확인</div>
					</q-timeline-entry>
				</q-timeline>
			</div>
			<div class="col">
				<h3 class="text-h5 text-weight-bold">신규 심사시</h3>
				<q-banner dense class="bg-grey-2 q-pa-lg q-my-lg">
					자가 진단 도구를 활용하여 사전 점검 및 오류사항 수정 후,
					웹접근성 인증 심사 신청 필요<br />
				</q-banner>
				<q-timeline loose>
					<q-timeline-entry
						title="콘센트릭스"
						subtitle="사전 점검 및 오류사항 수정"
						color="red"
						icon="checklist"
					>
						<div>
							자가 진단 도구를 활용하여 사전점검<br />수정 가이드
							정리 및 오류사항 수정 진행 (예상기간 1달)
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="심사신청"
						color="indigo"
						icon="send"
					>
						<div>(신규) 인증 신청서 작성 및 송부</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="웹접근성 인증평가원"
						subtitle="심사신청"
						color="indigo"
					>
						<div>접수</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="웹접근성 인증평가원"
						subtitle="심사"
						color="indigo"
					>
						<div>심사 일정 통보</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="웹접근성 인증평가원"
						subtitle="심사"
						color="indigo"
					>
						<div>
							심사 진행 및 심사 결과서 송부 (예상기간 5~7일)
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="심사 담당자와 질의응답"
						color="red"
						icon="checklist"
					>
						<div>
							<ol>
								<li>
									심사 결과서를 토대로 사이트 전반적인 검토
									진행
								</li>
								<li>
									수정 가이드 정리 및 작업 담당 분류 후 전달
									(예상기간 1일)
								</li>
							</ol>
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="오류 사항 수정"
						color="red"
					>
						<div>
							<ol>
								<li>
									기획/디자인/퍼블리싱 파트 진행 (예상기간
									4일)
								</li>
								<li>개발 파트 진행 (일정 확인 필요)</li>
								<li>외부 채널 진행 (일정 확인 필요)</li>
							</ol>
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="QA"
						color="red"
					>
						<div>
							반영 여부 최종 확인<br />
							<p class="text-caption text-bold q-mt-xs">
								*검수 후 추가 수정 필요할 경우 2차 수정요청
								(예상기간 2일)
							</p>
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="재심사"
						color="indigo"
						icon="send"
					>
						<div>재심사 요청</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="웹접근성 인증평가원"
						subtitle="재심사"
						color="indigo"
					>
						<div>
							재심사 진행 및 최종 결과서 송부 (예상기간 5~7일)<br />
							<p class="text-caption text-bold q-mt-xs">
								*2~3차 부적합 결과 시, 이메일 등으로 추가 수정
								요청 받을 수 있음
							</p>
						</div>
					</q-timeline-entry>

					<q-timeline-entry
						title="콘센트릭스"
						subtitle="인증 갱신"
						color="indigo"
						icon="done"
					>
						<div>최종 확인</div>
					</q-timeline-entry>
				</q-timeline>
			</div>
		</div>
	</section>
</template>
