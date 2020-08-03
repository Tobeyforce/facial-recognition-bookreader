/*
	Take an array of floats (e.g. morph data) and smooth it over a timeframe
*/
class Smoother {
	samples = []

	constructor(ttl) { this.ttl = ttl }

	add_sample(floats, blend = 1) {
		this.samples.push({
			time: Date.now(),
			blend,
			floats: floats.map(morph=>blend*morph) // Premultiply the floats
		})
	}

	clean() {
		this.samples = this.samples
			.filter(x => (Date.now()-x.time) < this.ttl)
	}

	has_vals() {
		this.clean()
		return this.samples.length > 0
	}

	calc() {
		this.clean()

		let divisor = this.samples
			.map(sample => sample.blend)
			.reduce((acc, blend) => acc+blend)

		return this.samples
			.map(sample => sample.floats)
			.reduce((acc, floats) =>
				/*
				acc.zip(floats)
					.map([acc, float] => acc + float)
				*/
				floats.map((float, i) => acc[i] + float)
			)
			.map(float => float/divisor)
	}
}

/*
	Edge trigger
		Trigger when val goes from x to y in a set time period
		where x >= min and y >= x+diff
*/
class EdgeTrigger {
	samples = []
	triggered = false

	constructor(time, min, diff) {
		this.ttl = time
		this.min = min
		this.diff = diff
	}

	process_sample(val) {
		if (val < this.min) { return false }


		// Make sure all samples are relevant
		this.samples = this.samples
			.filter(x => (Date.now()-x.time) < this.ttl)

		// Add our sample		
		this.samples.push({ time: Date.now(), val })

		// Get the minimum and maximum
		let min = 1
		for (let sample of this.samples) {
			if (sample.val > val) { return }
			if (sample.val < min) { min = sample.val }
		}

		if (val-min > this.diff) {
			// Reset
			this.samples = []
			return true
		} else {
			return false
		}
	}
}

/*
	Morph shit
*/
MORPH_SMILE_RIGHT        = 0
MORPH_SMILE_LEFT         = 1
MORPH_EYEBROW_RIGHT_DOWN = 2
MORPH_EYEBROW_LEFT_DOWN  = 3
MORPH_EYEBROW_LEFT_UP    = 4
MORPH_EYEBROW_RIGHT_UP   = 5
MORPH_MOUTH_OPEN         = 6
MORPH_MOUTH_ROUND        = 7
MORPH_EYE_RIGHT_CLOSE    = 8
MORPH_EYE_LEFT_CLOSE     = 9
MORPH_MOUTH_NASTY        = 10

function jeeliz_smoothed_morphs(canvas_id) {
	let smoother = new Smoother(250)

	JEEFACETRANSFERAPI.init({
		canvasId: canvas_id,
		NNC: JEEFACETRANSFERNNC,
		callbackReady: (errCode) => {
			if (errCode){
				console.log("rip JEEFACETRANSFERAPI")
				console.log("errCode: ", errCode)
			} else {
				JEEFACETRANSFERAPI.set_morphUpdateCallback(quality => {
					/*debug_floats_on_canvas("debug_raw", JEEFACETRANSFERAPI.get_morphTargetInfluences())*/
					smoother.add_sample(
						JEEFACETRANSFERAPI.get_morphTargetInfluences(),
						quality
					)
				})
			}
		}
	})

	return smoother
}

let prefs = {
	enabled: true,
	offset: 0,
	lmul: 1,
	rmul: 1
}

function jeeliz_cam_settings(enabled, offset, lmul, rmul) {
	prefs = { enabled, offset, lmul, rmul }
	console.log(prefs)
	JEEFACETRANSFERAPI.switch_sleep(!enabled)
}

document.onblur  = () => JEEFACETRANSFERAPI.switch_sleep(true)
document.onfocus = () => JEEFACETRANSFERAPI.switch_sleep(!prefs.enabled)

function morph_side(morphs) { /* -1 to 1 */
	let left  = (morphs[MORPH_SMILE_LEFT ] + morphs[MORPH_EYEBROW_LEFT_DOWN ])/2
	let right = (morphs[MORPH_SMILE_RIGHT] + morphs[MORPH_EYEBROW_RIGHT_DOWN])/2
	//+ morphs[MORPH_EYE_LEFT_CLOSE]    - morphs[MORPH_EYE_RIGHT_CLOSE]
	return prefs.lmul*left - prefs.rmul*right + prefs.offset
}