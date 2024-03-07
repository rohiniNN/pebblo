"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[904],{155:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(4848),s=t(8453);const o={},a="Pebblo UI",l={id:"pebblo_ui",title:"Pebblo UI",description:"Pebblo UI provides an in-depth visibility into the document ingested into Gen-AI RAG applications during every load.",source:"@site/docs/pebblo_ui.md",sourceDirName:".",slug:"/pebblo_ui",permalink:"/pebblo/pebblo_ui",draft:!1,unlisted:!1,editUrl:"https://github.com/daxa-ai/pebblo/tree/main/docs/gh_pages/docs/pebblo_ui.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Pebblo Topic Classifier",permalink:"/pebblo/topicclassifier"},next:{title:"Pebblo Safe DataLoader for Langchain",permalink:"/pebblo/rag"}},r={},d=[];function c(e){const i={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"pebblo-ui",children:"Pebblo UI"}),"\n",(0,n.jsx)(i.p,{children:"Pebblo UI provides an in-depth visibility into the document ingested into Gen-AI RAG applications during every load."}),"\n",(0,n.jsx)(i.p,{children:"This document describes the information displayed on the interface"}),"\n",(0,n.jsx)(i.h1,{id:"overview-page",children:"Overview Page"}),"\n",(0,n.jsx)(i.p,{children:"This page consist of 4 primary tabs that provides the following details:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Applications With Findings"}),":\nThe number signifies the proportion of applications with findings out of the total active applications. Additionally, it will present you with a detailed list of these applications, including the count of findings (Topics + Entities), the name of the owner, and the option to download the PDF report for each application."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Findings"}),":\nThe figure denotes the cumulative count of Topics and Entities identified across all applications. It will also furnish you with a comprehensive list of these Topics and Entities, along with supplementary information including the count of source files they originate from, the Datasource, and the name of the Application."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Files with Findings"}),":\nThe number of files that has one or more\xa0Findings\xa0over the total number of files used in document load across all the applications. This field indicates the number of files that need to be inspected to remediate any potentially text that needs to be removed and/or cleaned for Gen-AI inference."]}),"\n",(0,n.jsx)(i.p,{children:"It will also provide you with a list of these files, accompanied by additional details such as the file size, the owner's name, the count of topics & entities within each file, and the name of the Datasource."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Datasource"}),":\nThe number of data sources used to load documents into the Gen-AI RAG applications. For e.g. this field will be two if a RAG application loads data from two different directories or two different AWS S3 buckets."]}),"\n",(0,n.jsx)(i.p,{children:"It will also provide you with a list of these Datasource, accompanied by additional details such as the size, source path, the count of topics & entities across the datasource, and the Application they are associated with."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h1,{id:"application-details-page",children:"Application Details Page"}),"\n",(0,n.jsxs)(i.p,{children:["You will be directed to the application details page by clicking on any application from the list available in the ",(0,n.jsx)(i.code,{children:"Applications With Findings"})," tab in overview page."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Instance Details"}),":\nThis section provide a quick glance of where the RAG application is physically running like in a Laptop (Mac OSX) or Linux VM and related properties like IP address, local filesystem path and Python version."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Download Report"}),":\nCan download the data report of the application in PDF format."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Load History"}),":\nThe table provides the history of findings and path to the reports for the previous loads of the same RAG application."]}),"\n",(0,n.jsx)(i.p,{children:"Load History provides details about latest 5 loads of this app. It provides the following details:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Report Name"})," - The path to the report file."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Findings"})," - The number of findings identified in the report."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Files With Findings"})," - The number of files containing findings."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Generated On"})," - The timestamp, when the report was generated. Time would be in local time zone."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Report Summary"}),": Report Summary has 4 primary tabs:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Findings"}),": The figure denotes the cumulative count of Topics and Entities identified in the application. It will also furnish you with a comprehensive list of these Topics and Entities, along with supplementary information including the count of source files they originate from, and the Datasource name."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Files with Findings"}),": The number of files that has one or more\xa0Findings\xa0over the total number of files used in document load across the application. This field indicates the number of files that need to be inspected to remediate any potentially text that needs to be removed and/or cleaned for Gen-AI inference."]}),"\n",(0,n.jsx)(i.p,{children:"It will also provide you with a list of these files, accompanied by additional details such as the file size, the owner's name, the count of topics & entities within each file, and the name of the Datasource."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Datasource"}),": The number of data sources used to load documents into the Gen-AI RAG applications. For e.g. this field will be two if a RAG application loads data from two different directories or two different AWS S3 buckets."]}),"\n",(0,n.jsx)(i.p,{children:"It will also provide you with a list of these Datasource, accompanied by additional details such as the size, source path, the count of topics & entities across the datasource."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Snippets"}),": This sections provides the actual text inspected by the Pebblo Server using the Pebblo Topic Classifier and Pebblo Entity Classifier. This will be useful to quickly inspect and remediate text that should not be ingested into the Gen-AI RAG application. Each snippet shows the exact file the snippet is loaded from easy remediation."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>l});var n=t(6540);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);