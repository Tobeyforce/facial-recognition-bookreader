function visibility(el, visible) {
	el.style.display = visible ? "block" : "none"
}

let pages = [
	{type: "tutorial"},
	{type: "front", author: "T.S. Arthur", title: "An Angel in Disguise"},
	{type: "text", num:1, content:
		"<p>Idleness, vice, and intemperance had done their miserable work, and the dead mother lay cold and still amid her wretched children. She had fallen upon the threshold of her own door in a drunken fit, and died in the presence of her frightened little ones.</p>"
		+ "<p>Death touches the spring of our common humanity. This woman had been despised, scoffed at, and angrily denounced by nearly every man, woman, and child in the village; but now, as the fact of her death was passed from lip to lip, in subdued tones, pity took the place of anger, and sorrow of denunciation. Neighbors went hastily to the old tumble-down hut, in which she had secured little more than a place of shelter from summer heats and winter cold: some with grave-clothes for a decent interment of the body; and some with food for the half-starving children, three in number. Of these, John, the oldest, a boy of twelve, was a stout lad, able to earn his living with any farmer. Kate, between ten and eleven, was bright, active girl, out of whom something clever might be made, if in good hands; but poor little Maggie, the youngest, was hopelessly diseased. Two years before a fall from a window had injured her spine, and she had not been able to leave her bed since, except when lifted in the arms of her mother.</p>"
	},
	{type: "text", num:2, content:
		"<p><span class='quoted'>What is to be done with the children?</span> That was the chief question now. The dead mother would go underground, and be forever beyond all care or concern of the villagers. But the children must not be left to starve. After considering the matter, and talking it over with his wife, farmer Jones said that he would take John, and do well by him, now that his mother was out of the way; and Mrs. Ellis, who had been looking out for a bound girl, concluded that it would be charitable in her to make choice of Katy, even though she was too young to be of much use for several years.</p>"
		+ "<p><span class='quoted'>I could do much better, I know,</span> said Mrs. Ellis; <span class='quoted'>but as no one seems inclined to take her, I must act from a sense of duty expect to have trouble with the child; for she's an undisciplined thing--used to having her own way.</span></p>"
		+ "<p>But no one said <span class='quoted'>I'll take Maggie.</span> Pitying glances were cast on her wan and wasted form and thoughts were troubled on her account. Mothers brought cast-off garments and, removing her soiled and ragged clothes, dressed her in clean attire. The sad eyes and patient face of the little one touched many hearts, and even knocked at them for entrance. But none opened to take her in. Who</p>"
	},
	{type: "text", num:3, content:
		"<p><span class='quoted'>Take her to the poorhouse,</span> said a rough man, of whom the question <span class='quoted'>What's to be done with Maggie?</span> was asked. <span class='quoted'>Nobody's going to be bothered with her.</span></p>"
		+ "<p><span class='quoted'>The poorhouse is a sad place for a sick and helpless child,</span> answered one.</p>"
		+ "<p><span class='quoted'>For your child or mine,</span> said the other, lightly speaking; <span class='quoted'>but for tis brat it will prove a blessed change, she will be kept clean, have healthy food, and be doctored, which is more than can be said of her past condition.</span></p>"
		+ "<p>There was reason in that, but still it didn't satisfy. The day following the day of death was made the day of burial. A few neighbors were at the miserable hovel, but none followed dead cart as it bore the unhonored remains to its pauper grave. Farmer Jones, after the coffin was taken out, placed John in his wagon and drove away, satisfied that he had done his part. Mrs. Ellis spoke to Kate with a hurried air, <span class='quoted'>Bid your sister good by,</span> and drew the tearful children apart ere scarcely their lips had touched in a sobbing farewell. Hastily others went out, some glancing at Maggie, and some resolutely refraining from a look, until all had gone. She was alone! Just beyond the threshold Joe Thompson, the wheelwright, paused, and said to the blacksmith's wife, who was hastening off with the rest,--</p>"
	},
	{type: "text", num:4, content:
		"<p>There was reason in that, but still it didn't satisfy. The day following the day of death was made the day of burial. A few neighbors were at the miserable hovel, but none followed dead cart as it bore the unhonored remains to its pauper grave. Farmer Jones, after the coffin was taken out, placed John in his wagon and drove away, satisfied that he had done his part. Mrs. Ellis spoke to Kate with a hurried air, <span class='quoted'>Bid your sister good by,</span> and drew the tearful children apart ere scarcely their lips had touched in a sobbing farewell. Hastily others went out, some glancing at Maggie, and some resolutely refraining from a look, until all had gone. She was alone! Just beyond the threshold Joe Thompson, the wheelwright, paused, and said to the blacksmith's wife, who was hastening off with the rest,--</p>"
		+ "<p><span class='quoted'>It's a cruel thing to leave her so.</span></p>"
		+ "<p><span class='quoted'>Then take her to the poorhouse: she'll have to go there,</span> answered the blacksmith's wife, springing away, and leaving Joe behind.</p>"
		+ "<p>For a little while the man stood with a puzzled air; then he turned back, and went into the hovel again. Maggie with painful effort, had raised herself to an upright position and was sitting on the bed, straining her eyes upon the door out of which all had just departed, A vague terror had come into her thin white face.</p>"
	},
	{type: "text", num:5, content:
		"<p><span class='quoted'>O, Mr. Thompson!</span> she cried out, catching her suspended breath, <span class='quoted'>don't leave me here all alone!</span></p>"
		+ "<p>Though rough in exterior, Joe Thompson, the wheelwright, had a heart, and it was very tender in some places. He liked children, and was pleased to have them come to his shop, where sleds and wagons were made or mended for the village lads without a draft on their hoarded sixpences.</p>"
		+ "<p><span class='quoted'>No, dear,</span> he answered, in a kind voice, going to the bed, and stooping down over the child, <span class='quoted'>You sha'n't be left here alone.</span> Then he wrapped her with the gentleness almost of a woman, in the clean bedclothes which some neighbor had brought; and, lifting her in his strong arms, bore her out into the air and across the field that lay between the hovel and his home.</p>"
		+ "<p>Now, Joe Thompson's wife, who happened to be childless, was not a woman of saintly temper, nor much given to self-denial for others' good, and Joe had well-grounded doubts touching the manner of greeting he should receive on his arrival. Mrs. Thompson saw him approaching from the window, and with ruffling feathers met him a few paces from the door, as he opened the garden gate, and came in. He bore a precious burden, and he felt it to be so. As his arms held the sick child to his breast, a sphere of tenderness went out from her, and penetrated his feelings. A bond had already corded itself around them both, and love was springing into life.</p>"
	},
	{type: "text", num:6, content:
		"<p><span class='quoted'>What have you there?</span> sharply questioned Mrs. Thompson.</p>"
		+ "<p>Joe, felt the child start and shrink against him. He did not reply, except by a look that was pleading and cautionary, that said, <span class='quoted'>Wait a moment for explanations, and be gentle;</span> and, passing in, carried Maggie to the small chamber on the first floor, and laid her on a bed. Then, stepping back, he shut the door, and stood face to face with his vinegar-tempered wife in the passage-way outside.</p>"
		+ "<p><span class='quoted'>You haven't brought home that sick brat!</span> Anger and astonishment were in the tones of Mrs. Joe Thompson; her face was in a flame.</p>"
		+ "<p><span class='quoted'>I think women's hearts are sometimes very hard,</span> said Joe. Usually Joe Thompson got out of his wife's way, or kept rigidly silent and non-combative when she fired up on any subject; it was with some surprise, therefore, that she now encountered a firmly-set countenance and a resolute pair of eyes.</p>"
		+ "<p><span class='quoted'>Women's hearts are not half so hard as men's!</span></p>"
		+ "<p>Joe saw, by a quick intuition, that his resolute bearing had impressed his wife and he answered quickly, and with real indignation, <span class='quoted'>Be that as it may, every woman at the funeral turned her eyes steadily from the sick child's face, and when the cart went off with her dead mother, hurried away, and left her alone in that old hut, with the sun not an hour in the sky.</span></p>"
	},
	{type: "text", num:7, content:
		"<p><span class='quoted'>Where were John and Kate?</span> asked Mrs. Thompson.</p>"
		+ "<p><span class='quoted'>Farmer Jones tossed John into his wagon, and drove off. Katie went home with Mrs. Ellis; but nobody wanted the poor sick one. 'Send her to the poorhouse,' was the cry.</span></p>"
		+ "<p><span class='quoted'>Why didn't you let her go, then. What did you bring her here for?</span></p>"
		+ "<p><span class='quoted'>She can't walk to the poorhouse,</span> said Joe; <span class='quoted'>somebody's arms must carry her, and mine are strong enough for that task.</span></p>"
		+ "<p><span class='quoted'>Then why didn't you keep on? Why did you stop here?</span> demanded the wife.</p>"
		+ "<p><span class='quoted'>Because I'm not apt to go on fools' errands. The Guardians must first be seen, and a permit obtained.</span></p>"
		+ "<p>There was no gainsaying this.</p>"
		+ "<p><span class='quoted'>When will you see the Guardians?</span> was asked, with irrepressible impatience.</p>"
		+ "<p><span class='quoted'>To-morrow.</span></p>"
		+ "<p><span class='quoted'>Why put it off till to-morrow? Go at once for the permit, and get the whole thing off of your hands to-night.</span></p>"
	},
	{type: "text", num:8, content:
		"<p><span class='quoted'>Jane,</span> said the wheelwright, with an impressiveness of tone that greatly subdued his wife, <span class='quoted'>I read in the Bible sometimes, and find much said about little children. How the Savior rebuked the disciples who would not receive them; how he took them up in his arms, and blessed them; and how he said that 'whosoever gave them even a cup of cold water should not go unrewarded.' Now, it is a small thing for us to keep this poor motherless little one for a single night; to be kind to her for a single night; to make her life comfortable for a single night.</span></p>"
		+ "<p>The voice of the strong, rough man shook, and he turned his head away, so that the moisture in his eyes might not be seen. Mrs. Thompson did not answer, but a soft feeling crept into her heart.</p>"
		+ "<p><span class='quoted'>Look at her kindly, Jane; speak to her kindly,</span> said Joe. <span class='quoted'>Think of her dead mother, and the loneliness, the pain, the sorrow that must be on all her coming life.</span> The softness of his heart gave unwonted eloquence to his lips.</p>"
		+ "<p>Mrs. Thompson did not reply, but presently turned towards the little chamber where her husband had deposited Maggie; and, pushing open the door, went quietly in. Joe did not follow; he saw that, her state had changed, and felt that it would be best to leave her alone with the child. So he went to his shop, which stood near the house, and worked until dusky evening released him from labor. A light shining through the little chamber windows was the first object that attracted Joe's attention on turning towards the house: it was a good omen. The path led him by this windows and, when opposite, he could not help pausing to look in. It was now dark enough outside to screen him from observation. Maggie lay, a little raised on the pillow with the lamp shining full upon her face. Mrs. Thompson was sitting by the bed, talking to the child; but her back was towards the window, so that her countenance was not seen. From Maggie's face, therefore, Joe must read the character of their intercourse. He saw that her eyes were intently fixed upon his wife; that now and then a few words came, as if in answers from her lips; that her expression was sad and tender; but he saw nothing of bitterness or pain. A deep-drawn breath was followed by one of relief, as a weight lifted itself from his heart.</p>"
	},
	{type: "text", num:9, content:
		"<p>On entering, Joe did not go immediately to the little chamber. His heavy tread about the kitchen brought his wife somewhat hurriedly from the room where she had been with Maggie. Joe thought it best not to refer to the child, nor to manifest any concern in regard to her.</p>"
		+ "<p><span class='quoted'>How soon will supper be ready?</span> he asked.</p>"
		+ "<p><span class='quoted'>Right soon,</span> answered Mrs. Thompson, beginning to bustle about. There was no asperity in her voice.</p>"
		+ "<p>After washing from his hands and face the dust and soil of work, Joe left the kitchen, and went to the little bedroom. A pair of large bright eyes looked up at him from the snowy bed; looked at him tenderly, gratefully, pleadingly. How his heart swelled in his bosom! With what a quicker motion came the heart-beats! Joe sat down, and now, for the first time, examining the thin frame carefully under the lamp light, saw that it was an attractive face, and full of a childish sweetness which suffering had not been able to obliterate.</p>"
		+ "<p><span class='quoted'>Your name is Maggie?</span> he said, as he sat down and took her soft little hand in his.</p>"
	},
	{type: "text", num:10, content:
		"<p><span class='quoted'>Yes, sir.</span> Her voice struck a chord that quivered in a low strain of music.</p>"
		+ "<p><span class='quoted'>Have you been sick long?</span></p>"
		+ "<p><span class='quoted'>Yes, sir.</span> What a sweet patience was in her tone!</p>"
		+ "<p><span class='quoted'>Has the doctor been to see you?</span></p>"
		+ "<p><span class='quoted'>He used to come.</span></p>"
		+ "<p><span class='quoted'>But not lately?</span></p>"
		+ "<p><span class='quoted'>No, sir.</span></p>"
		+ "<p><span class='quoted'>Have you any pain?</span></p>"
		+ "<p><span class='quoted'>Sometimes, but not now.</span></p>"
		+ "<p><span class='quoted'>When had you pain?</span></p>"
		+ "<p><span class='quoted'>This morning my side ached, and my back hurt when you carried me.</span></p>"
		+ "<p><span class='quoted'>It hurts you to be lifted or moved about?</span></p>"
		+ "<p><span class='quoted'>Yes, sir.</span></p>"
		+ "<p><span class='quoted'>Your side doesn't ache now?</span></p>"
		+ "<p><span class='quoted'>No, sir.</span></p>"
	},
	{type: "text", num:11, content:
		"<p><span class='quoted'>Does it ache a great deal?</span></p>"
		+ "<p><span class='quoted'>Yes, sir; but it hasn't ached any since I've been on this soft bed.</span></p>"
		+ "<p><span class='quoted'>The soft bed feels good.</span></p>"
		+ "<p><span class='quoted'>O, yes, sir--so good!</span> What a satisfaction, mingled with gratitude, was in her voice!</p>"
		+ "<p><span class='quoted'>Supper is ready,</span> said Mrs. Thompson, looking into the room a little while afterwards.</p>"
		+ "<p>Joe glanced from his wife's face to that of Maggie; she understood him, and answered,--</p>"
		+ "<p><span class='quoted'>She can wait until we are done; then I will bring her somethings to eat.</span> There was an effort at indifference on the part of Mrs. Thompson, but her husband had seen her through the window, and understood that the coldness was assumed. Joe waited, after sitting down to the table, for his wife to introduce the subject uppermost in both of their thoughts; but she kept silent on that theme, for many minutes, and he maintained a like reserve. At last she said, abruptly,--</p>"
		+ "<p><span class='quoted'>What are you going to do with that child?</span></p>"
	},
	{type: "text", num:12, content:
		"<p><span class='quoted'>I thought you understood me that she was to go to the poorhouse,</span> replied Joe, as if surprised at her question.</p>"
		+ "<p>Mrs. Thompson looked rather strangely at her husband for sonic moments, and then dropped her eyes. The subject was not again referred to during the meal. At its close, Mrs. Thompson toasted a slice of bread, and softened, it with milk and butter; adding to this a cup of tea, she took them into Maggie, and held the small waiter, on which she had placed them, while the hungry child ate with every sign of pleasure.</p>"
		+ "<p><span class='quoted'>Is it good?</span> asked Mrs. Thompson, seeing with what a keen relish the food was taken.</p>"
		+ "<p>The child paused with the cup in her hand, and answered with a look of gratitude that awoke to new life old human feelings which had been slumbering in her heart for half a score of years.</p>"
		+ "<p><span class='quoted'>We'll keep her a day or two longer; she is so weak and helpless,</span> said Mrs. Joe Thompson, in answer to her husband's remark, at breakfast-time on the next morning, that he must step down and see the Guardians of the Poor about Maggie.</p>"
	},
	{type: "text", num:13, content:
		"<p><span class='quoted'>She'll be so much in your way,</span> said Joe.</p>"
		+ "<p><span class='quoted'>I sha'n't mind that for a day or two. Poor thing!</span></p>"
		+ "<p>Joe did not see the Guardians of the Poor on that day, on the next, nor on the day following. In fact, he never saw them at all on Maggie's account, for in less than a week Mrs. Joe Thompson would as soon leave thought of taking up her own abode in the almshouse as sending Maggie there.</p>"
		+ "<p>What light and blessing did that sick and helpless child bring to the home of Joe Thompson, the poor wheelwright! It had been dark, and cold, and miserable there for a long time just because his wife had nothing to love and care for out of herself, and so became sore, irritable, ill-tempered, and self-afflicting in the desolation of her woman's nature. Now the sweetness of that sick child, looking ever to her in love, patience, and gratitude, was as honey to her soul, and she carried her in her heart as well as in her arms, a precious burden. As for Joe Thompson, there was not a man in all the neighborhood who drank daily of a more precious wine of life than he. An angel had come into his house, disguised as a sick, helpless, and miserable child, and filled all its dreary chambers with the sunshine of love.</p>"
	},
	{type: "end"}
]

function spreadPages(spread) {
	let l = spread*2
	if (l < 0 || l >= pages.length) { l = null }
	let r = spread*2+1
	if (r < 0 || r >= pages.length) { r = null }
	return [l,r]
}
function spreadValid(spread) {
	return spread*2+1 >= 0 && spread*2 < pages.length
}

let $ = { pages: 0, page_l: 0, page_r: 0, page_anim: null }
let cur_spread, req_spread

function createPage(idx, turned) {
	if (idx === null) { return null }

	let page = pages[idx]
	let type = page.type

	// Create the element
	let el = document.createElement("div")

	// Classes
	el.classList.add("page")
	el.classList.add("page-"+page.type)
	el.classList.add(idx%2 == 0 ? "l" : "r")
	if (turned) { el.classList.add("turned") }

	// Instantiate template
	let tmpl = document.getElementById("tmpl-page-"+page.type)
	for (let node of tmpl.content.childNodes) {
		el.appendChild(node.cloneNode(true))
	}

	// Fill content
	let replacer = (match, field) => page[field]
	el.innerHTML = el.innerHTML.replace(/\${(\w+)}/gi, replacer)

	return $pages.appendChild(el)
}

function forceSpread(spread) {
	if ($.page_l) { $.page_l.remove() }
	if ($.page_r) { $.page_r.remove() }

	let [l,r] = spreadPages(cur_spread = req_spread = spread)
	if (l !== null) { $.page_l = createPage(l) }
	if (r !== null) { $.page_r = createPage(r) }
}

function animSpreads() {
	if ($.page_anim) { return }
	if (req_spread == cur_spread) { return }


	let dir = req_spread > cur_spread ? 1 : 0

	let new_spread = cur_spread + dir*2-1;

	let page_lr = ["page_l", "page_r"]
	let new_page_lr = spreadPages(new_spread)


	$.page_anim = $[page_lr[dir]]
	$[page_lr[dir]] = createPage(new_page_lr[dir])

	$.page_anim.classList.add("turned")
	$.page_anim.ontransitionend = ()=>{
		$.page_anim.remove()

		$.page_anim = createPage(new_page_lr[1-dir], true)

		setTimeout(function(){
			$.page_anim.classList.remove("turned")
			$.page_anim.ontransitionend = ()=>{
				if ($[page_lr[1-dir]]) { $[page_lr[1-dir]].remove() }

				$[page_lr[1-dir]] = $.page_anim
				$.page_anim = null

				cur_spread = new_spread
				animSpreads()
			}
		},0)

	}
}