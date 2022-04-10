<template><h1 id="card" tabindex="-1"><a class="header-anchor" href="#card" aria-hidden="true">#</a> Card</h1>
<p>卡片組件</p>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<r-card imgSrc="/001.jpg" summary="測試卡片組件" />
<h3 id="代碼" tabindex="-1"><a class="header-anchor" href="#代碼" aria-hidden="true">#</a> 代碼</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>r-card</span> <span class="token attr-name">imgSrc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/001.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>測試卡片組件<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
<table>
<thead>
<tr>
<th>參數</th>
<th>説明</th>
<th>類型</th>
<th>是否必要</th>
<th>默認值</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>卡片的寬度</td>
<td>Number</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>imgSrc</td>
<td>圖片資源地址</td>
<td>String</td>
<td>true</td>
<td>-</td>
</tr>
<tr>
<td>imgHeight</td>
<td>圖片高度</td>
<td>Number</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>summary</td>
<td>卡片概要</td>
<td>String/Slot</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>卡片底部</td>
<td>Slot</td>
<td>false</td>
<td>-</td>
</tr>
</tbody>
</table>
</template>
