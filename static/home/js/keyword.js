$(function () {

  // 默认搜索引擎记录
  const searchTypeStore = {
    set: (type) => localStorage.setItem('SearchType', type),
    get: () => localStorage.getItem('SearchType') || 'baidu',
  };

  const $searchMethods = $('#search_methods');
  const $searchLogo = $('#search_logo');
  const initSearchType = searchTypeStore.get();
  $searchLogo.addClass(initSearchType).data('type', initSearchType);

  const searchTypes = [
    { url: 'https://www.baidu.com/s?wd=', type: 'baidu' },
    { url: 'https://www.sogou.com/web?query=', type: 'sogou' },
    { url: 'https://cn.bing.com/search?q=', type: 'bing' },
    { url: 'https://www.so.com/s?q=', type: 'so' },
    { url: 'https://www.google.com/search?q=', type: 'google' },
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
  const EVENT_SEARCH = 'search';
  // 关键词搜索输入
  $('#search_keyword').on('keyup', function(event) {
    const keyword = $(this).val();
    if (event.which === 13) {
      if ($('#search_result .active').length > 0) {
        $(this).val($('#search_result .active').eq(0).text());
      }
      openSearch($(this).val());
      return;
    }
    // 上下键选择待选答案
    if (moveChange(event)) {
      keywordChange(keyword);
    }
  }).on('blur', () => {
    // 推荐结果跳转
    $('#search_result').on('click', 'li', function() {
      const word = $(this).text();
      $('#search_keyword').val(word);
      openSearch(word);
      $('#search_result').hide();
    });
    // 解决失焦和点击事件冲突问题
    setTimeout(() => $('#search_result').hide(), 100);
  }).on('focus', function() {
    const keyword = $(this).val();
    keywordChange(keyword);
  });
  function moveChange(e) {
    const k = e.keyCode || e.which;
    let bl = true;
    switch (k) {
      case 38:
        rowMove('top');
        bl = false;
        break;
      case 40:
        rowMove('down');
        bl = false;
        break;
    }
    return bl;
  }
  function rowMove(move){
    const search_result = $('#search_result');
    let hove_li = search_result.find('.result-item.active').index();

    if(move === 'top'){
        hove_li = (hove_li === null || hove_li === 0) ? search_result.find('.result-item').length-1 : hove_li-1;
    }else if(move === 'down'){
        hove_li = (hove_li === null || hove_li === search_result.find('.result-item').length-1) ? 0 : hove_li+1;
    }

    search_result.find('.result-item').removeClass('active').eq(hove_li).addClass('active');
    const active_item = search_result.find('.result-item.active');
    $('#search_keyword').val(active_item.text());
  }

  function keywordChange(keyword) {
    if (keyword === '') {
      $(document).trigger(EVENT_CLEAR_KEYWORD);
    } else {
      $(document).trigger(EVENT_SEARCH, keyword);
      $('#clear_keyword').show();
    }
  }

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
    $('#search_result').hide();
  });
  $(document).on(EVENT_SEARCH, function (e, keyword) {
    getSearchResult(keyword);
  });

  // 获取搜索引擎类型
  function getSeachType() {
    return $('#search_logo').data('type');
  }

  // google 搜索结果
  function searchResultGoogle(data) {
    var result = data[1];
    result = result.map(function (item) {
      return item[0];
    });
    renderSearchResult(result);
  }

  // 百度 搜索结果
  function searchResultBaidu(data) {
    if (data === undefined) {
      return;
    }
    var result = data.s;
    renderSearchResult(result);
  }

  // 渲染搜索结果
  function renderSearchResult(array) {
    var $result = $('#search_result');
    $result.empty().hide();
    if (!array || array.length <= 0) {
      return;
    }
    for (var i = 0; i < array.length; i++) {
      var $li = $('<li class=\'result-item\'></li>');
      $li.text(array[i]);
      $result.append($li);
    }
    $result.show();
  }

  window.searchResultGoogle = searchResultGoogle;
  window.searchResultBaidu = searchResultBaidu;

  var search_suggest = {
    baidu: {
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
      data: function (keyword) {
        return {
          wd: keyword,
          cb: 'window.searchResultBaidu',
        };
      },
    },
    google: {
      url: 'https://suggestqueries.google.com/complete/search',
      data: function (keyword) {
        return {
          q: keyword,
          jsonp: 'window.searchResultGoogle',
          client: 'youtube',
        };
      },
    },
  };

  function getSearchResult(keyword) {
    var searchType = getSeachType();
    var suggest = search_suggest[searchType];
    if (!suggest) {
      suggest = search_suggest.baidu;
    }
    $.ajax({
      url: suggest.url,
      dataType: 'jsonp',
      data: suggest.data(keyword),
    });
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