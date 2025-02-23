---
layout: page
title: Members
permalink: /members/
---

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
  {% for member in site.members %}
    <div class="member-card">
      {% if member.image %}
        <img src="{{ member.image | relative_url }}" alt="{{ member.name }}" class="member-image">
      {% endif %}
      <h2>{{ member.name }}</h2>
      <h3>{{ member.position }}</h3>
      {{ member.content }}
    </div>
  {% endfor %}
</div>