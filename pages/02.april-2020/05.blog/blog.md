---
title: Blog
published: true
hide_page_title: true
show_sidebar: false
hide_git_sync_repo_link: false
child_type: item
visible: true
content:
    items: '@self.children'
    limit: 10
    order:
        by: date
        dir: desc
    pagination: '1'
hero_scroll: false
hide_post_summary: false
post_icon: calendar-o
hide_post_date: false
hide_post_taxonomy: true
continue_link_as_button: true
feed:
    limit: 10
    description: 'Grav CMS Open Matter Course Hub Description'
last_modified: true
modular_content:
    items: '@self.modular'
    order:
        by: folder
        dir: dsc
---

