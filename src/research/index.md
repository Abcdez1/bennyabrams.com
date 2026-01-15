---
title: Research
layout: page
---

Selected posters, papers, and work in progress. Each entry has a short abstract and a citation.

---

{% for p in collections.papers %}
## [{{ p.data.title }}]({{ p.url }})

{% if p.data.authors %}**{{ p.data.authors | join(", ") }}**{% endif %}  
{% if p.data.venue %}{{ p.data.venue }}{% endif %}{% if p.data.year %} ({{ p.data.year }}){% endif %}

{% if p.data.abstract %}{{ p.data.abstract }}{% endif %}

{% if p.data.pdf %}
- [PDF]({{ p.data.pdf }})
{% endif %}
{% if p.data.external %}
- [Supplementary materials]({{ p.data.external }})
{% endif %}

---
{% endfor %}
