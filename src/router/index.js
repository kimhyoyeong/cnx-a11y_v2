import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store.js";

import PageView from "@/components/PageView.vue";

const routes = [
  {
    path: "/",
    redirect: "/intro/sub1",
  },
  {
    path: "/intro",
    redirect: "/intro/sub1",
    component: PageView,
    children: [
      {
        path: "/intro/sub1",
        component: () => import("@/views/intro/intro1.vue"),
        meta: { title: "웹접근성이란? | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/intro/sub2",
        component: () => import("@/views/intro/intro2.vue"),
        meta: { title: "장애 환경 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/intro/sub3",
        component: () => import("@/views/intro/intro3.vue"),
        meta: { title: "인증 프로세스 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/intro/sub4",
        component: () => import("@/views/intro/intro4.vue"),
        meta: { title: "자가진단 도구 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/intro/sub5",
        component: () => import("@/views/intro/intro5.vue"),
        meta: { title: "용어 정의 | 콘센트릭스 웹접근성 가이드" },
      },
    ],
  },
  {
    path: "/guide1",
    redirect: "/guide1/sub1",
    component: PageView,
    children: [
      {
        path: "/guide1/sub1",
        component: () => import("@/views/guide1/sub1.vue"),
        meta: { title: "대체 텍스트 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide1/sub2",
        component: () => import("@/views/guide1/sub2.vue"),
        meta: { title: "멀티미디어 대체 수단 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide1/sub3",
        component: () => import("@/views/guide1/sub3.vue"),
        meta: { title: "표의 구성 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide1/sub3-2",
        component: () => import("@/views/guide1/sub3-2.vue"),
        meta: {
          title: "콘텐츠의 선형구조 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide1/sub3-3",
        component: () => import("@/views/guide1/sub3-3.vue"),
        meta: {
          title: "명확한 지시사항 제공 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide1/sub4",
        component: () => import("@/views/guide1/sub4.vue"),
        meta: { title: "명료성 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide1/sub4-2",
        component: () => import("@/views/guide1/sub4-2.vue"),
        meta: {
          title: "자동 재생 금지 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide1/sub4-3",
        component: () => import("@/views/guide1/sub4-3.vue"),
        meta: {
          title: "텍스트 콘텐츠의 명도 대비 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide1/sub4-4",
        component: () => import("@/views/guide1/sub4-4.vue"),
        meta: {
          title: "콘텐츠 간의 구분 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub1",
        component: () => import("@/views/guide2/sub1.vue"),
        meta: {
          title: "입력 장치 접근성 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub1-2",
        component: () => import("@/views/guide2/sub1-2.vue"),
        meta: {
          title: "초점 이동과 표시 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub1-3",
        component: () => import("@/views/guide2/sub1-3.vue"),
        meta: { title: "조작 가능 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide2/sub1-4",
        component: () => import("@/views/guide2/sub1-4.vue"),
        meta: {
          title: "문자 단축키 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub2",
        component: () => import("@/views/guide2/sub2.vue"),
        meta: {
          title: "충분한 시간 제공 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub2-2",
        component: () => import("@/views/guide2/sub2-2.vue"),
        meta: {
          title: "정지 기능 제공 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub3",
        component: () => import("@/views/guide2/sub3.vue"),
        meta: { title: "광 과민성 발작 예방 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide2/sub4",
        component: () => import("@/views/guide2/sub4.vue"),
        meta: {
          title: "쉬운 내비게이션 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub4-2",
        component: () => import("@/views/guide2/sub4-2.vue"),
        meta: { title: "제목 제공 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide2/sub4-3",
        component: () => import("@/views/guide2/sub4-3.vue"),
        meta: {
          title: "적절한 링크 텍스트 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub4-4",
        component: () => import("@/views/guide2/sub4-4.vue"),
        meta: {
          title: "고정된 참조 위치 정보 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub5",
        component: () => import("@/views/guide2/sub5.vue"),
        meta: { title: "입력 방식 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide2/sub5-2",
        component: () => import("@/views/guide2/sub5-2.vue"),
        meta: {
          title: "포인터 입력 취소 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub5-3",
        component: () => import("@/views/guide2/sub5-3.vue"),
        meta: {
          title: "레이블과 네임 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide2/sub5-4",
        component: () => import("@/views/guide2/sub5-4.vue"),
        meta: {
          title: "동작 기반 작동 | 콘센트릭스 웹접근성 가이드",
        },
      },
      {
        path: "/guide3/sub1",
        component: () => import("@/views/guide3/sub1.vue"),
        meta: { title: "가독성 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide3/sub2",
        component: () => import("@/views/guide3/sub2.vue"),
        meta: { title: "예측 가능성 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide3/sub2-2",
        component: () => import("@/views/guide3/sub2-2.vue"),
        meta: { title: "찾기 쉬운 도움 정보 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide3/sub3",
        component: () => import("@/views/guide3/sub3.vue"),
        meta: { title: "입력 도움 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide3/sub3-2",
        component: () => import("@/views/guide3/sub3-2.vue"),
        meta: { title: "레이블 제공 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide3/sub3-3",
        component: () => import("@/views/guide3/sub3-3.vue"),
        meta: { title: "접근 가능한 인증 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide3/sub3-4",
        component: () => import("@/views/guide3/sub3-4.vue"),
        meta: { title: "반복 입력 정보 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide4/sub1",
        component: () => import("@/views/guide4/sub1.vue"),
        meta: { title: "문법 준수 | 콘센트릭스 웹접근성 가이드" },
      },
      {
        path: "/guide4/sub2",
        component: () => import("@/views/guide4/sub2.vue"),
        meta: { title: "웹 애플리케이션 접근성 | 콘센트릭스 웹접근성 가이드" },
      },
    ],
  },
  {
    path: "/ui",
    component: () => import("@/views/ui.vue"),
    meta: { title: "UI 가이드 | 콘센트릭스 웹접근성 가이드" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.path !== from.path) {
      return { top: 0 };
    }
    return {};
  },
});

router.beforeEach((to, from, next) => {
  document.documentElement.lang = "ko";
  document.title = to.meta.title || "콘센트릭스 웹접근성 가이드";
  store.dispatch("setTopMenuFromPath", to.path);
  next();
});

export default router;
