jQuery(document).ready(function(t) {
	function a() {
		if (
			"" != window.location.hash &&
			t(window.location.hash + ".kt-title-item").length
		) {
			var a = window.location.hash.substring(1),
				e = t("#" + a + " a").attr("data-tab");
			t("#" + a)
				.closest(".kt-tabs-title-list")
				.find(".kt-tab-title-active")
				.addClass("kt-tab-title-inactive")
				.removeClass("kt-tab-title-active"),
				t("#" + a)
					.closest(".kt-tabs-wrap")
					.removeClass(function(t, a) {
						return (a.match(/\bkt-active-tab-\S+/g) || []).join(" ");
					})
					.addClass("kt-active-tab-" + e),
				t("#" + a).addClass("kt-tab-title-active"),
				t("#" + a)
					.closest(".kt-tabs-wrap")
					.find(".kt-tabs-accordion-title.kt-tabs-accordion-title-" + a)
					.addClass("kt-tab-title-active")
					.removeClass("kt-tab-title-inactive");
		}
	}
	t(".kt-tabs-wrap").each(function(a) {
		var e = t(this)
				.find("> .kt-tabs-title-list .kt-tab-title-active a")
				.attr("data-tab"),
			i = t(this)
				.find("> .kt-tabs-title-list")
                .attr({ role: "tablist" });
                // console.log(e); debugger;
		t(this)
			.find("> .kt-tabs-content-wrap > .kt-tab-inner-content")
			.attr({ role: "tabpanel", "aria-hidden": "true" }),
			t(this)
				.find("> .kt-tabs-title-list a")
				.each(function(a) {
					var e = t(this).attr("data-tab"),
						i = t(this)
							.parent()
							.attr("id");
					t(this)
						.closest(".kt-tabs-wrap")
						.find(".kt-tabs-content-wrap > .kt-inner-tab-" + e)
						.attr("aria-labelledby", i);
				}),
			t(this)
				.find(".kt-tabs-content-wrap > .kt-inner-tab-" + e)
				.attr("aria-hidden", "false"),
			t(this)
				.find("> .kt-tabs-title-list li:not(.kt-tab-title-active) a")
				.each(function() {
					t(this)
						.attr({ role: "tab", "aria-selected": "false", tabindex: "-1" })
						.parent()
						.attr("role", "presentation");
				}),
			t(this)
				.find("> .kt-tabs-title-list li.kt-tab-title-active a")
				.attr({ role: "tab", "aria-selected": "true", tabindex: "0" })
				.parent()
				.attr("role", "presentation"),
			t(i).delegate("a", "keydown", function(a) {
				switch (a.which) {
					case 37:
					case 38:
						0 !=
						t(this)
							.parent()
							.prev().length
							? t(this)
									.parent()
									.prev()
									.find("> a")
									.click()
							: t(i)
									.find("li:last > a")
									.click();
						break;
					case 39:
					case 40:
						0 !=
						t(this)
							.parent()
							.next().length
							? t(this)
									.parent()
									.next()
									.find("> a")
									.click()
							: t(i)
									.find("li:first > a")
									.click();
				}
			});
	}),
		t(".kt-tabs-title-list li a").click(function(a) {
			a.preventDefault();
			var e = t(this).attr("data-tab");
			t(this)
				.closest(".kt-tabs-title-list")
				.find(".kt-tab-title-active")
				.addClass("kt-tab-title-inactive")
				.removeClass("kt-tab-title-active")
				.find("a.kt-tab-title")
				.attr({ tabindex: "-1", "aria-selected": "false" }),
				t(this)
					.closest(".kt-tabs-wrap")
					.removeClass(function(t, a) {
						return (a.match(/\bkt-active-tab-\S+/g) || []).join(" ");
					})
					.addClass("kt-active-tab-" + e),
				t(this)
					.parent("li")
					.addClass("kt-tab-title-active")
					.removeClass("kt-tab-title-inactive"),
				t(this)
					.attr({ tabindex: "0", "aria-selected": "true" })
					.focus(),
				t(this)
					.closest(".kt-tabs-wrap")
					.find(
						".kt-tabs-content-wrap > .kt-tab-inner-content:not(.kt-inner-tab-" +
							e +
							")"
					)
					.attr("aria-hidden", "true"),
				t(this)
					.closest(".kt-tabs-wrap")
					.find(".kt-tabs-content-wrap > .kt-inner-tab-" + e)
					.attr("aria-hidden", "false"),
				t(this)
					.closest(".kt-tabs-wrap")
					.find(
						".kt-tabs-content-wrap > .kt-tabs-accordion-title:not(.kt-tabs-accordion-title-" +
							e +
							")"
					)
					.addClass("kt-tab-title-inactive")
					.removeClass("kt-tab-title-active")
					.attr({ tabindex: "-1", "aria-selected": "false" }),
				t(this)
					.closest(".kt-tabs-wrap")
					.find(
						".kt-tabs-content-wrap > .kt-tabs-accordion-title.kt-tabs-accordion-title-" +
							e
					)
					.addClass("kt-tab-title-active")
					.removeClass("kt-tab-title-inactive")
					.attr({ tabindex: "0", "aria-selected": "true" });
			var i = window.document.createEvent("UIEvents");
			i.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(i);
			var s = window.document.createEvent("UIEvents");
			s.initUIEvent("kadence-tabs-open", !0, !1, window, 0),
				window.dispatchEvent(s);
		}),
		t(".kt-create-accordion")
			.find("> .kt-tabs-title-list .kt-title-item")
			.each(function() {
				var a,
					e,
					i,
					s = t(this)
						.find("a")
						.attr("data-tab");
				(a = t(this).hasClass("kt-tab-title-active")
					? "kt-tab-title-active"
					: "kt-tab-title-inactive"),
					(e = t(this).hasClass("kt-tabs-svg-show-only")
						? "kt-tabs-svg-show-only"
						: "kt-tabs-svg-show-always"),
					(i = t(this).hasClass("kt-tabs-icon-side-top")
						? "kt-tabs-icon-side-top"
						: ""),
					t(this)
						.closest(".kt-tabs-wrap")
						.find("> .kt-tabs-content-wrap > .kt-inner-tab-" + s)
						.before(
							'<div class="kt-tabs-accordion-title kt-tabs-accordion-title-' +
								s +
								" " +
								a +
								" " +
								e +
								" " +
								i +
								'">' +
								t(this).html() +
								"</div>"
						),
					t(this)
						.closest(".kt-tabs-wrap")
						.find(
							"> .kt-tabs-content-wrap > .kt-tabs-accordion-title-" + s + "  a"
						)
						.removeAttr("role");
			}),
		t(".kt-tabs-accordion-title a").click(function(a) {
			a.preventDefault();
			var e = t(this).attr("data-tab");
			t(this)
				.parent(".kt-tabs-accordion-title")
				.hasClass("kt-tab-title-active")
				? (t(this)
						.closest(".kt-tabs-wrap")
						.removeClass("kt-active-tab-" + e),
				  t(this)
						.parent(".kt-tabs-accordion-title")
						.removeClass("kt-tab-title-active")
						.addClass("kt-tab-title-inactive"))
				: (t(this)
						.closest(".kt-tabs-wrap")
						.addClass("kt-active-tab-" + e),
				  t(this)
						.parent(".kt-tabs-accordion-title")
						.addClass("kt-tab-title-active")
						.removeClass("kt-tab-title-inactive"));
			var i = window.document.createEvent("UIEvents");
			i.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(i);
			var s = window.document.createEvent("UIEvents");
			s.initUIEvent("kadence-tabs-open", !0, !1, window, 0),
				window.dispatchEvent(s);
		}),
		window.addEventListener("hashchange", a, !1),
		window.addEventListener("load", a, !1);
});
