$(function () {
  // 默认搜索引擎记录
  const searchTypeStore = {
    set: (type) => localStorage.setItem('SearchType', type),
    get: () => localStorage.getItem('SearchType') || 'google',
  };
  const $searchMethods = $('#search_methods');
  const $searchLogo = $('#search_logo');
  const initSearchType = searchTypeStore.get();
  $searchLogo.addClass(initSearchType).data('type', initSearchType);
  const searchTypes = [
    { url: 'https://www.google.com/search?q=', type: 'google' },
    { url: 'https://www.baidu.com/s?wd=', type: 'baidu' },
    { url: 'https://www.sogou.com/web?query=', type: 'sogou' },
    { url: 'https://search.yahoo.com/search?p=', type: 'yahoo' },
    { url: 'https://www.ask.com/web?q=', type: 'ask' },
    { url: 'https://yandex.com/search/?text=', type: 'yandex' },
    { url: 'https://cn.bing.com/search?q=', type: 'bing' },
    { url: 'https://duckduckgo.com/?q=', type: 'duckduckgo' },
    { url: 'https://en.wikipedia.org/wiki/', type: 'wikipedia' },
    { url: 'https://www.so.com/s?q=', type: 'so' },
    { url: 'https://www.douyin.com/search/', type: 'douyin' },
  ];
  $searchLogo.on('click', () => {
    if ($searchMethods.css('display') === 'none') {
      $searchMethods.show();
    } else {
      $searchMethods.hide();
    }
  });
  // 搜索引擎切换
  $searchMethods.on('click', 'li', function() {
    const type = $(this).data('type');
    searchTypeStore.set(type);
    $searchLogo.removeClass().data('type', type).addClass(`${type} search-logo`);
    $searchMethods.hide();
    $('#search_keyword').focus();
  });
  $searchMethods.on('mouseleave', () => $searchMethods.hide());
  const EVENT_CLEAR_KEYWORD = 'clearKeyword';
  // 关键词搜索输入
  $('#search_keyword').on('keyup', function(event) {
     //显示清空输入框按钮
     $('#clear_keyword').show();
    if (event.keyCode === 13) {
      openSearch($('#search_keyword').val());
      return;
    }
  });
  // 清空输入框
  $('#clear_keyword').on('click', function () {
    $('#search_keyword').val('');
    $('#search_keyword').focus();
    $(document).trigger(EVENT_CLEAR_KEYWORD);
  });
  // 点击高亮显示
  $('#search_keyword').on('focus',  function () {
    $('.search-left').css(
      {
        "border-style":"solid",
        "border-color": "rgba(24, 144, 255, 1)",
        "box-shadow": "0px 0px 2px 1px rgba(145, 213, 255, 0.96)",
      }
    );
  }).on('blur',  function () {
    $('.search-left').prop('style','');
  });
  // 搜索
  $('#search_submit').on('click', function () {
    var keyword = $('#search_keyword').val();
    var type = getSeachType();
    var baseUrl = searchTypes.find(function (item) {
      return item.type === type;
    });
    if (baseUrl && keyword) {
      window.open(baseUrl.url + keyword);
    }
  });
  $(document).on(EVENT_CLEAR_KEYWORD, function () {
    $('#clear_keyword').hide();
  });
  // 获取搜索引擎类型
  function getSeachType() {
    return $('#search_logo').data('type');
  }
  function openSearch(keyword) {
    var type = getSeachType();
    var baseUrl = searchTypes.find(function (item) {
      return item.type === type;
    });
    if (baseUrl && keyword) {
      window.open(baseUrl.url + keyword, keyword);
    }
  }
});