webpackJsonp([0xc0c264fdb489],{357:function(e,t){e.exports={data:{markdownRemark:{html:'<p><a href="https://preactjs.com/">Preact</a> is a marvel of engineering intially created by one man: <a href="https://twitter.com/_developit">Jason Miller</a>. Jason reimplemented React but only in 3KB (at the time, React was about 45KB.) He did so by making the browser do more work where React has its own systems that can be faster performance. Preact is ideal if you want your inital payload to be very low. If you\'re building a new project, consider using Preact.</p>\n<p>Preact is <em>mostly</em> a drop down replacement for React. There are some additional bells-and-whistles that React includes that Preact doesn\'t. For those additional features, Preact ships something called <a href="https://github.com/developit/preact-compat">preact-compat</a> that fills in the rest of those blanks.</p>\n<p>However, since Preact is <em>not</em> created by the React team, there is a bit of lag between what\'s in React and when it finally makes it into Preact or preact-compat. Generally preact-compat exists to make it easy to port over React apps to Preact: it\'s not meant to be a permanent strategy.</p>\n<p>So how we convert our app over to Preact? It <em>mostly</em> works as is with a few exceptions. I\'ll give you a list of find-and-replaces that should get you all the way.</p>\n<ol>\n<li><code class="language-text">npm uninstall react react-dom @reach/router</code></li>\n<li><code class="language-text">npm install preact preact-compat preact-context preact-router</code></li>\n<li>Find all instances of <code class="language-text">&quot;react&quot;</code> and replace with <code class="language-text">&quot;preact-compat&quot;</code></li>\n<li>Find all instances of <code class="language-text">&quot;react-dom&quot;</code> and replace with <code class="language-text">&quot;preact-compat&quot;</code></li>\n<li>Find all instances of <code class="language-text">&quot;@react/router&quot;</code> and replace with <code class="language-text">&quot;preact-router&quot;</code></li>\n<li>Find all instances of the <code class="language-text">&lt;Link&gt;</code> component being used and replace the <code class="language-text">to</code> attribute with <code class="language-text">href</code></li>\n<li>In SearchContext.js, replace React import with <code class="language-text">import { createContext } from &quot;preact-context&quot;;</code> and then remove the <code class="language-text">React.</code> from <code class="language-text">React.createContext</code>.</li>\n<li>In SearchParams.js, renamed <code class="language-text">navigate</code> to <code class="language-text">route</code> in both the import and the call.</li>\n<li>In Details.js, add a wrapping div <em>inside</em> <code class="language-text">&lt;Modal&gt;</code> around all the children.</li>\n</ol>\n<p>This should get the app working as normal. As you can see, it\'s not always one-to-one. In our case, Reach Router isn\'t quite Preact compatible (it should be any day now, it may well be now if you\'re reading this later) which is why we swapped in preact-router. Context is coming to Preact as well so you won\'t need an external library either, and sometimes there are just additional quirks like createPortal requiring a wrapping div. Nonetheless, you can see we swapped in Preact and everything is working the same way at a decently quick pace!</p>\n<p>As I said, this is a tool help you migrate. You should do this with the eye of getting of preact-compat and getting <em>just</em> on Preact. This means reference Preact directly instead of React and using their way of doing things (which are different.) <a href="https://preactjs.com/guide/differences-to-react">See here</a> to see more.</p>\n<p>Our final app went from 42KB to 15KB (minified and gzipped) so it\'s pretty effective too!</p>\n<h2 id="-eb1c1600f4fead461e2a3f2d6668ac4ee734fcf5-branch-preact"><a href="#-eb1c1600f4fead461e2a3f2d6668ac4ee734fcf5-branch-preact" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🌳 eb1c1600f4fead461e2a3f2d6668ac4ee734fcf5 (branch preact)</h2>',frontmatter:{path:"/preact",title:"Preact",order:18}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:1,path:"/intro",title:"Introduction"}}},{node:{frontmatter:{order:2,path:"/pure-react",title:"Pure React"}}},{node:{frontmatter:{order:3,path:"/eslint-prettier",title:"npm, ESLint & Prettier"}}},{node:{frontmatter:{order:4,path:"/parcel",title:"Parcel"}}},{node:{frontmatter:{order:5,path:"/jsx",title:"JSX"}}},{node:{frontmatter:{order:6,path:"/react-state-and-lifecycles",title:"State and Lifecycle Methods with React"}}},{node:{frontmatter:{order:7,path:"/reach-router",title:"Reach Router"}}},{node:{frontmatter:{order:8,path:"/async-and-events-in-react",title:"Handling Events and Async UIs with React"}}},{node:{frontmatter:{order:9,path:"/forms",title:"Forms with React"}}},{node:{frontmatter:{order:10,path:"/context",title:"Context"}}},{node:{frontmatter:{order:11,path:"/portals",title:"Portals"}}},{node:{frontmatter:{order:12,path:"/conclusion",title:"Conclusion"}}},{node:{frontmatter:{order:13,path:"/testing",title:"Testing"}}},{node:{frontmatter:{order:14,path:"/emotion",title:"Emotion"}}},{node:{frontmatter:{order:15,path:"/code-splitting",title:"Code Splitting"}}},{node:{frontmatter:{order:16,path:"/redux",title:"Redux"}}},{node:{frontmatter:{order:17,path:"/server-side-rendering",title:"Server Side Rendering"}}},{node:{frontmatter:{order:18,path:"/preact",title:"Preact"}}},{node:{frontmatter:{order:19,path:"/code-organization",title:"Code Organization"}}},{node:{frontmatter:{order:20,path:"/typescript",title:"TypeScript"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---preact-805a0877da0265401480.js.map