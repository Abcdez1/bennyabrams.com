---
title: projects
layout: page
permalink: /projects/
---

Selected papers and project writeups. Each entry includes a short abstract and a citation.

---
<!-- added papers under project page -->

{% for p in collections.projectPapers %}
## [{{ p.data.title }}]({{ p.url }})

{% if p.data.authors %}**{{ p.data.authors | join(", ") }}**{% endif %}  
{% if p.data.venue %}{{ p.data.venue }}{% endif %}{% if p.data.year %} ({{ p.data.year }}){% endif %}

{% if p.data.abstract %}{{ p.data.abstract }}{% endif %}

{% if p.data.pdf %}
- [PDF]({{ p.data.pdf }})
{% endif %}

---
{% endfor %}
