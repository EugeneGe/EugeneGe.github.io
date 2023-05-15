├─_includes                                          #包含文件目录，存放可重用的 HTML 文件片段。
│  │  list.liquid                                    #
│  │  README.md                                      #
│  │                                                 #
│  ├─common                                          #
│  │  │  google_adsense.liquid                       #
│  │  │  google_gtag.liquid                          #
│  │  │  links.liquid                                #
│  │  │  mathjax.liquid                              #
│  │  │  mermaid.liquid                              #
│  │  │  metadata.liquid                             #
│  │  │  opengraph.liquid                            #
│  │  │  schema.liquid                               #
│  │  │  script.liquid                               #
│  │  │  title.liquid                                #
│  │  │  twitter_cards.liquid                        #
│  │  │                                              #
│  │  ├─assets                                       #
│  │  │      data.liquid                             #
│  │  │      robots.liquid                           #
│  │  │      sitemap.liquid                          #
│  │  │      sw.caches.js                            #
│  │  │                                              #
│  │  ├─core                                         #
│  │  │      list.liquid                             #
│  │  │      _list.liquid                            #
│  │  │                                              #
│  │  └─rest                                         #
│  │          content.liquid                         #
│  │          defaults.liquid                        #
│  │          description.liquid                     #
│  │          i18n.liquid                            #
│  │          nav.liquid                             #
│  │          site_pages.liquid                      #
│  │          tabs.liquid                            #
│  │          title.liquid                           #
│  │          variables.liquid                       #
│  │          workdir.liquid                         #
│  │                                                 #
│  ├─extra                                           #
│  │      body.html                                  #
│  │      head.html                                  #
│  │      script.js                                  #
│  │      styles.scss                                #
│  │                                                 #
│  ├─rest                                            #
│  │      defaults.liquid                            #
│  │      script.liquid                              #
│  │      styles.liquid                              #
│  │                                                 #
│  ├─shortcodes                                      #
│  │      danger.liquid                              #
│  │      mermaid.liquid                             #
│  │      note.liquid                                #
│  │      tip.liquid                                 #
│  │      warning.liquid                             #
│  │                                                 #
│  └─templates                                       #
│      │  addons.liquid                              #
│      │  breadcrumbs.liquid                         #
│      │  content.liquid                             #
│      │  footer.liquid                              #
│      │  sidebar.liquid                             #
│      │  toctree.liquid                             #
│      │  _toctree.liquid                            #
│      │                                             #
│      └─content                                     #
│              content_footer.liquid                 #
│              content_header.liquid                 #
│                                                    #
├─_layouts                                           # 布局目录，定义网站的结构、排版等。
│  │  default.liquid                                 #
│  │                                                 #
│  └─tasks                                           #
│          compress.liquid                           #
│          shortcodes.liquid                         #
│                                                    #
├─_sass                                              # Sass 文件目录，存放 Sass 样式文件。
│  │  theme.scss                                     #
│  │  _direction.scss                                #
│  │  _font-face.scss                                #
│  │  _layout.scss                                   #
│  │  _rest.scss                                     #
│  │  _root.scss                                     #
│  │  _variables.scss                                #
│  │                                                 #
│  ├─core                                            #
│  │      addons.scss                                #
│  │      container.scss                             #
│  │      content.scss                               #
│  │      header.scss                                #
│  │      markdown.scss                              #
│  │      sidebar.scss                               #
│  │      title.scss                                 #
│  │      toasts.scss                                #
│  │                                                 #
│  └─lib                                             #
│      ├─@primer                                     #
│      │  └─css                                      #
│      │      ├─base                                 #
│      │      │      base.scss                       #
│      │      │      index.scss                      #
│      │      │      kbd.scss                        #
│      │      │      normalize.scss                  #
│      │      │      README.md                       #
│      │      │      typography-base.scss            #
│      │      │                                      #
│      │      ├─breadcrumb                           #
│      │      │      breadcrumb.scss                 #
│      │      │      index.scss                      #
│      │      │      README.md                       #
│      │      │                                      #
│      │      ├─buttons                              #
│      │      │      button-group.scss               #
│      │      │      button.scss                     #
│      │      │      index.scss                      #
│      │      │      misc.scss                       #
│      │      │      README.md                       #
│      │      │                                      #
│      │      ├─forms                                #
│      │      │      form-control.scss               #
│      │      │      form-group.scss                 #
│      │      │      form-select.scss                #
│      │      │      form-validation.scss            #
│      │      │      index.scss                      #
│      │      │      input-group.scss                #
│      │      │      radio-group.scss                #
│      │      │      README.md                       #
│      │      │                                      #
│      │      ├─loaders                              #
│      │      │      index.scss                      #
│      │      │      loaders.scss                    #
│      │      │      README.md                       #
│      │      │                                      #
│      │      ├─markdown                             #
│      │      │      blob-csv.scss                   #
│      │      │      code.scss                       #
│      │      │      headings.scss                   #
│      │      │      images.scss                     #
│      │      │      index.scss                      #
│      │      │      lists.scss                      #
│      │      │      markdown-body.scss              #
│      │      │      README.md                       #
│      │      │      tables.scss                     #
│      │      │                                      #
│      │      ├─support                              #
│      │      │  │  index.scss                       #
│      │      │  │  README.md                        #
│      │      │  │                                   #
│      │      │  ├─mixins                            #
│      │      │  │      buttons.scss                 #
│      │      │  │      layout.scss                  #
│      │      │  │      misc.scss                    #
│      │      │  │      typography.scss              #
│      │      │  │                                   #
│      │      │  └─variables                         #
│      │      │          color-system.scss           #
│      │      │          colors.scss                 #
│      │      │          layout.scss                 #
│      │      │          misc.scss                   #
│      │      │          typography.scss             #
│      │      │                                      #
│      │      └─utilities                            #
│      │              animations.scss                #
│      │              borders.scss                   #
│      │              box-shadow.scss                #
│      │              colors.scss                    #
│      │              details.scss                   #
│      │              flexbox.scss                   #
│      │              index.scss                     #
│      │              layout.scss                    #
│      │              margin.scss                    #
│      │              padding.scss                   #
│      │              README.md                      #
│      │              typography.scss                #
│      │              visibility-display.scss        #
│      │                                             #
│      ├─font-awesome                                #
│      │      _icons.scss                            #
│      │      _variables.scss                        #
│      │                                             #
│      ├─material-design-lite                        #
│      │      _color-definitions.scss                #
│      │      _functions.scss                        #
│      │      _mixins.scss                           #
│      │      _variables.scss                        #
│      │                                             #
│      └─rouge                                       #
│              github.scss                           #
│                                                    #
│  .gitignore                                        #
│  .prettierignore                                   #
│  CNAME                                             #
│  Gemfile                                           #
│  Gemfile.lock                                      #
│  index.html                                        # 首页文件。
│  jekyll-rtd-theme.gemspec                          #
│  LICENSE                                           #
│  Makefile                                          #
│  package.json                                      #
│  README.md                                         #
│  READMETREE.md                                     #
│  requirements.txt                                  #
│  update.sh                                         #
│  webpack.config.js                                 #
│  _config.yml                                       # 配置文件，包括全局配置、插件配置等。
│                                                    #
├─.bundle                                            #
│      config                                        #
│                                                    #
├─.vscode                                            #
│      settings.json                                 #
│                                                    #
├─blog                                               # 文章目录，已发布的文章按照年月日命名，格式为 yyyy-mm-dd-title.md
│  │  README.md                                      #
│  │                                                 #
│  ├─about                                           #
│  │  │  README.md                                   #
│  │  │                                              #
│  │  └─website                                      #
│  │          2023-04-23_1.md                        #
│  │          README.md                              #
│  │                                                 #
│  ├─development                                     #
│  │  │  README.md                                   #
│  │  │                                              #
│  │  ├─html                                         #
│  │  │  │  README.md                                #
│  │  │  │                                           #
│  │  │  ├─jottings                                  #
│  │  │  │      2023-04-21_1.md                      #
│  │  │  │      2023-04-27_1.md                      #
│  │  │  │      2023-05-12_1.md                      #
│  │  │  │      2023-05-12_2.md                      #
│  │  │  │      README.md                            #
│  │  │  │                                           #
│  │  │  ├─seo                                       #
│  │  │  │      2023-04-27_1.md                      #
│  │  │  │      2023-04-27_2.md                      #
│  │  │  │      2023-04-27_3.md                      #
│  │  │  │      README.md                            #
│  │  │  │                                           #
│  │  │  └─webdesign                                 #
│  │  │          2023-04-24_1.md                     #
│  │  │          2023-04-24_2.md                     #
│  │  │          2023-05-12_1.md                     #
│  │  │          README.md                           #
│  │  │                                              #
│  │  ├─interview                                    #
│  │  │  │  README.md                                #
│  │  │  │                                           #
│  │  │  └─java                                      #
│  │  │          2023-04-23_1.md                     #
│  │  │          2023-04-23_2.md                     #
│  │  │          2023-04-23_3.md                     #
│  │  │          2023-04-23_4.md                     #
│  │  │          README.md                           #
│  │  │                                              #
│  │  ├─java                                         #
│  │  │  │  README.md                                #
│  │  │  │                                           #
│  │  │  ├─basics                                    #
│  │  │  │      2023-04-24_1.md                      #
│  │  │  │      2023-04-24_2.md                      #
│  │  │  │      2023-04-24_3.md                      #
│  │  │  │      2023-04-27_1.md                      #
│  │  │  │      README.md                            #
│  │  │  │                                           #
│  │  │  ├─jottings                                  #
│  │  │  │      2023-04-23_1.md                      #
│  │  │  │      2023-04-27_1.md                      #
│  │  │  │      2023-04-27_2.md                      #
│  │  │  │      2023-05-12_1.md                      #
│  │  │  │      README.md                            #
│  │  │  │                                           #
│  │  │  └─tool                                      #
│  │  │          2023-05-12_1.md                     #
│  │  │          README.md                           #
│  │  │                                              #
│  │  ├─os                                           #
│  │  │  │  README.md                                #
│  │  │  │                                           #
│  │  │  ├─linux                                     #
│  │  │  │      2023-04-23_1.md                      #
│  │  │  │      README.md                            #
│  │  │  │                                           #
│  │  │  └─windows                                   #
│  │  │          2023-04-27_1.md                     #
│  │  │          README.md                           #
│  │  │                                              #
│  │  ├─python                                       #
│  │  │  │  README.md                                #
│  │  │  │                                           #
│  │  │  ├─django                                    #
│  │  │  │      2023-04-27_1.md                      #
│  │  │  │      README.md                            #
│  │  │  │                                           #
│  │  │  └─jottings                                  #
│  │  │          README.md                           #
│  │  │                                              #
│  │  └─tool                                         #
│  │      │  README.md                               #
│  │      │                                          #
│  │      ├─git                                      #
│  │      │      2023-04-27_1.md                     #
│  │      │      2023-04-28_1.md                     #
│  │      │      2023-05-12_1.md                     #
│  │      │      README.md                           #
│  │      │                                          #
│  │      ├─maven                                    #
│  │      │      2023-04-27_1.md                     #
│  │      │      README.md                           #
│  │      │                                          #
│  │      └─redis                                    #
│  │              2023-04-30_1.md                    #
│  │              2023-04-30_2.md                    #
│  │              README.md                          #
│  │                                                 #
│  ├─frontier                                        #
│  │  │  README.md                                   #
│  │  │                                              #
│  │  ├─new                                          #
│  │  │  │  README.md                                #
│  │  │  │                                           #
│  │  │  ├─life                                      #
│  │  │  │      2023-04-23_1.md                      #
│  │  │  │      README.md                            #
│  │  │  │                                           #
│  │  │  └─technology                                #
│  │  │          2023-04-23_1.md                     #
│  │  │          README.md                           #
│  │  │                                              #
│  │  └─recommend                                    #
│  │          2023-04-23_1.md                        #
│  │          2023-04-27_1.md                        #
│  │          README.md                              #
│  │                                                 #
│  └─life                                            #
│      │  README.md                                  #
│      │                                             #
│      ├─poetry                                      #
│      │      README.md                              #
│      │                                             #
│      └─travel                                      #
│              README.md                             #
│                                                    #
├─blog_img                                           #
├─static                                             # 静态文件目录，包括 CSS、JavaScript、图片等。
│  ├─assets                                          #
│  │  │  404.liquid                                  #
│  │  │  data.liquid                                 #
│  │  │  robots.liquid                               #
│  │  │  search.liquid                               #
│  │  │  sitemap.liquid                              #
│  │  │  sw.caches.liquid                            #
│  │  │                                              #
│  │  ├─css                                          #
│  │  │  │  theme.min.css                            #
│  │  │  │  theme.scss                               #
│  │  │  │                                           #
│  │  │  └─fonts                                     #
│  │  │          fontawesome-webfont.eot             #
│  │  │          fontawesome-webfont.svg             #
│  │  │          fontawesome-webfont.ttf             #
│  │  │          fontawesome-webfont.woff            #
│  │  │          fontawesome-webfont.woff2           #
│  │  │          lato-bold-italic.woff               #
│  │  │          lato-bold-italic.woff2              #
│  │  │          lato-bold.woff                      #
│  │  │          lato-bold.woff2                     #
│  │  │          lato-normal-italic.woff             #
│  │  │          lato-normal-italic.woff2            #
│  │  │          lato-normal.woff                    #
│  │  │          lato-normal.woff2                   #
│  │  │          Roboto-Slab-Bold.woff               #
│  │  │          Roboto-Slab-Bold.woff2              #
│  │  │          Roboto-Slab-Regular.woff            #
│  │  │          Roboto-Slab-Regular.woff2           #
│  │  │                                              #
│  │  ├─ico                                          #
│  │  │      apple-touch-icon-300x300.jpg            #
│  │  │      favicon-16x16.png                       #
│  │  │      favicon-32x32.png                       #
│  │  │      favicon-96x96.png                       #
│  │  │      favicon.liquid                          #
│  │  │                                              #
│  │  └─js                                           #
│  │          jquery.min.js                          #
│  │          mermaid.min.js                         #
│  │          theme.js                               #
│  │          theme.min.js                           #
│  │                                                 #
│  └─home                                            #
│      ├─css                                         #
│      │  │  style.css                               #
│      │  │                                          #
│      │  └─img                                      #
│      │          github.png                         #
│      │          scask.png                          #
│      │          scbaidu.png                        #
│      │          scbing.png                         #
│      │          scdouyin.png                       #
│      │          scduckduckgo.png                   #
│      │          scgoogle.png                       #
│      │          scso.png                           #
│      │          scsogou.png                        #
│      │          scwangpan.png                      #
│      │          scwikipedia.png                    #
│      │          scyahoo.png                        #
│      │          scyandex.png                       #
│      │          search.png                         #
│      │                                             #
│      ├─ico                                         #
│      │      favicon.ico                            #
│      │      favicon.png                            #
│      │      logo.png                               #
│      │                                             #
│      └─js                                          #
│              jquery.min.js                         #
│              keyword.js                            #
│                                                    #
├─.github                                            #
│  │  CODEOWNERS                                     #
│  │  CODE_OF_CONDUCT.md                             #
│  │  CONTRIBUTING.md                                #
│  │  dependabot.yml                                 #
│  │  FUNDING.yml                                    #
│  │  PULL_REQUEST_TEMPLATE.md                       #
│  │                                                 #
│  ├─ISSUE_TEMPLATE                                  #
│  │      bug_report.md                              #
│  │                                                 #
│  └─workflows                                       #
│          ci.yml                                    #
│                                                    #
└─_site                                              # 生成的网站目录，Jekyll 会在本地生成网站，并将生成的网站文件保存在这个目录下。
    │  .gitkeep                                      #
    │  404.html                                      #
    │  data.json                                     #
    │  index.html                                    #
    │  README.md                                     #
    │  robots.txt                                    #
    │  search.html                                   #
    │  sitemap.xml                                   #
    │  sw.caches.js                                  #
    │                                                #
    ├─blog                                           #
    │  │  index.html                                 #
    │  │                                             #
    │  ├─about                                       #
    │  │  │  index.html                              #
    │  │  │                                          #
    │  │  └─website                                  #
    │  │          2023-04-23_1.html                  #
    │  │          index.html                         #
    │  │          README.md                          #
    │  │                                             #
    │  ├─development                                 #
    │  │  │  index.html                              #
    │  │  │                                          #
    │  │  ├─html                                     #
    │  │  │  │  index.html                           #
    │  │  │  │                                       #
    │  │  │  ├─jottings                              #
    │  │  │  │      2023-04-21_1.html                #
    │  │  │  │      2023-04-27_1.html                #
    │  │  │  │      2023-05-12_1.html                #
    │  │  │  │      2023-05-12_2.html                #
    │  │  │  │      index.html                       #
    │  │  │  │                                       #
    │  │  │  ├─seo                                   #
    │  │  │  │      2023-04-27_1.html                #
    │  │  │  │      2023-04-27_2.html                #
    │  │  │  │      2023-04-27_3.html                #
    │  │  │  │      index.html                       #
    │  │  │  │                                       #
    │  │  │  └─webdesign                             #
    │  │  │          2023-04-24_1.html               #
    │  │  │          2023-04-24_2.html               #
    │  │  │          2023-05-12_1.html               #
    │  │  │          index.html                      #
    │  │  │                                          #
    │  │  ├─interview                                #
    │  │  │  │  index.html                           #
    │  │  │  │                                       #
    │  │  │  └─java                                  #
    │  │  │          2023-04-23_1.html               #
    │  │  │          2023-04-23_2.html               #
    │  │  │          2023-04-23_3.html               #
    │  │  │          2023-04-23_4.html               #
    │  │  │          index.html                      #
    │  │  │                                          #
    │  │  ├─java                                     #
    │  │  │  │  index.html                           #
    │  │  │  │                                       #
    │  │  │  ├─basics                                #
    │  │  │  │      2023-04-24_1.html                #
    │  │  │  │      2023-04-24_2.html                #
    │  │  │  │      2023-04-24_3.html                #
    │  │  │  │      2023-04-27_1.html                #
    │  │  │  │      index.html                       #
    │  │  │  │                                       #
    │  │  │  ├─jottings                              #
    │  │  │  │      2023-04-23_1.html                #
    │  │  │  │      2023-04-27_1.html                #
    │  │  │  │      2023-04-27_2.html                #
    │  │  │  │      2023-05-12_1.html                #
    │  │  │  │      index.html                       #
    │  │  │  │                                       #
    │  │  │  └─tool                                  #
    │  │  │          2023-05-12_1.html               #
    │  │  │          index.html                      #
    │  │  │                                          #
    │  │  ├─os                                       #
    │  │  │  │  index.html                           #
    │  │  │  │                                       #
    │  │  │  ├─linux                                 #
    │  │  │  │      2023-04-23_1.html                #
    │  │  │  │      index.html                       #
    │  │  │  │                                       #
    │  │  │  └─windows                               #
    │  │  │          2023-04-27_1.html               #
    │  │  │          index.html                      #
    │  │  │                                          #
    │  │  ├─python                                   #
    │  │  │  │  index.html                           #
    │  │  │  │                                       #
    │  │  │  ├─django                                #
    │  │  │  │      2023-04-27_1.html                #
    │  │  │  │      index.html                       #
    │  │  │  │                                       #
    │  │  │  └─jottings                              #
    │  │  │          index.html                      #
    │  │  │                                          #
    │  │  └─tool                                     #
    │  │      │  index.html                          #
    │  │      │                                      #
    │  │      ├─git                                  #
    │  │      │      2023-04-27_1.html               #
    │  │      │      2023-04-28_1.html               #
    │  │      │      2023-05-12_1.html               #
    │  │      │      index.html                      #
    │  │      │                                      #
    │  │      ├─maven                                #
    │  │      │      2023-04-27_1.html               #
    │  │      │      index.html                      #
    │  │      │                                      #
    │  │      └─redis                                #
    │  │              2023-04-30_1.html              #
    │  │              2023-04-30_2.html              #
    │  │              index.html                     #
    │  │                                             #
    │  ├─frontier                                    #
    │  │  │  index.html                              #
    │  │  │                                          #
    │  │  ├─new                                      #
    │  │  │  │  index.html                           #
    │  │  │  │                                       #
    │  │  │  ├─life                                  #
    │  │  │  │      2023-04-23_1.html                #
    │  │  │  │      index.html                       #
    │  │  │  │      README.md                        #
    │  │  │  │                                       #
    │  │  │  └─technology                            #
    │  │  │          2023-04-23_1.html               #
    │  │  │          index.html                      #
    │  │  │          README.md                       #
    │  │  │                                          #
    │  │  └─recommend                                #
    │  │          2023-04-23_1.html                  #
    │  │          2023-04-27_1.html                  #
    │  │          index.html                         #
    │  │                                             #
    │  └─life                                        #
    │      │  index.html                             #
    │      │                                         #
    │      ├─poetry                                  #
    │      │      index.html                         #
    │      │      README.md                          #
    │      │                                         #
    │      └─travel                                  #
    │              index.html                        #
    │              README.md                         #
    │                                                #
    └─static                                         #
        ├─assets                                     #
        │  ├─css                                     #
        │  │  │  theme.css                           #
        │  │  │  theme.min.css                       #
        │  │  │                                      #
        │  │  └─fonts                                #
        │  │          fontawesome-webfont.eot        #
        │  │          fontawesome-webfont.svg        #
        │  │          fontawesome-webfont.ttf        #
        │  │          fontawesome-webfont.woff       #
        │  │          fontawesome-webfont.woff2      #
        │  │          lato-bold-italic.woff          #
        │  │          lato-bold-italic.woff2         #
        │  │          lato-bold.woff                 #
        │  │          lato-bold.woff2                #
        │  │          lato-normal-italic.woff        #
        │  │          lato-normal-italic.woff2       #
        │  │          lato-normal.woff               #
        │  │          lato-normal.woff2              #
        │  │          Roboto-Slab-Bold.woff          #
        │  │          Roboto-Slab-Bold.woff2         #
        │  │          Roboto-Slab-Regular.woff       #
        │  │          Roboto-Slab-Regular.woff2      #
        │  │                                         #
        │  ├─ico                                     #
        │  │      apple-touch-icon-300x300.jpg       #
        │  │      favicon-16x16.png                  #
        │  │      favicon-32x32.png                  #
        │  │      favicon-96x96.png                  #
        │  │                                         #
        │  ├─images                                  #
        │  │      favicon.svg                        #
        │  │                                         #
        │  └─js                                      #
        │          jquery.min.js                     #
        │          mermaid.min.js                    #
        │          theme.js                          #
        │          theme.min.js                      #
        │                                            #
        └─home                                       #
            ├─css                                    #
            │  │  style.css                          #
            │  │                                     #
            │  └─img                                 #
            │          github.png                    #
            │          scask.png                     #
            │          scbaidu.png                   #
            │          scbing.png                    #
            │          scdouyin.png                  #
            │          scduckduckgo.png              #
            │          scgoogle.png                  #
            │          scso.png                      #
            │          scsogou.png                   #
            │          scwangpan.png                 #
            │          scwikipedia.png               #
            │          scyahoo.png                   #
            │          scyandex.png                  #
            │          search.png                    #
            │                                        #
            ├─ico                                    #
            │      favicon.ico                       #
            │      favicon.png                       #
            │      logo.png                          #
            │                                        #
            └─js                                     #
                    jquery.min.js                    #
                    keyword.js                       #
													#
													#