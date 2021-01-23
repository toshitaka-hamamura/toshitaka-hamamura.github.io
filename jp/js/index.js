$(document).on("click", "#navi_company",
	function () {
		$(".navi_t_c").slideUp();
		$(".navi_t_cc").slideToggle();
	}
);

$(document).on("click", "#navi_contact",
	function () {
		$(".navi_t_cc").slideUp();
		$(".navi_t_c").slideToggle();
	}
);

$(document).on("click", "#sp_navi_btn",
	function () {
		$("#companies").slideUp(0);
		$("#contacts").slideUp(0);
		$("#navi_list_sp").slideToggle();

	}
);

$(document).on("click", ".toggle_com",
	function () {
		/*矢印の向きを変更*/
		$(this).toggleClass('open', 200);
		$("#companies").slideToggle();
	}
);

$(document).on("click", ".toggle_con",
	function () {
		/*矢印の向きを変更*/
		if ($(this).hasClass('open')) {
			$(this).removeClass('open', 200);
		} else {
			$(this).addClass('open', 200);
		}
		$("#contacts").slideToggle();
	}
);

$(document).on("click", ".f_toggle_com",
	function () {
		/*矢印の向きを変更*/
		if ($(this).hasClass('open')) {
			$(this).removeClass('open', 200);
		} else {
			$(this).addClass('open', 200);
		}
		$("#ft_companies").slideToggle();
	}
);

$(document).on("click", ".f_toggle_con",
	function () {
		/*矢印の向きを変更*/
		$(this).toggleClass('open', 200);
		$("#ft_contacts").slideToggle();
	}
);

$(function () {
	$(window).on('load scroll', function () {
		$('.animation').each(function () {
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height) {
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});
