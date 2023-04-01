"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[58372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=function(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),l=a(67294),r=a(72389),i=a(79443);const o=function(){const e=(0,l.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var d=a(53810),p=a(86010);const s={tabItem:"tabItem_vU9c"};function m(e){const{lazy:t,block:a,defaultValue:r,values:i,groupId:m,className:u}=e,c=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=i??c.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,d.lx)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??c.find((e=>e.props.default))?.props.value??c[0]?.props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=o(),[f,y]=(0,l.useState)(g),v=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=m){const e=b[m];null!=e&&e!==f&&k.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,a=v.indexOf(t),n=k[a].value;n!==f&&(T(t),y(n),null!=m&&N(m,n))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=v.indexOf(e.currentTarget)+1;t=v[a]||v[0];break}case"ArrowLeft":{const a=v.indexOf(e.currentTarget)-1;t=v[a]||v[v.length-1];break}}t?.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":a},u)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>v.push(e),onKeyDown:C,onFocus:w,onClick:w},r,{className:(0,p.Z)("tabs__item",s.tabItem,r?.className,{"tabs__item--active":f===t})}),a??t)}))),t?(0,l.cloneElement)(c.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},c.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function u(e){const t=(0,r.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},4965:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));a(26396),a(58215);const r={title:"SQL DDL",summary:"In this page, we introduce how to create tables with Hudi.",toc:!0,last_modified_at:null},i=void 0,o={unversionedId:"table_management",id:"version-0.12.0/table_management",title:"SQL DDL",description:"The following are SparkSQL table management actions available:",source:"@site/versioned_docs/version-0.12.0/table_management.md",sourceDirName:".",slug:"/table_management",permalink:"/docs/0.12.0/table_management",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.0/table_management.md",tags:[],version:"0.12.0",frontMatter:{title:"SQL DDL",summary:"In this page, we introduce how to create tables with Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Concurrency Control",permalink:"/docs/0.12.0/concurrency_control"},next:{title:"Procedures",permalink:"/docs/0.12.0/procedures"}},d=[{value:"Spark Create Table",id:"spark-create-table",children:[{value:"Options",id:"options",children:[],level:3},{value:"Table Type",id:"table-type",children:[],level:3},{value:"Primary Key",id:"primary-key",children:[],level:3},{value:"PreCombineField",id:"precombinefield",children:[],level:3},{value:"Partitioned Table",id:"partitioned-table",children:[],level:3},{value:"Create Table for an External Hudi Table",id:"create-table-for-an-external-hudi-table",children:[],level:3},{value:"Create Table AS SELECT",id:"create-table-as-select",children:[],level:3},{value:"Set hoodie config options",id:"set-hoodie-config-options",children:[],level:3}],level:2},{value:"Spark Alter Table",id:"spark-alter-table",children:[{value:"Syntax",id:"syntax",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Alter hoodie config options",id:"alter-hoodie-config-options",children:[],level:3},{value:"Use set command",id:"use-set-command",children:[],level:3}],level:2},{value:"Flink",id:"flink",children:[{value:"Create Catalog",id:"create-catalog",children:[{value:"Options",id:"options-1",children:[],level:4}],level:3},{value:"Create Table",id:"create-table",children:[],level:3},{value:"Alter Table",id:"alter-table",children:[],level:3}],level:2},{value:"Supported Types",id:"supported-types",children:[],level:2}],p={toc:d},s="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The following are SparkSQL table management actions available:"),(0,l.kt)("h2",{id:"spark-create-table"},"Spark Create Table"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Only SparkSQL needs an explicit Create Table command. No Create Table command is required in Spark when using Scala or Python. The first batch of a ",(0,l.kt)("a",{parentName:"p",href:"/docs/writing_data"},"Write")," to a table will create the table if it does not exist."))),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("p",null,"Users can set table options while creating a hudi table."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"(Optional/Required) : Default Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primaryKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The primary key names of the table, multiple fields separated by commas."),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) : ",(0,l.kt)("inlineCode",{parentName:"td"},"id"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of table to create (",(0,l.kt)("a",{parentName:"td",href:"/docs/table_types"},"read more"),"). ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"cow")," = COPY-ON-WRITE, ",(0,l.kt)("inlineCode",{parentName:"td"},"mor")," = MERGE-ON-READ."),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) : ",(0,l.kt)("inlineCode",{parentName:"td"},"cow"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"preCombineField"),(0,l.kt)("td",{parentName:"tr",align:null},"The Pre-Combine field of the table."),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) : ",(0,l.kt)("inlineCode",{parentName:"td"},"ts"))))),(0,l.kt)("p",null,'To set any custom hudi config(like index type, max parquet size, etc), see the  "Set hudi config section" .'),(0,l.kt)("h3",{id:"table-type"},"Table Type"),(0,l.kt)("p",null,"Here is an example of creating a COW table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- create a non-primary key table\ncreate table if not exists hudi_table2(\n  id int, \n  name string, \n  price double\n) using hudi\noptions (\n  type = 'cow'\n);\n")),(0,l.kt)("h3",{id:"primary-key"},"Primary Key"),(0,l.kt)("p",null,"Here is an example of creating COW table with a primary key 'id'."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- create a managed cow table\ncreate table if not exists hudi_table0 (\n  id int, \n  name string, \n  price double\n) using hudi\noptions (\n  type = 'cow',\n  primaryKey = 'id'\n);\n")),(0,l.kt)("h3",{id:"precombinefield"},"PreCombineField"),(0,l.kt)("p",null,"Here is an example of creating an MOR external table. The ",(0,l.kt)("strong",{parentName:"p"},"preCombineField")," option\nis used to specify the preCombine field for merge."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- create an external mor table\ncreate table if not exists hudi_table1 (\n  id int, \n  name string, \n  price double,\n  ts bigint\n) using hudi\noptions (\n  type = 'mor',\n  primaryKey = 'id,name',\n  preCombineField = 'ts' \n);\n")),(0,l.kt)("h3",{id:"partitioned-table"},"Partitioned Table"),(0,l.kt)("p",null,"Here is an example of creating a COW partitioned table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table if not exists hudi_table_p0 (\nid bigint,\nname string,\ndt string,\nhh string  \n) using hudi\noptions (\n  type = 'cow',\n  primaryKey = 'id'\n ) \npartitioned by (dt, hh);\n")),(0,l.kt)("h3",{id:"create-table-for-an-external-hudi-table"},"Create Table for an External Hudi Table"),(0,l.kt)("p",null,"You can create an External table using the ",(0,l.kt)("inlineCode",{parentName:"p"},"location")," statement. If an external location is not specified it is considered a managed table. You can read more about external vs managed tables ",(0,l.kt)("a",{parentName:"p",href:"https://sparkbyexamples.com/apache-hive/difference-between-hive-internal-tables-and-external-tables/"},"here"),".\nAn external table is useful if you need to read/write to/from a pre-existing hudi table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," create table h_p1 using hudi\n location '/path/to/hudi';\n")),(0,l.kt)("h3",{id:"create-table-as-select"},"Create Table AS SELECT"),(0,l.kt)("p",null,"Hudi supports CTAS(Create table as select) on spark sql. ",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Note:")," For better performance to load data to hudi table, CTAS uses ",(0,l.kt)("strong",{parentName:"p"},"bulk insert")," as the write operation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example CTAS command to create a non-partitioned COW table.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table h3 using hudi\nas\nselect 1 as id, 'a1' as name, 10 as price;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example CTAS command to create a partitioned, primary key COW table.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table h2 using hudi\noptions (type = 'cow', primaryKey = 'id')\npartitioned by (dt)\nas\nselect 1 as id, 'a1' as name, 10 as price, 1000 as dt;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example CTAS command to load data from another table.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# create managed parquet table \ncreate table parquet_mngd using parquet location 'file:///tmp/parquet_dataset/*.parquet';\n\n# CTAS by loading data into hudi table\ncreate table hudi_tbl using hudi location 'file:/tmp/hudi/hudi_tbl/' options ( \n  type = 'cow', \n  primaryKey = 'id', \n  preCombineField = 'ts' \n ) \npartitioned by (datestr) as select * from parquet_mngd;\n")),(0,l.kt)("h3",{id:"set-hoodie-config-options"},"Set hoodie config options"),(0,l.kt)("p",null,"You can also set the config with table options when creating table which will work for\nthe table scope only and override the config set by the SET command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table if not exists h3(\n  id bigint, \n  name string, \n  price double\n) using hudi\noptions (\n  primaryKey = 'id',\n  type = 'mor',\n  ${hoodie.config.key1} = '${hoodie.config.value2}',\n  ${hoodie.config.key2} = '${hoodie.config.value2}',\n  ....\n);\n\ne.g.\ncreate table if not exists h3(\n  id bigint, \n  name string, \n  price double\n) using hudi\noptions (\n  primaryKey = 'id',\n  type = 'mor',\n  hoodie.cleaner.fileversions.retained = '20',\n  hoodie.keep.max.commits = '20'\n);\n")),(0,l.kt)("h2",{id:"spark-alter-table"},"Spark Alter Table"),(0,l.kt)("h3",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Alter table name\nALTER TABLE oldTableName RENAME TO newTableName\n\n-- Alter table add columns\nALTER TABLE tableIdentifier ADD COLUMNS(colAndType (,colAndType)*)\n\n-- Alter table column type\nALTER TABLE tableIdentifier CHANGE COLUMN colName colName colType\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE ... RENAME TO ...")," is not supported when using AWS Glue Data Catalog as hive metastore as Glue itself does\nnot support table renames."))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"alter table h0 rename to h0_1;\n\nalter table h0_1 add columns(ext0 string);\n\nalter table h0_1 change column id id bigint;\n")),(0,l.kt)("h3",{id:"alter-hoodie-config-options"},"Alter hoodie config options"),(0,l.kt)("p",null,"You can also alter the write config for a table by the ",(0,l.kt)("strong",{parentName:"p"},"ALTER SERDEPROPERTIES")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," alter table h3 set serdeproperties (hoodie.keep.max.commits = '10') \n")),(0,l.kt)("h3",{id:"use-set-command"},"Use set command"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("strong",{parentName:"p"},"set")," command to set any custom hudi's config, which will work for the\nwhole spark session scope."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"set hoodie.insert.shuffle.parallelism = 100;\nset hoodie.upsert.shuffle.parallelism = 100;\nset hoodie.delete.shuffle.parallelism = 100;\n")),(0,l.kt)("h2",{id:"flink"},"Flink"),(0,l.kt)("h3",{id:"create-catalog"},"Create Catalog"),(0,l.kt)("p",null,"The catalog helps to manage the SQL tables, the table can be shared among CLI sessions if the catalog persists the table DDLs.\nFor ",(0,l.kt)("inlineCode",{parentName:"p"},"hms")," mode, the catalog also supplements the hive syncing options."),(0,l.kt)("p",null,"HMS mode catalog SQL demo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG hoodie_catalog\n  WITH (\n    'type'='hudi',\n    'catalog.path' = '${catalog default root path}',\n    'hive.conf.dir' = '${directory where hive-site.xml is located}',\n    'mode'='hms' -- supports 'dfs' mode that uses the DFS backend for table DDLs persistence\n  );\n")),(0,l.kt)("h4",{id:"options-1"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"catalog.path")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"Default root path for the catalog, the path is used to infer the table path automatically, the default table path: ",(0,l.kt)("inlineCode",{parentName:"td"},"${catalog.path}/${db_name}/${table_name}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default-database")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"default database name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hive.conf.dir")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},"The directory where hive-site.xml is located, only valid in ",(0,l.kt)("inlineCode",{parentName:"td"},"hms")," mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mode")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"dfs"),(0,l.kt)("td",{parentName:"tr",align:null},"Supports ",(0,l.kt)("inlineCode",{parentName:"td"},"hms")," mode that uses HMS to persist the table options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table.external")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create the external table, only valid in ",(0,l.kt)("inlineCode",{parentName:"td"},"hms")," mode")))),(0,l.kt)("h3",{id:"create-table"},"Create Table"),(0,l.kt)("p",null,"The following is a Flink example to create a table. ",(0,l.kt)("a",{parentName:"p",href:"/docs/flink-quick-start-guide"},"Read the Flink Quick Start")," guide for more examples."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hudi_table2(\n  id int, \n  name string, \n  price double\n)\nWITH (\n'connector' = 'hudi',\n'path' = 's3://bucket-name/hudi/',\n'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, by default is COPY_ON_WRITE\n);\n")),(0,l.kt)("h3",{id:"alter-table"},"Alter Table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"alter table h0 rename to h0_1;\n")),(0,l.kt)("h2",{id:"supported-types"},"Supported Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Spark"),(0,l.kt)("th",{parentName:"tr",align:null},"Hudi"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null},"double"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"decimal"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binary"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null},"map"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"struct"),(0,l.kt)("td",{parentName:"tr",align:null},"struct"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"char"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"varchar"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numeric"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"null"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"not supported")))))}m.isMDXComponent=!0}}]);