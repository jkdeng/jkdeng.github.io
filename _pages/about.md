---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
<section class="content-section" data-section="about-me">

Welcome! I'm Jikang Deng (邓纪康), a PhD student in Communication Theory Lab ([CTL](https://ctl.kaust.edu.sa/)) at King Abdullah University of Science and Technology ([KAUST](https://www.kaust.edu.sa/en/)) under the supervision of [Prof. Mohamed-Slim Alouini](https://cemse.kaust.edu.sa/profiles/mohamed-slim-alouini). I obtained the Master of Science (M.Sc.) degree in electrical and computer engineering from KAUST in 2025. I received the Bachelor of Engineering (B.Eng.) degree in network engineering from School of Information and Communication Engineering (SICE), University of Electronic Science and Technology of China ([UESTC](https://www.uestc.edu.cn/)) in 2023.

My research interests include wireless communication, non-terrestrial network (NTN), AI for communications, and near-field communication. My research aims to bridge the digital divide and connect the unconnected. Please feel free to connect—I’m always open to new ideas and collaborations! You can reach me at **jikang.deng[at]kaust.edu.sa**
</section>

<span class='anchor' id='research-interest'></span>
<section class="content-section" data-section="research-interest">
# 🔬 Research Interest
- Wireless Communication
- Non-terrestrial Network (NTN)
- AI for communications
- Near-field Communication
</section>

<span class='anchor' id='news'></span>
<section class="content-section" data-section="news">
# 🔔 News
- *2026.01*: 🎉 Our survey paper "*AI-Native Open RAN for Non-Terrestrial Networks: An Overview*" got accepted by **IEEE Open Journal of the Communications Society (OJCOMS)**! <!-- Detailed Date 01.16 -->
- *2025.11*: 🎉 My 2nd first-authored full journal paper "*Two-Timescale Optimization Framework for IAB-Enabled Heterogeneous UAV Networks*" got accepted by **IEEE Internet of Things Journal (IoT-J)**! <!-- Detailed Date 11.16 -->
- *2025.11*: 🎉 Our magazine paper "*Distributed Coordination for Heterogeneous Non-Terrestrial Networks*" got accepted by **IEEE Communications Magazine (COMMAG)**! <!-- Detailed Date 11.05 -->
- *2025.09*: Our magazine paper "*Distributed Coordination for Heterogeneous Non-Terrestrial Networks*" was featured in the September 2025 issue of **IEEE Spectrum** [[Link](https://spectrum.ieee.org/6g-wireless)]!
- *2025.06*: My 1st first-authored full journal paper "*Orthogonality Analysis in LoRa Uplink Satellite Communications Affected by Doppler Effect*" got accepted by **IEEE Transactions on Aerospace and Electronic Systems (TAES)**! <!-- Detailed Date 06.04 -->
- *2025.04*: I successfully defended my master's thesis "*Hierarchical Distributed Coordination for Heterogeneous Non-terrestrial Network*" in KAUST. <!-- Detailed Date 04.29 -->
</section>

<span class='anchor' id='research-experience'></span>
<section class="content-section" data-section="research-experience">
# 📝 Research Experience
## Publications
...existing code...
<!-- 保持你现有的 Publications HTML 块不变 -->
...existing code...
</section>

<span class='anchor' id='academic-service'></span>
<section class="content-section" data-section="academic-service">
## Academic Service
- Reviewer for IEEE Communications Magazine (COMMAG)
- Reviewer for IEEE Wireless Communications Letters (WCL)
- Reviewer for IEEE Open Journal of the Communications Society (OJCOMS)
- Reviewer for IEEE International Conference on Communications (ICC)
</section>

<span class='anchor' id='educations'></span>
<section class="content-section" data-section="educations">
# 📖 Educations
- *2025.06 - Present*: King Abdullah University of Science and Technology (KAUST)
</section>

<span class='anchor' id='honors-and-awards'></span>
<section class="content-section" data-section="honors-and-awards">
## Honors and Awards
...existing code...
</section>

<style>
  /* 默认隐藏所有分区 */
  .content-section { display: none; }
  .content-section.show { display: block; }
</style>

<script>
  (function() {
    const sections = Array.from(document.querySelectorAll('.content-section'));
    const defaults = ['about-me', 'research-interest', 'news'];

    function showDefault() {
      sections.forEach(s => s.classList.remove('show'));
      defaults.forEach(id => {
        const el = document.querySelector(`.content-section[data-section="${id}"]`);
        if (el) el.classList.add('show');
      });
    }

    function showOnly(id) {
      sections.forEach(s => s.classList.remove('show'));
      const el = document.querySelector(`.content-section[data-section="${id}"]`);
      if (el) el.classList.add('show');
      // 滚动到锚点（可选）
      const anchor = document.getElementById(id);
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function route() {
      const hash = (location.hash || '').replace('#', '');
      if (!hash || defaults.includes(hash)) {
        showDefault();
      } else {
        showOnly(hash);
      }
    }

    window.addEventListener('hashchange', route);
    document.addEventListener('DOMContentLoaded', route);
  })();
</script>