/*! -----------------------------------------------------------------------------------

    Template Name: Riho Admin
    Template URI: https://admin.pixelstrap.net/riho/template/
    Description: This is Admin theme
    Author: Pixelstrap
    Author URI: https://themeforest.net/user/pixelstrap

-----------------------------------------------------------------------------------

        01. password show hide
        02. Background Image js
        03. sidebar filter
        04. Language js
        05. Translate js

 --------------------------------------------------------------------------------- */

(function ($) {
  "use strict";
  $(document).on("click", function (e) {
    var outside_space = $(".outside");
    if (
      !outside_space.is(e.target) &&
      outside_space.has(e.target).length === 0
    ) {
      $(".menu-to-be-close").removeClass("d-block");
      $(".menu-to-be-close").css("display", "none");
    }
  });

  $(".prooduct-details-box .close").on("click", function (e) {
    var tets = $(this).parent().parent().parent().parent().addClass("d-none");
    console.log(tets);
  });

  if ($(".page-wrapper").hasClass("horizontal-wrapper")) {
    $(".sidebar-list").hover(
      function () {
        $(this).addClass("hoverd");
      },
      function () {
        $(this).removeClass("hoverd");
      }
    );
    $(window).on("scroll", function () {
      if ($(this).scrollTop() < 600) {
        $(".sidebar-list").removeClass("hoverd");
      }
    });
  }

  /*----------------------------------------
     password show hide
     ----------------------------------------*/
  $(".show-hide").show();
  $(".show-hide span").addClass("show");

  $(".show-hide span").click(function () {
    if ($(this).hasClass("show")) {
      $('input[name="login[password]"]').attr("type", "text");
      $(this).removeClass("show");
    } else {
      $('input[name="login[password]"]').attr("type", "password");
      $(this).addClass("show");
    }
  });
  $('form button[type="submit"]').on("click", function () {
    $(".show-hide span").addClass("show");
    $(".show-hide")
      .parent()
      .find('input[name="login[password]"]')
      .attr("type", "password");
  });

  /*=====================
      02. Background Image js
      ==========================*/
  $(".bg-center").parent().addClass("b-center");
  $(".bg-img-cover").parent().addClass("bg-size");
  $(".bg-img-cover").each(function () {
    var el = $(this),
      src = el.attr("src"),
      parent = el.parent();
    parent.css({
      "background-image": "url(" + src + ")",
      "background-size": "cover",
      "background-position": "center",
      display: "block",
    });
    el.hide();
  });

  $(".mega-menu-container").css("display", "none");
  $(".header-search").click(function () {
    $(".search-full").addClass("open");
  });
  $(".close-search").click(function () {
    $(".search-full").removeClass("open");
    $("body").removeClass("offcanvas");
  });
  $(".mobile-toggle").click(function () {
    $(".nav-menus").toggleClass("open");
  });
  $(".mobile-toggle-left").click(function () {
    $(".left-header").toggleClass("open");
  });
  $(".bookmark-search").click(function () {
    $(".form-control-search").toggleClass("open");
  });
  $(".filter-toggle").click(function () {
    $(".product-sidebar").toggleClass("open");
  });
  $(".toggle-data").click(function () {
    $(".product-wrapper").toggleClass("sidebaron");
  });
  $(".form-control-search input").keyup(function (e) {
    if (e.target.value) {
      $(".page-wrapper").addClass("offcanvas-bookmark");
    } else {
      $(".page-wrapper").removeClass("offcanvas-bookmark");
    }
  });
  $(".search-full input").keyup(function (e) {
    console.log(e.target.value);
    if (e.target.value) {
      $("body").addClass("offcanvas");
    } else {
      $("body").removeClass("offcanvas");
    }
  });

  $("body").keydown(function (e) {
    if (e.keyCode == 27) {
      $(".search-full input").val("");
      $(".form-control-search input").val("");
      $(".page-wrapper").removeClass("offcanvas-bookmark");
      $(".search-full").removeClass("open");
      $(".search-form .form-control-search").removeClass("open");
      $("body").removeClass("offcanvas");
    }
  });
  $(".mode").on("click", function () {
    const bodyModeDark = $("body").hasClass("dark-only");

    if (!bodyModeDark) {
      $(".mode").addClass("active");
      localStorage.setItem("mode", "dark-only");
      $("body").addClass("dark-only");
      $("body").removeClass("light");
    }
    if (bodyModeDark) {
      $(".mode").removeClass("active");
      localStorage.setItem("mode", "light");
      $("body").removeClass("dark-only");
      $("body").addClass("light");
    }
  }); 
  // $("body").addClass(
  //   localStorage.getItem("mode")
  //     ? localStorage.getItem("mode")
  //     : "light"
  // ); 
  $(".mode").addClass(
    localStorage.getItem("mode") === "dark-only" ? "active" : " "
  );

  // sidebar filter
  $(".md-sidebar .md-sidebar-toggle ").on("click", function (e) {
    $(".md-sidebar .md-sidebar-aside ").toggleClass("open");
  });

  $(".loader-wrapper").fadeOut("slow", function () {
    $(this).remove();
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".tap-top").fadeIn();
    } else {
      $(".tap-top").fadeOut();
    }
  });

  $(".tap-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
  (function ($, window, document, undefined) {
    "use strict";
    var $ripple = $(".js-ripple");
    $ripple.on("click.ui.ripple", function (e) {
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find(".c-ripple__circle");
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
      $circle.css({
        top: y + "px",
        left: x + "px",
      });
      $this.addClass("is-active");
    });
    $ripple.on(
      "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
      function (e) {
        $(this).removeClass("is-active");
      }
    );
  })(jQuery, window, document);

  // active link

  $(".chat-menu-icons .toogle-bar").click(function () {
    $(".chat-menu").toggleClass("show");
  });

  // Language
  var tnum = "en";

  $(document).ready(function () {
    if (localStorage.getItem("primary") != null) {
      var primary_val = localStorage.getItem("primary");
      $("#ColorPicker1").val(primary_val);
      var secondary_val = localStorage.getItem("secondary");
      $("#ColorPicker2").val(secondary_val);
    }

    $(document).click(function (e) {
      $(".translate_wrapper, .more_lang").removeClass("active");
    });
    $(".translate_wrapper .current_lang").click(function (e) {
      e.stopPropagation();
      $(this).parent().toggleClass("active");

      setTimeout(function () {
        $(".more_lang").toggleClass("active");
      }, 5);
    });

    /*TRANSLATE*/
    translate(tnum);

    $(".more_lang .lang").click(function () {
      $(this).addClass("selected").siblings().removeClass("selected");
      $(".more_lang").removeClass("active");

      var i = $(this).find("i").attr("class");
      var lang = $(this).attr("data-value");
      var tnum = lang;
      translate(tnum);

      $(".current_lang .lang-txt").text(lang);
      $(".current_lang i").attr("class", i);
    });
  });

  function translate(tnum) {
    $(".lan-1").text(trans[0][tnum]);
    $(".lan-2").text(trans[1][tnum]);
    $(".lan-3").text(trans[2][tnum]);
    $(".lan-4").text(trans[3][tnum]);
    $(".lan-5").text(trans[4][tnum]);
    $(".lan-6").text(trans[5][tnum]);
    $(".lan-7").text(trans[6][tnum]);
    $(".lan-8").text(trans[7][tnum]);
    $(".lan-9").text(trans[8][tnum]);
  }

  var trans = [
    {
      en: "General",
      pt: "Geral",
      es: "Generalo",
      fr: "GÃ©nÃ©rale",
      de: "Generel",
      cn: "ä¸€èˆ¬",
      ae: "Ø­Ø¬Ù†Ø±Ø§Ù„ Ù„ÙˆØ§Ø¡",
    },
    {
      en: "Dashboards,widgets & layout.",
      pt: "PainÃ©is, widgets e layout.",
      es: "Paneloj, fenestraÄµoj kaj aranÄo.",
      fr: "Tableaux de bord, widgets et mise en page.",
      de: "Dashboards, widgets en lay-out.",
      cn: "ä»ªè¡¨æ¿ï¼Œå°å·¥å…·å’Œå¸ƒå±€ã€‚",
      ae: "Ù„ÙˆØ­Ø§Øª Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª ÙˆØ§Ù„ØªØ®Ø·ÙŠØ·.",
    },
    {
      en: "Dashboards",
      pt: "PainÃ©is",
      es: "Paneloj",
      fr: "Tableaux",
      de: "Dashboards",
      cn: " ä»ªè¡¨æ¿ ",
      ae: "ÙˆØ­Ø§Øª Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© ",
    },
    {
      en: "Default",
      pt: "PadrÃ£o",
      es: "Vaikimisi",
      fr: "DÃ©faut",
      de: "Standaard",
      cn: "é›»å­å•†å‹™",
      ae: "ÙˆØ¥ÙØªØ±Ø§Ø¶ÙŠ",
    },
    {
      en: "Ecommerce",
      pt: "ComÃ©rcio eletrÃ´nico",
      es: "Komerco",
      fr: "Commerce Ã©lectronique",
      de: "E-commerce",
      cn: "é›»å­å•†å‹™",
      ae: "ÙˆØ§Ù„ØªØ¬Ø§Ø±Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©",
    },
    {
      en: "Widgets",
      pt: "Ferramenta",
      es: "Vidin",
      fr: "Widgets",
      de: "Widgets",
      cn: "å°éƒ¨ä»¶",
      ae: "ÙˆØ§Ù„Ø­Ø§Ø¬ÙŠØ§Øª",
    },
    {
      en: "Page layout",
      pt: "Layout da pÃ¡gina",
      es: "PaÄa aranÄo",
      fr: "Tableaux",
      de: "Mise en page",
      cn: "é é¢ä½ˆå±€",
      ae: "ÙˆØªØ®Ø·ÙŠØ· Ø§Ù„ØµÙØ­Ø©",
    },
    {
      en: "Applications",
      pt: "FormulÃ¡rios",
      es: "Aplikoj",
      fr: "Applications",
      de: "Toepassingen",
      cn: "æ‡‰ç”¨é ˜åŸŸ",
      ae: "ÙˆØ§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª",
    },
    {
      en: "Ready to use Apps",
      pt: "Pronto para usar aplicativos",
      es: "Preta uzi Apps",
      fr: " Applications prÃªtes Ã  lemploi ",
      de: "Klaar om apps te gebruiken",
      cn: "ä»ªè¡¨æ¿",
      ae: "Ø¬Ø§Ù‡Ø² Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª",
    },
  ];

  $(".mobile-title svg").click(function () {
    $(".header-mega").toggleClass("d-block");
  });

  $(".onhover-dropdown").on("click", function () {
    $(this).children(".onhover-show-div").toggleClass("active");
  });

  $("#flip-btn").click(function () {
    $(".flip-card-inner").addClass("flipped");
  });

  $("#flip-back").click(function () {
    $(".flip-card-inner").removeClass("flipped");
  });
  // ================== show and hide input start
  const toggle = document.getElementById("searchIcon")
  let newinput = false
  toggle.addEventListener("click", function(){
    newinput = !newinput
    if(newinput){
      document.getElementById("searchInput").classList.add("show")
    }else{
      document.getElementById("searchInput").classList.remove("show")
    }
  })
  // ================ show and hide input css end 
// function initCustomDataTable(config) {
//   const table = $(config.table).DataTable({
//     dom: 'lrtip',
//     pageLength: 10,
//     lengthMenu: [10, 15, 25, 50],
//     pagingType: 'simple_numbers',
//     scrollX: true,
//     autoWidth: false,
//     language: {
//       paginate: {
//         previous: 'Previous',
//         next: 'Next'
//       }
//     },
//     columnDefs: [
//       { orderable: false, targets: config.disabledCols }
//     ]
//   });

//   // Search
//   $(config.search).on('keyup', function () {
//     table.search(this.value).draw();
//   });

//   // Select all
//   $(config.selectAll).on('change', function () {
//     $(config.rowCheck).prop('checked', this.checked);
//     toggleActions();
//   });

//   // Row checkbox
//   $(document).on('change', config.rowCheck, toggleActions);

//   function toggleActions() {
//     const checked = $(config.rowCheck + ':checked').length;
//     $(config.bulkActions).prop('disabled', checked === 0);
//   }

//   // Toggle columns
//   $(config.toggleCol).on('change', function () {
//     const col = table.column($(this).data('col'));
//     col.visible(!col.visible());
//   });

//   return table;
// }

function initCustomDataTable(config) {

  const table = $(config.table).DataTable({
    dom: 'lrtip',
    pageLength: 10,
    scrollX: true,
    scrollCollapse: true,
    autoWidth: false,
    ordering: false,
    responsive: false,
    columnDefs: [
      { orderable: false, targets: config.disabledCols || [] }
    ],

    initComplete: function () {
      const api = this.api();

      // 🔹 hide unchecked columns on load
      $(config.toggleCol).each(function () {
        const colIndex = $(this).data('col');
        if (!this.checked) {
          api.column(colIndex).visible(false);
        }
      });

      api.columns.adjust();
    }
  });

  /* ☑ Select All */
  if (config.selectAll && config.rowCheck) {
    $(config.selectAll).on('change', function () {
      $(config.rowCheck).prop('checked', this.checked);
    });
  }

  /* 👁 Toggle Columns */
  if (config.toggleCol) {
    $(config.toggleCol).on('change', function () {
      const colIndex = $(this).data('col');
      table.column(colIndex).visible(this.checked);
      table.columns.adjust();
    });
  }

  /* ==========================
   ☑ Select All + Actions
========================== */
if (config.selectAll && config.rowCheck && config.bulkActions) {

  function toggleActions() {
    const count = $(config.rowCheck + ':checked').length;
    $(config.bulkActions).prop('disabled', count === 0);
  }

  $(config.selectAll).on('change', function () {
    $(config.rowCheck).prop('checked', this.checked);
    toggleActions();
  });

  $(document).on('change', config.rowCheck, function () {
    toggleActions();

    // update select all state
    const total = $(config.rowCheck).length;
    const checked = $(config.rowCheck + ':checked').length;
    $(config.selectAll).prop('checked', total === checked);
  });
}


  return table;
}




initCustomDataTable({
  table: '#employeesTable',
  search: '#tableSearch',
  selectAll: '#selectAll',
  rowCheck: '.row-check',
  bulkActions: '#bulkActions',
  toggleCol: '.toggle-col',
  disabledCols: [0, 4]
});

initCustomDataTable({
  table: '#employeesTableStart',
  search: '#tableSearchStart',
  selectAll: '#selectAllStart',
  rowCheck: '.row-check-start',
  bulkActions: '#StartBulkActions',
  toggleCol: '.toggle-Start-col',
  disabledCols: [0, 4]
});

initCustomDataTable({
  table: '#departmentsTable',
  search: '#departmentsTableSearch',
  selectAll: '#selectAllDepartments',
  rowCheck: '.row-check-department',
  toggleCol: '.toggle-department-col',
  disabledCols: [0, 4]
});

initCustomDataTable({
  table: '#departmentsTableStart',
  search: '#departmentsTableSearchStart',
  selectAll: '#selectAllDepartmentsStart',
  rowCheck: '.row-check-department-start',
  toggleCol: '.toggle-department-Start-col',
  disabledCols: [0, 4]
});

initCustomDataTable({
  table: '#tagsTable',
  search: '#tagsTableSearch',
  toggleCol: '.toggle-tags-col',
  disabledCols: [2]
});

initCustomDataTable({
  table: '#locationTable',
  search: '#locationTableSearch',
  toggleCol: '.toggle-location-col',
  disabledCols: [0,4] 
});

initCustomDataTable({
  table: '#shiftsTable',
  search: '#shiftsTableSearch',
  toggleCol: '.toggle-shifts-col',
  disabledCols: [2]
});

initCustomDataTable({
  table: '#holidaysTable',
  search: '#holidaysTableSearch',
  toggleCol: '.toggle-holidays-col',
  disabledCols: [2] 
});

initCustomDataTable({
  table: '#exportsTable',
  search: '#exportsTableSearch',
  disabledCols: [5] 
});

$('button[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
  $.fn.dataTable.tables({ visible: true, api: true })
  .columns.adjust();
});

  initCustomDataTable({
    table: '#attendanceTable',
    selectAll: '#selectAllEarlyLate',
    bulkActions: '#earlyLateBulkActions',
    rowCheck: '.row-check-earlylate',
    toggleCol: '.toggle-earlylate-col',
    disabledCols: [0]
  });
  
  initCustomDataTable({
  table: '#webhooksTable',
  search: '#webhooksSearch',
  toggleCol: '.toggle-webhooksSearch-col',
  disabledCols: [4]
});

initCustomDataTable({
  table: '#tokensTable',
  search: '#tokensSearch',
  toggleCol: '.toggle-tokens-col',
  disabledCols: [2]
});

initCustomDataTable({
  table: '#devicesTable',
  search: '#devicesSearch',
  toggleCol: '.toggle-devices-col',
  disabledCols: [4]
});

initCustomDataTable({
  table: '#proofsTable',
  toggleCol: '.toggle-proof-col',
  disabledCols: [5]
});
initCustomDataTable({
  table: '#appTable',
  search: '#appSearch',
  toggleCol: '.toggle-app-col',
  disabledCols: [9]
});





  
  



  


document.addEventListener('DOMContentLoaded', () => {

  let currentDate = new Date();

  /* =========================
     Month Navigator
  ========================== */

  const monthDateEl = document.getElementById('monthDate');
  const prevMonth = document.getElementById('prevMonth');
  const nextMonth = document.getElementById('nextMonth');

  if (monthDateEl && prevMonth && nextMonth) {

    function updateMonthUI() {
      monthDateEl.textContent = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      });
    }

    prevMonth.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      updateMonthUI();
    });

    nextMonth.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      updateMonthUI();
    });

    updateMonthUI();
  }

  /* =========================
     Day Navigator
  ========================== */

  const dayDateEl = document.getElementById('dayDate');
  const prevDay = document.getElementById('prevDay');
  const nextDay = document.getElementById('nextDay');

  if (dayDateEl && prevDay && nextDay) {

    function updateDayUI() {
      dayDateEl.textContent = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }

    prevDay.addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() - 1);
      updateDayUI();
    });

    nextDay.addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() + 1);
      updateDayUI();
    });

    updateDayUI();
  }

});



document.addEventListener('DOMContentLoaded', () => {

  const employees = [
    { name: 'Mohammed Hatem', id: 0, dept: 'Business Development' },
    { name: 'Mohammed Hatem', id: 1, dept: 'Software Development Team' },
    { name: 'Mohammed Hatem', id: 2, dept: 'Techsup Holding' },
    { name: 'Mohammed Hatem', id: 3, dept: 'Techsup Holding' },
    { name: 'Mohammed Hatem', id: 4, dept: 'Software Development Team' }
  ];

  function createDateNavigator({ dateEl, prevBtn, nextBtn, onChange }) {
    let currentDate = new Date();

    function render() {
      dateEl.textContent = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      });
      onChange(currentDate);
    }

    prevBtn.onclick = () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      render();
    };

    nextBtn.onclick = () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      render();
    };

    render();
  }

  function buildAttendanceTable(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();

    const thead = document.getElementById('attendanceHeader');
    const tbody = document.getElementById('attendanceBody');

    thead.querySelectorAll('.day-col').forEach(th => th.remove());
    tbody.innerHTML = '';

    // header days
    for (let d = 1; d <= days; d++) {
      const day = new Date(year, month, d);
      const th = document.createElement('th');
      th.className = 'day-col day-header';
      th.innerHTML = `
        ${day.toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}<br>
        ${day.toLocaleDateString('en-US', { weekday: 'short' })}
      `;
      thead.appendChild(th);
    }

    // rows
    employees.forEach(emp => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td class="sticky-col col-emp">${emp.name}</td>
        <td class="sticky-col col-id">${emp.id}</td>
        <td class="sticky-col col-dept">${emp.dept}</td>
      `;

      for (let d = 1; d <= days; d++) {
        const statuses = ['A', 'W', 'RW', 'NY'];
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        tr.innerHTML += `
          <td>
            <span class="status status-${status}">${status}</span>
          </td>
        `;
      }

      tbody.appendChild(tr);
    });
  }

  createDateNavigator({
    dateEl: document.getElementById('monthDate'),
    prevBtn: document.getElementById('prevMonth'),
    nextBtn: document.getElementById('nextMonth'),
    onChange: buildAttendanceTable
  });

});



document.querySelectorAll('input[name="approvalChain"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove active class from all containers
        document.querySelectorAll('.option-container').forEach(container => {
            container.classList.remove('active-selection');
        });
        
        // Add active class to the parent container of the checked radio
        if (this.checked) {
            this.closest('.option-container').classList.add('active-selection');
        }
    });
});


document.addEventListener("change", function (e) {

    if (e.target.classList.contains("form-check-input") 
        && e.target.type === "checkbox") {

        const container = e.target.closest(".col-md-6");
        if (!container) return;

        const select = container.querySelector("select");
        if (!select) return;

        select.disabled = !e.target.checked;
    }

});


})(jQuery);


 