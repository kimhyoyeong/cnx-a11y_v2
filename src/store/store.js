import { createStore } from "vuex";

const store = createStore({
  state: {
    selectedTopMenu: null,
    currentPath: "",
    pageTitle: "",
    categoryTitle: "",
    topMenuItems: [
      {
        name: "소개",
        path: "/intro",
        children: [
          { name: "웹접근성이란?", path: "/intro/sub1" },
          { name: "장애 환경", path: "/intro/sub2" },
          { name: "인증 프로세스", path: "/intro/sub3" },
          { name: "자가진단 도구", path: "/intro/sub4" },
          { name: "용어 정의", path: "/intro/sub5" },
        ],
      },
      {
        name: "지침(KWCAG 2.2)",
        path: "/guide1",
        children: [
          {
            name: "인식의 용이성",
            path: "/guide1",
            children: [
              { name: "대체 텍스트", path: "/guide1/sub1" },
              { name: "멀티미디어 대체 수단", path: "/guide1/sub2" },
              {
                name: "적응성",
                path: "/guide1/sub3",
                children: [
                  { name: "표의 구성", path: "/guide1/sub3" },
                  { name: "콘텐츠의 선형구조", path: "/guide1/sub3-2" },
                  { name: "명확한 지시사항 제공", path: "/guide1/sub3-3" },
                ],
              },
              {
                name: "명료성",
                path: "/guide1/sub4",
                children: [
                  {
                    name: "색에 무관한 콘텐츠 인식",
                    path: "/guide1/sub4",
                  },
                  { name: "자동 재생 금지", path: "/guide1/sub4-2" },
                  {
                    name: "텍스트 콘텐츠의 명도 대비",
                    path: "/guide1/sub4-3",
                  },
                  { name: "콘텐츠 간의 구분", path: "/guide1/sub4-4" },
                ],
              },
            ],
          },
          {
            name: "운용의 용이성",
            path: "/guide2",
            children: [
              {
                name: "입력 장치 접근성",
                path: "/guide2/sub1",
                children: [
                  { name: "키보드 사용 보장", path: "/guide2/sub1" },
                  { name: "초점 이동과 표시", path: "/guide2/sub1-2" },
                  { name: "조작 가능", path: "/guide2/sub1-3" },
                  { name: "문자 단축키", path: "/guide2/sub1-4" },
                ],
              },
              {
                name: "충분한 시간 제공",
                path: "/guide2/sub2",
                children: [
                  { name: "응답 시간 조절", path: "/guide2/sub2" },
                  { name: "정지 기능 제공", path: "/guide2/sub2-2" },
                ],
              },
              {
                name: "광 과민성 발작 예방",
                path: "/guide2/sub3",
              },
              {
                name: "쉬운 내비게이션",
                path: "/guide2/sub4",
                children: [
                  { name: "반복 영역 건너뛰기", path: "/guide2/sub4" },
                  { name: "제목 제공", path: "/guide2/sub4-2" },
                  { name: "적절한 링크 텍스트", path: "/guide2/sub4-3" },
                  {
                    name: "고정된 참조 위치 정보",
                    path: "/guide2/sub4-4",
                  },
                ],
              },
              {
                name: "입력 방식",
                path: "/guide2/sub5",
                children: [
                  { name: "단일 포인터 입력 지원", path: "/guide2/sub5" },
                  { name: "포인터 입력 취소", path: "/guide2/sub5-2" },
                  { name: "레이블과 네임", path: "/guide2/sub5-3" },
                  { name: "동작 기반 작동", path: "/guide2/sub5-4" },
                ],
              },
            ],
          },
          {
            name: "이해의 용이성",
            path: "/guide3",
            children: [
              { name: "가독성", path: "/guide3/sub1" },
              {
                name: "예측 가능성",
                path: "/guide3/sub2",
                children: [
                  {
                    name: "사용자 요구에 따른 실행",
                    path: "/guide3/sub2",
                  },
                  { name: "찾기 쉬운 도움 정보", path: "/guide3/sub2-2" },
                ],
              },
              {
                name: "입력 도움",
                path: "/guide3/sub3",
                children: [
                  { name: "오류 정정", path: "/guide3/sub3" },
                  { name: "레이블 제공", path: "/guide3/sub3-2" },
                  { name: "접근 가능한 인증", path: "/guide3/sub3-3" },
                  { name: "반복 입력 정보", path: "/guide3/sub3-4" },
                ],
              },
            ],
          },
          {
            name: "견고성",
            path: "/guide4",
            children: [
              { name: "문법 준수", path: "/guide4/sub1" },
              { name: "웹 애플리케이션 접근성", path: "/guide4/sub2" },
            ],
          },
        ],
      },
      {
        name: "UI 가이드",
        path: "/ui",
      },
    ],
  },
  mutations: {
    toggleLeftDrawer(state) {
      state.leftDrawerOpen = !state.leftDrawerOpen;
    },
    setSelectedTopMenu(state, menuItem) {
      state.selectedTopMenu = menuItem;
    },
    setCurrentPath(state, path) {
      state.currentPath = path;
    },
    setPageTitle(state, title) {
      state.pageTitle = title;
    },
    setCategoryTitle(state, title) {
      state.categoryTitle = title;
    },
  },
  actions: {
    setTopMenuFromPath({ commit, state }, path) {
      function findMenuItem(menuItems, targetPath) {
        for (const item of menuItems) {
          if (item.path === targetPath) {
            if(item.children){
              commit("setPageTitle", item.children[0].name);
            }else{
              commit("setPageTitle", item.name);
            }
            return { menuItem: item, parentItem: null }; // 상위 카테고리 없음
          }
          if (item.children) {
            const found = findMenuItem(item.children, targetPath);
            if (found) {
              return { menuItem: item, parentItem: found.menuItem }; // 상위 항목 반환 (현재 항목이 상위 항목이 됨)
            }
          }
        }
        return null;
      }
      const resultItem = findMenuItem(state.topMenuItems, path);
      if (resultItem) {
        const { menuItem, parentItem } = resultItem;
        commit("setCurrentPath", path);
        commit("setSelectedTopMenu", menuItem);
        if(parentItem && parentItem.children){
          commit("setCategoryTitle", parentItem.name);
        }else{
          commit("setCategoryTitle", "");
        }
      }
    },
  },
});

export default store;
