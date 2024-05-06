export type LanguageType = 'tr' | 'en' | 'fr';

//#region Icons
export type Icons = '0' | '1' | '2' | '3' | '4' | '42-group' | '5' | '500px' | '6' | '7' | '8' | '9' | 'a' | 'accessible-icon' | 'accusoft' | 'address-book' | 'address-card' | 'adn' | 'adversal' | 'affiliatetheme' | 'airbnb' | 'algolia' | 'align-center' | 'align-justify' | 'align-left' | 'align-right' | 'alipay' | 'amazon-pay' | 'amazon' | 'amilia' | 'anchor-circle-check' | 'anchor-circle-exclamation' | 'anchor-circle-xmark' | 'anchor-lock' | 'anchor' | 'android' | 'angellist' | 'angle-down' | 'angle-left' | 'angle-right' | 'angle-up' | 'angles-down' | 'angles-left' | 'angles-right' | 'angles-up' | 'angrycreative' | 'angular' | 'ankh' | 'app-store-ios' | 'app-store' | 'apper' | 'apple-pay' | 'apple-whole' | 'apple' | 'archway' | 'arrow-down-1-9' | 'arrow-down-9-1' | 'arrow-down-a-z' | 'arrow-down-long' | 'arrow-down-short-wide' | 'arrow-down-up-across-line' | 'arrow-down-up-lock' | 'arrow-down-wide-short' | 'arrow-down-z-a' | 'arrow-down' | 'arrow-left-long' | 'arrow-left' | 'arrow-pointer' | 'arrow-right-arrow-left' | 'arrow-right-from-bracket' | 'arrow-right-long' | 'arrow-right-to-bracket' | 'arrow-right-to-city' | 'arrow-right' | 'arrow-rotate-left' | 'arrow-rotate-right' | 'arrow-trend-down' | 'arrow-trend-up' | 'arrow-turn-down' | 'arrow-turn-up' | 'arrow-up-1-9' | 'arrow-up-9-1' | 'arrow-up-a-z' | 'arrow-up-from-bracket' | 'arrow-up-from-ground-water' | 'arrow-up-from-water-pump' | 'arrow-up-long' | 'arrow-up-right-dots' | 'arrow-up-right-from-square' | 'arrow-up-short-wide' | 'arrow-up-wide-short' | 'arrow-up-z-a' | 'arrow-up' | 'arrows-down-to-line' | 'arrows-down-to-people' | 'arrows-left-right-to-line' | 'arrows-left-right' | 'arrows-rotate' | 'arrows-spin' | 'arrows-split-up-and-left' | 'arrows-to-circle' | 'arrows-to-dot' | 'arrows-to-eye' | 'arrows-turn-right' | 'arrows-turn-to-dots' | 'arrows-up-down-left-right' | 'arrows-up-down' | 'arrows-up-to-line' | 'artstation' | 'asterisk' | 'asymmetrik' | 'at' | 'atlassian' | 'atom' | 'audible' | 'audio-description' | 'austral-sign' | 'autoprefixer' | 'avianex' | 'aviato' | 'award' | 'aws' | 'b' | 'baby-carriage' | 'baby' | 'backward-fast' | 'backward-step' | 'backward' | 'bacon' | 'bacteria' | 'bacterium' | 'bag-shopping' | 'bahai' | 'baht-sign' | 'ban-smoking' | 'ban' | 'bandage' | 'bandcamp' | 'bangladeshi-taka-sign' | 'barcode' | 'bars-progress' | 'bars-staggered' | 'bars' | 'baseball-bat-ball' | 'baseball' | 'basket-shopping' | 'basketball' | 'bath' | 'battery-empty' | 'battery-full' | 'battery-half' | 'battery-quarter' | 'battery-three-quarters' | 'battle-net' | 'bed-pulse' | 'bed' | 'beer-mug-empty' | 'behance' | 'bell-concierge' | 'bell-slash' | 'bell' | 'bezier-curve' | 'bicycle' | 'bilibili' | 'bimobject' | 'binoculars' | 'biohazard' | 'bitbucket' | 'bitcoin-sign' | 'bitcoin' | 'bity' | 'black-tie' | 'blackberry' | 'blender-phone' | 'blender' | 'blog' | 'blogger-b' | 'blogger' | 'bluetooth-b' | 'bluetooth' | 'bold' | 'bolt-lightning' | 'bolt' | 'bomb' | 'bone' | 'bong' | 'book-atlas' | 'book-bible' | 'book-bookmark' | 'book-journal-whills' | 'book-medical' | 'book-open-reader' | 'book-open' | 'book-quran' | 'book-skull' | 'book-tanakh' | 'book' | 'bookmark' | 'bootstrap' | 'border-all' | 'border-none' | 'border-top-left' | 'bore-hole' | 'bots' | 'bottle-droplet' | 'bottle-water' | 'bowl-food' | 'bowl-rice' | 'bowling-ball' | 'box-archive' | 'box-open' | 'box-tissue' | 'box' | 'boxes-packing' | 'boxes-stacked' | 'braille' | 'brain' | 'brave-reverse' | 'brave' | 'brazilian-real-sign' | 'bread-slice' | 'bridge-circle-check' | 'bridge-circle-exclamation' | 'bridge-circle-xmark' | 'bridge-lock' | 'bridge-water' | 'bridge' | 'briefcase-medical' | 'briefcase' | 'broom-ball' | 'broom' | 'brush' | 'btc' | 'bucket' | 'buffer' | 'bug-slash' | 'bug' | 'bugs' | 'building-circle-arrow-right' | 'building-circle-check' | 'building-circle-exclamation' | 'building-circle-xmark' | 'building-columns' | 'building-flag' | 'building-lock' | 'building-ngo' | 'building-shield' | 'building-un' | 'building-user' | 'building-wheat' | 'building' | 'bullhorn' | 'bullseye' | 'burger' | 'buromobelexperte' | 'burst' | 'bus-simple' | 'bus' | 'business-time' | 'buy-n-large' | 'buysellads' | 'c' | 'cable-car' | 'cake-candles' | 'calculator' | 'calendar-check' | 'calendar-day' | 'calendar-days' | 'calendar-minus' | 'calendar-plus' | 'calendar-week' | 'calendar-xmark' | 'calendar' | 'camera-retro' | 'camera-rotate' | 'camera' | 'campground' | 'canadian-maple-leaf' | 'candy-cane' | 'cannabis' | 'capsules' | 'car-battery' | 'car-burst' | 'car-on' | 'car-rear' | 'car-side' | 'car-tunnel' | 'car' | 'caravan' | 'caret-down' | 'caret-left' | 'caret-right' | 'caret-up' | 'carrot' | 'cart-arrow-down' | 'cart-flatbed-suitcase' | 'cart-flatbed' | 'cart-plus' | 'cart-shopping' | 'cash-register' | 'cat' | 'cc-amazon-pay' | 'cc-amex' | 'cc-apple-pay' | 'cc-diners-club' | 'cc-discover' | 'cc-jcb' | 'cc-mastercard' | 'cc-paypal' | 'cc-stripe' | 'cc-visa' | 'cedi-sign' | 'cent-sign' | 'centercode' | 'centos' | 'certificate' | 'chair' | 'chalkboard-user' | 'chalkboard' | 'champagne-glasses' | 'charging-station' | 'chart-area' | 'chart-bar' | 'chart-column' | 'chart-gantt' | 'chart-line' | 'chart-pie' | 'chart-simple' | 'check-double' | 'check-to-slot' | 'check' | 'cheese' | 'chess-bishop' | 'chess-board' | 'chess-king' | 'chess-knight' | 'chess-pawn' | 'chess-queen' | 'chess-rook' | 'chess' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'child-combatant' | 'child-dress' | 'child-reaching' | 'child' | 'children' | 'chrome' | 'chromecast' | 'church' | 'circle-arrow-down' | 'circle-arrow-left' | 'circle-arrow-right' | 'circle-arrow-up' | 'circle-check' | 'circle-chevron-down' | 'circle-chevron-left' | 'circle-chevron-right' | 'circle-chevron-up' | 'circle-dollar-to-slot' | 'circle-dot' | 'circle-down' | 'circle-exclamation' | 'circle-h' | 'circle-half-stroke' | 'circle-info' | 'circle-left' | 'circle-minus' | 'circle-nodes' | 'circle-notch' | 'circle-pause' | 'circle-play' | 'circle-plus' | 'circle-question' | 'circle-radiation' | 'circle-right' | 'circle-stop' | 'circle-up' | 'circle-user' | 'circle-xmark' | 'circle' | 'city' | 'clapperboard' | 'clipboard-check' | 'clipboard-list' | 'clipboard-question' | 'clipboard-user' | 'clipboard' | 'clock-rotate-left' | 'clock' | 'clone' | 'closed-captioning' | 'cloud-arrow-down' | 'cloud-arrow-up' | 'cloud-bolt' | 'cloud-meatball' | 'cloud-moon-rain' | 'cloud-moon' | 'cloud-rain' | 'cloud-showers-heavy' | 'cloud-showers-water' | 'cloud-sun-rain' | 'cloud-sun' | 'cloud' | 'cloudflare' | 'cloudscale' | 'cloudsmith' | 'cloudversify' | 'clover' | 'cmplid' | 'code-branch' | 'code-commit' | 'code-compare' | 'code-fork' | 'code-merge' | 'code-pull-request' | 'code' | 'codepen' | 'codiepie' | 'coins' | 'colon-sign' | 'comment-dollar' | 'comment-dots' | 'comment-medical' | 'comment-slash' | 'comment-sms' | 'comment' | 'comments-dollar' | 'comments' | 'compact-disc' | 'compass-drafting' | 'compass' | 'compress' | 'computer-mouse' | 'computer' | 'confluence' | 'connectdevelop' | 'contao' | 'cookie-bite' | 'cookie' | 'copy' | 'copyright' | 'cotton-bureau' | 'couch' | 'cow' | 'cpanel' | 'creative-commons-by' | 'creative-commons-nc-eu' | 'creative-commons-nc-jp' | 'creative-commons-nc' | 'creative-commons-nd' | 'creative-commons-pd-alt' | 'creative-commons-pd' | 'creative-commons-remix' | 'creative-commons-sa' | 'creative-commons-sampling-plus' | 'creative-commons-sampling' | 'creative-commons-share' | 'creative-commons-zero' | 'creative-commons' | 'credit-card' | 'critical-role' | 'crop-simple' | 'crop' | 'cross' | 'crosshairs' | 'crow' | 'crown' | 'crutch' | 'cruzeiro-sign' | 'css3-alt' | 'css3' | 'cube' | 'cubes-stacked' | 'cubes' | 'cuttlefish' | 'd-and-d-beyond' | 'd-and-d' | 'd' | 'dailymotion' | 'dashcube' | 'database' | 'debian' | 'deezer' | 'delete-left' | 'delicious' | 'democrat' | 'deploydog' | 'deskpro' | 'desktop' | 'dev' | 'deviantart' | 'dharmachakra' | 'dhl' | 'diagram-next' | 'diagram-predecessor' | 'diagram-project' | 'diagram-successor' | 'diamond-turn-right' | 'diamond' | 'diaspora' | 'dice-d20' | 'dice-d6' | 'dice-five' | 'dice-four' | 'dice-one' | 'dice-six' | 'dice-three' | 'dice-two' | 'dice' | 'digg' | 'digital-ocean' | 'discord' | 'discourse' | 'disease' | 'display' | 'divide' | 'dna' | 'dochub' | 'docker' | 'dog' | 'dollar-sign' | 'dolly' | 'dong-sign' | 'door-closed' | 'door-open' | 'dosya_isimleri' | 'dove' | 'down-left-and-up-right-to-center' | 'down-long' | 'download' | 'draft2digital' | 'dragon' | 'draw-polygon' | 'dribbble' | 'dropbox' | 'droplet-slash' | 'droplet' | 'drum-steelpan' | 'drum' | 'drumstick-bite' | 'drupal' | 'dumbbell' | 'dumpster-fire' | 'dumpster' | 'dungeon' | 'dyalog' | 'e' | 'ear-deaf' | 'ear-listen' | 'earlybirds' | 'earth-africa' | 'earth-americas' | 'earth-asia' | 'earth-europe' | 'earth-oceania' | 'ebay' | 'edge-legacy' | 'edge' | 'egg' | 'eject' | 'elementor' | 'elevator' | 'ellipsis-vertical' | 'ellipsis' | 'ello' | 'ember' | 'empire' | 'envelope-circle-check' | 'envelope-open-text' | 'envelope-open' | 'envelope' | 'envelopes-bulk' | 'envira' | 'equals' | 'eraser' | 'erlang' | 'ethereum' | 'ethernet' | 'etsy' | 'euro-sign' | 'evernote' | 'exclamation' | 'expand' | 'expeditedssl' | 'explosion' | 'eye-dropper' | 'eye-low-vision' | 'eye-slash' | 'eye' | 'f' | 'face-angry' | 'face-dizzy' | 'face-flushed' | 'face-frown-open' | 'face-frown' | 'face-grimace' | 'face-grin-beam-sweat' | 'face-grin-beam' | 'face-grin-hearts' | 'face-grin-squint-tears' | 'face-grin-squint' | 'face-grin-stars' | 'face-grin-tears' | 'face-grin-tongue-squint' | 'face-grin-tongue-wink' | 'face-grin-tongue' | 'face-grin-wide' | 'face-grin-wink' | 'face-grin' | 'face-kiss-beam' | 'face-kiss-wink-heart' | 'face-kiss' | 'face-laugh-beam' | 'face-laugh-squint' | 'face-laugh-wink' | 'face-laugh' | 'face-meh-blank' | 'face-meh' | 'face-rolling-eyes' | 'face-sad-cry' | 'face-sad-tear' | 'face-smile-beam' | 'face-smile-wink' | 'face-smile' | 'face-surprise' | 'face-tired' | 'facebook-f' | 'facebook-messenger' | 'facebook' | 'fan' | 'fantasy-flight-games' | 'faucet-drip' | 'faucet' | 'fax' | 'feather-pointed' | 'feather' | 'fedex' | 'fedora' | 'ferry' | 'figma' | 'file-arrow-down' | 'file-arrow-up' | 'file-audio' | 'file-circle-check' | 'file-circle-exclamation' | 'file-circle-minus' | 'file-circle-plus' | 'file-circle-question' | 'file-circle-xmark' | 'file-code' | 'file-contract' | 'file-csv' | 'file-excel' | 'file-export' | 'file-image' | 'file-import' | 'file-invoice-dollar' | 'file-invoice' | 'file-lines' | 'file-medical' | 'file-pdf' | 'file-pen' | 'file-powerpoint' | 'file-prescription' | 'file-shield' | 'file-signature' | 'file-video' | 'file-waveform' | 'file-word' | 'file-zipper' | 'file' | 'fill-drip' | 'fill' | 'film' | 'filter-circle-dollar' | 'filter-circle-xmark' | 'filter' | 'fingerprint' | 'fire-burner' | 'fire-extinguisher' | 'fire-flame-curved' | 'fire-flame-simple' | 'fire' | 'firefox-browser' | 'firefox' | 'first-order-alt' | 'first-order' | 'firstdraft' | 'fish-fins' | 'fish' | 'flag-checkered' | 'flag-usa' | 'flag' | 'flask-vial' | 'flask' | 'flickr' | 'flipboard' | 'floppy-disk' | 'florin-sign' | 'fly' | 'folder-closed' | 'folder-minus' | 'folder-open' | 'folder-plus' | 'folder-tree' | 'folder' | 'font-awesome' | 'font' | 'fonticons-fi' | 'fonticons' | 'football' | 'fort-awesome-alt' | 'fort-awesome' | 'forumbee' | 'forward-fast' | 'forward-step' | 'forward' | 'foursquare' | 'franc-sign' | 'free-code-camp' | 'freebsd' | 'frog' | 'fulcrum' | 'futbol' | 'g' | 'galactic-republic' | 'galactic-senate' | 'gamepad' | 'gas-pump' | 'gauge-high' | 'gauge-simple-high' | 'gauge-simple' | 'gauge' | 'gavel' | 'gear' | 'gears' | 'gem' | 'genderless' | 'get-pocket' | 'gg-circle' | 'gg' | 'ghost' | 'gift' | 'gifts' | 'git-alt' | 'git' | 'github-alt' | 'github' | 'gitkraken' | 'gitlab' | 'gitter' | 'glass-water-droplet' | 'glass-water' | 'glasses' | 'glide-g' | 'glide' | 'globe' | 'gofore' | 'golang' | 'golf-ball-tee' | 'goodreads-g' | 'goodreads' | 'google-drive' | 'google-pay' | 'google-play' | 'google-plus-g' | 'google-plus' | 'google-scholar' | 'google-wallet' | 'google' | 'gopuram' | 'graduation-cap' | 'gratipay' | 'grav' | 'greater-than-equal' | 'greater-than' | 'grip-lines-vertical' | 'grip-lines' | 'grip-vertical' | 'grip' | 'gripfire' | 'group-arrows-rotate' | 'grunt' | 'guarani-sign' | 'guilded' | 'guitar' | 'gulp' | 'gun' | 'h' | 'hacker-news' | 'hackerrank' | 'hammer' | 'hamsa' | 'hand-back-fist' | 'hand-dots' | 'hand-fist' | 'hand-holding-dollar' | 'hand-holding-droplet' | 'hand-holding-hand' | 'hand-holding-heart' | 'hand-holding-medical' | 'hand-holding' | 'hand-lizard' | 'hand-middle-finger' | 'hand-peace' | 'hand-point-down' | 'hand-point-left' | 'hand-point-right' | 'hand-point-up' | 'hand-pointer' | 'hand-scissors' | 'hand-sparkles' | 'hand-spock' | 'hand' | 'handcuffs' | 'hands-asl-interpreting' | 'hands-bound' | 'hands-bubbles' | 'hands-clapping' | 'hands-holding-child' | 'hands-holding-circle' | 'hands-holding' | 'hands-praying' | 'hands' | 'handshake-angle' | 'handshake-simple-slash' | 'handshake-simple' | 'handshake-slash' | 'handshake' | 'hanukiah' | 'hard-drive' | 'hashnode' | 'hashtag' | 'hat-cowboy-side' | 'hat-cowboy' | 'hat-wizard' | 'head-side-cough-slash' | 'head-side-cough' | 'head-side-mask' | 'head-side-virus' | 'heading' | 'headphones-simple' | 'headphones' | 'headset' | 'heart-circle-bolt' | 'heart-circle-check' | 'heart-circle-exclamation' | 'heart-circle-minus' | 'heart-circle-plus' | 'heart-circle-xmark' | 'heart-crack' | 'heart-pulse' | 'heart' | 'helicopter-symbol' | 'helicopter' | 'helmet-safety' | 'helmet-un' | 'highlighter' | 'hill-avalanche' | 'hill-rockslide' | 'hippo' | 'hips' | 'hire-a-helper' | 'hive' | 'hockey-puck' | 'holly-berry' | 'hooli' | 'hornbill' | 'horse-head' | 'horse' | 'hospital-user' | 'hospital' | 'hot-tub-person' | 'hotdog' | 'hotel' | 'hotjar' | 'hourglass-end' | 'hourglass-half' | 'hourglass-start' | 'hourglass' | 'house-chimney-crack' | 'house-chimney-medical' | 'house-chimney-user' | 'house-chimney-window' | 'house-chimney' | 'house-circle-check' | 'house-circle-exclamation' | 'house-circle-xmark' | 'house-crack' | 'house-fire' | 'house-flag' | 'house-flood-water-circle-arrow-right' | 'house-flood-water' | 'house-laptop' | 'house-lock' | 'house-medical-circle-check' | 'house-medical-circle-exclamation' | 'house-medical-circle-xmark' | 'house-medical-flag' | 'house-medical' | 'house-signal' | 'house-tsunami' | 'house-user' | 'house' | 'houzz' | 'hryvnia-sign' | 'html5' | 'hubspot' | 'hurricane' | 'i-cursor' | 'i' | 'ice-cream' | 'icicles' | 'icons' | 'id-badge' | 'id-card-clip' | 'id-card' | 'ideal' | 'igloo' | 'image-portrait' | 'image' | 'images' | 'imdb' | 'inbox' | 'indent' | 'indian-rupee-sign' | 'industry' | 'infinity' | 'info' | 'instagram' | 'instalod' | 'intercom' | 'internet-explorer' | 'invision' | 'ioxhost' | 'italic' | 'itch-io' | 'itunes-note' | 'itunes' | 'j' | 'jar-wheat' | 'jar' | 'java' | 'jedi-order' | 'jedi' | 'jenkins' | 'jet-fighter-up' | 'jet-fighter' | 'jira' | 'joget' | 'joint' | 'joomla' | 'js' | 'jsfiddle' | 'jug-detergent' | 'k' | 'kaaba' | 'kaggle' | 'key' | 'keybase' | 'keyboard' | 'keycdn' | 'khanda' | 'kickstarter-k' | 'kickstarter' | 'kip-sign' | 'kit-medical' | 'kitchen-set' | 'kiwi-bird' | 'korvue' | 'l' | 'land-mine-on' | 'landmark-dome' | 'landmark-flag' | 'landmark' | 'language' | 'laptop-code' | 'laptop-file' | 'laptop-medical' | 'laptop' | 'laravel' | 'lari-sign' | 'lastfm' | 'layer-group' | 'leaf' | 'leanpub' | 'left-long' | 'left-right' | 'lemon' | 'less-than-equal' | 'less-than' | 'less' | 'letterboxd' | 'life-ring' | 'lightbulb' | 'line' | 'lines-leaning' | 'link-slash' | 'link' | 'linkedin-in' | 'linkedin' | 'linode' | 'linux' | 'lira-sign' | 'list-check' | 'list-ol' | 'list-ul' | 'list' | 'litecoin-sign' | 'location-arrow' | 'location-crosshairs' | 'location-dot' | 'location-pin-lock' | 'location-pin' | 'lock-open' | 'lock' | 'locust' | 'lungs-virus' | 'lungs' | 'lyft' | 'm' | 'magento' | 'magnet' | 'magnifying-glass-arrow-right' | 'magnifying-glass-chart' | 'magnifying-glass-dollar' | 'magnifying-glass-location' | 'magnifying-glass-minus' | 'magnifying-glass-plus' | 'magnifying-glass' | 'mailchimp' | 'manat-sign' | 'mandalorian' | 'map-location-dot' | 'map-location' | 'map-pin' | 'map' | 'markdown' | 'marker' | 'mars-and-venus-burst' | 'mars-and-venus' | 'mars-double' | 'mars-stroke-right' | 'mars-stroke-up' | 'mars-stroke' | 'mars' | 'martini-glass-citrus' | 'martini-glass-empty' | 'martini-glass' | 'mask-face' | 'mask-ventilator' | 'mask' | 'masks-theater' | 'mastodon' | 'mattress-pillow' | 'maxcdn' | 'maximize' | 'mdb' | 'medal' | 'medapps' | 'medium' | 'medrt' | 'meetup' | 'megaport' | 'memory' | 'mendeley' | 'menorah' | 'mercury' | 'message' | 'meta' | 'meteor' | 'microblog' | 'microchip' | 'microphone-lines-slash' | 'microphone-lines' | 'microphone-slash' | 'microphone' | 'microscope' | 'microsoft' | 'mill-sign' | 'minimize' | 'mintbit' | 'minus' | 'mitten' | 'mix' | 'mixcloud' | 'mixer' | 'mizuni' | 'mobile-button' | 'mobile-retro' | 'mobile-screen-button' | 'mobile-screen' | 'mobile' | 'modx' | 'monero' | 'money-bill-1-wave' | 'money-bill-1' | 'money-bill-transfer' | 'money-bill-trend-up' | 'money-bill-wave' | 'money-bill-wheat' | 'money-bill' | 'money-bills' | 'money-check-dollar' | 'money-check' | 'monument' | 'moon' | 'mortar-pestle' | 'mosque' | 'mosquito-net' | 'mosquito' | 'motorcycle' | 'mound' | 'mountain-city' | 'mountain-sun' | 'mountain' | 'mug-hot' | 'mug-saucer' | 'music' | 'n' | 'naira-sign' | 'napster' | 'neos' | 'network-wired' | 'neuter' | 'newspaper' | 'nfc-directional' | 'nfc-symbol' | 'nimblr' | 'node-js' | 'node' | 'not-equal' | 'notdef' | 'note-sticky' | 'notes-medical' | 'npm' | 'ns8' | 'nutritionix' | 'o' | 'object-group' | 'object-ungroup' | 'octopus-deploy' | 'odnoklassniki' | 'odysee' | 'oil-can' | 'oil-well' | 'old-republic' | 'om' | 'opencart' | 'openid' | 'opensuse' | 'opera' | 'optin-monster' | 'orcid' | 'osi' | 'otter' | 'outdent' | 'p' | 'padlet' | 'page4' | 'pagelines' | 'pager' | 'paint-roller' | 'paintbrush' | 'palette' | 'palfed' | 'pallet' | 'panorama' | 'paper-plane' | 'paperclip' | 'parachute-box' | 'paragraph' | 'passport' | 'paste' | 'patreon' | 'pause' | 'paw' | 'paypal' | 'peace' | 'pen-clip' | 'pen-fancy' | 'pen-nib' | 'pen-ruler' | 'pen-to-square' | 'pen' | 'pencil' | 'people-arrows' | 'people-carry-box' | 'people-group' | 'people-line' | 'people-pulling' | 'people-robbery' | 'people-roof' | 'pepper-hot' | 'perbyte' | 'percent' | 'periscope' | 'person-arrow-down-to-line' | 'person-arrow-up-from-line' | 'person-biking' | 'person-booth' | 'person-breastfeeding' | 'person-burst' | 'person-cane' | 'person-chalkboard' | 'person-circle-check' | 'person-circle-exclamation' | 'person-circle-minus' | 'person-circle-plus' | 'person-circle-question' | 'person-circle-xmark' | 'person-digging' | 'person-dots-from-line' | 'person-dress-burst' | 'person-dress' | 'person-drowning' | 'person-falling-burst' | 'person-falling' | 'person-half-dress' | 'person-harassing' | 'person-hiking' | 'person-military-pointing' | 'person-military-rifle' | 'person-military-to-person' | 'person-praying' | 'person-pregnant' | 'person-rays' | 'person-rifle' | 'person-running' | 'person-shelter' | 'person-skating' | 'person-skiing-nordic' | 'person-skiing' | 'person-snowboarding' | 'person-swimming' | 'person-through-window' | 'person-walking-arrow-loop-left' | 'person-walking-arrow-right' | 'person-walking-dashed-line-arrow-right' | 'person-walking-luggage' | 'person-walking-with-cane' | 'person-walking' | 'person' | 'peseta-sign' | 'peso-sign' | 'phabricator' | 'phoenix-framework' | 'phoenix-squadron' | 'phone-flip' | 'phone-slash' | 'phone-volume' | 'phone' | 'photo-film' | 'php' | 'pied-piper-alt' | 'pied-piper-hat' | 'pied-piper-pp' | 'pied-piper' | 'piggy-bank' | 'pills' | 'pinterest-p' | 'pinterest' | 'pix' | 'pixiv' | 'pizza-slice' | 'place-of-worship' | 'plane-arrival' | 'plane-circle-check' | 'plane-circle-exclamation' | 'plane-circle-xmark' | 'plane-departure' | 'plane-lock' | 'plane-slash' | 'plane-up' | 'plane' | 'plant-wilt' | 'plate-wheat' | 'play' | 'playstation' | 'plug-circle-bolt' | 'plug-circle-check' | 'plug-circle-exclamation' | 'plug-circle-minus' | 'plug-circle-plus' | 'plug-circle-xmark' | 'plug' | 'plus-minus' | 'plus' | 'podcast' | 'poo-storm' | 'poo' | 'poop' | 'power-off' | 'prescription-bottle-medical' | 'prescription-bottle' | 'prescription' | 'print' | 'product-hunt' | 'pump-medical' | 'pump-soap' | 'pushed' | 'puzzle-piece' | 'python' | 'q' | 'qq' | 'qrcode' | 'question' | 'quinscape' | 'quora' | 'quote-left' | 'quote-right' | 'r-project' | 'r' | 'radiation' | 'radio' | 'rainbow' | 'ranking-star' | 'raspberry-pi' | 'ravelry' | 'react' | 'reacteurope' | 'readme' | 'rebel' | 'receipt' | 'record-vinyl' | 'rectangle-ad' | 'rectangle-list' | 'rectangle-xmark' | 'recycle' | 'red-river' | 'reddit-alien' | 'reddit' | 'redhat' | 'registered' | 'renren' | 'repeat' | 'reply-all' | 'reply' | 'replyd' | 'republican' | 'researchgate' | 'resolving' | 'restroom' | 'retweet' | 'rev' | 'ribbon' | 'right-from-bracket' | 'right-left' | 'right-long' | 'right-to-bracket' | 'ring' | 'road-barrier' | 'road-bridge' | 'road-circle-check' | 'road-circle-exclamation' | 'road-circle-xmark' | 'road-lock' | 'road-spikes' | 'road' | 'robot' | 'rocket' | 'rocketchat' | 'rockrms' | 'rotate-left' | 'rotate-right' | 'rotate' | 'route' | 'rss' | 'ruble-sign' | 'rug' | 'ruler-combined' | 'ruler-horizontal' | 'ruler-vertical' | 'ruler' | 'rupee-sign' | 'rupiah-sign' | 'rust' | 's' | 'sack-dollar' | 'sack-xmark' | 'safari' | 'sailboat' | 'salesforce' | 'sass' | 'satellite-dish' | 'satellite' | 'scale-balanced' | 'scale-unbalanced-flip' | 'scale-unbalanced' | 'schlix' | 'school-circle-check' | 'school-circle-exclamation' | 'school-circle-xmark' | 'school-flag' | 'school-lock' | 'school' | 'scissors' | 'screenpal' | 'screwdriver-wrench' | 'screwdriver' | 'scribd' | 'scroll-torah' | 'scroll' | 'sd-card' | 'searchengin' | 'section' | 'seedling' | 'sellcast' | 'sellsy' | 'server' | 'servicestack' | 'shapes' | 'share-from-square' | 'share-nodes' | 'share' | 'sheet-plastic' | 'shekel-sign' | 'shield-cat' | 'shield-dog' | 'shield-halved' | 'shield-heart' | 'shield-virus' | 'shield' | 'ship' | 'shirt' | 'shirtsinbulk' | 'shoe-prints' | 'shoelace' | 'shop-lock' | 'shop-slash' | 'shop' | 'shopify' | 'shopware' | 'shower' | 'shrimp' | 'shuffle' | 'shuttle-space' | 'sign-hanging' | 'signal-messenger' | 'signal' | 'signature' | 'signs-post' | 'sim-card' | 'simplybuilt' | 'sink' | 'sistrix' | 'sitemap' | 'sith' | 'sitrox' | 'sketch' | 'skull-crossbones' | 'skull' | 'skyatlas' | 'skype' | 'slack' | 'slash' | 'sleigh' | 'sliders' | 'slideshare' | 'smog' | 'smoking' | 'snapchat' | 'snowflake' | 'snowman' | 'snowplow' | 'soap' | 'socks' | 'solar-panel' | 'sort-down' | 'sort-up' | 'sort' | 'soundcloud' | 'sourcetree' | 'spa' | 'space-awesome' | 'spaghetti-monster-flying' | 'speakap' | 'speaker-deck' | 'spell-check' | 'spider' | 'spinner' | 'splotch' | 'spoon' | 'spotify' | 'spray-can-sparkles' | 'spray-can' | 'square-arrow-up-right' | 'square-behance' | 'square-caret-down' | 'square-caret-left' | 'square-caret-right' | 'square-caret-up' | 'square-check' | 'square-dribbble' | 'square-envelope' | 'square-facebook' | 'square-font-awesome-stroke' | 'square-font-awesome' | 'square-full' | 'square-git' | 'square-github' | 'square-gitlab' | 'square-google-plus' | 'square-h' | 'square-hacker-news' | 'square-instagram' | 'square-js' | 'square-lastfm' | 'square-letterboxd' | 'square-minus' | 'square-nfi' | 'square-odnoklassniki' | 'square-parking' | 'square-pen' | 'square-person-confined' | 'square-phone-flip' | 'square-phone' | 'square-pied-piper' | 'square-pinterest' | 'square-plus' | 'square-poll-horizontal' | 'square-poll-vertical' | 'square-reddit' | 'square-root-variable' | 'square-rss' | 'square-share-nodes' | 'square-snapchat' | 'square-steam' | 'square-threads' | 'square-tumblr' | 'square-twitter' | 'square-up-right' | 'square-viadeo' | 'square-vimeo' | 'square-virus' | 'square-whatsapp' | 'square-x-twitter' | 'square-xing' | 'square-xmark' | 'square-youtube' | 'square' | 'squarespace' | 'stack-exchange' | 'stack-overflow' | 'stackpath' | 'staff-snake' | 'stairs' | 'stamp' | 'stapler' | 'star-and-crescent' | 'star-half-stroke' | 'star-half' | 'star-of-david' | 'star-of-life' | 'star' | 'staylinked' | 'steam-symbol' | 'steam' | 'sterling-sign' | 'stethoscope' | 'sticker-mule' | 'stop' | 'stopwatch-20' | 'stopwatch' | 'store-slash' | 'store' | 'strava' | 'street-view' | 'strikethrough' | 'stripe-s' | 'stripe' | 'stroopwafel' | 'stubber' | 'studiovinari' | 'stumbleupon-circle' | 'stumbleupon' | 'subscript' | 'suitcase-medical' | 'suitcase-rolling' | 'suitcase' | 'sun-plant-wilt' | 'sun' | 'superpowers' | 'superscript' | 'supple' | 'suse' | 'swatchbook' | 'swift' | 'symfony' | 'synagogue' | 'syringe' | 't' | 'table-cells-large' | 'table-cells' | 'table-columns' | 'table-list' | 'table-tennis-paddle-ball' | 'table' | 'tablet-button' | 'tablet-screen-button' | 'tablet' | 'tablets' | 'tachograph-digital' | 'tag' | 'tags' | 'tape' | 'tarp-droplet' | 'tarp' | 'taxi' | 'teamspeak' | 'teeth-open' | 'teeth' | 'telegram' | 'temperature-arrow-down' | 'temperature-arrow-up' | 'temperature-empty' | 'temperature-full' | 'temperature-half' | 'temperature-high' | 'temperature-low' | 'temperature-quarter' | 'temperature-three-quarters' | 'tencent-weibo' | 'tenge-sign' | 'tent-arrow-down-to-line' | 'tent-arrow-left-right' | 'tent-arrow-turn-left' | 'tent-arrows-down' | 'tent' | 'tents' | 'terminal' | 'text-height' | 'text-slash' | 'text-width' | 'the-red-yeti' | 'themeco' | 'themeisle' | 'thermometer' | 'think-peaks' | 'threads' | 'thumbs-down' | 'thumbs-up' | 'thumbtack' | 'ticket-simple' | 'ticket' | 'tiktok' | 'timeline' | 'toggle-off' | 'toggle-on' | 'toilet-paper-slash' | 'toilet-paper' | 'toilet-portable' | 'toilet' | 'toilets-portable' | 'toolbox' | 'tooth' | 'torii-gate' | 'tornado' | 'tower-broadcast' | 'tower-cell' | 'tower-observation' | 'tractor' | 'trade-federation' | 'trademark' | 'traffic-light' | 'trailer' | 'train-subway' | 'train-tram' | 'train' | 'transgender' | 'trash-arrow-up' | 'trash-can-arrow-up' | 'trash-can' | 'trash' | 'tree-city' | 'tree' | 'trello' | 'triangle-exclamation' | 'trophy' | 'trowel-bricks' | 'trowel' | 'truck-arrow-right' | 'truck-droplet' | 'truck-fast' | 'truck-field-un' | 'truck-field' | 'truck-front' | 'truck-medical' | 'truck-monster' | 'truck-moving' | 'truck-pickup' | 'truck-plane' | 'truck-ramp-box' | 'truck' | 'tty' | 'tumblr' | 'turkish-lira-sign' | 'turn-down' | 'turn-up' | 'tv' | 'twitch' | 'twitter' | 'typo3' | 'u' | 'uber' | 'ubuntu' | 'uikit' | 'umbraco' | 'umbrella-beach' | 'umbrella' | 'uncharted' | 'underline' | 'uniregistry' | 'unity' | 'universal-access' | 'unlock-keyhole' | 'unlock' | 'unsplash' | 'untappd' | 'up-down-left-right' | 'up-down' | 'up-long' | 'up-right-and-down-left-from-center' | 'up-right-from-square' | 'upload' | 'ups' | 'upwork' | 'usb' | 'user-astronaut' | 'user-check' | 'user-clock' | 'user-doctor' | 'user-gear' | 'user-graduate' | 'user-group' | 'user-injured' | 'user-large-slash' | 'user-large' | 'user-lock' | 'user-minus' | 'user-ninja' | 'user-nurse' | 'user-pen' | 'user-plus' | 'user-secret' | 'user-shield' | 'user-slash' | 'user-tag' | 'user-tie' | 'user-xmark' | 'user' | 'users-between-lines' | 'users-gear' | 'users-line' | 'users-rays' | 'users-rectangle' | 'users-slash' | 'users-viewfinder' | 'users' | 'usps' | 'ussunnah' | 'utensils' | 'v' | 'vaadin' | 'van-shuttle' | 'vault' | 'vector-square' | 'venus-double' | 'venus-mars' | 'venus' | 'vest-patches' | 'vest' | 'viacoin' | 'viadeo' | 'vial-circle-check' | 'vial-virus' | 'vial' | 'vials' | 'viber' | 'video-slash' | 'video' | 'vihara' | 'vimeo-v' | 'vimeo' | 'vine' | 'virus-covid-slash' | 'virus-covid' | 'virus-slash' | 'virus' | 'viruses' | 'vk' | 'vnv' | 'voicemail' | 'volcano' | 'volleyball' | 'volume-high' | 'volume-low' | 'volume-off' | 'volume-xmark' | 'vr-cardboard' | 'vuejs' | 'w' | 'walkie-talkie' | 'wallet' | 'wand-magic-sparkles' | 'wand-magic' | 'wand-sparkles' | 'warehouse' | 'watchman-monitoring' | 'water-ladder' | 'water' | 'wave-square' | 'waze' | 'webflow' | 'weebly' | 'weibo' | 'weight-hanging' | 'weight-scale' | 'weixin' | 'whatsapp' | 'wheat-awn-circle-exclamation' | 'wheat-awn' | 'wheelchair-move' | 'wheelchair' | 'whiskey-glass' | 'whmcs' | 'wifi' | 'wikipedia-w' | 'wind' | 'window-maximize' | 'window-minimize' | 'window-restore' | 'windows' | 'wine-bottle' | 'wine-glass-empty' | 'wine-glass' | 'wirsindhandwerk' | 'wix' | 'wizards-of-the-coast' | 'wodu' | 'wolf-pack-battalion' | 'won-sign' | 'wordpress-simple' | 'wordpress' | 'worm' | 'wpbeginner' | 'wpexplorer' | 'wpforms' | 'wpressr' | 'wrench' | 'x-ray' | 'x-twitter' | 'x' | 'xbox' | 'xing' | 'xmark' | 'xmarks-lines' | 'y-combinator' | 'y' | 'yahoo' | 'yammer' | 'yandex-international' | 'yandex' | 'yarn' | 'yelp' | 'yen-sign' | 'yin-yang' | 'yoast' | 'youtube' | 'z' | 'zhihu' | 'window-close' | 'coffee' | 'table-cells-column-lock-solid'
//#endregion

export type InputType =
  'text'
  | 'number'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'search'
  | 'tel'
  | 'time'

export type InputValidationType =
  'required'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'regEx'
  | 'null'
  | 'canNotBe';

  export type CheckboxType = 'box' | 'switch'

  export type TreeStatus = 'collapsed' | 'expanded' | 'loading' | 'disabled';


