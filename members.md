---
layout: page
title: Members
permalink: /members/
---

<div style="text-align: center; font-size: 0.9em; color: #666; margin-bottom: 15px;">
  Listed degrees are being pursued by members.
</div>

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
  {% assign sorted_members = site.members | sort: "name" | reverse %}
  {% for member in sorted_members %}
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