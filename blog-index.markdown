---
layout: page
title: What's New
list_title: Latest Updates
---

<div style="text-align: center; font-size: 0.9em; color: #666; margin-bottom: 15px;">
    Welcome to the TUM Albanian Student Society! Here you'll find our latest news, events, and updates.
</div>

{% if site.posts.size > 0 %}
<div class="post-list">
  {% for post in site.posts %}
  <article class="post-card">
    <h3>
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h3>
    <span class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
    <p>{{ post.excerpt }}</p>
  </article>
  {% endfor %}
</div>
{% endif %}
