(this["webpackJsonpcards-app"]=this["webpackJsonpcards-app"]||[]).push([[0],{12:function(e,a,t){e.exports={navigator:"nav_navigator__1JHUB",hamburger_close:"nav_hamburger_close__1bKP5",ham_container:"nav_ham_container__2DI10",logo:"nav_logo__UVI7o",img:"nav_img__1uaqY",li_container:"nav_li_container__3rOQD",active:"nav_active__1Qepq",anim:"nav_anim__36vsu",icon:"nav_icon__i_4Ag",circle_add:"nav_circle_add__31wMH",circle_learn:"nav_circle_learn__29qi_",circle_exam:"nav_circle_exam__wuuPR",hamburger:"nav_hamburger__H_jMx",open:"nav_open__keeAd"}},13:function(e,a,t){e.exports={border_add_card_page:"borders_border_add_card_page__HoSmc",card_border_add_card:"borders_card_border_add_card__NHcLT",card:"borders_card__2K1NL",border_exam_page:"borders_border_exam_page__Nu9NC",card_border_exam_page:"borders_card_border_exam_page__3UrJk",exam_in:"borders_exam_in__qarl0",border_exam_card:"borders_border_exam_card__1FItv",card_border_exam_card:"borders_card_border_exam_card__yi3yq",card_exam_in:"borders_card_exam_in__2TRyd",border_end_page:"borders_border_end_page__d77Fc",card_border_end:"borders_card_border_end__3mlhS",end_in:"borders_end_in__2zaGX",border_start_page:"borders_border_start_page__3m0Ri"}},14:function(e,a,t){e.exports={container:"examCards_container__2zVkU",side_left:"examCards_side_left__3m05t",counter:"examCards_counter__2-YdX",check_container_true:"examCards_check_container_true__1mvGW",check_container_false:"examCards_check_container_false__1ZFqv",circle_true:"examCards_circle_true__1oMwJ",answer_true:"examCards_answer_true__1T3nS",circle_false:"examCards_circle_false__1e0dU",answer_false:"examCards_answer_false__3KSuJ",side_right:"examCards_side_right__3ATTP",question:"examCards_question__3D6Zj",answer:"examCards_answer__ojtm2",btn_container:"examCards_btn_container__-HeqL",exam_btn:"examCards_exam_btn__b4mlo",exam_btn_light:"examCards_exam_btn_light__3Rv7c"}},17:function(e,a,t){e.exports={page:"page_page__3dwqc",title:"page_title__3WIuQ"}},23:function(e,a,t){e.exports={back_card:"card_back_card__2dOJk",card:"card_card__35fw_"}},24:function(e,a,t){e.exports={cards_container:"collection_cards_container__1V8wY",card:"collection_card__2FLkE",delete_btn:"collection_delete_btn__2Dk3a",card_side:"collection_card_side__2MYEI",card_side_translate:"collection_card_side_translate__36jr6",card_side_word:"collection_card_side_word__2Z-ih"}},25:function(e,a,t){e.exports={container:"end_container__1crks",result_circle:"end_result_circle__2cmPh",result_wave:"end_result_wave__3iRgY",wave:"end_wave__aHCOM",result_percent:"end_result_percent__1oiZl",finish_msg:"end_finish_msg__2lUYQ",container_btns:"end_container_btns__1XMm7",finish_btn:"end_finish_btn__1WTSG",link_btn:"end_link_btn__1E10h"}},32:function(e,a,t){e.exports={img_container:"pageImages_img_container__2Agcp",img_start:"pageImages_img_start__WWsMH"}},38:function(e,a,t){e.exports={inputs_new_card:"toadd_inputs_new_card__2T3F6",input_new_card:"toadd_input_new_card__36ejn",add_button:"toadd_add_button__2-naH",message_area:"toadd_message_area__2aaQg",empty_area:"toadd_empty_area__26NbH",frame:"toadd_frame__2a28v",inside_frame:"toadd_inside_frame__1IkQ9"}},39:function(e,a,t){e.exports={words_count:"toexam_words_count__33vc_",button_container:"toexam_button_container__2bQzz",exam_btn:"toexam_exam_btn__38ggX",link_btn:"toexam_link_btn__3dMBK"}},41:function(e,a,t){e.exports={back_card_add_page:"backgrounds_back_card_add_page__2X71h",back_card_exam_page:"backgrounds_back_card_exam_page__Zs0Fk",back_card_exam:"backgrounds_back_card_exam__FWZLi"}},48:function(e,a,t){e.exports={card:"select_card__aCXeN"}},67:function(e,a,t){e.exports={welcome_text:"start_welcome_text__mJ_OS"}},68:function(e,a,t){e.exports={app:"app_app__DvAFt"}},81:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t(49),r=t.n(n),s=t(9),i=t(33),d=Object(i.b)({name:"cards",initialState:{cards:[],currId:0},reducers:{addCard:function(e,a){e.currId+=1,e.cards.push({id:e.currId,value:{word:a.payload.word,translate:a.payload.translate,selected:!1}})},deleteCard:function(e,a){e.cards=e.cards.filter((function(e){return e.id!==a.payload.id}))},selectCard:function(e,a){var t=e.cards.find((function(e){return e.id===a.payload.id}));t.value.selected=!t.value.selected},updateSelectedState:function(e){e.cards.map((function(e){return e.value.selected=!1}))}}}),l=d.actions,_=l.addCard,o=l.deleteCard,b=l.selectCard,j=l.updateSelectedState,u=d.reducer,m=Object(i.b)({name:"quizCards",initialState:{quizCards:[]},reducers:{addQuizCard:function(e,a){e.quizCards.push({id:a.payload.id,value:{word:a.payload.word,translate:a.payload.translate}})},deleteQuizCard:function(e,a){e.quizCards=e.quizCards.filter((function(e){return e.id!==a.payload.id}))},clearQuizCard:function(e){e.quizCards=[]},addArrayToCards:function(e,a){a.payload.cardsCollection.map((function(a){return e.quizCards.push({id:a.id,value:{word:a.value.word,translate:a.value.translate}})}))}}}),x=m.actions,h=x.addQuizCard,O=x.deleteQuizCard,v=x.clearQuizCard,p=x.addArrayToCards,g=m.reducer,f=Object(i.b)({name:"exam",initialState:{correct:0},reducers:{addCorrectAns:function(e){e.correct+=1},clearCorrectAns:function(e){e.correct=0}}}),N=f.actions,C=N.addCorrectAns,w=N.clearCorrectAns,y=f.reducer,k=t(28),S=t(64),q=t.n(S),z=t(16),A=Object(z.b)({cards:u,quizCards:g,exam:y}),M={key:"root",storage:q.a,whitelist:["cards","quizCards"]},Q=Object(k.g)(M,A),I=Object(i.a)({reducer:Q,middleware:function(e){return e({serializableCheck:{ignoredActions:[k.a,k.f,k.b,k.c,k.d,k.e]}})}}),T=(t(81),t(10)),H=t(7),L=t(23),E=t.n(L),F=t(38),J=t.n(F),P=t(98),U=t(13),W=t.n(U),Y=t(41),D=t.n(Y),X=t(2);var Z=function(){var e=Object(c.useState)(""),a=Object(H.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(""),i=Object(H.a)(r,2),d=i[0],l=i[1],o=Object(c.useState)(""),b=Object(H.a)(o,2),j=b[0],u=b[1],m=Object(s.b)(),x={hidden:{y:10,opacity:0},visible:{y:0,opacity:1,transition:{delayChildren:.5,staggerChildren:.3}}};return Object(X.jsx)("div",{className:"".concat(E.a.back_card," ").concat(D.a.back_card_add_page),children:Object(X.jsx)(P.a.div,{animate:{opacity:1,rotate:10,transition:{duration:.7}},initial:{opacity:0},className:" ".concat(W.a.card_border_add_card),children:Object(X.jsxs)(P.a.div,{variants:{hidden:{opacity:0,scale:1},visible:{opacity:1,scale:1,rotate:-10,transition:{delayChildren:1,staggerChildren:.1}}},animate:"visible",initial:"hidden",className:"".concat(E.a.card," ").concat(W.a.card),children:[Object(X.jsxs)("div",{className:J.a.inputs_new_card,children:[Object(X.jsx)(P.a.input,{variants:x,type:"text",className:J.a.input_new_card,placeholder:"word",value:t,onChange:function(e){return n(e.target.value)}}),Object(X.jsx)(P.a.input,{variants:x,type:"text",className:J.a.input_new_card,placeholder:"translation",value:d,onChange:function(e){return l(e.target.value)}})]}),Object(X.jsx)(P.a.button,{variants:x,className:J.a.add_button,onClick:function(){if(""===t||""===d)return u("not valid");m(_({word:t,translate:d})),n(""),l(""),u("")},children:"Add"}),0===j.length?Object(X.jsx)("div",{className:J.a.empty_area,children:"no message"}):Object(X.jsx)("div",{className:J.a.message_area,children:j})]})})})},R=t(24),K=t.n(R),B=t(99),G=t(65);var V=function(e){var a=e.card,t=e.id,n=Object(c.useState)(a.word),r=Object(H.a)(n,2),i=r[0],d=r[1],l=Object(c.useState)("".concat(K.a.card_side_word)),_=Object(H.a)(l,2),b=_[0],j=_[1],u=Object(B.a)(),m=Object(s.b)();function x(){u.start({rotate:[5,-8,5,0],transition:{duration:.2}})}return Object(X.jsxs)(P.a.div,{animate:u,className:"".concat(K.a.card_side," ").concat(b),onClick:function(){i===a.word?(d(a.translate),j("".concat(K.a.card_side_translate)),x()):(d(a.word),j("".concat(K.a.card_side_word)),x())},children:[i,Object(X.jsx)("div",{className:K.a.delete_btn,onClick:function(){return function(e){m(o({id:e}))}(t)},children:Object(X.jsx)(G.a,{})})]})};var $=function(){var e=Object(s.c)((function(e){return e.cards.cards})),a={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return 0!==e.length?Object(X.jsx)(P.a.div,{variants:{hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.5,staggerChildren:.1}}},initial:"hidden",animate:"visible",className:K.a.cards_container,children:e.map((function(e){return Object(X.jsx)(P.a.div,{variants:a,className:K.a.card,children:Object(X.jsx)(V,{card:e.value,id:e.id})},e.id)}))}):Object(X.jsx)("div",{children:"No words"})},ee=t(17),ae=t.n(ee),te=t.p+"static/media/addPage.7a956b5f.svg",ce=t(32),ne=t.n(ce);var re=function(){return Object(X.jsxs)("div",{className:ae.a.page,children:[Object(X.jsx)(P.a.div,{animate:{y:10},transition:{type:"spring",stiffness:700},className:ae.a.title,children:"Add new card"}),Object(X.jsx)("div",{className:W.a.border_add_card_page,children:Object(X.jsx)(Z,{})}),Object(X.jsx)($,{}),Object(X.jsx)("div",{className:ne.a.img_container,children:Object(X.jsx)("img",{src:te,alt:"add page"})})]})},se=t(48),ie=t.n(se);var de=function(){var e=Object(s.c)((function(e){return e.cards.cards})),a=Object(s.b)();function t(e){var t=e.id;!1===e.value.selected?(a(b({id:t})),function(e,t,c){a(h({word:e,translate:t,id:c}))}(e.value.word,e.value.translate,e.id)):(a(b({id:t})),function(e){a(O({id:e}))}(t))}return Object(X.jsx)("div",{className:K.a.cards_container,children:e.map((function(e){return Object(X.jsxs)("div",{className:ie.a.card,children:[Object(X.jsxs)("div",{className:ie.a.check_container,children:[Object(X.jsx)("input",{className:ie.a.input_box,type:"checkbox",id:e.id,onChange:function(){t(e)},value:e.value.word}),Object(X.jsx)("span",{className:ie.a.checkmark})]}),Object(X.jsx)("label",{children:e.value.word})]},e.id)}))})},le=t(20),_e=t(39),oe=t.n(_e),be=t.p+"static/media/examPage.1f1e237d.svg";var je=function(){var e=Object(c.useState)(!1),a=Object(H.a)(e,2),t=a[0],n=a[1],r=Object(s.c)((function(e){return e.quizCards.quizCards})),i=Object(s.c)((function(e){return e.cards.cards})),d=Object(s.b)(),l={hidden:{y:10,opacity:0},visible:{y:0,opacity:1}};return Object(c.useEffect)((function(){d(v()),d(j())}),[d]),0===i.length?Object(X.jsx)(P.a.div,{animate:{y:10},transition:{type:"spring",stiffness:700},className:ae.a.title,children:"no words yet"}):Object(X.jsxs)("div",{className:ae.a.page,children:[Object(X.jsx)(P.a.div,{animate:{y:10},transition:{type:"spring",stiffness:700},className:ae.a.title,children:"test your knowledge"}),Object(X.jsx)("div",{className:W.a.border_exam_page,children:Object(X.jsx)("div",{className:"".concat(D.a.back_card_exam_page," ").concat(E.a.back_card),children:Object(X.jsx)(P.a.div,{animate:{opacity:1,rotate:10,transition:{duration:.7}},initial:{opacity:0},className:W.a.card_border_exam_page,children:Object(X.jsxs)(P.a.div,{variants:{hidden:{opacity:0,scale:1},visible:{opacity:1,scale:1,rotate:-10,transition:{delayChildren:1,staggerChildren:.1}}},animate:"visible",initial:"hidden",className:"".concat(E.a.card," ").concat(W.a.exam_in),children:[Object(X.jsxs)(P.a.div,{variants:l,className:oe.a.words_count,children:["test words: ",r.length]}),Object(X.jsxs)(P.a.div,{variants:l,className:oe.a.button_container,children:[Object(X.jsx)("button",{className:oe.a.exam_btn,onClick:function(){n(!1),d(v()),d(p({cardsCollection:i}))},children:"Learn all words"}),Object(X.jsx)("button",{className:oe.a.exam_btn,onClick:function(){t?n(!1):(n(!0),d(v()))},children:"Select words"}),0!==r.length?Object(X.jsx)("button",{className:oe.a.exam_btn,children:Object(X.jsx)(le.b,{className:oe.a.link_btn,to:{pathname:"/the-exam"},children:"start test"})}):null]})]})})})}),t?Object(X.jsx)(de,{}):null,Object(X.jsx)("div",{className:ne.a.img_container,children:Object(X.jsx)("img",{src:be,alt:"add page"})})]})},ue=t.p+"static/media/learnPage.25b34ce2.svg";var me=function(){return Object(X.jsxs)("div",{className:ae.a.page,children:[Object(X.jsx)(P.a.div,{animate:{y:10},transition:{type:"spring",stiffness:700},className:ae.a.title,children:"words to learn"}),Object(X.jsx)($,{}),Object(X.jsx)("div",{className:ne.a.img_container,children:Object(X.jsx)("img",{src:ue,alt:"add page"})})]})},xe=t.p+"static/media/startPage.095e91bd.svg",he=t(67),Oe=t.n(he);var ve=function(){return Object(X.jsxs)("div",{className:ae.a.page,children:[Object(X.jsx)("div",{className:ae.a.title,children:" Welcome to My Cards! "}),Object(X.jsx)("div",{className:W.a.border_start_page,children:Object(X.jsxs)("div",{className:Oe.a.welcome_text,children:["My Cards is a simple education application which can be used to learn new words on a different languages.",Object(X.jsx)("br",{}),"You can create your own collection of words, learn them by clicking on the cards to see the translation, and test your knowledge on the exam!"]})}),Object(X.jsx)("div",{className:ne.a.img_start,children:Object(X.jsx)("img",{src:xe,alt:"add page"})})]})},pe=t(12),ge=t.n(pe),fe=t.p+"static/media/Language.79f4d7f9.svg",Ne=t.p+"static/media/Notes.2fdf96c0.svg",Ce=t.p+"static/media/Test.67894b19.svg",we=t.p+"static/media/logo.11451328.svg";var ye=function(e){return Object(X.jsxs)(P.a.header,{animate:{opacity:1,transition:{duration:.7}},initial:{opacity:0},className:"".concat(e.open?ge.a.navigator:ge.a.hamburger_close),children:[Object(X.jsx)(le.b,{to:"/",className:ge.a.logo,children:Object(X.jsxs)("h6",{children:["My C",Object(X.jsx)("img",{src:we,alt:"logo"}),"rds"]})}),Object(X.jsxs)("ul",{children:[Object(X.jsx)("li",{onClick:e.open?function(){e.setOpen(!e.open)}:null,children:Object(X.jsxs)("div",{className:ge.a.li_container,children:[Object(X.jsxs)("div",{className:ge.a.icon,children:[Object(X.jsx)("div",{className:ge.a.circle_add}),Object(X.jsx)("img",{src:Ne,alt:"add"})]}),Object(X.jsx)(le.c,{to:"/add-new-card",exact:!0,activeClassName:ge.a.active,children:Object(X.jsx)("h6",{children:"Add cards"})})]})}),Object(X.jsx)("li",{onClick:e.open?function(){e.setOpen(!e.open)}:null,children:Object(X.jsxs)("div",{className:ge.a.li_container,children:[Object(X.jsxs)("div",{className:ge.a.icon,children:[Object(X.jsx)("div",{className:ge.a.circle_exam}),Object(X.jsx)("img",{src:Ce,alt:"exam"})]}),Object(X.jsx)(le.c,{to:"/exam",exact:!0,activeClassName:ge.a.active,children:Object(X.jsx)("h6",{children:"Test me"})})]})}),Object(X.jsx)("li",{onClick:e.open?function(){e.setOpen(!e.open)}:null,children:Object(X.jsxs)("div",{className:ge.a.li_container,children:[Object(X.jsxs)("div",{className:ge.a.icon,children:[Object(X.jsx)("div",{className:ge.a.circle_learn}),Object(X.jsx)("img",{src:fe,alt:"learn"})]}),Object(X.jsx)(le.c,{to:"/learn",exact:!0,activeClassName:ge.a.active,children:Object(X.jsx)("h6",{children:"Learn words"})})]})})]})]})},ke=t(14),Se=t.n(ke),qe=t.p+"static/media/thumbsDown.568169ee.svg",ze=t.p+"static/media/thumbsUp.17fd40d7.svg";var Ae=function(e){return!0===e.isCorrect?Object(X.jsxs)("div",{className:Se.a.check_container_true,children:[Object(X.jsx)("div",{className:Se.a.circle_true}),Object(X.jsx)("div",{className:Se.a.answer_true,children:"correct answer"}),Object(X.jsx)("img",{src:ze,alt:"the answer is correct"})]}):Object(X.jsxs)(P.a.div,{animate:{scale:1,transition:{type:"spring",stiffness:900}},initial:{scale:.8},className:Se.a.check_container_false,children:[Object(X.jsx)("div",{className:Se.a.circle_false}),Object(X.jsx)("div",{className:Se.a.answer_false,children:"wrong answer"}),Object(X.jsx)("img",{src:qe,alt:"the answer isn't correct"})]})};var Me=function(e){var a=Object(c.useState)(0),t=Object(H.a)(a,2),n=t[0],r=t[1],i=Object(c.useState)(""),d=Object(H.a)(i,2),l=d[0],_=d[1],o=Object(c.useState)(""),b=Object(H.a)(o,2),j=b[0],u=b[1],m=Object(c.useState)(!1),x=Object(H.a)(m,2),h=x[0],O=x[1],v=Object(c.useState)(!1),p=Object(H.a)(v,2),g=p[0],f=p[1],N=Object(c.useState)(!1),w=Object(H.a)(N,2),y=w[0],k=w[1],S=Object(s.c)((function(e){return e.quizCards.quizCards})),q=Object(s.b)();return Object(c.useEffect)((function(){Math.floor(100*Math.random())%2===0?k(!0):k(!1)}),[n]),Object(X.jsx)("div",{className:W.a.border_exam_card,children:Object(X.jsx)("div",{className:"".concat(D.a.back_card_exam," ").concat(E.a.back_card),children:Object(X.jsx)("div",{className:W.a.card_border_exam_card,children:Object(X.jsx)("div",{className:"".concat(E.a.card),children:Object(X.jsxs)("div",{className:"".concat(Se.a.container," ").concat(W.a.card_exam_in),children:[Object(X.jsxs)("div",{className:Se.a.side_right,children:[Object(X.jsx)("div",{className:Se.a.question,children:y?S[n].value.word:S[n].value.translate}),j?null:Object(X.jsx)("input",{className:Se.a.answer,type:"text",placeholder:"enter a answer",value:l,onChange:function(e){return _(e.target.value)}}),Object(X.jsxs)("div",{className:Se.a.btn_container,children:[j?Object(X.jsx)("button",{className:Se.a.exam_btn_light,children:"set"}):Object(X.jsx)("button",{className:Se.a.exam_btn,onClick:function(){!function(){var e=y?S[n].value.translate:S[n].value.word;e.toLowerCase(),e===l.toLowerCase()&&(f(!0),q(C()))}(),u(!0),O(!0),S.length-1===n&&(O(!1),setTimeout((function(){return e.setEnd(!0)}),1500))},children:"set"}),h?Object(X.jsx)("button",{className:Se.a.exam_btn,onClick:function(){_(""),u(!1),O(!1),f(!1),r(n+1)},children:"next"}):Object(X.jsx)("button",{className:Se.a.exam_btn_light,children:"next"})]})]}),Object(X.jsxs)("div",{className:Se.a.side_left,children:[Object(X.jsxs)("div",{className:Se.a.counter,children:[n+1," / ",S.length]}),j?Object(X.jsx)(Ae,{isCorrect:g}):null]})]})})})})})},Qe=t(25),Ie=t.n(Qe);var Te=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.exam.correct})),t=Object(s.c)((function(e){return e.quizCards.quizCards})),c=135-a/t.length*130;function n(){e(w()),e(v())}var r={hidden:{y:10,opacity:0},visible:{y:0,opacity:1,transition:{delayChildren:.5,staggerChildren:.3}}};return Object(X.jsx)("div",{className:W.a.border_end_page,children:Object(X.jsx)("div",{className:E.a.back_card,children:Object(X.jsx)("div",{className:W.a.card_border_end,children:Object(X.jsx)("div",{className:"".concat(E.a.card," ").concat(W.a.end_in),children:Object(X.jsxs)("div",{className:Ie.a.container,children:[Object(X.jsxs)(P.a.div,{animate:{y:10},transition:{type:"spring",stiffness:700},className:Ie.a.finish_msg,children:["total correct answers: ",a]}),Object(X.jsxs)("div",{className:Ie.a.result_circle,children:[Object(X.jsx)("div",{className:Ie.a.result_wave,style:{top:"".concat(c,"px")}}),Object(X.jsxs)("div",{className:Ie.a.result_percent,children:[Math.round(a/t.length*100),"%"]})]}),Object(X.jsxs)("div",{className:Ie.a.container_btns,children:[Object(X.jsx)(P.a.button,{variants:r,animate:"visible",initial:"hidden",className:Ie.a.finish_btn,onClick:n,children:Object(X.jsx)(le.b,{className:Ie.a.link_btn,to:{pathname:"/exam"},children:"start new test"})}),Object(X.jsx)(P.a.button,{variants:r,animate:"visible",initial:"hidden",className:Ie.a.finish_btn,onClick:n,children:Object(X.jsx)(le.b,{className:Ie.a.link_btn,to:{pathname:"/learn"},children:"learn words"})})]})]})})})})})};var He=function(){var e=Object(c.useState)(!1),a=Object(H.a)(e,2),t=a[0],n=a[1];return Object(X.jsxs)("div",{className:ae.a.page,children:[t?null:Object(X.jsx)(Me,{setEnd:n}),t?Object(X.jsx)(Te,{}):null]})},Le=t(68),Ee=t.n(Le),Fe=t(69);var Je=function(){var e=Object(c.useState)(!1),a=Object(H.a)(e,2),t=a[0],n=a[1];return Object(X.jsxs)("div",{className:ge.a.ham_container,children:[Object(X.jsx)("button",{onClick:function(){n(!t)},className:"".concat(ge.a.hamburger," ").concat(t?ge.a.open:null),children:Object(X.jsx)(Fe.a,{})}),t?Object(X.jsx)(ye,{open:t,setOpen:n}):null]})};var Pe=function(){return Object(X.jsxs)("div",{className:Ee.a.app,children:[Object(X.jsx)(Je,{}),Object(X.jsx)(ye,{}),Object(X.jsxs)(T.c,{children:[Object(X.jsx)(T.a,{path:"/",exact:!0,children:Object(X.jsx)(ve,{})}),Object(X.jsx)(T.a,{path:"/learn",children:Object(X.jsx)(me,{})}),Object(X.jsx)(T.a,{path:"/exam",children:Object(X.jsx)(je,{})}),Object(X.jsx)(T.a,{path:"/add-new-card",children:Object(X.jsx)(re,{})}),Object(X.jsx)(T.a,{path:"/the-exam",children:Object(X.jsx)(He,{})})]})]})},Ue=t(70),We=Object(k.h)(I);r.a.render(Object(X.jsx)(s.a,{store:I,children:Object(X.jsx)(Ue.a,{loading:null,persistor:We,children:Object(X.jsx)(le.a,{children:Object(X.jsx)(Pe,{})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.52a58967.chunk.js.map