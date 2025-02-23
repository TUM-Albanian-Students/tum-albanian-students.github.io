---
layout: home
title: What's New
list_title: Latest Updates
---

Welcome to the TUM Albanian Student Society! Here you'll find our latest news, events, and updates.

{% for post in site.posts limit:5 %}
<article class="post-preview">
  <h2>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h2>
  <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
  <div class="post-excerpt">
    {{ post.excerpt }}
  </div>
  <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
</article>
{% endfor %}
