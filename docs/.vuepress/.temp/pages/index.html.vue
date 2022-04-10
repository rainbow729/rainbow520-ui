<template><h1 id="快速開始" tabindex="-1"><a class="header-anchor" href="#快速開始" aria-hidden="true">#</a> 快速開始</h1>
<h4 id="安裝組件庫" tabindex="-1"><a class="header-anchor" href="#安裝組件庫" aria-hidden="true">#</a> 安裝組件庫</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i rainbow520-ui
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="引用組件庫" tabindex="-1"><a class="header-anchor" href="#引用組件庫" aria-hidden="true">#</a> 引用組件庫</h4>
<blockquote>
<p>在 main.js 中引用組件庫</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 全部引用</span>
<span class="token keyword">import</span> <span class="token string">'rainbow520/dist/css/index.css'</span>
<span class="token keyword">import</span> <span class="token constant">RUI</span> <span class="token keyword">from</span> <span class="token string">'rainbow520/components/lib/index'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">RUI</span><span class="token punctuation">)</span>

<span class="token comment">//按需引用</span>
<span class="token keyword">import</span> <span class="token string">'rainbow520/dist/css/card.css'</span>
<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">'rainbow520/components/lib/index'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Card<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
