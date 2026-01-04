---
title: Course Projects
layout: page
permalink: /projects/course-projects/
---

Selected papers and project writeups. Each entry includes a short abstract and a citation.

---
<!-- added papers under project page -->

{% for p in collections.projectPapers %}
## [{{ p.data.title }}]({{ p.url }})

{% if p.data.authors %}**{{ p.data.authors | join(", ") }}**{% endif %}  
{% if p.data.venue %}{{ p.data.venue }}{% endif %}{% if p.data.year %} ({{ p.data.year }}){% endif %}

{% if p.data.abstract %}
<blockquote class="paper-abstract">
{% if p.data.abstract is string %}
{{ p.data.abstract }}
{% else %}
{% for quote in p.data.abstract %}
<p>"{{ quote }}"</p>
{% endfor %}
{% endif %}
</blockquote>
{% endif %}

{% if p.data.pdf %}
- [PDF]({{ p.data.pdf }})
{% endif %}

---
{% endfor %}
