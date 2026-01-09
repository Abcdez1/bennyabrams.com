---
title: Writing
layout: page
permalink: /projects/writing/
---

Writing projects and longer-form work.

---
<!-- added writing papers under writing page -->

{% for p in collections.writingPapers %}
## [{{ p.data.title }}]({{ p.url }})

{% if p.data.authors %}**{{ p.data.authors | join(", ") }}**{% endif %}  
{% if p.data.venue %}{{ p.data.venue }}{% endif %}{% if p.data.year %} ({{ p.data.year }}){% endif %}

{% if p.data.abstract %}
<blockquote class="paper-abstract writing-abstract">
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
