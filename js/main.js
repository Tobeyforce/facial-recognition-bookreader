/* Asides */
is_tut_open = true
is_cam_open = false

function apply_state() {
	let can_show_tut = spreadValid(req_spread+1) && spreadValid(req_spread-1)
	visibility($help, is_tut_open && can_show_tut)
	visibility($help_toggle, can_show_tut)
	
	visibility($cam, is_cam_open)
}
function tut_toggle() {
	is_tut_open = !is_tut_open
	is_cam_open = false
	apply_state()
}
function cam_toggle() {
	is_cam_open = !is_cam_open
	is_tut_open = false
	apply_state()
}
function close_window() {
	is_tut_open = is_cam_open = false
	apply_state()
}

/* Cam settings */
function cam_animate_blinkyness(side) {
	cam_blinkyness.style.transform = "scaleX("+(-side)+")"
}
function cam_apply() {
	jeeliz_cam_settings(
		document.getElementById("switch_cam").checked,
		document.getElementById("cam_offset").value/100 * -1 + .5,
		document.getElementById("cam_lmul")  .value/100 * 2,
		document.getElementById("cam_rmul")  .value/100 * 2,
	)
}


/* Book helper */
function nextSpread() {
	if ($.page_anim) { return }
	if (!spreadValid(req_spread+1)) { return }
	req_spread += 1

	apply_state()

	animSpreads()
}
function prevSpread() {
	if ($.page_anim) { return }
	if (!spreadValid(req_spread-1)) { return }
	req_spread -= 1

	apply_state()

	animSpreads()
}

function lastSpread() {
	while(spreadValid(req_spread+1)) { req_spread += 1; }
	apply_state()
	animSpreads()
}
function firstSpread() {
	while(spreadValid(req_spread-1)) { req_spread -= 1; }
	apply_state()
	animSpreads()
}

window.onload = ()=>{
	$help = document.getElementById("help")
	$help_toggle = document.getElementById("help_toggle")

	$cam = document.getElementById("cam")
	$cam_blinkyness = document.getElementById("cam_blinkyness")

	$pages = document.getElementById("book")

	forceSpread(0)

	let morphs_smoother = jeeliz_smoothed_morphs("debug_jeeliz")

	let edge_l = new EdgeTrigger(250, 0.1, 0.2)
	let edge_r = new EdgeTrigger(250, 0.1, 0.2)


	function rafcb() {
		// Jeeliz stuff
		let side = 0
		if (morphs_smoother.has_vals()) {
			let morphs = morphs_smoother.calc()

			side = morph_side(morphs)
			let left  = Math.max(0, side)
			let right = Math.max(0, -side)

			if (edge_l.process_sample(left)) {
				prevSpread()
			}
			if (edge_r.process_sample(right)) {
				nextSpread()
			}
		}

		// Cam settings
		if (is_cam_open) {
			cam_animate_blinkyness(side)
		}

		// Book layout
		let w = $pages.parentElement.clientWidth - 40
		let h = $pages.parentElement.clientHeight - 40

		let ratio = 4/3

		let book_w = Math.floor(Math.min(w, h*ratio))
		let book_h = Math.floor(Math.min(h, w/ratio))

		$pages.style.width  = Math.max(400, book_w)+"px"
		$pages.style.height = Math.max(300, book_h)+"px"
		$pages.style.fontSize = Math.max(8, book_w/(400/8))


		requestAnimationFrame(rafcb)
	}
	requestAnimationFrame(rafcb)
}

document.onkeydown = function(e) {
	if (e.which == 37) { prevSpread() }
	if (e.which == 39) { nextSpread() }
}