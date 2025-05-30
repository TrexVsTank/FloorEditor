import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home/Home.vue";
import Login from "@/views/login/Login.vue";
import SignUp from "@/views/signup/SignUp.vue";
import Room from "@/views/room/Room.vue";
import FloorEditor from "@/views/editor/floor-editor/FloorEditor.vue";
import FurnitureEditor from "@/views/editor/furniture-editor/FurnitureEditor.vue";
import Editor from "@/views/editor/Editor.vue";
import OAuthCallback from "@/views/login/OAuthCallback.vue";
import OAuthSuccess from "../views/login/OAuthSuccess.vue";
import PwdCheck from "../views/mypage/Passwordcheck.vue";
import MyPage from "../views/mypage/Mypage.vue";
import ArticleList from "../views/article/ArticleList.vue";
import ArticleDetail from "../views/article/ArticleDetail.vue";
import ArticleCreate from "@/views/article/ArticleCreate.vue";
import MypageInfo from "@/views/mypage/mypage/MypageInfo.vue";
import MypageUpdate from "@/views/mypage/mypage/MypageUpdate.vue";
import FourthPage from "../views/home/FourthPage.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/floor-editor/1', // ← 여기서 초기 경로를 강제 리디렉션
    },
    // { 
    //   path: "/",
    //   name: "Home",
    //   component: Home,
    //   meta: { showHeader: true },
    // },
    //////////////////수정해야됨///////////////////
    {
      path: "/article",
      name: "ArticleList",
      component: ArticleList,
      meta: { showHeader: true},
    },
    {
      path: "/article/:articleId",
      name: "ArticleDetail",
      component: ArticleDetail,
      meta: { showHeader: true },
    },
      {
        path: "/article/create",
        name: "ArticleCreate",
        component: ArticleCreate
      },
      {
        path: "/article/:articleId/edit",
        name: "ArticleUpdate",
        component: ArticleCreate
      },
      /////////////////////////////////////////
    
    { path: "/login", name: "Login", component: Login, meta: { showHeader: true }, },
    { path: "/room", name: "Room", component: Room, meta: { showHeader: true }, },
    { path: '/floor-editor/:roomId', name: 'FloorEditor', component: FloorEditor, meta: { showHeader: false }, },
    { path: '/furniture-editor/:roomId', name: 'FurnitureEditor', component: FurnitureEditor, meta: { showHeader: false }, },
    { path: '/editor/:roomId', name: 'Editor', component: Editor, meta: { showHeader: false }, },
    { path: "/signup", name: "SignUp", component: SignUp, meta: { showHeader: true }, },
    { path: "/oauth/success", name: "OAuthSuccess", component: OAuthSuccess, meta: { showHeader: false }, },
    { path: "/pwdcheck", name: "PasswordCheck", component: PwdCheck, meta: { showHeader: true }, },
    // { path: "/fourth", name: "FourthPage", component: FourthPage, meta: { showHeader: true }, },
    
    {
      path: "/mypage",
      name: "MyPage",
      component: MyPage,
      redirect: "/mypage/info",  // 기본 경로를 /mypage/info로 설정
      children: [
        {
          path: "info",
          name: "MypageInfo",
          component: MypageInfo
        },
        {
          path: "update",
          name: "MypageUpdate",
          component: MypageUpdate,
          meta: { showHeader: true },
        },
      ],
      meta: { showHeader: true },
    },
    //   path: '/oauth/callback',
    //   name: "OAuthCallback",
    //   component: OAuthCallback,
    //   beforeEnter: (to, from, next) => {
    //     // URL에서 토큰 파라미터 가져오기
    //     const fullPath = window.location.href;
    //     const searchParams = new URL(fullPath).searchParams;

    //     // 토큰 추출
    //     const accessToken = searchParams.get('accessToken');
    //     const refreshToken = searchParams.get('refreshToken');

    //     // 파라미터를 라우트 쿼리에 추가
    //     to.query = {
    //       accessToken,
    //       refreshToken
    //     };

    //     next();
    //   }
    // }
  ]
});

// OAuth 콜백 URL을 처리하기 위한 전역 리스너는 그대로 유지
window.addEventListener('load', () => {
  const fullPath = window.location.href;
  if (fullPath.includes('/oauth/callback')) {
    const url = new URL(fullPath);

    window.location.href = `/oauth/success${url.search}`;
    
  }
});

export default router;
