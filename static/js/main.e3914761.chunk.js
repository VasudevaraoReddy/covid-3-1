(this["webpackJsonpcovid19-dashboard"]=this["webpackJsonpcovid19-dashboard"]||[]).push([[0],{193:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(32),r=a(87),i=a.n(r),o=a(18),d=a(21),l=a(165),u=a(166),m=(a(193),a(2)),j=Object(o.f)((function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsxs)("div",{className:"mobile-view",children:[Object(m.jsx)(n.b,{to:"/",className:"link-item",children:Object(m.jsx)("div",{className:"mobile-logo",children:Object(m.jsxs)("p",{className:"covid-name",children:["COVID19",Object(m.jsx)("span",{className:"india-name",children:"INDIA"})]})})}),Object(m.jsx)(l.a,{className:"home-icon",onClick:function(){s(!0)}})]}),Object(m.jsxs)("div",{className:"desktop-view",children:[Object(m.jsx)(n.b,{to:"/",className:"link-item",children:Object(m.jsx)("div",{className:"desktop-logo",children:Object(m.jsxs)("p",{className:"covid-name",children:["COVID19",Object(m.jsx)("span",{className:"india-name",children:"INDIA"})]})})}),Object(m.jsxs)("ul",{className:"icons-2",children:[Object(m.jsx)(n.b,{to:"/",className:"link-item",children:Object(m.jsx)("li",{children:"Home"})}),Object(m.jsx)(n.b,{to:"/about",className:"link-item",children:Object(m.jsx)("li",{children:"About"})})]})]})]}),a?Object(m.jsxs)("div",{className:"navbar-below-mobile",children:[Object(m.jsxs)("div",{className:"mobile-below",children:[Object(m.jsx)(n.b,{to:"/",className:"link-item",children:Object(m.jsx)("li",{children:"Home"})}),Object(m.jsx)(n.b,{to:"/about",className:"link-item",children:Object(m.jsx)("li",{children:"About"})})]}),Object(m.jsx)(u.a,{className:"cancel-icon",onClick:function(){s(!1)}})]}):null]})})),h=a(25),b=a.n(h),f=a(43),p=a(44),O=a(45),x=a(46),v=a(47),N=a(91),g=a.n(N),_=a(123),k=function(e){var t=e.details,a=e.onClickEachState,c=t.confirmed,s=t.name,n=t.active,r=t.deceased,i=t.recovered,o=t.population,d=new Intl.NumberFormat("en-US");return Object(m.jsxs)("tr",{onClick:function(e){return a(e,t)},children:[Object(m.jsx)("td",{className:"tro",children:s}),Object(m.jsx)("td",{className:"tr1",children:d.format(c)}),Object(m.jsx)("td",{className:"tr2",children:d.format(n)}),Object(m.jsx)("td",{className:"tr3",children:d.format(i)}),Object(m.jsx)("td",{className:"tr4",children:d.format(r)}),Object(m.jsx)("td",{className:"tr4",children:d.format(o)})]})},y=a(122),w=a(169),S=(a(218),function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)("p",{className:"covid-name-footer",children:["COVID19",Object(m.jsx)("span",{className:"india-name-footer",children:"INDIA"})]}),Object(m.jsx)("p",{className:"footer-tag",children:"we stand with everyone fighting on the front lines"}),Object(m.jsxs)("div",{className:"footer-icons-section",children:[Object(m.jsx)(w.a,{className:"footer-icon"}),Object(m.jsx)(y.a,{className:"footer-icon"}),Object(m.jsx)(y.b,{className:"footer-icon"})]})]})}),C=(a(219),a(170)),D=(a(220),function(e){var t=e.details;return Object(m.jsx)(n.b,{to:"/state/".concat(t.state_code),className:"each-state-link",children:Object(m.jsxs)("li",{className:"each-state-item",children:[Object(m.jsx)("p",{className:"each-state-name",children:t.state_name}),Object(m.jsxs)("div",{className:"each-state-navigation",children:[Object(m.jsx)("p",{children:t.state_code}),Object(m.jsx)(C.a,{})]})]})})}),F=[{state_code:"AN",state_name:"Andaman and Nicobar Islands"},{state_code:"AP",state_name:"Andhra Pradesh"},{state_code:"AR",state_name:"Arunachal Pradesh"},{state_code:"AS",state_name:"Assam"},{state_code:"BR",state_name:"Bihar"},{state_code:"CH",state_name:"Chandigarh"},{state_code:"CT",state_name:"Chhattisgarh"},{state_code:"DN",state_name:"Dadra and Nagar Haveli and Daman and Diu"},{state_code:"DL",state_name:"Delhi"},{state_code:"GA",state_name:"Goa"},{state_code:"GJ",state_name:"Gujarat"},{state_code:"HR",state_name:"Haryana"},{state_code:"HP",state_name:"Himachal Pradesh"},{state_code:"JK",state_name:"Jammu and Kashmir"},{state_code:"JH",state_name:"Jharkhand"},{state_code:"KA",state_name:"Karnataka"},{state_code:"KL",state_name:"Kerala"},{state_code:"LA",state_name:"Ladakh"},{state_code:"LD",state_name:"Lakshadweep"},{state_code:"MH",state_name:"Maharashtra"},{state_code:"MP",state_name:"Madhya Pradesh"},{state_code:"MN",state_name:"Manipur"},{state_code:"ML",state_name:"Meghalaya"},{state_code:"MZ",state_name:"Mizoram"},{state_code:"NL",state_name:"Nagaland"},{state_code:"OR",state_name:"Odisha"},{state_code:"PY",state_name:"Puducherry"},{state_code:"PB",state_name:"Punjab"},{state_code:"RJ",state_name:"Rajasthan"},{state_code:"SK",state_name:"Sikkim"},{state_code:"TN",state_name:"Tamil Nadu"},{state_code:"TG",state_name:"Telangana"},{state_code:"TR",state_name:"Tripura"},{state_code:"UP",state_name:"Uttar Pradesh"},{state_code:"UT",state_name:"Uttarakhand"},{state_code:"WB",state_name:"West Bengal"}],A="INITIAL",L="SUCCESS",I="FAILURE",W="IN_PROGRESS",T=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={resultList:[],apiStatus:A,activeStateNameDetails:"",searchInput:"",isSearchActive:!1},e.convertObjectsDataIntoListItemsUsingForInMethod=function(e){var t=[];return Object.keys(e).forEach((function(a){if(e[a]){var c,s,n=e[a].total,r=n.confirmed?n.confirmed:0,i=n.deceased?n.deceased:0,o=n.recovered?n.recovered:0,d=n.tested?n.tested:0,l=e[a].meta.population?e[a].meta.population:0,u=[F.find((function(e){return e.state_code===a}))];if(void 0!==(null===(c=u[0])||void 0===c?void 0:c.state_name))t.push({stateCode:a,confirmed:r,name:null===(s=u[0])||void 0===s?void 0:s.state_name,deceased:i,recovered:o,tested:d,population:l,active:r-(i+o)})}})),t},e.getAllStatesCovidCases=Object(f.a)(b.a.mark((function t(){var a,c,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:W}),t.next=3,fetch("https://apis.ccbp.in/covid19-state-wise-data");case 3:if(!0!==(a=t.sent).ok){t.next=12;break}return t.next=7,a.json();case 7:c=t.sent,s=e.convertObjectsDataIntoListItemsUsingForInMethod(c),e.setState({resultList:s,apiStatus:L}),t.next=13;break;case 12:e.setState({apiStatus:I});case 13:case"end":return t.stop()}}),t)}))),e.onClickEachState=function(t,a){t.preventDefault(),e.setState({activeStateNameDetails:a})},e.renderTable=function(){var t=e.state.resultList;return Object(m.jsx)("tbody",{children:t.map((function(t){return Object(m.jsx)(k,{details:t,onClickEachState:e.onClickEachState},t.stateCode)}))})},e.renderLoadingView=function(){return Object(m.jsx)("div",{className:"products-loader-container",testid:"homeRouteLoader",children:Object(m.jsx)(g.a,{type:"Oval",color:"#007bff",height:"50",width:"50"})})},e.renderFailureView=function(){return Object(m.jsxs)("div",{className:"failure-view",children:[Object(m.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",alt:"failure view",className:"fail-image"}),Object(m.jsx)("p",{children:"Oops! Something Went Wrong"}),Object(m.jsx)("button",{className:"retry-btn",type:"button",onClick:e.getAllStatesCovidCases,children:"Retry"})]})},e.onClickAscSortOption=function(){var t=e.state.resultList.sort((function(e,t){return e.name<t.name?-1:0}));e.setState({resultList:t})},e.onClickDescSortOption=function(){var t=e.state.resultList.sort((function(e,t){return e.name>t.name?-1:0}));e.setState({resultList:t})},e.renderTableView=function(){return Object(m.jsx)("div",{className:"table-design",children:Object(m.jsxs)("table",{className:"users_table",testid:"stateWiseCovidDataTable",children:[Object(m.jsx)("thead",{className:"thead",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsxs)("div",{className:"sort-sec",children:[Object(m.jsx)("p",{children:"States/UT"}),Object(m.jsx)("button",{type:"button",testid:"ascendingSort",className:"sort-btn",onClick:e.onClickAscSortOption,children:Object(m.jsx)(_.a,{className:"sort-icon"})}),Object(m.jsx)("button",{className:"sort-btn",tested:"descendingSort",type:"button",onClick:e.onClickDescSortOption,children:Object(m.jsx)(_.b,{className:"sort-icon"})})]})}),Object(m.jsx)("th",{children:"Confirmed"}),Object(m.jsx)("th",{children:"Active"}),Object(m.jsx)("th",{children:"Recovered"}),Object(m.jsx)("th",{children:"Deceased"}),Object(m.jsx)("th",{children:"Population"})]})}),e.renderTable()]})})},e.renderAll=function(){switch(e.state.apiStatus){case L:return e.renderTableView();case I:return e.renderFailureView();case W:return e.renderLoadingView();default:return null}},e.onChangeSearchInput=function(t){t.preventDefault(),e.setState({searchInput:t.target.value,isSearchActive:!0})},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.getAllStatesCovidCases()}},{key:"render",value:function(){var e=this,t=new Intl.NumberFormat("en-US"),a=this.state,c=a.searchInput,s=a.isSearchActive,n=a.resultList,r=n.reduce((function(e,t){return e+t.confirmed}),0),i=n.reduce((function(e,t){return e+t.active}),0),o=n.reduce((function(e,t){return e+t.recovered}),0),d=n.reduce((function(e,t){return e+t.deceased}),0),l=F.filter((function(e){return e.state_name.toLowerCase().includes(c.toLowerCase())||e.state_code.toLowerCase().includes(c.toLowerCase())}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"home-bg",onClick:function(){e.setState({isSearchActive:!1,searchInput:""})},"aria-hidden":"true",children:[Object(m.jsx)("input",{value:c,type:"search",placeholder:"Search",className:"search-box",onChange:this.onChangeSearchInput}),s?Object(m.jsx)("ul",{className:"search-list-section",testid:"searchResultsUnorderedList",children:0===l.length?Object(m.jsxs)("p",{className:"no-results-section",children:["There is no State Name with your Search ",c]}):l.map((function(e){return Object(m.jsx)(D,{details:e},e.state_code)}))}):Object(m.jsxs)("div",{className:"home-icons-section",children:[Object(m.jsxs)("div",{className:"section1",children:[Object(m.jsxs)("div",{className:"confirmed",testid:"countryWideConfirmedCases",children:[Object(m.jsx)("p",{children:"Confirmed"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/dbphffmis/image/upload/v1637413101/Group_rtygto.png",alt:"country wide confirmed cases pic",className:"confirmed-image"}),Object(m.jsx)("p",{children:t.format(r)})]}),Object(m.jsxs)("div",{className:"active",testid:"countryWideActiveCases",children:[Object(m.jsx)("p",{children:"Active"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/dbphffmis/image/upload/v1637413101/protection_1_btp8wk.png",alt:"country wide active cases pic",className:"confirmed-image"}),Object(m.jsx)("p",{children:t.format(i)})]})]}),Object(m.jsxs)("div",{className:"section1",children:[Object(m.jsxs)("div",{className:"recovered",testid:"countryWideRecoveredCases",children:[Object(m.jsx)("p",{children:"Recovered"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/dbphffmis/image/upload/v1637413101/recovered_1_mnz2xy.png",alt:"country wide recovered cases pic",className:"confirmed-image"}),Object(m.jsx)("p",{children:t.format(o)})]}),Object(m.jsxs)("div",{className:"deceased",testid:"countryWideDeceasedCases",children:[Object(m.jsx)("p",{children:"Deceased"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/dbphffmis/image/upload/v1637413101/Outline_fqrmo2.png",alt:"country wide deceased cases pic",className:"confirmed-image"}),Object(m.jsx)("p",{children:t.format(d)})]})]})]}),!s&&this.renderAll()]}),Object(m.jsx)(S,{})]})}}]),a}(c.Component),R=T,M=(a(221),"INITIAL"),U="SUCCESS",q="FAILURE",B="IN_PROGRESS",K=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={faqsList:[],apiStatus:M},e.getFaqs=Object(f.a)(b.a.mark((function t(){var a,c,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:B}),t.next=3,fetch("https://apis.ccbp.in/covid19-faqs");case 3:if(!0!==(a=t.sent).ok){t.next=12;break}return t.next=7,a.json();case 7:c=t.sent,s=c.faq.map((function(e){return{qno:e.qno,question:e.question,answer:e.answer,category:e.category}})),e.setState({faqsList:s,apiStatus:U}),t.next=13;break;case 12:e.setState({apiStatus:q});case 13:case"end":return t.stop()}}),t)}))),e.renderFaqsListView=function(){var t=e.state.faqsList;return Object(m.jsx)("ul",{className:"ul",children:t.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("p",{className:"question",children:e.question}),Object(m.jsx)("p",{className:"answer",children:e.answer})]},e.qno)}))})},e.renderLoadingView=function(){return Object(m.jsx)("div",{className:"products-loader-container",children:Object(m.jsx)(g.a,{type:"Oval",color:"#007bff",height:"50",width:"50"})})},e.renderFailureView=function(){return Object(m.jsxs)("div",{className:"failure-view",children:[Object(m.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",alt:"failure view",className:"fail-image"}),Object(m.jsx)("p",{children:"Oops! Something Went Wrong"}),Object(m.jsx)("button",{className:"retry-btn",type:"button",onClick:e.getFaqs,children:"Retry"})]})},e.renderAll=function(){switch(e.state.apiStatus){case U:return e.renderFaqsListView();case q:return e.renderFailureView();case B:return e.renderLoadingView();default:return null}},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.getFaqs()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"about-bg",children:[Object(m.jsxs)("div",{className:"about-section",children:[Object(m.jsx)("h1",{className:"about-head",children:"About"}),Object(m.jsx)("p",{className:"last-update",children:"Latest Update"}),Object(m.jsx)("h1",{className:"about-head-2",children:"COVID-19 vaccines be ready for distribution"}),this.renderAll()]}),Object(m.jsx)(S,{})]})}}]),a}(c.Component),P=K,V=(a(222),function(e){var t=e.details,a=e.stateData,c=e.onClickBox,s=e.activeBox,n=t.id,r=t.imageUrl,i=t.displayText,o=t.altName,d=t.cName,l="";return s===n&&(l="".concat(n,"1")),Object(m.jsxs)("li",{className:"".concat(d," ").concat(l," li-box"),onClick:function(){return c(n)},children:[Object(m.jsx)("p",{children:i}),Object(m.jsx)("img",{src:r,alt:o,className:"confirmed-image"}),Object(m.jsx)("p",{children:null===a||void 0===a?void 0:a[n]})]})}),E=(a(223),a(224),function(e){var t=e.details,a=e.activeBox,c=new Intl.NumberFormat("en-US"),s=function(){switch(a){case"confirmed":return t.map((function(e){return{counts:e.districtWiseConfirmed?c.format(e.districtWiseConfirmed):0,name1:e.districtName}}));case"recovered":return t.map((function(e){return{counts:e.districtWiseRecovered?c.format(e.districtWiseRecovered):0,name1:e.districtName}}));case"deceased":return t.map((function(e){return{counts:e.districtWiseDeceased?c.format(e.districtWiseDeceased):0,name1:e.districtName}}));case"active":return t.map((function(e){return{counts:e.districtWiseActive?c.format(e.districtWiseActive):0,name1:e.districtName}}));default:return null}}();return console.log(s),Object(m.jsx)("ul",{className:"top-districts-ul",children:s.map((function(e){return Object(m.jsxs)("li",{className:"top-districts-li",children:[Object(m.jsx)("p",{className:"district-count",children:e.counts}),Object(m.jsx)("p",{children:e.name1})]},e.name1)}))})}),J=a(92),G=a(360),H=a(98),z=a(79),Y=a(76),Z=a(184),Q=a(364),X=a(182),$=(a(225),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),ee=[{id:"confirmed",color:"#ff073a"},{id:"deceased",color:" #6c757d"},{id:"recovered",color:"#28a745"},{id:"active",color:"#007bff"},{id:"tested",color:"#9673B9"}],te=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={allGraphData:[]},e.numFormatter=function(e){return e>999&&e<1e6?"".concat((e/1e3).toFixed(1),"K"):e>1e6?"".concat((e/1e6).toFixed(1),"M"):e<900?e:void 0},e.numFormatter1=function(t){return"confirmed"===t.id?Object(m.jsx)(J.a,{stroke:t.color,tickFormatter:function(t){return e.numFormatter(t)}}):"deceased"===t.id?Object(m.jsx)(J.a,{stroke:t.color,tickFormatter:function(t){return e.numFormatter(t)}}):"recovered"===t.id?Object(m.jsx)(J.a,{stroke:t.color,tickFormatter:function(t){return e.numFormatter(t)}}):"active"===t.id?Object(m.jsx)(J.a,{stroke:t.color,tickFormatter:function(t){return e.numFormatter(t)}}):"tested"===t.id?Object(m.jsx)(J.a,{stroke:t.color,tickFormatter:function(t){return e.numFormatter(t)}}):void 0},e.dateFormatter=function(e){var t=new Date(e).getMonth();return $[t]},e.getCovidTimeLineDetails=Object(f.a)(b.a.mark((function t(){var a,c,s,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.sName,c=[],t.next=4,fetch("https://apis.ccbp.in/covid19-timelines-data/".concat(a));case 4:return s=t.sent,t.next=7,s.json();case 7:n=t.sent,r=n["".concat(a)].dates,Object.keys(r).forEach((function(e){if(r[e]){var t=r[e].total,a=t.confirmed?t.confirmed:0,s=t.deceased?t.deceased:0,n=t.recovered?t.recovered:0,i={confirmed:a,deceased:s,recovered:n,tested:t.tested?t.tested:0,date:e,vaccinated:t.vaccinated1?t.vaccinated1+t.vaccinated2:0,active:a-(s+n)};c.push(i)}})),e.setState({allGraphData:c});case 12:case"end":return t.stop()}}),t)}))),e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.getCovidTimeLineDetails()}},{key:"render",value:function(){var e=this,t=this.state.allGraphData;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"line-chart-ul-mobile",children:Object(m.jsxs)(G.a,{data:t,width:900,height:400,children:[Object(m.jsx)(H.a,{dataKey:"date",tickFormatter:function(t){return e.dateFormatter(t)}}),Object(m.jsx)(J.a,{tickFormatter:function(t){return e.numFormatter(t)},stroke:"#ffff"}),Object(m.jsx)(z.a,{}),Object(m.jsx)(Y.a,{}),Object(m.jsx)(Z.a,{dataKey:"confirmed ",fill:"#8884d8",className:"bar",stroke:"#ffff",label:{position:"top",color:"white"}})]})}),Object(m.jsx)("div",{className:"line-chart-ul-desktop",children:Object(m.jsxs)(G.a,{data:t,width:1300,height:400,children:[Object(m.jsx)(H.a,{dataKey:"date",tickFormatter:function(t){return e.dateFormatter(t)}}),Object(m.jsx)(J.a,{tickFormatter:function(t){return e.numFormatter(t)},stroke:"#ffff"}),Object(m.jsx)(z.a,{}),Object(m.jsx)(Y.a,{}),Object(m.jsx)(Z.a,{dataKey:"confirmed ",fill:"#8884d8",className:"bar",stroke:"#ffff",label:{position:"top",color:"white"}})]})}),Object(m.jsx)("ul",{className:"line-chart-ul-desktop",children:ee.map((function(a){return Object(m.jsx)("li",{className:"graph-page-".concat(a.id," li-line-chart"),children:Object(m.jsxs)(Q.a,{data:t,width:900,height:300,children:[Object(m.jsx)(H.a,{dataKey:"date",stroke:a.color,tickCount:1,tickFormatter:function(t){return e.dateFormatter(t)}}),e.numFormatter1(a),Object(m.jsx)(z.a,{}),Object(m.jsx)(Y.a,{}),Object(m.jsx)(X.a,{type:"monotone",dataKey:a.id,stroke:a.color})]})},a.id)}))}),Object(m.jsx)("ul",{className:"line-chart-ul-mobile",children:ee.map((function(a){return Object(m.jsx)("li",{className:"graph-page-".concat(a.id," li-line-chart"),children:Object(m.jsxs)(Q.a,{data:t,width:320,height:200,children:[Object(m.jsx)(H.a,{dataKey:"date",stroke:a.color,tickCount:1,tickFormatter:function(t){return e.dateFormatter(t)}}),e.numFormatter1(a),Object(m.jsx)(z.a,{}),Object(m.jsx)(Y.a,{}),Object(m.jsx)(X.a,{type:"monotone",dataKey:a.id,stroke:a.color})]})},a.id)}))})]})}}]),a}(c.Component),ae=te,ce=[{id:"confirmed",displayText:"Confirmed",imageUrl:"https://res.cloudinary.com/dbphffmis/image/upload/v1637413101/Group_rtygto.png",altName:"country wide confirmed cases pic",cName:"confirmed12"},{id:"recovered",displayText:"Recovered",imageUrl:"https://res.cloudinary.com/dbphffmis/image/upload/v1637413101/recovered_1_mnz2xy.png",altName:"country wide recovered cases pic",cName:"recovered12"},{id:"active",displayText:"Active",imageUrl:"https://res.cloudinary.com/dbphffmis/image/upload/v1637413101/protection_1_btp8wk.png",altName:"country wide active cases pic",cName:"active12"},{id:"deceased",displayText:"Deceased",imageUrl:"https://res.cloudinary.com/dbphffmis/image/upload/v1637413101/Outline_fqrmo2.png",altName:"country wide deceased cases pic",cName:"deceased12"}],se=["January","February","March","April","May","June","July","August","September","October","November","December"],ne=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={stateData:[],allDistrictsData:[],activeBox:"confirmed"},e.getStateDetails=Object(f.a)(b.a.mark((function t(){var a,c,s,n,r,i,o,d,l,u,m,j,h,f,p,O,x,v,N,g,_,k,y,w;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.props.match,s=c.params,n=s.id,t.next=5,fetch("https://apis.ccbp.in/covid19-state-wise-data");case 5:return r=t.sent,t.next=8,r.json();case 8:i=t.sent,o=i[n],d=o.total,l=o.meta,u=o.districts,console.log(i[n]),m=d.confirmed?d.confirmed:0,j=d.deceased?d.deceased:0,h=d.recovered?d.recovered:0,f=d.tested?d.tested:0,p=new Intl.NumberFormat("en-US"),O=i[n].meta.population?i[n].meta.population:0,x=new Date(l.last_updated),v=[F.find((function(e){return e.state_code===n}))],N=x.getDate(),g=x.getUTCFullYear(),_=se[x.getMonth()],k="".concat(_," ").concat(N," ").concat(g),y={confirmed:p.format(m),deceased:p.format(j),recovered:p.format(h),tested:p.format(f),population:O,active:p.format(m-(j+h)),overallDate:k,stateName:null===(a=v[0])||void 0===a?void 0:a.state_name},e.setState({stateData:y}),w=[],Object.keys(i[n].districts).forEach((function(e){if(u[e]){var t,a,c,s=null===(t=u[e].total)||void 0===t?void 0:t.confirmed,n=null===(a=u[e].total)||void 0===a?void 0:a.deceased,r=null===(c=u[e].total)||void 0===c?void 0:c.recovered,i={districtWiseConfirmed:s,districtWiseRecovered:r,districtWiseDeceased:n,districtWiseActive:s-(n+r),districtName:e};w.push(i)}})),e.setState({allDistrictsData:w});case 29:case"end":return t.stop()}}),t)}))),e.onClickBox=function(t){e.setState({activeBox:t})},e.sortData=function(){var t=e.state,a=t.allDistrictsData;switch(t.activeBox){case"confirmed":return a.sort((function(e,t){return t.districtWiseConfirmed-e.districtWiseConfirmed}));case"recovered":return a.sort((function(e,t){return t.districtWiseRecovered-e.districtWiseRecovered}));case"deceased":return a.sort((function(e,t){return t.districtWiseDeceased-e.districtWiseDeceased}));case"active":return a.sort((function(e,t){return t.districtWiseActive-e.districtWiseActive}));default:return null}},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.getStateDetails()}},{key:"render",value:function(){var e=this,t=this.state,a=t.stateData,c=t.activeBox,s=this.sortData(),n=this.props.match.params.id;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"state-bg",children:[Object(m.jsxs)("div",{className:"state-top",children:[Object(m.jsxs)("div",{className:"state-left-section",children:[Object(m.jsx)("p",{className:"state-name-heading",children:a.stateName}),Object(m.jsxs)("p",{children:["Last Updated On ",a.overallDate]})]}),Object(m.jsxs)("div",{className:"state-right-section",children:[Object(m.jsx)("p",{children:"Tested"}),Object(m.jsx)("p",{className:"tested-count",children:a.tested})]})]}),Object(m.jsx)("ul",{className:"ul-boxes-container",children:ce.map((function(t){return Object(m.jsx)(V,{details:t,stateData:a,onClickBox:e.onClickBox,activeBox:c},t.id)}))}),Object(m.jsx)("h1",{className:"top-districts-head",children:"Top Districts"}),Object(m.jsx)(E,{details:s,activeBox:c}),Object(m.jsx)("h1",{className:"charts-heading",children:"Daily Spread Trends"}),Object(m.jsx)(ae,{sName:n})]}),Object(m.jsx)(S,{})]})}}]),a}(c.Component),re=ne,ie=(a(357),function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",component:R}),Object(m.jsx)(o.a,{exact:!0,path:"/about",component:P}),Object(m.jsx)(o.a,{path:"/state/:id",component:re})]})]})});i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(n.a,{children:Object(m.jsx)(ie,{})})}),document.getElementById("root"))}},[[358,1,2]]]);
//# sourceMappingURL=main.e3914761.chunk.js.map