(this.webpackJsonpsummerstartup=this.webpackJsonpsummerstartup||[]).push([[0],{13:function(e,r,a){e.exports={avatarImage:"Profile_avatarImage__1CisU",login:"Profile_login__3y1ic",profileWrapper:"Profile_profileWrapper__1GGMa",bio:"Profile_bio__2PhU4",followWrapper:"Profile_followWrapper__9OADN"}},16:function(e,r,a){e.exports={header:"Header_header__1E8t8",gitCat:"Header_gitCat__2ONY7",search:"Header_search__2Mgl1",searchWrapper:"Header_searchWrapper__1AV34"}},20:function(e,r,a){e.exports={searchPage:"SearchPage_searchPage__2s4YA",textWrapper:"SearchPage_textWrapper__g5lve",image:"SearchPage_image__2Mzy9"}},21:function(e,r,a){e.exports={name:"Repository_name__2yzQ8",description:"Repository_description__3obYx",repoWrapper:"Repository_repoWrapper__1VQ8y"}},24:function(e,r,a){e.exports={appWrapper:"App_appWrapper__2NVDY"}},27:function(e,r,a){e.exports={userNotFoundPage:"UserNotFound_userNotFoundPage__3Hrqn",textWrapper:"UserNotFound_textWrapper__1NiAh",image:"UserNotFound_image__FOh7J"}},28:function(e,r,a){e.exports={loaderWrapper:"PreloaderForPhoto_loaderWrapper__118W8",loader:"PreloaderForPhoto_loader__2swbP",spin:"PreloaderForPhoto_spin__GuWq-"}},29:function(e,r,a){e.exports={loaderWrapper:"Preloader_loaderWrapper__Qz_sm",loader:"Preloader_loader__32Hnn",spin:"Preloader_spin__PxeiV"}},4:function(e,r,a){e.exports={profilePage:"ProfilePage_profilePage__4BZqQ",noRepoText:"ProfilePage_noRepoText__2dvA5",noRepoWrapper:"ProfilePage_noRepoWrapper__p5RP6",heading:"ProfilePage_heading__3-wUH",paginateWrapper:"ProfilePage_paginateWrapper__2bWaL",page:"ProfilePage_page__2VZ3F",brake:"ProfilePage_brake__3s2dj",nextLi:"ProfilePage_nextLi__DsG-u",previousLi:"ProfilePage_previousLi__2YMv0",disabledPrevNext:"ProfilePage_disabledPrevNext__2dOf7",active:"ProfilePage_active__3Qg4M",reposWithPages:"ProfilePage_reposWithPages__4V04m",range:"ProfilePage_range__1-jTe",pagesWrapper:"ProfilePage_pagesWrapper__2J_PY"}},47:function(e,r,a){},71:function(e,r,a){"use strict";a.r(r);var t=a(0),n=a.n(t),s=a(17),i=a.n(s),c=(a(47),a(3)),o=a(24),l=a.n(o),p=a(19),u=a.p+"static/media/gitCat.1ee5d17e.svg",d=a(16),j=a.n(d),g=a(5),b=a(30),h=a(40),f=a.n(h).a.create({baseURL:"https://api.github.com/"}),_=function(e){return f.get("/users/".concat(e)).then((function(e){return e.data}))},O=function(e,r,a){return f.get("/users/".concat(e,"/repos?per_page=").concat(r,"&page=").concat(a)).then((function(e){return e.data}))},x="SET_USER",m="SET_REPOS",v="SET_IS_FETCHING_PROFILE",P="SET_IS_FETCHING_REPOS",N="SET_IS_FETCHING_PHOTO",A="SET_IS_NOT_FOUND",W="SET_CURRENT_PAGE",R={user:null,repos:null,isFetchingProfile:!1,isFetchingRepos:!1,isFetchingPhoto:!1,isNotFound:!1,perPage:4,currentPage:1},y=function(e){return{type:x,payload:{user:e}}},F=function(e){return{type:m,payload:{repos:e}}},E=function(e){return{type:v,payload:{isFetchingProfile:e}}},w=function(e){return{type:P,payload:{isFetchingRepos:e}}},C=function(e){return{type:N,payload:{isFetchingPhoto:e}}},L=function(e){return{type:A,payload:{isNotFound:e}}},S=function(e){return{type:W,payload:{currentPage:e}}},I=a(12),T=a(1),k=function(){var e=Object(c.f)(),r=Object(t.useState)(""),a=Object(p.a)(r,2),n=a[0],s=a[1],i=Object(g.b)(),o=Object(g.c)((function(e){return e.profile.user})),l=Object(g.c)((function(e){return e.profile.isNotFound}));return!o&&l&&e.push("/usernotfound"),Object(T.jsxs)("div",{className:j.a.header,children:[Object(T.jsx)("div",{className:j.a.gitCat,children:Object(T.jsx)(I.b,{to:"/searchpage",children:Object(T.jsx)("img",{src:u,alt:"gitCat"})})}),Object(T.jsx)("div",{className:j.a.searchWrapper,children:Object(T.jsx)("input",{value:n,onChange:function(e){s(e.currentTarget.value)},className:j.a.search,onKeyPress:function(r){if("Enter"===r.key){i(L(!1)),i(S(1));var a=n.replace(/\s/g,"");e.push("/profile/".concat(a)),s("")}},placeholder:"Enter GitHub username"})})]})},U=a.p+"static/media/lens2.5e71efd5.svg",B=a(20),Q=a.n(B),G=function(){return Object(T.jsxs)("div",{className:Q.a.searchPage,children:[Object(T.jsx)("div",{className:Q.a.image,children:Object(T.jsx)("img",{src:U,alt:"lens"})}),Object(T.jsx)("div",{className:Q.a.textWrapper,children:Object(T.jsx)("p",{children:"Start with searching a GitHub user"})})]})},J=a.p+"static/media/user.8fe7b3bb.svg",M=a(27),H=a.n(M),Y=function(){return Object(T.jsxs)("div",{className:H.a.userNotFoundPage,children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:J,alt:"user icon"})}),Object(T.jsx)("div",{className:H.a.textWrapper,children:Object(T.jsx)("p",{children:"User not found"})})]})},D=a(13),V=a.n(D),K=a(28),X=a.n(K),Z=function(){return Object(T.jsx)("div",{className:X.a.loaderWrapper,children:Object(T.jsx)("div",{className:X.a.loader})})},q=n.a.memo((function(e){var r=e.user;console.log("Profile rendered");var a=Object(g.c)((function(e){return e.profile.isFetchingPhoto})),n=Object(g.b)();function s(e,r){var a=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(r){return e>=r.value}));return a?(e/a.value).toFixed(r).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+a.symbol:"0"}return Object(t.useEffect)((function(){n(C(!0)),setTimeout((function(){n(C(!1))}),3e3)}),[]),r&&Object(T.jsxs)("div",{className:V.a.profileWrapper,children:[Object(T.jsx)("div",{className:V.a.avatarImage,children:a?Object(T.jsx)(Z,{}):Object(T.jsx)("img",{src:r.avatar_url?r.avatar_url:"",alt:"avatar"})}),Object(T.jsx)("a",{href:r.html_url?r.html_url:"",target:"_blank",children:Object(T.jsx)("p",{className:V.a.login,children:r.login})}),r.bio&&Object(T.jsx)("p",{className:V.a.bio,children:r.bio}),Object(T.jsxs)("div",{className:V.a.followWrapper,children:[Object(T.jsxs)("div",{children:[r.followers&&s(r.followers,1)," followers"]}),Object(T.jsxs)("div",{children:[r.following&&s(r.following,1)," following"]})]})]})})),z=a(4),$=a.n(z),ee=a(29),re=a.n(ee),ae=function(){return Object(T.jsx)("div",{className:re.a.loaderWrapper,children:Object(T.jsx)("div",{className:re.a.loader})})},te=a(21),ne=a.n(te),se=function(e){var r=e.name,a=e.description,t=e.html_url;return Object(T.jsxs)("div",{className:ne.a.repoWrapper,children:[Object(T.jsx)("p",{className:ne.a.name,children:Object(T.jsx)("a",{href:t||"",target:"_blank",children:r})}),Object(T.jsx)("p",{className:ne.a.description,children:a})]})},ie=a(41),ce=a.n(ie),oe=Object(T.jsx)("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",transform:"rotate(180)",children:Object(T.jsx)("path",{d:"M1 1L6 6L1 11",stroke:"#0064EB",strokeWidth:"2"})}),le=Object(T.jsx)("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(T.jsx)("path",{d:"M1 1L6 6L1 11",stroke:"#0064EB",strokeWidth:"2"})}),pe=function(){var e=Object(g.c)((function(e){return e.profile.isFetchingProfile})),r=Object(g.c)((function(e){return e.profile.isFetchingRepos})),a=Object(g.c)((function(e){return e.profile.user})),n=Object(g.c)((function(e){return e.profile.repos})),s=Object(g.c)((function(e){return e.profile.perPage})),i=Object(g.c)((function(e){return e.profile.currentPage})),o=Object(g.b)(),l=Object(c.g)().username;Object(t.useEffect)((function(){o(function(e,r,a){return function(t){t(E(!0));var n=[_(e),O(e,r,a)];Promise.all(n).then((function(e){var r=Object(p.a)(e,2),a=r[0],n=r[1];t(y(a)),t(F(n)),t(E(!1))})).catch((function(e){t(y(null)),t(L(!0))}))}}(l,s,i))}),[l]);var u=n&&n.map((function(e){return Object(T.jsx)(se,{name:e.name,description:e.description,html_url:e.html_url},e.id)})),d=4*(i-1)+1,j=a&&a.public_repos,b=a&&a.public_repos&&s?Math.ceil(a.public_repos/s):0;return Object(T.jsx)("div",{children:e?Object(T.jsx)(ae,{}):Object(T.jsxs)("div",{className:$.a.profilePage,children:[Object(T.jsx)(q,{user:a}),n&&0!==n.length?Object(T.jsxs)("div",{className:$.a.reposWithPages,children:[r?Object(T.jsx)(ae,{}):Object(T.jsxs)("div",{className:$.a.reposWrapper,children:[Object(T.jsx)("p",{className:$.a.heading,children:"Repositories(".concat(j,")")}),u]}),Object(T.jsxs)("div",{className:$.a.pagesWrapper,children:[Object(T.jsx)("div",{className:$.a.range,children:1===j?Object(T.jsx)("p",{children:"1 item of 1 items"}):j===d?Object(T.jsx)("p",{children:" ".concat(d," item of ").concat(d," items")}):Object(T.jsx)("p",{children:"".concat(1!==i?d:1," \n                                            - ").concat(j&&d+3>j?j:d+3," \n                                            of ").concat(j," \n                                            items")})}),Object(T.jsx)(ce.a,{pageCount:b,pageRangeDisplayed:3,marginPagesDisplayed:1,containerClassName:$.a.paginateWrapper,pageClassName:$.a.page,previousLinkClassName:$.a.previousA,previousClassName:$.a.previousLi,nextLinkClassName:$.a.nextA,nextClassName:$.a.nextLi,activeClassName:$.a.active,onPageChange:function(e){o(function(e,r,a){return function(t){t(w(!0)),O(e,r,a).then((function(e){t(w(!1)),t(S(a)),t(F(e))}))}}(l,s,e.selected+1))},nextLabel:le,previousLabel:oe,disabledClassName:$.a.disabledPrevNext,breakClassName:$.a.brake})]})]}):Object(T.jsxs)("div",{className:$.a.noRepoWrapper,children:[Object(T.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA+CAYAAACBff3hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPBSURBVHgB7ZxBctowFIafafelJ6h7gpJdd3VO0N4g5ASFPTOYGfahJyhddhV6gsIJSk8Q9QTNCaDvZ2RijG09AZWC0TdDIFjOjL9I9nvPkiMSMBwO261W62a9Xif8a4dfMTWDJb9UFEWz1Wq1GI1GyrRDVLeRRSX8x4b8MaHLYMqdYlQnrlQYehS/pSzrM10mEy3usbhhTxjLilnUT2rOsDsUxdKui71tR1iQtceetK0wDEOW9YuCrCKQdpUNz1ZuQ0pBVhmxvvBt2PQwPRQfKFCJHprzTQ/LGwyUkzmKLHsXgrwJB3nfyi655wSOm9+yODOW7MO97DWEdXmnr4L2COr65y6qiI45J+zgxtSW2/Ra/OMjmVFNlAX0MfX4pUxtkRriHBabGrLUtImyMnBsONUImnYgrGNqhcSUGg7Oy4JmcUvQiCRZ/LkjHUEiYYEngjBLgjBLgjBLXpIHdCX3A8c1v/lkO7Pcd1Mux2e+sv1wfUFy3sP4gKe65oaK7n2appIsI9u3gzSORaMiiuj8gb/7RA5xKgwHV5KCdCXStCyIbue/F6Z1J8OpMD64dxWbaqVVydK0x+PxG3KEU2E8jOoyhlJpBllADQaDP+QIp8JQgGNpdSnIjjSBLPwT+uQQ51dJltZlEVRTToE0iPhiksXb0dbqKnssXuIwSDP1NH1DplYWi5ckzCfFW+AqkFaJL1nAa6R/iDSfsoD31MhGmm9Z4LnkkpJq59y3LOBdWC50MJHYpFH/C6/CJHFWga5vad6EHSArw6s0L8KEsuY127xJ81He6Qgj+GubNMoVrss7mJZwT8IIXpIRsLQ7cojrHpZQzY3jsjhLIK2nb/c7wakwLi2/qtpWF5Qek0adGqfCUIPnt/2JtoIIvkba1OU0Btf1MExquaWniR+PNukOpNFuVoD62ogc4qMehvrVDOedQ3oGn+RRMOwfuv+x+CzvHHWwvmYThRu5lgRhlgRhlgRhlgRhloiEuUw9fKGnoRuBMGVspGfLNJxE0GYJYUtTK46me03uZXphmmQ1jMI8/bmgIcoyd02Uli1sINn0+1mk7f4lGVg6k0rXRz9ncuvYsaghluzDbd9uVrNxfoYKaEKBOqbs6XZzlXSd8Z8jmaMX+LFYLFSSJBjL7ylQxoRPQd/xYRuHaYOKAkVUfgRuhaFcglWnFKTlyRbJb0tJ4TEM1ZQ+hmEvNdJl5CuSTRBpKhP9JAFV3GB6lEy2or5Ll8EccSYfd+Xk5YgE5NZHY/UuPhvXWJ4Jil9LZDvSdez/ABxE5egsGq2AAAAAAElFTkSuQmCC",alt:"noRepo"}),Object(T.jsx)("p",{className:$.a.noRepoText,children:"Repository list is empty"})]})]})})};var ue=function(){return Object(T.jsxs)("div",{className:l.a.appWrapper,children:[Object(T.jsx)(k,{}),Object(T.jsxs)("div",{children:[Object(T.jsx)(c.b,{exact:!0,path:"/",render:function(){return Object(T.jsx)(c.a,{to:"/searchpage"})}}),Object(T.jsx)(c.b,{path:"/searchpage",render:function(){return Object(T.jsx)(G,{})}}),Object(T.jsx)(c.b,{path:"/usernotfound",render:function(){return Object(T.jsx)(Y,{})}}),Object(T.jsx)(c.b,{path:"/profile/:username",render:function(){return Object(T.jsx)(pe,{})}})]})]})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(r){var a=r.getCLS,t=r.getFID,n=r.getFCP,s=r.getLCP,i=r.getTTFB;a(e),t(e),n(e),s(e),i(e)}))},je=a(15),ge=a(42),be=Object(je.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case x:case m:case v:case A:case W:case P:case N:return Object(b.a)(Object(b.a)({},e),r.payload);default:return e}}}),he=Object(je.c)(be,Object(je.a)(ge.a));i.a.render(Object(T.jsx)(I.a,{children:Object(T.jsx)(g.a,{store:he,children:Object(T.jsx)(ue,{})})}),document.getElementById("root")),de()}},[[71,1,2]]]);
//# sourceMappingURL=main.72688b93.chunk.js.map