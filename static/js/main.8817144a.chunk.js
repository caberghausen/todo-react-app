(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){e.exports=o(19)},17:function(e,t,o){},19:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),s=o(9),i=o.n(s),r=o(10),d=o(2),c=o(3),l=o(5),u=o(4),p=o(6),h=o(1),m=(o(8),o(17),function(e){function t(e){var o;return Object(d.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={id:o.id},o}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t="";return this.props.completed&&(t="checked"),a.a.createElement("div",null,a.a.createElement("hr",null),a.a.createElement("li",{className:t},a.a.createElement("button",{onClick:function(){return e.props.removeDeletedTodo(e.props.id)}},a.a.createElement("img",{src:"http://www.clipartbest.com/cliparts/ncX/ByX/ncXByXMgi.gif",alt:"X"})),this.props.text,a.a.createElement("input",{type:"checkbox",onClick:function(){return e.props.checkOff(e.props.id)},checked:this.props.completed})))}}]),t}(n.Component)),f=function(e){function t(e){return Object(d.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"addthing"},a.a.createElement("form",{id:"input",onSubmit:this.props.addTodo},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",a.a.createElement("input",{id:"newtodo",type:"text",value:this.props.input,onChange:this.props.onChange}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",a.a.createElement("input",{id:"newbtn",type:"submit",value:"+ add todo"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"))}}]),t}(n.Component),b="63d533-c6c784-dd52bf-a26a8b-193b55",v=null,y=function(e){function t(e){var o;return Object(d.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={todos:[{id:"abcde",completed:!1,text:"first todo",removeDeletedTodo:"idk"}],input:""},o.addTodo=o.addTodo.bind(Object(h.a)(Object(h.a)(o))),o.onChange=o.onChange.bind(Object(h.a)(Object(h.a)(o))),o}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){v=this;var e=this.state.todos,t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&200==this.status&&((e=JSON.parse(this.responseText)).sort(function(e,t){return e.text.localeCompare(t.text)}),v.setState({todos:e}))},t.open("GET","https://cse204.work/todos",!0),t.setRequestHeader("x-api-key",b),t.send()}},{key:"addTodo",value:function(e){if(e.preventDefault(),(v=this).state.input.length>0){var t={text:v.state.input},o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==this.readyState&&200==this.status){v.setState({todos:Object(r.a)(v.state.todos).concat([JSON.parse(this.responseText)])});var e=v.state.todos;e.sort(function(e,t){return e.text.localeCompare(t.text)}),v.setState({todos:e}),v.setState({input:""})}else 4==this.readyState&&console.log(this.responseText)},console.log(v.state.todos),o.open("POST","https://cse204.work/todos",!0),o.setRequestHeader("Content-type","application/json"),o.setRequestHeader("x-api-key",b),o.send(JSON.stringify(t))}}},{key:"onChange",value:function(e){v.setState({input:e.target.value})}},{key:"removeDeletedTodo",value:function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){console.log(e+" removed"),console.log(v);var t=v.state.todos.filter(function(t){if(t.id!==e)return t});v.setState({todos:t})}};var o="https://cse204.work/todos/";o+=e,t.open("DELETE",o,!0),t.setRequestHeader("x-api-key",b),t.send()}},{key:"completeTodo",value:function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var t=v.state.todos,o=v.state.todos.find(function(t){return 0==t.id.localeCompare(e)}),n=v.state.todos.indexOf(o);console.log(e+" found at: "+n),t[n].completed=!0,console.log(t[n]),t.sort(function(e,t){return e.text.localeCompare(t.text)}),console.log(t),v.setState({todos:t})}};var o="https://cse204.work/todos/";o+=e,t.open("PUT",o,!0),t.setRequestHeader("Content-type","application/json"),t.setRequestHeader("x-api-key",b),t.send(JSON.stringify({completed:!0}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"body"},a.a.createElement("div",{id:"header"},a.a.createElement("h1",null,"Quarantine ToDo list"),a.a.createElement("label",{id:"mobile"},"mobile\u2122\ufe0f")),a.a.createElement("div",{id:"addthing"},a.a.createElement(f,{addTodo:this.addTodo,newTodo:this.newTodo,onChange:this.onChange,input:this.state.input})),a.a.createElement("div",null,a.a.createElement("ul",{id:"todoslist"},this.state.todos.map(function(t){return a.a.createElement(m,{key:t.id,id:t.id,completed:t.completed,text:t.text,removeDeletedTodo:e.removeDeletedTodo,checkOff:e.completeTodo})}))))}}]),t}(n.Component);i.a.render(a.a.createElement(y,null),document.getElementById("root"))},8:function(e,t,o){}},[[11,2,1]]]);
//# sourceMappingURL=main.8817144a.chunk.js.map